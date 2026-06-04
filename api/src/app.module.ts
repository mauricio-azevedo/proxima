import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { validateEnvironment } from './config/env.validation';
import { PickupGamesModule } from './pickup-games/pickup-games.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnvironment,
    }),
    AuthModule,
    PickupGamesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
