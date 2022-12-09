import { Card, CardContent, Typography } from '@mui/material';

export default function DepositCard(props: any) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          Deposit
        </Typography>
      </CardContent>
    </Card>
  );
}
