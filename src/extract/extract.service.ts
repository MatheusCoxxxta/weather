import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TemperatureService } from 'src/shrared/providers/TemperatureProvider/temperature.service';
import DataStore from '../data/data.respository';

const DEFAULT_CITIES = ['Sao Paulo', 'Florianopolis', 'Curitiba'];

@Injectable()
export class ExtractService {
  constructor(
    private temperatureService: TemperatureService,
    private dataStore: DataStore,
  ) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  async store() {
    const cities = await this.temperatureService.getFrom(DEFAULT_CITIES);

    for (const city of cities) {
      this.dataStore.add({
        when: new Date(),
        ...city,
      });

      console.log(this.dataStore.get());
    }
  }
}
