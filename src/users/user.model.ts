// src/users/user.model.ts
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { UserDeviceToken } from '../user-device-tokens/user-device-token.model';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @HasMany(() => UserDeviceToken)
  deviceTokens: UserDeviceToken[];
}
