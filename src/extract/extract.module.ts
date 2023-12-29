import { TemperatureModule } from 'src/shrared/providers/TemperatureProvider/temperature.module';
import { ExtractService } from './extract.service';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { DataModule } from 'src/data/data.module';

@Module({
  imports: [TemperatureModule, ScheduleModule.forRoot(), DataModule],
  providers: [ExtractService],
})
export class ExtractModule {}
