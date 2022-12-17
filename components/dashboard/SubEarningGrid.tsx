import Grid from '@mui/material/Unstable_Grid2';
import SubEarningGridCard from './SubEarningGridCard';
import BarChartIcon from '@mui/icons-material/BarChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { grey, green, yellow, purple } from '@mui/material/colors';

export default function SubEarningGrid(props: any) {
  return (
    <Grid container spacing={3}>
      <Grid xs={6}>
        <SubEarningGridCard
          title='Total Profit'
          subtitle='$25.6k+42%'
          body='Weekly Profit'
          icon={<BarChartIcon />}
          bgcolor={ green[500] }
        />
      </Grid>

      <Grid xs={6}>
        <SubEarningGridCard
          title='Total Profit'
          subtitle='$25.6k+42%'
          body='Weekly Profit'
          icon={<AttachMoneyIcon />}
          bgcolor={ grey[500] }
        />
      </Grid>

      <Grid xs={6}>
        <SubEarningGridCard
          title='Total Profit'
          subtitle='$25.6k+42%'
          body='Weekly Profit'
          icon={<BusinessCenterIcon />}
          bgcolor={ purple[500] }
        />
      </Grid>

      <Grid xs={6}>
        <SubEarningGridCard
          title='Total Profit'
          subtitle='$25.6k+42%'
          body='Weekly Profit'
          icon={<HelpOutlineIcon />}
          bgcolor={ yellow[500] }
        />
      </Grid>
    </Grid>
  );
}