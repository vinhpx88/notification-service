// src/notifications/notification.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Notification } from './notification.model';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification)
    private readonly notificationModel: typeof Notification,
  ) {}

  async createNotification(data: Partial<Notification>): Promise<Notification> {
    return this.notificationModel.create(data);
  }

  async getUserNotifications(userId: number): Promise<Notification[]> {
    return this.notificationModel.findAll({ where: { userId }, order: [['createdAt', 'DESC']] });
  }

  async markAsRead(notificationId: number): Promise<void> {
    await this.notificationModel.update({ read: true }, { where: { id: notificationId } });
  }

  async deleteNotification(notificationId: number): Promise<void> {
    await this.notificationModel.destroy({ where: { id: notificationId } });
  }
}
