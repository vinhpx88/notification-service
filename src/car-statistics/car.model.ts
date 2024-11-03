// models/day-statistic.model.ts
import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { User } from '../users/user.model';

@Table
export class Car extends Model {
  @Column
  make?: string;

  @Column
  modelName?: string;

  @Column
  year?: number;

  @Column
  vin?: string;

  @Column
  owner?: string;

  @ForeignKey(() => User)
  @Column
  ownerId?: number;
}
