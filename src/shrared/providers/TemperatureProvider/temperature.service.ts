import { Injectable } from '@nestjs/common';
import TemperatureInterface from './temperature.interface';

@Injectable()
export class TemperatureService implements TemperatureInterface {
  async getFrom(cities: string[]): Promise<any[]> {
    return ['Hello World!'];
  }
}
