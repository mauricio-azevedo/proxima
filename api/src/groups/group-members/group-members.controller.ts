import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';

import { AuthGuard } from '../../auth/auth.guard';
import type { AuthenticatedRequest } from '../../auth/authenticated-request';
import type { CreateGroupMemberDto } from './dto/create-group-member.dto';
import { GroupMembersService } from './group-members.service';

@Controller('groups/:groupId/members')
@UseGuards(AuthGuard)
export class GroupMembersController {
  constructor(private readonly groupMembersService: GroupMembersService) {}

  @Get()
  findAll(@Req() request: AuthenticatedRequest, @Param('groupId') groupId: string) {
    return this.groupMembersService.findAll(request.user.id, groupId);
  }

  @Post()
  create(@Req() request: AuthenticatedRequest, @Param('groupId') groupId: string, @Body() body: CreateGroupMemberDto) {
    return this.groupMembersService.create(request.user.id, groupId, body);
  }
}
