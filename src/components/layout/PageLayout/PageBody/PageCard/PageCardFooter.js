import PropTypes from 'prop-types';
import {
  Box,
  Divider
} from '@mui/material';

const boxStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: {
    xs: 'column',
    sm: 'row'
  },
  '>*': {
    minWidth: {
      xs: '100%',
      sm: 'auto',
    }
  }
};

const PageCardFooter = ({ children, showDivider, ...rest }) => (
  <>
    {showDivider && <Divider />}
    <Box sx={boxStyles} {...rest}>
      {children}
    </Box>
  </>
);

PageCardFooter.propTypes = {
  showDivider: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default PageCardFooter;
