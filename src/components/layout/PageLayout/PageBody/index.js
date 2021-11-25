import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const outerBoxStyles = {
  display: 'flex',
  minHeight: '100%',
  flexGrow: 1,
  // py: {
  //   xs: 2,
  //   lg: 5
  // },
};

const PageBody = ({
  children,
  ...rest
}) => (
  <Box sx={outerBoxStyles} {...rest}>
    {children}
  </Box>
);

PageBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default PageBody;
