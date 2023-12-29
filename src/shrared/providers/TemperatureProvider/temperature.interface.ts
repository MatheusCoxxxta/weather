export interface TemperatureDetails {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface TemperatureResponse {
  city: string;
  details: TemperatureDetails;
}

export default interface TemperatureInterface {
  getFrom(cities: string[]): Promise<TemperatureResponse[]>;
}
