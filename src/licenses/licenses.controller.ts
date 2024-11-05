// controllers/license.controller.ts
import { Controller, Post, Get, Put, Delete, Body, Param, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiConsumes } from '@nestjs/swagger';
import { LicenseService } from './licenses.service';
import { License } from './license.model';

@ApiTags('License')
@Controller('api/licenses')
export class LicenseController {
  constructor(private readonly licenseService: LicenseService) {}

@ApiConsumes('multipart/form-data')
@ApiBody({
  schema: {
    type: 'object',
    properties: {
      userId: { type: 'number' },
      type: { type: 'string', enum: ['basic', 'premium'] },
      file: { type: 'string', format: 'binary' },
    },
  },
})
@Post()
@UseInterceptors(FileInterceptor('file'))
async createLicense(
  @Body('userId') userId: number,
  @Body('type') type: 'basic' | 'premium',
  @UploadedFile() file: Express.Multer.File,
) {
  return this.licenseService.createLicense(userId, type, file);
}

  @ApiOperation({ summary: 'Get all licenses' })
  @Get()
  async getLicenses() {
    return this.licenseService.getLicenses();
  }

  @ApiOperation({ summary: 'Update a license' })
  @Put(':id')
  async updateLicense(@Param('id') id: number, @Body() updateData: Partial<License>) {
    return this.licenseService.updateLicense(id, updateData);
  }

  @ApiOperation({ summary: 'Delete a license' })
  @ApiParam({ name: 'id', description: 'License ID' })
  @Delete(':id')
  async deleteLicense(@Param('id') id: number) {
    return this.licenseService.deleteLicense(id);
  }
}
