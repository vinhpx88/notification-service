// src/notifications/dto/create-notification.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateNotificationDto {
  @ApiProperty({ description: 'Title of the notification' })
  title: string;

  @ApiProperty({ description: 'Message content of the notification' })
  message: string;

  @ApiProperty({ description: 'ID of the user receiving the notification' })
  userId: number;
}
