import { Test, TestingModule } from '@nestjs/testing';
import { CarStatisticsService } from './car-statistics.service';

describe('CarStatisticsService', () => {
  let service: CarStatisticsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarStatisticsService],
    }).compile();

    service = module.get<CarStatisticsService>(CarStatisticsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
