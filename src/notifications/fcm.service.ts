
// src/notifications/fcm.service.ts
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { Notification } from './notification.model';

@Injectable()
export class FcmService {
  constructor() {
    // admin.initializeApp({
    //   credential: admin.credential.cert('src/firebase-service-account.json'), // Path to Firebase service account key
    // });
  }

  async sendNotification(notification: Notification, deviceToken: string): Promise<void> {
    const message = {
      notification: {
        title: notification.title,
        body: notification.message,
      },
      token: deviceToken,
    };

    try {
      await admin.messaging().send(message);
      console.log('Notification sent successfully');
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  }
}
