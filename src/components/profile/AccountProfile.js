import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7'
};

const AccountProfile = (props) => (
  <Card {...props}>
    <CardContent>
      <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        <Avatar src={user.avatar} sx={{ height: 100, width: 100, my: 1 }} />
        <Typography color="textPrimary" gutterBottom variant="h3" mt={1}>{user.name}</Typography>
        <Typography color="textSecondary" variant="h6">{`${user.city} ${user.country}`}</Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button color="primary" fullWidth variant="text">Upload picture</Button>
    </CardActions>
  </Card>
);

export default AccountProfile;
