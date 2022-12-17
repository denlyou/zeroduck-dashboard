import { Avatar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
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
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          variant='rounded'
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: 'common.white',
            backgroundColor: props.bgcolor
          }}
        >
          {props.icon}
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='caption'>{props.title}</Typography>
          <Typography variant='h6'>{props.subtitle}</Typography>
        </Box>
      </Box>
    </Grid>
  );
}
