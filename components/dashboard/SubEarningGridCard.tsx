import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface SubEarningGridCardProps {
  title: string,
  subtitle: string,
  body: string,
  bgcolor: string,
  icon: JSX.Element,
}

export default function SubEarningGridCard(props: SubEarningGridCardProps) {
  return (
    <Card variant="outlined">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: props.bgcolor }} aria-label="recipe">
            { props.icon }
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="subtitle1">
          {props.title}
        </Typography>
        <Typography variant="h5" component="div">
          {props.subtitle}
        </Typography>
        <Typography variant="body2">
          {props.body}
        </Typography>
      </CardContent>
    </Card>
  );
}
