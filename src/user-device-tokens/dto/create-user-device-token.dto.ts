// src/user-device-tokens/dto/create-user-device-token.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDeviceTokenDto {
  @ApiProperty({ description: 'The device token for FCM notifications' })
  deviceToken: string;

  @ApiProperty({ description: 'The ID of the user associated with this device token' })
  userId: number;
}
