// src/notifications/notification.controller.ts
import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('notifications')
@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  @ApiOperation({ summary: 'Send a notification to a user' })
  @ApiResponse({ status: 201, description: 'Notification sent and stored successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  async sendNotification(@Body() createNotificationDto: CreateNotificationDto) {
    const notification = await this.notificationService.createNotification(createNotificationDto);
    return notification;
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Get notifications for a specific user' })
  @ApiResponse({ status: 200, description: 'User notifications retrieved successfully.' })
  async getUserNotifications(@Param('userId') userId: number) {
    return this.notificationService.getUserNotifications(userId);
  }

  @Patch(':id/read')
  @ApiOperation({ summary: 'Mark a notification as read' })
  @ApiResponse({ status: 200, description: 'Notification marked as read.' })
  async markAsRead(@Param('id') notificationId: number) {
    return this.notificationService.markAsRead(notificationId);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a specific notification' })
  @ApiResponse({ status: 200, description: 'Notification deleted successfully.' })
  async deleteNotification(@Param('id') notificationId: number) {
    return this.notificationService.deleteNotification(notificationId);
  }
}
