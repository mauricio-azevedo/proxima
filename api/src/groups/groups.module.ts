import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../database/prisma.module';
import { GroupMembersController } from './group-members/group-members.controller';
import { GroupMembersService } from './group-members/group-members.service';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [GroupsController, GroupMembersController],
  providers: [GroupsService, GroupMembersService],
})
export class GroupsModule {}
