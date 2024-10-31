// src/user-device-tokens/user-device-token.model.ts
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../users/user.model';

@Table({ tableName: 'user_device_tokens' })
export class UserDeviceToken extends Model<UserDeviceToken> {
  @Column({ type: DataType.STRING, allowNull: false })
  deviceToken: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
