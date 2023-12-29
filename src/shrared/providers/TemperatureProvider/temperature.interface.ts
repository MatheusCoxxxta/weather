export default interface TemperatureInterface {
  getFrom(cities: string[]): Promise<any[]>;
}
