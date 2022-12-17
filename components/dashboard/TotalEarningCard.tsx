import { Box, Card, CardContent, CardHeader, IconButton, Stack, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function TotalEarningCard(props: any) {
  return (
    <Card variant="outlined">
      <CardHeader
        title="Total Earning"
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="h5" component="div">
          $24,895
          <small>10%</small>
        </Typography>
        <Typography variant="body2">
          Compared to $84,325 last year
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Stack spacing={2}>
            <Box component="div">Item 1</Box>
            <Box component="div">Item 2</Box>
            <Box component="div">Item 3</Box>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}
