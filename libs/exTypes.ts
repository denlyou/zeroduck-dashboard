
export interface ForecastObject {
  dt: number,
  weather: Array<WeatherObject>,
  main: TempObject,
}

export interface WeatherObject {
  id: number,
  main: string,
  icon: string,
  description: string,  
}

export interface TempObject {
  temp: number,
  temp_max: number,
  temp_min: number,
}