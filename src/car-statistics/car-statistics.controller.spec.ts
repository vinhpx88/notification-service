import { Test, TestingModule } from '@nestjs/testing';
import { CarStatisticsController } from './car-statistics.controller';

describe('CarStatisticsController', () => {
  let controller: CarStatisticsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarStatisticsController],
    }).compile();

    controller = module.get<CarStatisticsController>(CarStatisticsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
