import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Close
} from '@mui/icons-material';

const PageDrawerHeader = ({
  title,
  hideClose,
  hideDivider,
  onClose
}) => (
  <>
    <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="h4">{title}</Typography>
      {!hideClose
        && (
          <IconButton onClick={onClose}><Close /></IconButton>
        )}
    </Box>
    {!hideDivider && <Divider />}
  </>
);

PageDrawerHeader.propTypes = {
  title: PropTypes.string,
  hideClose: PropTypes.bool,
  hideDivider: PropTypes.bool,
  onClose: PropTypes.func,
};

export default PageDrawerHeader;
