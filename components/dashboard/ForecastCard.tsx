import { Card, CardContent, Typography, Button, CardHeader } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Image from 'next/image';
import useDashboardStore from '../../libs/useDashboardStore';

export default function ForecastCard(props: any) {
  const forecast = useDashboardStore(state=>state.forecast);
  // console.log(forecast);
  const dateObj = new Date();
  // let prevDate = '';
  
  return (
    <Card variant="outlined">
      <CardHeader title="☂︎ 날씨 5일 예보" />
      <CardContent>
        <Grid container>
          { forecast.map( (item, idx) => {
            if (idx % 2 == 0) return (<div key={idx}></div>); // 반만 표시
            const itemSrc = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
            dateObj.setTime( item.dt * 1000 );
            const dateTxt = dateObj.getMonth() + '/' + dateObj.getDate() + ' ' + dateObj.getHours() + ':00'
            // if ( prevDate == '') {
            //   prevDate = dateObj.getMonth() + '/' + dateObj.getDate();
            // } else {
            //   // 날짜가 바뀌면 공백 셀
            //   if ( prevDate != dateObj.getMonth() + '/' + dateObj.getDate() ) {
            //     prevDate = dateObj.getMonth() + '/' + dateObj.getDate();
            //     return (<Grid xs={2} key={idx}><big>[{prevDate}]</big></Grid>);
            //   }
            // }
            return (<Grid xs={3} key={idx} alignContent='center'>
              <Image
                src={itemSrc}
                alt={item.weather[0].description}
                width={48} height={48}
              />
              <br />
              <small key={idx}>{ item.weather[0].description }</small>
              <br />
              <small>{ dateTxt }</small>
            </Grid>);
          } ) }
        </Grid>
      </CardContent>
    </Card>
  );
}
