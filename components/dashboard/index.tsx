import Grid from '@mui/material/Unstable_Grid2';
import DepositCard from './DepositCard';
import FirstCard from './FirstCard';
import ForecastCard from './ForecastCard';
import SalesbyCountriesCard from './SalesbyCountriesCard';
import StatisticsCard from './StatisticsCard';
import SubEarningGrid from './SubEarningGrid';
import TableCard from './TableCard';
import TotalEarningCard from './TotalEarningCard';
import WeatherCard from './WeatherCard';
import WeeklyOverviewCard from './WeeklyOverviewCard';

export default function DashboardContents(props: any) {
  return (
    <div style={ {width: "1200px", margin: "0 auto"} }>
      <Grid container spacing={3}>
        <Grid xs={6}><SalesbyCountriesCard /></Grid>
        <Grid xs={6}><DepositCard /></Grid>

        {/* line */}
        <Grid xs={4}><WeatherCard /></Grid>
        <Grid xs={8}><ForecastCard /></Grid>
        
        {/* line */}
        <Grid xs={4}><WeeklyOverviewCard /></Grid>
        <Grid xs={4}><TotalEarningCard /></Grid>
        <Grid xs={4} sx={{padding: 0}}><SubEarningGrid /></Grid>

        {/* line */}
        <Grid xs={4}><FirstCard /></Grid>
        <Grid xs={8}><StatisticsCard /></Grid>

        {/* line */}
        <Grid xs={12}><TableCard /></Grid>
      </Grid>
    </div>
  );
}