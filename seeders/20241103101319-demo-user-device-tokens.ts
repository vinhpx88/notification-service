// src/seeders/YYYYMMDDHHMMSS-demo-user-device-tokens.js
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_device_tokens', [
      {
        userId: 1,
        deviceToken: 'abc123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        deviceToken: 'xyz789',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_device_tokens', null, {});
  }
};
