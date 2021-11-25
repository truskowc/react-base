import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Box } from '@mui/material';

const outerBoxStyles = {
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column'
};

const Page = ({ children, title, ...rest }) => (
  <>
    <Helmet><title>{title}</title></Helmet>
    <Box sx={outerBoxStyles} {...rest}>
      {children}
    </Box>
  </>
);

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default Page;
