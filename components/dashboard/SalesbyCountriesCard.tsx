import { Card, CardContent, CardHeader, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ResponsiveBar } from '@nivo/bar'

export default function SalesbyCountriesCard(props: any) {
  const data = [
    {
      "country": "AD",
      "hot dog": 26,
      "hot dogColor": "hsl(173, 70%, 50%)",
      "burger": 142,
      "burgerColor": "hsl(94, 70%, 50%)",
      "sandwich": 160,
      "sandwichColor": "hsl(55, 70%, 50%)",
      "kebab": 153,
      "kebabColor": "hsl(69, 70%, 50%)",
      "fries": 70,
      "friesColor": "hsl(256, 70%, 50%)",
      "donut": 18,
      "donutColor": "hsl(120, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 167,
      "hot dogColor": "hsl(266, 70%, 50%)",
      "burger": 115,
      "burgerColor": "hsl(125, 70%, 50%)",
      "sandwich": 88,
      "sandwichColor": "hsl(279, 70%, 50%)",
      "kebab": 107,
      "kebabColor": "hsl(283, 70%, 50%)",
      "fries": 10,
      "friesColor": "hsl(336, 70%, 50%)",
      "donut": 109,
      "donutColor": "hsl(245, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 79,
      "hot dogColor": "hsl(239, 70%, 50%)",
      "burger": 42,
      "burgerColor": "hsl(336, 70%, 50%)",
      "sandwich": 36,
      "sandwichColor": "hsl(149, 70%, 50%)",
      "kebab": 200,
      "kebabColor": "hsl(127, 70%, 50%)",
      "fries": 86,
      "friesColor": "hsl(3, 70%, 50%)",
      "donut": 35,
      "donutColor": "hsl(240, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 77,
      "hot dogColor": "hsl(178, 70%, 50%)",
      "burger": 156,
      "burgerColor": "hsl(312, 70%, 50%)",
      "sandwich": 34,
      "sandwichColor": "hsl(112, 70%, 50%)",
      "kebab": 192,
      "kebabColor": "hsl(11, 70%, 50%)",
      "fries": 78,
      "friesColor": "hsl(274, 70%, 50%)",
      "donut": 169,
      "donutColor": "hsl(13, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 81,
      "hot dogColor": "hsl(265, 70%, 50%)",
      "burger": 198,
      "burgerColor": "hsl(33, 70%, 50%)",
      "sandwich": 119,
      "sandwichColor": "hsl(71, 70%, 50%)",
      "kebab": 154,
      "kebabColor": "hsl(238, 70%, 50%)",
      "fries": 145,
      "friesColor": "hsl(22, 70%, 50%)",
      "donut": 152,
      "donutColor": "hsl(41, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 2,
      "hot dogColor": "hsl(277, 70%, 50%)",
      "burger": 41,
      "burgerColor": "hsl(230, 70%, 50%)",
      "sandwich": 89,
      "sandwichColor": "hsl(347, 70%, 50%)",
      "kebab": 10,
      "kebabColor": "hsl(8, 70%, 50%)",
      "fries": 55,
      "friesColor": "hsl(56, 70%, 50%)",
      "donut": 39,
      "donutColor": "hsl(73, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 114,
      "hot dogColor": "hsl(61, 70%, 50%)",
      "burger": 109,
      "burgerColor": "hsl(304, 70%, 50%)",
      "sandwich": 155,
      "sandwichColor": "hsl(304, 70%, 50%)",
      "kebab": 54,
      "kebabColor": "hsl(199, 70%, 50%)",
      "fries": 89,
      "friesColor": "hsl(144, 70%, 50%)",
      "donut": 11,
      "donutColor": "hsl(193, 70%, 50%)"
    }
  ];

  return (
    <Card variant="outlined">
      <CardHeader
        title='Sales by Countries'
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent style={{position: "relative", height: "300px"}}>
        <ResponsiveBar 
          data={data}
          keys={[
              'hot dog',
              'burger',
              'sandwich',
              'kebab',
              'fries',
              'donut'
          ]}
          indexBy="country"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'nivo' }}
          defs={[
              {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: '#38bcb2',
                  size: 4,
                  padding: 1,
                  stagger: true
              },
              {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: '#eed312',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10
              }
          ]}
          fill={[
              {
                  match: {
                      id: 'fries'
                  },
                  id: 'dots'
              },
              {
                  match: {
                      id: 'sandwich'
                  },
                  id: 'lines'
              }
          ]}
          borderColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      1.6
                  ]
              ]
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'country',
              legendPosition: 'middle',
              legendOffset: 32
          }}
          axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'sale',
              legendPosition: 'middle',
              legendOffset: -40
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      1.6
                  ]
              ]
          }}
          legends={[
              {
                  dataFrom: 'keys',
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 120,
                  translateY: 0,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: 'left-to-right',
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemOpacity: 1
                          }
                      }
                  ]
              }
          ]}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
        />
      </CardContent>
    </Card>
  );
}
