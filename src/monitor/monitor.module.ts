import { Module } from '@nestjs/common';
import { MonitorController } from './monitor.controller';
import { MonitorService } from './monitor.service';
import { TemperatureModule } from 'src/shrared/providers/TemperatureProvider/temperature.module';

@Module({
  imports: [TemperatureModule],
  controllers: [MonitorController],
  providers: [MonitorService],
})
export class MonitorModule {}
