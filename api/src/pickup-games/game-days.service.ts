import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';

import { GameDayStatus, MatchStatus, Weekday } from '../../generated/prisma';
import { PrismaService } from '../database/prisma.service';

const OPEN_GAME_DAY_STATUSES = [
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

@Injectable()
export class GameDaysService {
  constructor(private readonly prisma: PrismaService) {}

  async startWaitingForPlayers(userId: string, pickupGameId: string) {
    await this.ensureAdmin(userId, pickupGameId);

    const gameDay = await this.ensurePrimaryGameDay(pickupGameId);

    if (gameDay.status === GameDayStatus.FINISHED || gameDay.status === GameDayStatus.CANCELLED) {
      throw new BadRequestException('Cannot reopen a closed game day.');
    }

    if (gameDay.status === GameDayStatus.SCHEDULED) {
      await this.prisma.gameDay.update({
        where: { id: gameDay.id },
        data: { status: GameDayStatus.WAITING_FOR_PLAYERS },
      });
    }

    await this.ensureNextFutureGameDay(pickupGameId, gameDay.date);

    return { id: gameDay.id };
  }

  async finishCurrentDay(userId: string, pickupGameId: string) {
    await this.ensureAdmin(userId, pickupGameId);

    const gameDay = await this.ensurePrimaryGameDay(pickupGameId);

    if (gameDay.status === GameDayStatus.FINISHED) {
      return { id: gameDay.id };
    }

    if (gameDay.status === GameDayStatus.CANCELLED) {
      throw new BadRequestException('Cannot finish a cancelled game day.');
    }

    const runningMatch = await this.prisma.match.findFirst({
      where: {
        gameDayId: gameDay.id,
        status: MatchStatus.RUNNING,
      },
      select: { id: true },
    });

    if (runningMatch) {
      throw new BadRequestException('Finish or cancel the running match before finishing the game day.');
    }

    await this.prisma.gameDay.update({
      where: { id: gameDay.id },
      data: { status: GameDayStatus.FINISHED },
    });

    await this.ensureNextFutureGameDay(pickupGameId, gameDay.date);

    return { id: gameDay.id };
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

  private async ensureNextFutureGameDay(pickupGameId: string, currentDate: Date) {
    const pickupGame = await this.prisma.pickupGame.findUnique({
      where: { id: pickupGameId },
      select: { weekday: true, defaultTeamSize: true },
    });

    if (!pickupGame) {
      throw new NotFoundException('Pickup game not found.');
    }

    const nextDate = this.nextDateAfter(pickupGame.weekday, currentDate);

    await this.prisma.gameDay.upsert({
      where: {
        pickupGameId_date: {
          pickupGameId,
          date: nextDate,
        },
      },
      create: {
        pickupGameId,
        date: nextDate,
        teamSize: pickupGame.defaultTeamSize,
      },
      update: {},
    });
  }

  private nextDateFor(weekday: Weekday): Date {
    const today = this.todayUtcDate();
    const currentDay = today.getUTCDay();
    const targetDay = WEEKDAY_TO_UTC_DAY[weekday];
    const daysUntilTarget = (targetDay - currentDay + 7) % 7;

    return new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() + daysUntilTarget));
  }

  private nextDateAfter(weekday: Weekday, currentDate: Date): Date {
    const targetDay = WEEKDAY_TO_UTC_DAY[weekday];
    const currentDay = currentDate.getUTCDay();
    const rawDaysUntilTarget = (targetDay - currentDay + 7) % 7;
    const daysUntilTarget = rawDaysUntilTarget === 0 ? 7 : rawDaysUntilTarget;

    return new Date(Date.UTC(
      currentDate.getUTCFullYear(),
      currentDate.getUTCMonth(),
      currentDate.getUTCDate() + daysUntilTarget,
    ));
  }

  private todayUtcDate(): Date {
    const now = new Date();
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  }
}
