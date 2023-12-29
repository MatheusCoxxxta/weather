import { Module } from '@nestjs/common';
import { TemperatureService } from './temperature.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [TemperatureService],
  exports: [TemperatureService],
})
export class TemperatureModule {}
