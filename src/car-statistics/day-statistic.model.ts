// models/day-statistic.model.ts
import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { Car } from './car.model';

@Table
export class DayStatistic extends Model {
  @Column
  day: number;  // day of the month

  @Column
  powerConsumed: number;  // in kWh

  @ForeignKey(() => Car)
  @Column
  carId: number;
}
