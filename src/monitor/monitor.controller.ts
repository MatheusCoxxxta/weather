import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MonitorService } from './monitor.service';
import GetTemperaturesValidator from './monitor.validator';

@Controller()
export class MonitorController {
  constructor(private readonly monitorService: MonitorService) {}

  @Get('/monitor')
  @UsePipes(ValidationPipe)
  index(@Query() { city, startDate, endDate }: GetTemperaturesValidator) {
    return this.monitorService.list({ city, startDate, endDate });
  }
}
