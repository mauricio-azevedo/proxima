import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { GroupMemberRole, UserStatus } from '../../../generated/prisma';
import { PrismaService } from '../../database/prisma.service';
import { CreateGroupMemberDto } from './dto/create-group-member.dto';

const MIN_NICKNAME_LENGTH = 2;
const MAX_NICKNAME_LENGTH = 40;

@Injectable()
export class GroupMembersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(requestUserId: string, groupId: string) {
    await this.ensureMember(requestUserId, groupId);

    return this.prisma.groupMember.findMany({
      where: {
        groupId,
      },
      orderBy: {
        createdAt: 'asc',
      },
      select: this.memberSelect(),
    });
  }

  async create(requestUserId: string, groupId: string, dto: CreateGroupMemberDto) {
    await this.ensureAdmin(requestUserId, groupId);

    const nickname = this.parseNickname(dto.nickname);

    const member = await this.prisma.$transaction(async (transaction) => {
      const user = await transaction.user.create({
        data: {
          nickname,
          status: UserStatus.PLACEHOLDER,
        },
        select: {
          id: true,
        },
      });

      return transaction.groupMember.create({
        data: {
          groupId,
          userId: user.id,
          role: GroupMemberRole.MEMBER,
        },
        select: this.memberSelect(),
      });
    });

    return member;
  }

  private async ensureMember(userId: string, groupId: string): Promise<void> {
    const membership = await this.prisma.groupMember.findUnique({
      where: {
        groupId_userId: {
          groupId,
          userId,
        },
      },
      select: {
        id: true,
      },
    });

    if (!membership) {
      throw new NotFoundException('Group not found.');
    }
  }

  private async ensureAdmin(userId: string, groupId: string): Promise<void> {
    const membership = await this.prisma.groupMember.findUnique({
      where: {
        groupId_userId: {
          groupId,
          userId,
        },
      },
      select: {
        role: true,
      },
    });

    if (!membership) {
      throw new NotFoundException('Group not found.');
    }

    if (membership.role !== GroupMemberRole.ADMIN) {
      throw new ForbiddenException('Only group admins can perform this action.');
    }
  }

  private parseNickname(nickname: string | undefined): string {
    const normalizedNickname = nickname?.trim();

    if (!normalizedNickname) {
      throw new BadRequestException('Nickname is required.');
    }

    if (normalizedNickname.length < MIN_NICKNAME_LENGTH) {
      throw new BadRequestException(
        `Nickname must have at least ${MIN_NICKNAME_LENGTH} characters.`,
      );
    }

    if (normalizedNickname.length > MAX_NICKNAME_LENGTH) {
      throw new BadRequestException(
        `Nickname must have at most ${MAX_NICKNAME_LENGTH} characters.`,
      );
    }

    return normalizedNickname;
  }

  private memberSelect() {
    return {
      id: true,
      role: true,
      createdAt: true,
      updatedAt: true,
      user: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          nickname: true,
          email: true,
          status: true,
        },
      },
    } as const;
  }
}
