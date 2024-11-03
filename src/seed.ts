// src/seed.ts
import { Sequelize } from 'sequelize-typescript';
import { Car } from './car-statistics/car.model';
import { DayStatistic } from './car-statistics/day-statistic.model';

async function seed() {
  const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'username',
    password: 'password',
    database: 'notification_db',
    models: [Car, DayStatistic],
  });

  try {
    // Connect to the database
    await sequelize.authenticate();
    console.log('Connection established successfully.');

    // Sync models to the database
    await sequelize.sync({ force: true });

    // Create a car
    const car = await Car.create({
      modelName: 'Tesla Model S',
      ownerId: 1,
    });

    // Seed daily statistics for the car for October 2024
    const daysInMonth = 31;
    const dailyData = [];
    for (let day = 1; day <= daysInMonth; day++) {
      dailyData.push({
        day,
        powerConsumed: Math.floor(Math.random() * 10) + 5,  // Random consumption between 5 and 15 kWh
        carId: car.id,
      });
    }
    await DayStatistic.bulkCreate(dailyData);

    console.log('Seed data created successfully.');
  } catch (error) {
    console.error('Error creating seed data:', error);
  } finally {
    await sequelize.close();
  }
}

seed();

// npx ts-node src/seed.ts
