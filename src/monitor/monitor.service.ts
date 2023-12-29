import { Injectable } from '@nestjs/common';
import DataStore from 'src/data/data.respository';
import { TemperatureService } from 'src/shrared/providers/TemperatureProvider/temperature.service';

@Injectable()
export class MonitorService {
  constructor(
    private temperatureService: TemperatureService,
    private dataStore: DataStore,
  ) {}

  getHello() {
    return this.dataStore.get();
  }
}
