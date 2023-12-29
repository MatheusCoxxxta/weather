import { Injectable } from '@nestjs/common';
import { isAfter, isBefore } from 'date-fns';
import { TemperatureDetails } from 'src/shrared/providers/TemperatureProvider/temperature.interface';

export interface TemperatureModel {
  city: string;
  when: Date;
  details: TemperatureDetails;
}

export interface ListTemperatureDto {
  city: 'Sao Paulo' | 'Florianopolis' | 'Curitiba';
  startDate: Date;
  endDate: Date;
}

@Injectable()
export default class DataStore {
  private temperatures: TemperatureModel[] = [];

  add(data: TemperatureModel) {
    this.temperatures.push(data);
  }

  get({ city, startDate, endDate }: ListTemperatureDto) {
    if (!this.temperatures.length) return [];

    return this.temperatures.filter((temp) => {
      return (
        temp.city === city &&
        isBefore(temp.when, endDate) &&
        isAfter(temp.when, startDate)
      );
    });
  }
}
