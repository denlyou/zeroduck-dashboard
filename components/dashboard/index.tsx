import { Card, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import FirstCard from './FirstCard';

export default function DashboardContents(props: any) {
  return (
    <div style={ {width: "1200px", margin: "0 auto"} }>
      <Grid container spacing={3}>
        <Grid xs={4}>
          <FirstCard />
        </Grid>

        <Grid xs={8}>
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Box1
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={4}>
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Box1
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={4}>
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Box1
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={4}>
          <Grid container spacing={3}>
            <Grid xs={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    Box1
                  </Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid xs={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    Box1
                  </Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid xs={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    Box1
                  </Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid xs={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    Box1
                  </Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid xs={4}>
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Box1
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={8}>
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Box1
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12}>
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Box1
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}