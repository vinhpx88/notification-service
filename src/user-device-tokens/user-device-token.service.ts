// src/user-device-tokens/user-device-token.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserDeviceToken } from './user-device-token.model';
import { CreateUserDeviceTokenDto } from './dto/create-user-device-token.dto';

@Injectable()
export class UserDeviceTokenService {
  constructor(@InjectModel(UserDeviceToken) private tokenModel: typeof UserDeviceToken) {}

  async createUserDeviceToken(createTokenDto: CreateUserDeviceTokenDto): Promise<UserDeviceToken> {
    return this.tokenModel.create(createTokenDto);
  }

  async findDeviceTokensByUserId(userId: number): Promise<UserDeviceToken[]> {
    return this.tokenModel.findAll({ where: { userId } });
  }
}
