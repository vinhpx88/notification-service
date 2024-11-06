// audit-logs.service.ts
import { Injectable } from '@nestjs/common';
import { AuditLog } from './audit-log.model';
import { User } from 'src/users/user.model';

@Injectable()
export class AuditLogsService {
  async logAction(
    licenseId: number,
    action: 'create' | 'update' | 'delete',
    previousData: any,
    newData: any,
    userId?: number,
  ) {
    return AuditLog.create({
      licenseId,
      action,
      previousData,
      newData,
      userId,
      timestamp: new Date(),
    });
  }

  async getLogsByLicense(licenseId: number) {
    const logs = await AuditLog.findAll({
      where: { licenseId },
      include: [{ model: User, attributes: ['id', 'name'] }], // Include user details
      order: [['timestamp', 'DESC']],
    });

    return logs.map(log => ({
      userName: log.user ? log.user.name : 'Unknown user',
      action: log.action,
      timestamp: log.timestamp,
      details: this.formatChangeDetails(log),
    }));
  }

  private formatChangeDetails(log: AuditLog) {
    const changes = [];
    if (log.previousData && log.newData) {
      for (const key of Object.keys(log.newData)) {
        if (log.previousData[key] !== log.newData[key]) {
          changes.push(
            `Changed ${key} from "${log.previousData[key]}" to "${log.newData[key]}"`
          );
        }
      }
    } else if (log.action === 'delete') {
      changes.push(`License deleted`);
    } else if (log.action === 'create') {
      changes.push(`License created`);
    }
    return changes;
  }
}
