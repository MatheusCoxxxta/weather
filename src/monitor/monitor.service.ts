import { Injectable } from '@nestjs/common';
import DataStore from 'src/data/data.respository';
import createDateFromString from 'src/shrared/utils/createDateFromString';

export interface ListTemperatureInput {
  city: 'Sao Paulo' | 'Florianopolis' | 'Curitiba';
  startDate: string;
  endDate: string;
}

@Injectable()
export class MonitorService {
  constructor(private dataStore: DataStore) {}

  list({ city, startDate, endDate }: ListTemperatureInput) {
    const formattedStartDate = createDateFromString(startDate);
    const formattedEndDate = createDateFromString(endDate);

    const temperatures = this.dataStore.get({
      city,
      startDate: createDateFromString(startDate),
      endDate: createDateFromString(endDate),
    });

    return {
      interval: {
        start: formattedStartDate.toLocaleDateString(),
        end: formattedEndDate.toLocaleDateString(),
      },
      data: temperatures,
    };
  }
}
