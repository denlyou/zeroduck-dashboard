
export interface ForecastObject {
  dt: number,
  weather: Array<WeatherObject>
}

export interface WeatherObject {
  id: number,
  main: string,
  icon: string,
  description: string,  
}