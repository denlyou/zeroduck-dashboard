import { Avatar, Card, CardContent, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { yellow, blue, green, deepPurple } from '@mui/material/colors';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DevicesIcon from '@mui/icons-material/Devices';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import StatisticsCardItem from './StatisticsCardItem';

export default function StatisticsCard(props: any) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          Statistics Card
        </Typography>
        <Typography variant="body2">
          Total 48.5% growth 😎 this month
        </Typography>
        
        
        <Grid container spacing={3}>
          <StatisticsCardItem
            title={'Sales'}
            subtitle={'245k'}
            bgcolor={deepPurple[500]}
            icon={<TrendingUpIcon />}
          />
          <StatisticsCardItem
            title={'Customers'}
            subtitle={'12.5k'}
            bgcolor={green[500]}
            icon={<PersonOutlineIcon />}
          />
          <StatisticsCardItem
            title={'Products'}
            subtitle={'1.54k'}
            bgcolor={yellow[500]}
            icon={<DevicesIcon />}
          />
          <StatisticsCardItem
            title={'Revenue'}
            subtitle={'$88k'}
            bgcolor={blue[500]}
            icon={<AttachMoneyIcon />}
          />
        </Grid>
      </CardContent>
    </Card>
  );
}
