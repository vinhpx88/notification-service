// services/car-statistics.service.ts
import { Injectable } from '@nestjs/common';
import { DayStatistic } from './day-statistic.model';
import { Car } from './car.model';
import { Op } from 'sequelize';

@Injectable()
export class CarStatisticsService {
  async getMonthlyStatistics(carId: number, month: number, year: number) {
    // Fetch all day statistics for the given month and year
    const dayStats = await DayStatistic.findAll({
      where: {
        carId,
        day: { [Op.between]: [1, 31] },
        createdAt: { [Op.and]: [
            { [Op.gte]: new Date(year, month - 1, 1) },
            { [Op.lt]: new Date(year, month, 1) }
        ]}
      }
    });

    const totalPowerConsumed = dayStats.reduce((sum, stat) => sum + stat.powerConsumed, 0);
    const totalPrice = this.calculatePrice(totalPowerConsumed);
    
    return {
      totalPowerConsumed,
      totalPrice,
      dayStatistics: dayStats.map(stat => ({ day: stat.day, powerConsumed: stat.powerConsumed }))
    };
  }

  async getYearlyStatistics(carId: number, year: number) {
    const monthStats = [];
    for (let month = 1; month <= 12; month++) {
      const monthlyData = await this.getMonthlyStatistics(carId, month, year);
      monthStats.push({ month, powerConsumed: monthlyData.totalPowerConsumed });
    }

    const totalPowerConsumed = monthStats.reduce((sum, stat) => sum + stat.powerConsumed, 0);
    const totalPrice = this.calculatePrice(totalPowerConsumed);

    return {
      totalPowerConsumed,
      totalPrice,
      currency: 'USD',
      monthStatistics: monthStats
    };
  }

  private calculatePrice(powerConsumed: number) {
    const ratePerKWh = 0.15;  // assuming a rate of $0.15 per kWh
    return powerConsumed * ratePerKWh;
  }
}
