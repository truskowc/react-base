import PropTypes from 'prop-types';
import {
  Box,
  Typography
} from '@mui/material';

const TableStatusBar = ({ selected }) => (
  <Box display="flex" justifyContent="space-between">
    <Typography color="text.muted" variant="subtitle2">
      { `${(selected || 0)} Selected` }
    </Typography>
  </Box>
);

TableStatusBar.propTypes = {
  selected: PropTypes.number
};

export default TableStatusBar;
