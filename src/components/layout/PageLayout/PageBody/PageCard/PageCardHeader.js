import PropTypes from 'prop-types';
import {
  Box,
  Divider,
} from '@mui/material';

const PageCardHeader = ({ children, showDivider, ...rest }) => (
  <>
    <Box display="flex" justifyContent="space-between" {...rest}>
      {children}
    </Box>
    {showDivider && <Divider />}
  </>
);

PageCardHeader.propTypes = {
  showDivider: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default PageCardHeader;
