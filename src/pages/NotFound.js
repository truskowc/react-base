import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Alert,
  AlertTitle
} from '@mui/material';

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center'
};

const alertStyles = {
  boxShadow: 4,
  maxWidth: 300,
  margin: '0 auto'
};

const NotFound = () => (
  <>
    <Helmet>
      <title>Page not found</title>
    </Helmet>
    <Box sx={containerStyles}>
      <Container display="flex">
        <Alert severity="warning" sx={alertStyles}>
          <AlertTitle>Page Not Found</AlertTitle>
          The page you are looking for does not exist. Check the address you entered and try again.
        </Alert>
      </Container>
    </Box>
  </>
);

export default NotFound;
