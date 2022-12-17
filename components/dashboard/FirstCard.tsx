import { Card, CardContent, Typography, Button } from '@mui/material';

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
