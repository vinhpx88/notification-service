import { Controller, Get, Param } from '@nestjs/common';
import { AuditLogsService } from './audit-logs.service';

@Controller('audit-logs')
export class AuditLogsController {
    constructor(private readonly auditLogService: AuditLogsService) {}

    @Get('license/:licenseId')
    async getLogsByLicense(@Param('licenseId') licenseId: number) {
      return this.auditLogService.getLogsByLicense(licenseId);
    }
}
