// migrations/XXXXXX-create-licenses.ts
import { QueryInterface, DataTypes } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('licenses', {
      id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      },
      userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users', // assuming there is a 'users' table
        key: 'id',
      },
      onDelete: 'SET NULL',
      },
      type: {
      type: DataTypes.STRING,
      allowNull: false,
      },
      status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      },
      createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      },
      updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      },
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('licenses');
  },
};
