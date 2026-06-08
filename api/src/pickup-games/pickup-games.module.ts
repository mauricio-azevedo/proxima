import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../database/prisma.module';
import { GameDaysService } from './game-days.service';
import { PickupGamesController } from './pickup-games.controller';
import { PickupGamesHomeService } from './pickup-games-home.service';
import { PickupGamesService } from './pickup-games.service';

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [PickupGamesController],
  providers: [PickupGamesService, PickupGamesHomeService, GameDaysService],
})
export class PickupGamesModule {}
