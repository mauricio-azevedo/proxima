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
import type { CreateGroupDto } from './dto/create-group.dto';
import type { UpdateGroupDto } from './dto/update-group.dto';
import { GroupsService } from './groups.service';

@Controller('groups')
@UseGuards(AuthGuard)
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Get()
  findAll(@Req() request: AuthenticatedRequest) {
    return this.groupsService.findAll(request.user.id);
  }

  @Post()
  create(@Req() request: AuthenticatedRequest, @Body() body: CreateGroupDto) {
    return this.groupsService.create(request.user.id, body);
  }

  @Get(':groupId')
  findOne(@Req() request: AuthenticatedRequest, @Param('groupId') groupId: string) {
    return this.groupsService.findOne(request.user.id, groupId);
  }

  @Patch(':groupId')
  update(
    @Req() request: AuthenticatedRequest,
    @Param('groupId') groupId: string,
    @Body() body: UpdateGroupDto,
  ) {
    return this.groupsService.update(request.user.id, groupId, body);
  }

  @Delete(':groupId')
  remove(@Req() request: AuthenticatedRequest, @Param('groupId') groupId: string) {
    return this.groupsService.remove(request.user.id, groupId);
  }
}
