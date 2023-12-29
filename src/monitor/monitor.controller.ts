import { Controller, Get } from '@nestjs/common';
import { MonitorService } from './monitor.service';

@Controller()
export class MonitorController {
  constructor(private readonly monitorService: MonitorService) {}

  @Get('/monitor')
  index() {
    return this.monitorService.list();
  }
}
