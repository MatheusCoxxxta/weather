import { Module } from '@nestjs/common';
import { TemperatureModule } from './shrared/providers/TemperatureProvider/temperature.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { ExtractModule } from './extract/extract.module';
import { MonitorModule } from './monitor/monitor.module';

@Module({
  imports: [
    TemperatureModule,
    ExtractModule,
    MonitorModule,
    ScheduleModule.forRoot(),
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
