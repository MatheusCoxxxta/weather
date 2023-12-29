import { Module } from '@nestjs/common';
import DataStore from './data.respository';

@Module({
  imports: [],
  providers: [DataStore],
  exports: [DataStore],
})
export class DataModule {}
