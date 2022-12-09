import { Card, CardContent, CardHeader, Button, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function WeeklyOverviewCard(props: any) {
  return (
    <Card variant="outlined">
      <CardHeader
        title="Weekly Overview"
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="h5" component="div">
          [Graph Lib]
        </Typography>
        <Typography variant="h5" component="div">
          45%
        </Typography>
        <Typography variant="body2">
          Your sales performance is 45% 😎 better compared to last month
        </Typography>
        <Button variant="contained" fullWidth>
          View Sales
        </Button>
      </CardContent>
    </Card>
  );
}
