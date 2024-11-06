// audit-log.model.ts
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { License } from '../licenses/license.model';
import { User } from '../users/user.model';

@Table
export class AuditLog extends Model {
  @ForeignKey(() => License)
  @Column(DataType.INTEGER)
  licenseId: number;

  @Column(DataType.STRING)
  action: 'create' | 'update' | 'delete';

  @Column(DataType.JSONB)
  previousData: any;

  @Column(DataType.JSONB)
  newData: any;

  @Column(DataType.INTEGER)
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @Column(DataType.DATE)
  timestamp: Date;
}
