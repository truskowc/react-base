import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const boxStyles = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1
};

const PageCardBody = ({ children, ...rest }) => (
  <Box sx={boxStyles} {...rest}>
    {children}
  </Box>
);

PageCardBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default PageCardBody;
