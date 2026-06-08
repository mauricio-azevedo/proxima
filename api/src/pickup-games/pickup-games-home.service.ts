import { Injectable } from '@nestjs/common';

import {
  GameDayStatus,
  MatchSide,
  MatchStatus,
  PickupGameUserRole,
  PickupGameVisibility,
} from '../../generated/prisma';
import { PrismaService } from '../database/prisma.service';

export type PickupGameHomeOperationalState = 'waiting_for_players' | 'ready_to_start' | 'playing' | null;
export type PickupGameHomeViewerState = 'not_arrived' | 'inside_first_match' | 'next_team' | 'playing' | null;
export type PickupGameHomePrimaryAction = 'arrive' | 'start_match' | 'open' | null;

export interface PickupGamesHomeResponse {
  activePickupGame: PickupGameHomeItem | null;
  myPickupGames: PickupGameHomeItem[];
  discoverPickupGames: PickupGameHomeItem[];
}

export interface PickupGameHomeItem {
  id: string;
  name: string;
  locationName: string | null;
  weekday: string;
  startTime: string;
  defaultTeamSize: number;
  visibility: PickupGameVisibility;
  memberCount: number;
  viewerRole: PickupGameUserRole | null;
  nextGameDay: PickupGameHomeDay | null;
}

export interface PickupGameHomeDay {
  id: string;
  date: Date;
  status: GameDayStatus;
  teamSize: number;
  listEntriesCount: number;
  queueEntriesCount: number;
  viewerHasJoinedList: boolean;
  viewerHasArrived: boolean;
  operationalState: PickupGameHomeOperationalState;
  viewerState: PickupGameHomeViewerState;
  viewerTeamQueueNumber: number | null;
  viewerProspectiveTeamQueueNumber: number | null;
  primaryAction: PickupGameHomePrimaryAction;
  currentMatch: PickupGameHomeCurrentMatch | null;
}

export interface PickupGameHomeCurrentMatch {
  id: string;
  number: number;
  teamSize: number;
  status: MatchStatus;
  startedAt: Date;
  teamAScore: number;
  teamBScore: number;
  viewerIsPlaying: boolean;
}

@Injectable()
export class PickupGamesHomeService {
  constructor(private readonly prisma: PrismaService) {}

  async getHome(userId: string): Promise<PickupGamesHomeResponse> {
    const pickupGames = await this.prisma.pickupGame.findMany({
      where: {
        OR: [
          { visibility: PickupGameVisibility.PUBLIC },
          { users: { some: { userId } } },
        ],
      },
      select: {
        id: true,
        name: true,
        locationName: true,
        weekday: true,
        startTime: true,
        defaultTeamSize: true,
        visibility: true,
        users: {
          where: { userId },
          select: { role: true },
          take: 1,
        },
        days: {
          where: {
            status: { in: [GameDayStatus.SCHEDULED, GameDayStatus.WAITING_FOR_PLAYERS, GameDayStatus.PLAYING] },
            date: { gte: this.todayUtcDate() },
          },
          orderBy: { date: 'asc' },
          take: 1,
          select: {
            id: true,
            date: true,
            status: true,
            teamSize: true,
            listEntries: {
              where: { userId, removedAt: null },
              select: { id: true },
              take: 1,
            },
            queueEntries: {
              where: { removedAt: null },
              orderBy: { currentPosition: 'asc' },
              select: { userId: true, currentPosition: true },
            },
            matches: {
              where: { status: MatchStatus.RUNNING },
              orderBy: { number: 'desc' },
              take: 1,
              select: {
                id: true,
                number: true,
                teamSize: true,
                status: true,
                startedAt: true,
                players: {
                  where: { userId },
                  select: { id: true },
                  take: 1,
                },
                goals: {
                  where: { deletedAt: null },
                  select: { side: true },
                },
              },
            },
            _count: {
              select: {
                listEntries: { where: { removedAt: null } },
                queueEntries: { where: { removedAt: null } },
              },
            },
          },
        },
        _count: { select: { users: true } },
      },
    });

    const items = pickupGames.map((pickupGame) => this.toHomeItem(userId, pickupGame));
    const activePickupGame = this.pickActivePickupGame(items);
    const activePickupGameId = activePickupGame?.id ?? null;

    return {
      activePickupGame,
      myPickupGames: items
        .filter((item) => item.viewerRole !== null && item.id !== activePickupGameId)
        .sort((left, right) => this.compareMyPickupGames(left, right)),
      discoverPickupGames: items
        .filter((item) => item.viewerRole === null)
        .sort((left, right) => this.comparePickupGamesByNextDay(left, right)),
    };
  }

  private toHomeItem(userId: string, pickupGame: any): PickupGameHomeItem {
    const viewerMembership = pickupGame.users[0] ?? null;
    const nextGameDay = pickupGame.days[0] ?? null;

    return {
      id: pickupGame.id,
      name: pickupGame.name,
      locationName: pickupGame.locationName,
      weekday: pickupGame.weekday,
      startTime: pickupGame.startTime,
      defaultTeamSize: pickupGame.defaultTeamSize,
      visibility: pickupGame.visibility,
      memberCount: pickupGame._count.users,
      viewerRole: viewerMembership?.role ?? null,
      nextGameDay: nextGameDay ? this.toHomeDay(userId, viewerMembership?.role ?? null, nextGameDay) : null,
    };
  }

  private toHomeDay(
    userId: string,
    viewerRole: PickupGameUserRole | null,
    gameDay: any,
  ): PickupGameHomeDay {
    const viewerQueueEntry = gameDay.queueEntries.find((entry: { userId: string }) => entry.userId === userId) ?? null;
    const currentMatch = gameDay.matches[0] ?? null;
    const operationalState = this.getOperationalState(gameDay.status, gameDay._count.queueEntries, gameDay.teamSize);
    const viewerState = this.getViewerState(gameDay.status, gameDay.teamSize, viewerQueueEntry, currentMatch);
    const viewerTeamQueueNumber = this.getViewerTeamQueueNumber(gameDay.status, gameDay.teamSize, viewerQueueEntry, currentMatch);
    const viewerProspectiveTeamQueueNumber = this.getProspectiveTeamQueueNumber(gameDay.status, gameDay.teamSize, gameDay._count.queueEntries);

    return {
      id: gameDay.id,
      date: gameDay.date,
      status: gameDay.status,
      teamSize: gameDay.teamSize,
      listEntriesCount: gameDay._count.listEntries,
      queueEntriesCount: gameDay._count.queueEntries,
      viewerHasJoinedList: gameDay.listEntries.length > 0,
      viewerHasArrived: Boolean(viewerQueueEntry),
      operationalState,
      viewerState,
      viewerTeamQueueNumber,
      viewerProspectiveTeamQueueNumber,
      primaryAction: this.getPrimaryAction(operationalState, viewerRole, viewerState),
      currentMatch: currentMatch ? this.toCurrentMatch(currentMatch) : null,
    };
  }

  private toCurrentMatch(match: any): PickupGameHomeCurrentMatch {
    return {
      id: match.id,
      number: match.number,
      teamSize: match.teamSize,
      status: match.status,
      startedAt: match.startedAt,
      teamAScore: match.goals.filter((goal: { side: MatchSide }) => goal.side === MatchSide.A).length,
      teamBScore: match.goals.filter((goal: { side: MatchSide }) => goal.side === MatchSide.B).length,
      viewerIsPlaying: match.players.length > 0,
    };
  }

  private getOperationalState(
    status: GameDayStatus,
    queueEntriesCount: number,
    teamSize: number,
  ): PickupGameHomeOperationalState {
    if (status === GameDayStatus.PLAYING) {
      return 'playing';
    }

    if (status === GameDayStatus.WAITING_FOR_PLAYERS) {
      return queueEntriesCount >= teamSize * 2 ? 'ready_to_start' : 'waiting_for_players';
    }

    return null;
  }

  private getViewerState(
    status: GameDayStatus,
    teamSize: number,
    viewerQueueEntry: { currentPosition: number } | null,
    currentMatch: any,
  ): PickupGameHomeViewerState {
    if (!viewerQueueEntry) {
      return status === GameDayStatus.WAITING_FOR_PLAYERS || status === GameDayStatus.PLAYING ? 'not_arrived' : null;
    }

    if (status === GameDayStatus.PLAYING && currentMatch?.players.length > 0) {
      return 'playing';
    }

    if (status === GameDayStatus.WAITING_FOR_PLAYERS && viewerQueueEntry.currentPosition <= teamSize * 2) {
      return 'inside_first_match';
    }

    return 'next_team';
  }

  private getViewerTeamQueueNumber(
    status: GameDayStatus,
    teamSize: number,
    viewerQueueEntry: { currentPosition: number } | null,
    currentMatch: any,
  ): number | null {
    if (!viewerQueueEntry) {
      return null;
    }

    if (status === GameDayStatus.PLAYING && currentMatch?.players.length > 0) {
      return null;
    }

    const playersAlreadyCommitted = teamSize * 2;
    const remainingPosition = viewerQueueEntry.currentPosition - playersAlreadyCommitted;

    if (remainingPosition <= 0) {
      return status === GameDayStatus.WAITING_FOR_PLAYERS ? null : 1;
    }

    return Math.ceil(remainingPosition / teamSize);
  }

  private getProspectiveTeamQueueNumber(
    status: GameDayStatus,
    teamSize: number,
    queueEntriesCount: number,
  ): number | null {
    if (status !== GameDayStatus.PLAYING) {
      return null;
    }

    const prospectivePosition = queueEntriesCount + 1;
    const playersAlreadyCommitted = teamSize * 2;
    const remainingPosition = prospectivePosition - playersAlreadyCommitted;

    return Math.max(1, Math.ceil(remainingPosition / teamSize));
  }

  private getPrimaryAction(
    operationalState: PickupGameHomeOperationalState,
    viewerRole: PickupGameUserRole | null,
    viewerState: PickupGameHomeViewerState,
  ): PickupGameHomePrimaryAction {
    if (operationalState === 'ready_to_start' && viewerRole === PickupGameUserRole.ADMIN) {
      return 'start_match';
    }

    if ((operationalState === 'waiting_for_players' || operationalState === 'ready_to_start') && viewerState === 'not_arrived') {
      return 'arrive';
    }

    if (operationalState === 'playing' && viewerState === 'not_arrived') {
      return 'arrive';
    }

    if (operationalState) {
      return 'open';
    }

    return null;
  }

  private pickActivePickupGame(items: PickupGameHomeItem[]): PickupGameHomeItem | null {
    const activePickupGames = items.filter((item) => item.viewerRole !== null && item.nextGameDay?.operationalState !== null);

    if (activePickupGames.length === 0) {
      return null;
    }

    return [...activePickupGames].sort((left, right) => this.compareActivePickupGames(left, right))[0];
  }

  private compareActivePickupGames(left: PickupGameHomeItem, right: PickupGameHomeItem): number {
    const leftDay = left.nextGameDay;
    const rightDay = right.nextGameDay;

    if (!leftDay || !rightDay) {
      return leftDay ? -1 : 1;
    }

    const stateDifference = this.activeOperationalStateRank(leftDay.operationalState) - this.activeOperationalStateRank(rightDay.operationalState);

    if (stateDifference !== 0) {
      return stateDifference;
    }

    const viewerDifference = this.activeViewerStateRank(leftDay.viewerState) - this.activeViewerStateRank(rightDay.viewerState);

    if (viewerDifference !== 0) {
      return viewerDifference;
    }

    return leftDay.date.getTime() - rightDay.date.getTime();
  }

  private compareMyPickupGames(left: PickupGameHomeItem, right: PickupGameHomeItem): number {
    const nextDayDifference = this.comparePickupGamesByNextDay(left, right);

    if (nextDayDifference !== 0) {
      return nextDayDifference;
    }

    const leftJoined = left.nextGameDay?.viewerHasJoinedList ? 0 : 1;
    const rightJoined = right.nextGameDay?.viewerHasJoinedList ? 0 : 1;

    return leftJoined - rightJoined;
  }

  private comparePickupGamesByNextDay(left: PickupGameHomeItem, right: PickupGameHomeItem): number {
    const leftDate = left.nextGameDay?.date.getTime() ?? Number.POSITIVE_INFINITY;
    const rightDate = right.nextGameDay?.date.getTime() ?? Number.POSITIVE_INFINITY;

    if (leftDate !== rightDate) {
      return leftDate - rightDate;
    }

    return left.name.localeCompare(right.name);
  }

  private activeOperationalStateRank(state: PickupGameHomeOperationalState): number {
    if (state === 'playing') return 0;
    if (state === 'ready_to_start') return 1;
    if (state === 'waiting_for_players') return 2;
    return 3;
  }

  private activeViewerStateRank(state: PickupGameHomeViewerState): number {
    if (state === 'playing') return 0;
    if (state === 'inside_first_match') return 1;
    if (state === 'next_team') return 2;
    if (state === 'not_arrived') return 3;
    return 4;
  }

  private todayUtcDate(): Date {
    const now = new Date();
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  }
}
