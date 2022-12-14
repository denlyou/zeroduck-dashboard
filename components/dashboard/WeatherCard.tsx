'use client';

import { Card, CardContent, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface WeahterResObject {
  description: string,
  icon: string,
  id: number,
  main: string,
};

interface WeahterTempResObject {
  temp: number,
  temp_max: number,
  temp_min: number,
};


export default function WeatherCard(props: any) {
  const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
  // console.log("apiKey", apiKey);
  const [weatherInfo, setWeatherInfo] = useState<WeahterResObject|null>(null);
  const [tempInfo, setTempInfo] = useState<WeahterTempResObject|null>(null);
  
  useEffect(()=>{
    if (weatherInfo != null) return;
    const url = `https://api.openweathermap.org/data/2.5/forecast/?lang=kr&units=metric&id=1843564&cnt=1&appid=${apiKey}`;
    fetch(url).then(resp=>resp.json()).then(res => {
      // console.log(res);
      setWeatherInfo(res.list[0].weather[0]);
      setTempInfo(res.list[0].main);
    });
  }, []);

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          현재 날씨
        </Typography>
        { weatherInfo != null && <>
          <Image
            src={`http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`}
            alt={weatherInfo.description}
            width={100}
            height={100}
          />
          <Typography variant="h5" component="div">{weatherInfo.description} / {tempInfo?.temp}도</Typography>
          <Typography variant="h6" component="div">(최저 {tempInfo?.temp_min}도 / 최고 {tempInfo?.temp_max}도)</Typography>
        </> }
      </CardContent>
    </Card>
  );
}
