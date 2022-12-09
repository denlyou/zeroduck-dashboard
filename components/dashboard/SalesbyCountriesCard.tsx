import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function SalesbyCountriesCard(props: any) {
  return (
    <Card variant="outlined">
      <CardHeader
        title='Sales by Countries'
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        
      </CardContent>
    </Card>
  );
}
