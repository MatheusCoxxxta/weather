import { Injectable } from '@nestjs/common';
import { TemperatureService } from 'src/shrared/providers/TemperatureProvider/temperature.service';

@Injectable()
export class MonitorService {
  constructor(private temperatureService: TemperatureService) {}

  getHello() {
    return this.temperatureService.getFrom([]);
  }
}
