import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Notification } from './notifications/notification.model'; // Import your Notification model
import { NotificationsModule } from './notifications/notifications.module'; // Import your NotificationsModule
import { UserDeviceTokenModule } from './user-device-tokens/user-device-token.module';
import { UserModule } from './users/user.module';
import { CarStatisticsModule } from './car-statistics/car-statistics.module';
import { LicensesModule } from './licenses/licenses.module';
import { AuditLogsModule } from './audit-logs/audit-logs.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'username',
      password: 'password',
      database: 'notification_db',
      models: [Notification],
      autoLoadModels: true, // Automatically load models
      synchronize: true,    // Only for development; disables in production
    }),
    NotificationsModule,
    UserModule,
    UserDeviceTokenModule,
    CarStatisticsModule,
    LicensesModule,
    AuditLogsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
