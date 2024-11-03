// src/seeders/YYYYMMDDHHMMSS-demo-notifications.js
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('notifications', [
      {
        userId: 1,
        title: 'Welcome Notification',
        message: 'Thank you for signing up!',
        read: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        title: 'Discount Offer',
        message: 'Enjoy a 10% discount on your next purchase!',
        read: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('notifications', null, {});
  }
};
