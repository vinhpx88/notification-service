import { Module } from '@nestjs/common';
import { CarStatisticsService } from './car-statistics.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Car } from './car.model';
import { DayStatistic } from './day-statistic.model';
import { CarStatisticsController } from './car-statistics.controller';

@Module({
  imports: [SequelizeModule.forFeature([Car, DayStatistic])],
  controllers: [CarStatisticsController],
  providers: [CarStatisticsService],
})
export class CarStatisticsModule {}
