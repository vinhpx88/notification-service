// models/license.model.ts
import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { User } from '../users/user.model';

@Table({
  tableName: 'licenses',
  timestamps: true,
})
export class License extends Model {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  userId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  type: 'basic' | 'premium';

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  status: 0 | 1; // 0 for inactive, 1 for active
}
