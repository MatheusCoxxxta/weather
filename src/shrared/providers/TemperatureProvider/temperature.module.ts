import { Module } from '@nestjs/common';
import { TemperatureService } from './temperature.service';

@Module({
  imports: [],
  providers: [TemperatureService],
  exports: [TemperatureService],
})
export class TemperatureModule {}
