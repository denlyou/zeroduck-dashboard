import { Card, CardContent, Typography } from '@mui/material';
import { ResponsiveBump } from '@nivo/bump'
import useDashboardStore from '../../libs/useDashboardStore';

export default function DepositCard(props: any) {
  const forecast = useDashboardStore(state=>state.forecast);
  console.log(forecast);

  let data = [
    {
      "id": "Serie 1",
      "data": [
        {
          "x": 2000,
          "y": 10
        },
        {
          "x": 2001,
          "y": 5
        },
        {
          "x": 2002,
          "y": 11
        },
        {
          "x": 2003,
          "y": 12
        },
        {
          "x": 2004,
          "y": 7
        }
      ]
    },
    {
      "id": "Serie 2",
      "data": [
        {
          "x": 2000,
          "y": 9
        },
        {
          "x": 2001,
          "y": 9
        },
        {
          "x": 2002,
          "y": 1
        },
        {
          "x": 2003,
          "y": 7
        },
        {
          "x": 2004,
          "y": 8
        }
      ]
    },
    {
      "id": "Serie 3",
      "data": [
        {
          "x": 2000,
          "y": 4
        },
        {
          "x": 2001,
          "y": 4
        },
        {
          "x": 2002,
          "y": 5
        },
        {
          "x": 2003,
          "y": 3
        },
        {
          "x": 2004,
          "y": 4
        }
      ]
    }
  ];

  // let nTemp = { id: "실온", data: [ /*{ "x": 2000, "y": 4 }*/ ] };
  // let maxTemp = { id: "최고온도", data: [ /*{ "x": 2000, "y": 4 }*/ ] };
  // let minTemp = { id: "최저온도", data: [ /*{ "x": 2000, "y": 4 }*/ ] };
  // for (let ii = 0; ii < forecast.length; ii+=5) {
  //   const fitem = forecast[ii];
  //   nTemp.data.push({x: fitem.dt, y: fitem.main.temp});
  //   maxTemp.data.push({x: fitem.dt, y: fitem.main.temp_max});
  //   minTemp.data.push({x: fitem.dt, y: fitem.main.temp_min});
  // }
  // data = [nTemp, maxTemp, minTemp];

  return (
    <Card variant="outlined">
      <CardContent style={{height: 400}}>
        <Typography variant="h5" component="div">
          Deposit
        </Typography>
        <ResponsiveBump
          data={data}
          colors={{ scheme: 'spectral' }}
          lineWidth={3}
          activeLineWidth={6}
          inactiveLineWidth={3}
          inactiveOpacity={0.15}
          pointSize={10}
          activePointSize={16}
          inactivePointSize={0}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={3}
          activePointBorderWidth={3}
          pointBorderColor={{ from: 'serie.color' }}
          axisTop={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: '',
              legendPosition: 'middle',
              legendOffset: -36
          }}
          axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: '',
              legendPosition: 'middle',
              legendOffset: 32
          }}
          axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'ranking',
              legendPosition: 'middle',
              legendOffset: -40
          }}
          margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
          axisRight={null}
        />
      </CardContent>
    </Card>
  );
}
