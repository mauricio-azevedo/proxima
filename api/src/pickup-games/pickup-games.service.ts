import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import {
  GameDayStatus,
  MatchSide,
  MatchStatus,
  PickupGameAdminRole,
  PickupGameVisibility,
  Weekday,
} from '../../generated/prisma';
import type { Prisma } from '../../generated/prisma';
import { PrismaService } from '../database/prisma.service';
import { CreateMatchGoalDto } from './dto/create-match-goal.dto';
import { CreatePickupGameDto } from './dto/create-pickup-game.dto';
import { FinishMatchDto } from './dto/finish-match.dto';
import { UpdateGameDayTeamSizeDto } from './dto/update-game-day-team-size.dto';
import { UpdateMatchGoalDto } from './dto/update-match-goal.dto';

const MIN_PICKUP_GAME_NAME_LENGTH = 2;
const MAX_PICKUP_GAME_NAME_LENGTH = 80;
const MIN_TEAM_SIZE = 2;
const MAX_TEAM_SIZE = 11;

const OPEN_GAME_DAY_STATUSES: GameDayStatus[] = [
  GameDayStatus.SCHEDULED,
  GameDayStatus.WAITING_FOR_PLAYERS,
  GameDayStatus.PLAYING,
];

const WEEKDAY_TO_UTC_DAY: Record<Weekday, number> = {
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
  SUNDAY: 0,
};

interface QueuePlayerSnapshot {
  id?: string;
  userId: string;
  currentPosition: number;
}

@Injectable()
export class PickupGamesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, dto: CreatePickupGameDto) {
    const name = this.parseName(dto.name);
    const weekday = this.parseWeekday(dto.weekday);
    const startTime = this.parseStartTime(dto.startTime);
    const defaultTeamSize = this.parseTeamSize(dto.defaultTeamSize, 'defaultTeamSize');

    const pickupGame = await this.prisma.$transaction(async (transaction) => {
      const createdPickupGame = await transaction.pickupGame.create({
        data: {
          name,
          locationName: this.parseOptionalText(dto.locationName),
          weekday,
          startTime,
          defaultTeamSize,
          visibility: dto.visibility ?? PickupGameVisibility.PRIVATE,
          createdByUserId: userId,
        },
        select: { id: true },
      });

      await transaction.pickupGameAdmin.create({
        data: {
          pickupGameId: createdPickupGame.id,
          userId,
          role: PickupGameAdminRole.OWNER,
        },
      });

      await transaction.pickupGameUser.create({
        data: {
          pickupGameId: createdPickupGame.id,
          userId,
        },
      });

      await transaction.gameDay.create({
        data: {
          pickupGameId: createdPickupGame.id,
          date: this.nextDateFor(weekday),
          teamSize: defaultTeamSize,
        },
      });

      return createdPickupGame;
    });

    return this.findOne(userId, pickupGame.id);
  }

  async findAll(userId: string) {
    return this.prisma.pickupGame.findMany({
      where: this.visiblePickupGameWhere(userId),
      orderBy: { createdAt: 'desc' },
      select: this.pickupGameListSelect(userId),
    });
  }

  async findOne(userId: string, pickupGameId: string) {
    await this.ensureVisible(userId, pickupGameId);
    await this.ensurePrimaryGameDay(pickupGameId);

    const pickupGame = await this.prisma.pickupGame.findUnique({
      where: { id: pickupGameId },
      select: this.pickupGameDetailSelect(userId),
    });

    if (!pickupGame) {
      throw new NotFoundException('Pickup game not found.');
    }

    return pickupGame;
  }

  async save(userId: string, pickupGameId: string) {
    await this.ensureVisible(userId, pickupGameId);

    await this.prisma.pickupGameUser.upsert({
      where: { pickupGameId_userId: { pickupGameId, userId } },
      create: { pickupGameId, userId },
      update: {},
    });

    return this.findOne(userId, pickupGameId);
  }

  async unsave(userId: string, pickupGameId: string) {
    const savedPickupGame = await this.prisma.pickupGameUser.findUnique({
      where: { pickupGameId_userId: { pickupGameId, userId } },
      select: { id: true },
    });

    if (savedPickupGame) {
      await this.prisma.pickupGameUser.delete({ where: { id: savedPickupGame.id } });
    }

    return { id: pickupGameId };
  }

  async joinNextDayList(userId: string, pickupGameId: string) {
    await this.ensureVisible(userId, pickupGameId);
    const gameDay = await this.ensurePrimaryGameDay(pickupGameId);

    const existingEntry = await this.prisma.dayListEntry.findFirst({
      where: { gameDayId: gameDay.id, userId, removedAt: null },
      select: { id: true },
    });

    if (!existingEntry) {
      await this.prisma.dayListEntry.create({ data: { gameDayId: gameDay.id, userId } });
    }

    return this.findOne(userId, pickupGameId);
  }

  async arrive(userId: string, pickupGameId: string) {
    await this.ensureVisible(userId, pickupGameId);
    const gameDay = await this.ensurePrimaryGameDay(pickupGameId);

    const existingQueueEntry = await this.prisma.queueEntry.findFirst({
      where: { gameDayId: gameDay.id, userId, removedAt: null },
      select: { id: true },
    });

    if (existingQueueEntry) {
      return this.findOne(userId, pickupGameId);
    }

    await this.prisma.$transaction(async (transaction) => {
      const existingListEntry = await transaction.dayListEntry.findFirst({
        where: { gameDayId: gameDay.id, userId, removedAt: null },
        select: { id: true },
      });

      const listEntry =
        existingListEntry ??
        (await transaction.dayListEntry.create({
          data: { gameDayId: gameDay.id, userId },
          select: { id: true },
        }));

      const lastQueueEntry = await transaction.queueEntry.findFirst({
        where: { gameDayId: gameDay.id, removedAt: null },
        orderBy: { currentPosition: 'desc' },
        select: { currentPosition: true },
      });

      await transaction.queueEntry.create({
        data: {
          gameDayId: gameDay.id,
          userId,
          dayListEntryId: listEntry.id,
          currentPosition: (lastQueueEntry?.currentPosition ?? 0) + 1,
        },
      });
    });

    return this.findOne(userId, pickupGameId);
  }

  async updatePrimaryDayTeamSize(userId: string, pickupGameId: string, dto: UpdateGameDayTeamSizeDto) {
    await this.ensureAdmin(userId, pickupGameId);
    const gameDay = await this.ensurePrimaryGameDay(pickupGameId);
    const teamSize = this.parseTeamSize(dto.teamSize, 'teamSize');

    if (gameDay.status === GameDayStatus.FINISHED || gameDay.status === GameDayStatus.CANCELLED) {
      throw new BadRequestException('Cannot update a closed game day.');
    }

    await this.prisma.gameDay.update({ where: { id: gameDay.id }, data: { teamSize } });

    return this.findOne(userId, pickupGameId);
  }

  async startFirstMatch(userId: string, pickupGameId: string) {
    await this.ensureAdmin(userId, pickupGameId);
    const gameDay = await this.ensurePrimaryGameDay(pickupGameId);

    if (gameDay.status === GameDayStatus.PLAYING) {
      throw new BadRequestException('This game day is already playing.');
    }

    await this.prisma.$transaction(async (transaction) => {
      const queueEntries = await this.getActiveQueueEntries(transaction, gameDay.id);

      if (queueEntries.length < gameDay.teamSize * 2) {
        throw new BadRequestException('Not enough players to start the first match.');
      }

      await this.createMatchFromQueue(transaction, gameDay.id, gameDay.teamSize, 1, queueEntries);
      await transaction.gameDay.update({
        where: { id: gameDay.id },
        data: { status: GameDayStatus.PLAYING },
      });
    });

    return this.findOne(userId, pickupGameId);
  }

  async addGoal(userId: string, matchId: string, dto: CreateMatchGoalDto) {
    const match = await this.getMatchForAccess(matchId);
    await this.ensureAdmin(userId, match.gameDay.pickupGameId);

    if (match.status !== MatchStatus.RUNNING) {
      throw new BadRequestException('Cannot add goals to a finished match.');
    }

    const side = this.parseSide(dto.side);
    const scorerUserId = this.parseRequiredId(dto.scorerUserId, 'scorerUserId');
    const assistUserId = dto.assistUserId ?? null;

    await this.ensureGoalPlayersAreValid(matchId, side, scorerUserId, assistUserId);

    return this.prisma.goalEvent.create({
      data: {
        matchId,
        side,
        scorerUserId,
        assistUserId,
        minute: this.parseOptionalMinute(dto.minute),
        createdByUserId: userId,
      },
    });
  }

  async updateGoal(userId: string, goalId: string, dto: UpdateMatchGoalDto) {
    const goal = await this.prisma.goalEvent.findUnique({
      where: { id: goalId },
      select: {
        id: true,
        matchId: true,
        side: true,
        scorerUserId: true,
        assistUserId: true,
        deletedAt: true,
        match: { select: { gameDay: { select: { pickupGameId: true } } } },
      },
    });

    if (!goal || goal.deletedAt) {
      throw new NotFoundException('Goal not found.');
    }

    await this.ensureAdmin(userId, goal.match.gameDay.pickupGameId);

    const scorerUserId = dto.scorerUserId ?? goal.scorerUserId;
    const assistUserId = dto.assistUserId === undefined ? goal.assistUserId : dto.assistUserId;

    await this.ensureGoalPlayersAreValid(goal.matchId, goal.side, scorerUserId, assistUserId);

    return this.prisma.goalEvent.update({
      where: { id: goalId },
      data: {
        scorerUserId,
        assistUserId,
        minute: dto.minute === undefined ? undefined : this.parseOptionalMinute(dto.minute),
        updatedByUserId: userId,
      },
    });
  }

  async deleteGoal(userId: string, goalId: string) {
    const goal = await this.prisma.goalEvent.findUnique({
      where: { id: goalId },
      select: {
        id: true,
        deletedAt: true,
        match: { select: { gameDay: { select: { pickupGameId: true } } } },
      },
    });

    if (!goal || goal.deletedAt) {
      throw new NotFoundException('Goal not found.');
    }

    await this.ensureAdmin(userId, goal.match.gameDay.pickupGameId);

    await this.prisma.goalEvent.update({
      where: { id: goalId },
      data: { deletedAt: new Date(), deletedByUserId: userId },
    });

    return { id: goalId };
  }

  async finishMatch(userId: string, matchId: string, dto: FinishMatchDto) {
    const match = await this.getMatchForAccess(matchId);
    await this.ensureAdmin(userId, match.gameDay.pickupGameId);

    if (match.status !== MatchStatus.RUNNING) {
      throw new BadRequestException('Match is not running.');
    }

    const loserSide = dto.loserSide ?? this.inferLoserSide(match.goals);

    await this.prisma.$transaction(async (transaction) => {
      await transaction.match.update({
        where: { id: matchId },
        data: { status: MatchStatus.FINISHED, endedAt: new Date() },
      });

      const loserPlayers = await transaction.matchPlayer.findMany({
        where: { matchId, side: loserSide },
        select: { userId: true },
      });

      await this.rotateLosingPlayersToEnd(
        transaction,
        match.gameDay.id,
        loserPlayers.map((player) => player.userId),
      );

      const queueEntries = await this.getActiveQueueEntries(transaction, match.gameDay.id);

      if (queueEntries.length >= match.gameDay.teamSize * 2) {
        await this.createMatchFromQueue(
          transaction,
          match.gameDay.id,
          match.gameDay.teamSize,
          match.number + 1,
          queueEntries,
        );
      }
    });

    return this.findOne(userId, match.gameDay.pickupGameId);
  }

  private visiblePickupGameWhere(userId: string): Prisma.PickupGameWhereInput {
    return {
      OR: [
        { visibility: PickupGameVisibility.PUBLIC },
        { users: { some: { userId } } },
        { admins: { some: { userId } } },
      ],
    };
  }

  private async ensureVisible(userId: string, pickupGameId: string): Promise<void> {
    const pickupGame = await this.prisma.pickupGame.findFirst({
      where: { id: pickupGameId, ...this.visiblePickupGameWhere(userId) },
      select: { id: true },
    });

    if (!pickupGame) {
      throw new NotFoundException('Pickup game not found.');
    }
  }

  private async ensureAdmin(userId: string, pickupGameId: string): Promise<void> {
    const admin = await this.prisma.pickupGameAdmin.findUnique({
      where: { pickupGameId_userId: { pickupGameId, userId } },
      select: { id: true },
    });

    if (!admin) {
      throw new ForbiddenException('Only pickup game admins can perform this action.');
    }
  }

  private async ensurePrimaryGameDay(pickupGameId: string) {
    const pickupGame = await this.prisma.pickupGame.findUnique({
      where: { id: pickupGameId },
      select: { id: true, weekday: true, defaultTeamSize: true },
    });

    if (!pickupGame) {
      throw new NotFoundException('Pickup game not found.');
    }

    const existingGameDay = await this.prisma.gameDay.findFirst({
      where: {
        pickupGameId,
        status: { in: OPEN_GAME_DAY_STATUSES },
        date: { gte: this.todayUtcDate() },
      },
      orderBy: { date: 'asc' },
    });

    if (existingGameDay) {
      return existingGameDay;
    }

    return this.prisma.gameDay.create({
      data: {
        pickupGameId,
        date: this.nextDateFor(pickupGame.weekday),
        teamSize: pickupGame.defaultTeamSize,
      },
    });
  }

  private async getMatchForAccess(matchId: string) {
    const match = await this.prisma.match.findUnique({
      where: { id: matchId },
      select: {
        id: true,
        number: true,
        status: true,
        gameDay: { select: { id: true, pickupGameId: true, teamSize: true } },
        goals: { where: { deletedAt: null }, select: { side: true } },
      },
    });

    if (!match) {
      throw new NotFoundException('Match not found.');
    }

    return match;
  }

  private async getActiveQueueEntries(transaction: any, gameDayId: string): Promise<QueuePlayerSnapshot[]> {
    return transaction.queueEntry.findMany({
      where: { gameDayId, removedAt: null },
      orderBy: { currentPosition: 'asc' },
      select: { id: true, userId: true, currentPosition: true },
    });
  }

  private async ensureGoalPlayersAreValid(
    matchId: string,
    side: MatchSide,
    scorerUserId: string,
    assistUserId: string | null,
  ) {
    if (assistUserId && assistUserId === scorerUserId) {
      throw new BadRequestException('Assist player cannot be the scorer.');
    }

    const players = await this.prisma.matchPlayer.findMany({
      where: { matchId, side },
      select: { userId: true },
    });

    const sideUserIds = new Set(players.map((player) => player.userId));

    if (!sideUserIds.has(scorerUserId)) {
      throw new BadRequestException('Scorer must be in the selected side lineup.');
    }

    if (assistUserId && !sideUserIds.has(assistUserId)) {
      throw new BadRequestException('Assist player must be in the selected side lineup.');
    }
  }

  private async createMatchFromQueue(
    transaction: any,
    gameDayId: string,
    teamSize: number,
    number: number,
    queueEntries: QueuePlayerSnapshot[],
  ) {
    const match = await transaction.match.create({
      data: { gameDayId, number, teamSize },
      select: { id: true },
    });

    const teamA = queueEntries.slice(0, teamSize);
    const teamB = queueEntries.slice(teamSize, teamSize * 2);

    await transaction.matchPlayer.createMany({
      data: [
        ...teamA.map((entry, index) => ({ matchId: match.id, userId: entry.userId, side: MatchSide.A, slot: index + 1 })),
        ...teamB.map((entry, index) => ({ matchId: match.id, userId: entry.userId, side: MatchSide.B, slot: index + 1 })),
      ],
    });

    return match;
  }

  private async rotateLosingPlayersToEnd(transaction: any, gameDayId: string, losingUserIds: string[]) {
    const losingUserIdSet = new Set(losingUserIds);
    const activeQueueEntries = await this.getActiveQueueEntries(transaction, gameDayId);

    const reorderedEntries = [
      ...activeQueueEntries.filter((entry) => !losingUserIdSet.has(entry.userId)),
      ...activeQueueEntries.filter((entry) => losingUserIdSet.has(entry.userId)),
    ];

    for (let index = 0; index < reorderedEntries.length; index += 1) {
      await transaction.queueEntry.update({
        where: { id: reorderedEntries[index].id },
        data: { currentPosition: -(index + 1) },
      });
    }

    for (let index = 0; index < reorderedEntries.length; index += 1) {
      await transaction.queueEntry.update({
        where: { id: reorderedEntries[index].id },
        data: { currentPosition: index + 1 },
      });
    }
  }

  private inferLoserSide(goals: Array<{ side: MatchSide }>): MatchSide {
    const scoreA = goals.filter((goal) => goal.side === MatchSide.A).length;
    const scoreB = goals.filter((goal) => goal.side === MatchSide.B).length;

    if (scoreA === scoreB) {
      throw new BadRequestException('loserSide is required when the match is tied.');
    }

    return scoreA < scoreB ? MatchSide.A : MatchSide.B;
  }

  private parseName(name: string | undefined): string {
    const normalizedName = name?.trim();

    if (!normalizedName) {
      throw new BadRequestException('Pickup game name is required.');
    }

    if (normalizedName.length < MIN_PICKUP_GAME_NAME_LENGTH) {
      throw new BadRequestException(`Pickup game name must have at least ${MIN_PICKUP_GAME_NAME_LENGTH} characters.`);
    }

    if (normalizedName.length > MAX_PICKUP_GAME_NAME_LENGTH) {
      throw new BadRequestException(`Pickup game name must have at most ${MAX_PICKUP_GAME_NAME_LENGTH} characters.`);
    }

    return normalizedName;
  }

  private parseWeekday(weekday: Weekday | undefined): Weekday {
    if (!weekday || !(weekday in WEEKDAY_TO_UTC_DAY)) {
      throw new BadRequestException('Valid weekday is required.');
    }

    return weekday;
  }

  private parseStartTime(startTime: string | undefined): string {
    const normalizedStartTime = startTime?.trim();

    if (!normalizedStartTime || !/^([01]\d|2[0-3]):[0-5]\d$/.test(normalizedStartTime)) {
      throw new BadRequestException('startTime must be in HH:mm format.');
    }

    return normalizedStartTime;
  }

  private parseTeamSize(teamSize: number | undefined, fieldName: string): number {
    if (teamSize === undefined || !Number.isInteger(teamSize)) {
      throw new BadRequestException(`${fieldName} must be an integer.`);
    }

    if (teamSize < MIN_TEAM_SIZE || teamSize > MAX_TEAM_SIZE) {
      throw new BadRequestException(`${fieldName} must be between ${MIN_TEAM_SIZE} and ${MAX_TEAM_SIZE}.`);
    }

    return teamSize;
  }

  private parseOptionalText(value: string | undefined): string | null {
    const normalizedValue = value?.trim();
    return normalizedValue || null;
  }

  private parseRequiredId(value: string | undefined, fieldName: string): string {
    const normalizedValue = value?.trim();

    if (!normalizedValue) {
      throw new BadRequestException(`${fieldName} is required.`);
    }

    return normalizedValue;
  }

  private parseSide(side: MatchSide | undefined): MatchSide {
    if (side !== MatchSide.A && side !== MatchSide.B) {
      throw new BadRequestException('side must be A or B.');
    }

    return side;
  }

  private parseOptionalMinute(minute: number | null | undefined): number | null | undefined {
    if (minute === undefined) {
      return undefined;
    }

    if (minute === null) {
      return null;
    }

    if (!Number.isInteger(minute) || minute < 0 || minute > 300) {
      throw new BadRequestException('minute must be a valid match minute.');
    }

    return minute;
  }

  private nextDateFor(weekday: Weekday): Date {
    const today = this.todayUtcDate();
    const currentDay = today.getUTCDay();
    const targetDay = WEEKDAY_TO_UTC_DAY[weekday];
    const daysUntilTarget = (targetDay - currentDay + 7) % 7;

    return new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() + daysUntilTarget));
  }

  private todayUtcDate(): Date {
    const now = new Date();
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  }

  private pickupGameListSelect(userId: string): Prisma.PickupGameSelect {
    return {
      id: true,
      name: true,
      locationName: true,
      weekday: true,
      startTime: true,
      defaultTeamSize: true,
      visibility: true,
      createdAt: true,
      updatedAt: true,
      users: { where: { userId }, select: { id: true }, take: 1 },
      admins: { where: { userId }, select: { id: true, role: true }, take: 1 },
      days: {
        where: { status: { in: OPEN_GAME_DAY_STATUSES } },
        orderBy: { date: 'asc' },
        take: 1,
        select: {
          id: true,
          date: true,
          status: true,
          teamSize: true,
          _count: { select: { listEntries: { where: { removedAt: null } }, queueEntries: { where: { removedAt: null } } } },
        },
      },
      _count: { select: { users: true } },
    };
  }

  private pickupGameDetailSelect(userId: string): Prisma.PickupGameSelect {
    return {
      id: true,
      name: true,
      locationName: true,
      weekday: true,
      startTime: true,
      defaultTeamSize: true,
      visibility: true,
      createdAt: true,
      updatedAt: true,
      users: { where: { userId }, select: { id: true }, take: 1 },
      admins: { where: { userId }, select: { id: true, role: true }, take: 1 },
      days: {
        where: { status: { in: OPEN_GAME_DAY_STATUSES } },
        orderBy: { date: 'asc' },
        take: 1,
        select: {
          id: true,
          date: true,
          status: true,
          teamSize: true,
          listEntries: {
            where: { removedAt: null },
            orderBy: { joinedAt: 'asc' },
            select: { id: true, joinedAt: true, user: { select: this.userSelect() } },
          },
          queueEntries: {
            where: { removedAt: null },
            orderBy: { currentPosition: 'asc' },
            select: { id: true, arrivedAt: true, currentPosition: true, user: { select: this.userSelect() } },
          },
          matches: {
            orderBy: { number: 'desc' },
            take: 10,
            select: {
              id: true,
              number: true,
              teamSize: true,
              status: true,
              startedAt: true,
              endedAt: true,
              players: {
                orderBy: [{ side: 'asc' }, { slot: 'asc' }],
                select: { id: true, side: true, slot: true, user: { select: this.userSelect() } },
              },
              goals: {
                where: { deletedAt: null },
                orderBy: [{ minute: 'asc' }, { createdAt: 'asc' }],
                select: {
                  id: true,
                  side: true,
                  minute: true,
                  occurredAt: true,
                  createdAt: true,
                  updatedAt: true,
                  scorer: { select: this.userSelect() },
                  assist: { select: this.userSelect() },
                },
              },
            },
          },
        },
      },
      _count: { select: { users: true } },
    };
  }

  private userSelect(): Prisma.UserSelect {
    return {
      id: true,
      firstName: true,
      lastName: true,
      nickname: true,
      email: true,
      status: true,
    };
  }
}
