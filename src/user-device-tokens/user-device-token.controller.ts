// src/user-device-tokens/user-device-token.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserDeviceTokenService } from './user-device-token.service';
import { CreateUserDeviceTokenDto } from './dto/create-user-device-token.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('user-device-tokens')
@Controller('user-device-tokens')
export class UserDeviceTokenController {
  constructor(private readonly tokenService: UserDeviceTokenService) {}

  @Post()
  @ApiOperation({ summary: 'Register a new device token for a user' })
  async createUserDeviceToken(@Body() createTokenDto: CreateUserDeviceTokenDto) {
    return this.tokenService.createUserDeviceToken(createTokenDto);
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Get all device tokens for a specific user' })
  async getUserDeviceTokens(@Param('userId') userId: number) {
    return this.tokenService.findDeviceTokensByUserId(userId);
  }
}
