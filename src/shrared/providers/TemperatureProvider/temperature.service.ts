import { Injectable } from '@nestjs/common';
import TemperatureInterface from './temperature.interface';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { WeatherProviderResponse } from './temperature.response';

@Injectable()
export class TemperatureService implements TemperatureInterface {
  constructor(private readonly httpService: HttpService) {}

  async getFrom(cities: string[]): Promise<any[]> {
    const formattedResponse = [];

    for (const city of cities) {
      const url = `${process.env.WEATHER_PROVIDER_URL}?appid=${process.env.WEATHER_PROVIDER_APPID}&q=${city}&units=metric`;
      const response = await lastValueFrom(
        this.httpService.get<WeatherProviderResponse>(url),
      );

      formattedResponse.push({
        city,
        details: response.data.main,
      });
    }

    return formattedResponse;
  }
}
