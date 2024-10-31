// src/user-device-tokens/user-device-token.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserDeviceToken } from './user-device-token.model';
import { UserDeviceTokenService } from './user-device-token.service';
import { UserDeviceTokenController } from './user-device-token.controller';

@Module({
  imports: [SequelizeModule.forFeature([UserDeviceToken])],
  providers: [UserDeviceTokenService],
  controllers: [UserDeviceTokenController],
  exports: [UserDeviceTokenService],
})
export class UserDeviceTokenModule {}
