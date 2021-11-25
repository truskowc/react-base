import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@mui/material';
import AccountProfile from 'src/components/profile/AccountProfile';
import AccountProfileDetails from 'src/components/profile/AccountProfileDetails';

const Profile = () => (
  <>
    <Helmet><title>Profile</title></Helmet>
    <Box sx={{ minHeight: '100%', py: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <AccountProfile />
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <AccountProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Profile;
