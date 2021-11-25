import { Typography } from '@mui/material';
import {
  Page,
  PageBody,
  PageCard,
  PageCardBody,
  PageCardHeader,
  PageCardFooter,
} from '../components/layout/PageLayout';

const Home = () => (
  <Page title="Home">
    <PageBody>
      <PageCard>
        <PageCardHeader showDivider p={3}>
          <Typography variant="h2">Page Typography</Typography>
        </PageCardHeader>
        <PageCardBody p={3}>
          <Typography variant="h1" color="textPrimary">This is a test h1!</Typography>
          <Typography variant="h2">This is a test h2!</Typography>
          <Typography variant="h3">This is a test h3!</Typography>
          <Typography variant="h4">This is a test h4!</Typography>
          <Typography variant="h5">This is a test h5!</Typography>
          <Typography variant="h6">This is a test h6!</Typography>
          <Typography variant="subtitle1">This is a test subtitle1!</Typography>
          <Typography variant="subtitle2">This is a test subtitle2 variant!</Typography>
          <Typography variant="body1">This is a test of body1 variant!</Typography>
          <Typography variant="body2">This is a test of body2 variant!</Typography>
          <Typography variant="button">This is a test of button variant!</Typography>
          <Typography variant="caption">This is a test of caption variant!</Typography>
          <Typography variant="overline">This is a test of overline variant!</Typography>
          <Typography>This is a test of no variant!</Typography>

          <br />
          <br />
          <span>Testing NON-TYPOGRAPHY text.</span>
          <br />
          <br />

          <Typography sx={{ fontWeight: 'bold' }}>Bold regular</Typography>
        </PageCardBody>
        <PageCardFooter showDivider p={3}>
          <Typography variant="h6">Footer here!</Typography>
        </PageCardFooter>
      </PageCard>
    </PageBody>
  </Page>
);

export default Home;
