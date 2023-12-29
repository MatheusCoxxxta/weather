import { Module } from '@nestjs/common';
import { MonitorController } from './monitor.controller';
import { MonitorService } from './monitor.service';
import { TemperatureModule } from 'src/shrared/providers/TemperatureProvider/temperature.module';
import { ConfigModule } from '@nestjs/config';
import { DataModule } from 'src/data/data.module';

@Module({
  imports: [ConfigModule.forRoot(), TemperatureModule, DataModule],
  controllers: [MonitorController],
  providers: [MonitorService],
})
export class MonitorModule {}
