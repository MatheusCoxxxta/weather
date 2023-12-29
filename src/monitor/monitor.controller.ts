import { Controller, Get } from '@nestjs/common';
import { MonitorService } from './monitor.service';

@Controller()
export class MonitorController {
  constructor(private readonly monitorService: MonitorService) {}

  @Get('/monitor')
  getHello() {
    return this.monitorService.getHello();
  }
}
