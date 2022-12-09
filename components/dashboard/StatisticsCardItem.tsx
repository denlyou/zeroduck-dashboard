import { Avatar, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

interface StatisticsCardItemProps {
  title: string,
  subtitle: string,
  bgcolor: string,
  icon: JSX.Element,
}

export default function StatisticsCardItem(props: StatisticsCardItemProps) {
  return (
    <Grid xs={3}>
      <Avatar sx={{ bgcolor: props.bgcolor }} variant="square">
        { props.icon }
      </Avatar>
      <Typography variant="body2">{props.title}</Typography>
      <Typography variant="h5" component="div">{props.subtitle}</Typography>
    </Grid>
  );
}
