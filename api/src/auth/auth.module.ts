import { Module } from '@nestjs/common';

import { PrismaModule } from '../database/prisma.module';
import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { JwtService } from './jwt.service';
import { PasswordService } from './password.service';

@Module({
  imports: [PrismaModule],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard, JwtService, PasswordService],
  exports: [AuthGuard, JwtService],
})
export class AuthModule {}
