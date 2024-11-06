// services/license.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { License } from './license.model';
import { S3Service } from '../services/s3.service';
import { AuditLogsService } from '../audit-logs/audit-logs.service';

@Injectable()
export class LicenseService {
  constructor(
    @InjectModel(License)
    private readonly licenseModel: typeof License,
    private readonly auditLogService: AuditLogsService,
    private readonly s3Service: S3Service,
  ) {}

  async createLicense(userId: number, type: 'basic' | 'premium', file: Express.Multer.File) {
    const fileUrl = await this.s3Service.uploadFile(file, userId);
    return this.licenseModel.create({
      userId,
      type,
      status: 1,
    });
  }

  async getLicenses() {
    return this.licenseModel.findAll();
  }

  async updateLicense(id: number, updateData: Partial<License>) {
    const license = await this.licenseModel.findByPk(id);
    if (!license) throw new NotFoundException('License not found');
    
    const previousData = license.toJSON();
    await license.update(updateData);

    await this.auditLogService.logAction(
      id,
      'update',
      previousData,
      updateData,
      1,
    );

    return license;
  }

  async deleteLicense(id: number) {
    const license = await this.licenseModel.findByPk(id);
    if (!license) throw new NotFoundException('License not found');
    await license.destroy();
  }
}
