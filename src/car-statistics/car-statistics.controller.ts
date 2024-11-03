// controllers/car-statistics.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CarStatisticsService } from './car-statistics.service';

@ApiTags('car-statistics')
@Controller('api/car-statistics')
export class CarStatisticsController {
  constructor(private readonly carStatisticsService: CarStatisticsService) {}

  @ApiOperation({ summary: 'Get monthly statistics for a car' })
  @ApiQuery({ name: 'carId', type: Number, description: 'ID of the car' })
  @ApiQuery({ name: 'month', type: Number, description: 'Month (1-12)' })
  @ApiQuery({ name: 'year', type: Number, description: 'Year (e.g., 2024)' })
  @Get('/monthly')
  async getMonthlyStatistics(
    @Query('carId') carId: number,
    @Query('month') month: number,
    @Query('year') year: number,
  ) {
    return this.carStatisticsService.getMonthlyStatistics(carId, month, year);
  }

  @ApiOperation({ summary: 'Get yearly statistics for a car' })
  @ApiQuery({ name: 'carId', type: Number, description: 'ID of the car' })
  @ApiQuery({ name: 'year', type: Number, description: 'Year (e.g., 2024)' })
  @Get('/yearly')
  async getYearlyStatistics(
    @Query('carId') carId: number,
    @Query('year') year: number,
  ) {
    return this.carStatisticsService.getYearlyStatistics(carId, year);
  }
}
