import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { GroupMemberRole } from '../../generated/prisma';
import { PrismaService } from '../database/prisma.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

const MIN_GROUP_NAME_LENGTH = 2;
const MAX_GROUP_NAME_LENGTH = 80;

@Injectable()
export class GroupsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, dto: CreateGroupDto) {
    const name = this.parseGroupName(dto.name);

    return this.prisma.$transaction(async (transaction) => {
      const group = await transaction.group.create({
        data: {
          name,
          ownerId: userId,
        },
      });

      await transaction.groupMember.create({
        data: {
          groupId: group.id,
          userId,
          role: GroupMemberRole.ADMIN,
        },
      });

      return this.findOne(userId, group.id);
    });
  }

  async findAll(userId: string) {
    return this.prisma.group.findMany({
      where: {
        members: {
          some: {
            userId,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: this.groupSelect(userId),
    });
  }

  async findOne(userId: string, groupId: string) {
    const group = await this.prisma.group.findFirst({
      where: {
        id: groupId,
        members: {
          some: {
            userId,
          },
        },
      },
      select: this.groupSelect(userId),
    });

    if (!group) {
      throw new NotFoundException('Group not found.');
    }

    return group;
  }

  async update(userId: string, groupId: string, dto: UpdateGroupDto) {
    await this.ensureAdmin(userId, groupId);

    const name = this.parseGroupName(dto.name);

    await this.prisma.group.update({
      where: {
        id: groupId,
      },
      data: {
        name,
      },
    });

    return this.findOne(userId, groupId);
  }

  async remove(userId: string, groupId: string) {
    await this.ensureAdmin(userId, groupId);

    await this.prisma.group.delete({
      where: {
        id: groupId,
      },
    });

    return { id: groupId };
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

  private parseGroupName(name: string | undefined): string {
    const normalizedName = name?.trim();

    if (!normalizedName) {
      throw new BadRequestException('Group name is required.');
    }

    if (normalizedName.length < MIN_GROUP_NAME_LENGTH) {
      throw new BadRequestException(
        `Group name must have at least ${MIN_GROUP_NAME_LENGTH} characters.`,
      );
    }

    if (normalizedName.length > MAX_GROUP_NAME_LENGTH) {
      throw new BadRequestException(
        `Group name must have at most ${MAX_GROUP_NAME_LENGTH} characters.`,
      );
    }

    return normalizedName;
  }

  private groupSelect(userId: string) {
    return {
      id: true,
      name: true,
      ownerId: true,
      createdAt: true,
      updatedAt: true,
      members: {
        where: {
          userId,
        },
        select: {
          id: true,
          role: true,
          createdAt: true,
          updatedAt: true,
        },
        take: 1,
      },
      _count: {
        select: {
          members: true,
          peladas: true,
        },
      },
    } as const;
  }
}
