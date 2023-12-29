import { IsNotEmpty, IsString } from 'class-validator';

export default class GetTemperaturesValidator {
  @IsString()
  @IsNotEmpty()
  city: 'Sao Paulo' | 'Florianopolis' | 'Curitiba';

  @IsString()
  @IsNotEmpty()
  startDate: string;

  @IsString()
  @IsNotEmpty()
  endDate: string;
}
