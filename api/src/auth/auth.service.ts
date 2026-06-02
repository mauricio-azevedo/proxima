import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { PrismaService } from '../database/prisma.service';
import { UserStatus } from '../../generated/prisma';
import { JwtService } from './jwt.service';
import { PasswordService } from './password.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly passwordService: PasswordService,
  ) {}

  async register(dto: RegisterDto) {
    const firstName = dto.firstName?.trim();
    const lastName = dto.lastName?.trim();
    const nickname = dto.nickname?.trim();
    const email = dto.email?.trim().toLowerCase();
    const password = dto.password;

    if (!firstName || !lastName || !nickname || !email || !password) {
      throw new BadRequestException('All fields are required.');
    }

    if (password.length < 6) {
      throw new BadRequestException('Password must have at least 6 characters.');
    }

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    if (existingUser) {
      throw new ConflictException('Email is already registered.');
    }

    const passwordHash = await this.passwordService.hash(password);

    const user = await this.prisma.user.create({
      data: {
        firstName,
        lastName,
        nickname,
        email,
        passwordHash,
        status: UserStatus.REGISTERED,
      },
      select: this.userSelect(),
    });

    return {
      accessToken: this.jwtService.sign({ sub: user.id, email: user.email! }),
      user,
    };
  }

  async login(dto: LoginDto) {
    const email = dto.email?.trim().toLowerCase();
    const password = dto.password;

    if (!email || !password) {
      throw new BadRequestException('Email and password are required.');
    }

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.passwordHash || user.status !== UserStatus.REGISTERED) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    const passwordMatches = await this.passwordService.verify(password, user.passwordHash);

    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    return {
      accessToken: this.jwtService.sign({ sub: user.id, email: user.email! }),
      user: this.serializeUser(user),
    };
  }

  async me(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: this.userSelect(),
    });

    if (!user) {
      throw new UnauthorizedException('User not found.');
    }

    return user;
  }

  private serializeUser(user: {
    id: string;
    firstName: string | null;
    lastName: string | null;
    nickname: string;
    email: string | null;
    status: UserStatus;
    createdAt: Date;
    updatedAt: Date;
  }) {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      nickname: user.nickname,
      email: user.email,
      status: user.status,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  private userSelect() {
    return {
      id: true,
      firstName: true,
      lastName: true,
      nickname: true,
      email: true,
      status: true,
      createdAt: true,
      updatedAt: true,
    } as const;
  }
}
