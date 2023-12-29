import { Injectable } from '@nestjs/common';
import { TemperatureDetails } from 'src/shrared/providers/TemperatureProvider/temperature.interface';

export interface TemperatureModel {
  city: string;
  when: Date;
  details: TemperatureDetails;
}

@Injectable()
export default class DataStore {
  private temperatures: TemperatureModel[] = [];

  add(data: TemperatureModel) {
    this.temperatures.push(data);
  }

  get() {
    return this.temperatures;
  }
}
