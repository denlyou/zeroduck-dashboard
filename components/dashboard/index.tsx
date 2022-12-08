import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import FirstCard from './FirstCard';
import StatisticsCard from './StatisticsCard';
import SubEarningGrid from './SubEarningGrid';
import TotalEarningCard from './TotalEarningCard';
import WeeklyOverviewCard from './WeeklyOverviewCard';

export default function DashboardContents(props: any) {
  return (
    <div style={ {width: "1200px", margin: "0 auto"} }>
      <Grid container spacing={3}>
        {/* 1line */}
        <Grid xs={4}><FirstCard /></Grid>
        <Grid xs={8}><StatisticsCard /></Grid>
        {/* 2line */}
        <Grid xs={4}><WeeklyOverviewCard /></Grid>
        <Grid xs={4}><TotalEarningCard /></Grid>
        <Grid xs={4} sx={{padding: 0}}>
          <SubEarningGrid />
        </Grid>

        <Grid xs={4}>
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Box1
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={8}>
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Box1
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12}>
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Box1
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}