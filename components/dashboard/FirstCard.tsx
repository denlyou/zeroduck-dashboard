import { Card, CardContent, Typography } from '@mui/material';
import Button from '@mui/material/Button';

export default function FirstCard(props: any) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          Congratulations John! 🥳
        </Typography>
        <Typography variant="body2">
          Best seller of the month
        </Typography>
        <Typography variant="h5" component="div">
          $42.8k
        </Typography>
        <Button variant="contained" size="small">
          View Sales
        </Button>
      </CardContent>
    </Card>
  );
}
