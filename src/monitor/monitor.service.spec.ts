import { Test, TestingModule } from '@nestjs/testing';
import { MonitorService } from './monitor.service';
import { DataModule } from 'src/data/data.module';
import DataStore from 'src/data/data.respository';

describe('MonitorService', () => {
  let monitorService: MonitorService;
  let dataStore: DataStore;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [DataModule],
      providers: [MonitorService],
    }).compile();

    dataStore = app.get<DataStore>(DataStore);
    monitorService = app.get<MonitorService>(MonitorService);
  });

  describe('List', () => {
    it('should return empty data', () => {
      expect(
        monitorService.list({
          city: 'Curitiba',
          startDate: '27-12-2023',
          endDate: '30-12-2023',
        }).data,
      ).toStrictEqual([]);
    });

    it('should return 1 registers (refering to Sao Paulo) and interval start date should be 28/12/2023', () => {
      const cities = ['Curitiba', 'Sao Paulo'];
      for (const city of cities) {
        dataStore.add({
          when: new Date('2023-12-28T20:32:32.046Z'),
          city,
          details: {
            temp: 33.05,
            feels_like: 33.05,
            temp_min: 32.47,
            temp_max: 33.38,
            pressure: 1015,
            humidity: 36,
          },
        });
      }

      const exec = monitorService.list({
        city: 'Sao Paulo',
        startDate: '28-12-2023',
        endDate: '30-12-2023',
      });

      expect(exec.interval.start).toBe('28/12/2023');
      expect(exec.data.length).toBe(1);
    });

    it('should return 0 registers (refering to Curitiba) and interval start date should be 28/12/2023', () => {
      const cities = ['Florianopolis', 'Sao Paulo'];
      for (const city of cities) {
        dataStore.add({
          when: new Date('2023-12-28T20:32:32.046Z'),
          city,
          details: {
            temp: 33.05,
            feels_like: 33.05,
            temp_min: 32.47,
            temp_max: 33.38,
            pressure: 1015,
            humidity: 36,
          },
        });
      }

      const exec = monitorService.list({
        city: 'Curitiba',
        startDate: '28-12-2023',
        endDate: '30-12-2023',
      });

      expect(exec.interval.start).toBe('28/12/2023');
      expect(exec.data.length).toBe(0);
    });
  });
});
