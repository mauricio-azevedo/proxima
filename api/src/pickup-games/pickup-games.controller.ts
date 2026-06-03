import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from '../auth/auth.guard';
import type { AuthenticatedRequest } from '../auth/authenticated-request';
import type { CreateMatchGoalDto } from './dto/create-match-goal.dto';
import type { CreatePickupGameDto } from './dto/create-pickup-game.dto';
import type { FinishMatchDto } from './dto/finish-match.dto';
import type { UpdateGameDayTeamSizeDto } from './dto/update-game-day-team-size.dto';
import type { UpdateMatchGoalDto } from './dto/update-match-goal.dto';
import { PickupGamesService } from './pickup-games.service';

@Controller('pickup-games')
@UseGuards(AuthGuard)
export class PickupGamesController {
  constructor(private readonly pickupGamesService: PickupGamesService) {}

  @Get()
  findAll(@Req() request: AuthenticatedRequest) {
    return this.pickupGamesService.findAll(request.user.id);
  }

  @Post()
  create(@Req() request: AuthenticatedRequest, @Body() body: CreatePickupGameDto) {
    return this.pickupGamesService.create(request.user.id, body);
  }

  @Get(':pickupGameId')
  findOne(@Req() request: AuthenticatedRequest, @Param('pickupGameId') pickupGameId: string) {
    return this.pickupGamesService.findOne(request.user.id, pickupGameId);
  }

  @Post(':pickupGameId/save')
  save(@Req() request: AuthenticatedRequest, @Param('pickupGameId') pickupGameId: string) {
    return this.pickupGamesService.save(request.user.id, pickupGameId);
  }

  @Delete(':pickupGameId/save')
  unsave(@Req() request: AuthenticatedRequest, @Param('pickupGameId') pickupGameId: string) {
    return this.pickupGamesService.unsave(request.user.id, pickupGameId);
  }

  @Post(':pickupGameId/list')
  joinNextDayList(@Req() request: AuthenticatedRequest, @Param('pickupGameId') pickupGameId: string) {
    return this.pickupGamesService.joinNextDayList(request.user.id, pickupGameId);
  }

  @Post(':pickupGameId/arrivals')
  arrive(@Req() request: AuthenticatedRequest, @Param('pickupGameId') pickupGameId: string) {
    return this.pickupGamesService.arrive(request.user.id, pickupGameId);
  }

  @Patch(':pickupGameId/current-day/team-size')
  updatePrimaryDayTeamSize(
    @Req() request: AuthenticatedRequest,
    @Param('pickupGameId') pickupGameId: string,
    @Body() body: UpdateGameDayTeamSizeDto,
  ) {
    return this.pickupGamesService.updatePrimaryDayTeamSize(request.user.id, pickupGameId, body);
  }

  @Post(':pickupGameId/current-day/matches/start')
  startFirstMatch(@Req() request: AuthenticatedRequest, @Param('pickupGameId') pickupGameId: string) {
    return this.pickupGamesService.startFirstMatch(request.user.id, pickupGameId);
  }

  @Post('matches/:matchId/goals')
  addGoal(
    @Req() request: AuthenticatedRequest,
    @Param('matchId') matchId: string,
    @Body() body: CreateMatchGoalDto,
  ) {
    return this.pickupGamesService.addGoal(request.user.id, matchId, body);
  }

  @Post('matches/:matchId/finish')
  finishMatch(
    @Req() request: AuthenticatedRequest,
    @Param('matchId') matchId: string,
    @Body() body: FinishMatchDto,
  ) {
    return this.pickupGamesService.finishMatch(request.user.id, matchId, body);
  }

  @Patch('goals/:goalId')
  updateGoal(
    @Req() request: AuthenticatedRequest,
    @Param('goalId') goalId: string,
    @Body() body: UpdateMatchGoalDto,
  ) {
    return this.pickupGamesService.updateGoal(request.user.id, goalId, body);
  }

  @Delete('goals/:goalId')
  deleteGoal(@Req() request: AuthenticatedRequest, @Param('goalId') goalId: string) {
    return this.pickupGamesService.deleteGoal(request.user.id, goalId);
  }
}
