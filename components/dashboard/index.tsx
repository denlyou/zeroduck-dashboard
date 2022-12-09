import Grid from '@mui/material/Unstable_Grid2';
import DepositCard from './DepositCard';
import FirstCard from './FirstCard';
import SalesbyCountriesCard from './SalesbyCountriesCard';
import StatisticsCard from './StatisticsCard';
import SubEarningGrid from './SubEarningGrid';
import TableCard from './TableCard';
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
        <Grid xs={4} sx={{padding: 0}}><SubEarningGrid /></Grid>
        {/* 3line */}
        <Grid xs={4}><SalesbyCountriesCard /></Grid>
        <Grid xs={8}><DepositCard /></Grid>
        {/* 4line */}
        <Grid xs={12}><TableCard /></Grid>
      </Grid>
    </div>
  );
}