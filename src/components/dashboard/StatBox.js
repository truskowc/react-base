import PropTypes from 'prop-types';
import {
  Box,
  Card,
  Typography
} from '@mui/material';

const labelStyles = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textAlign: 'right',
};

const innerContainerStyles = {
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'space-between',
};

const StatBox = ({
  icon: Icon,
  iconColor,
  label,
  value,
  valueColor
}) => {
  const iconStyles = {
    fontSize: 60,
    color: iconColor || 'textSecondary'
  };

  return (
    <Card>
      <Box p={3}>
        <Box sx={innerContainerStyles}>
          <Box pr={2} display="flex" alignItems="center">
            <Icon sx={iconStyles} />
          </Box>
          <Box display="flex" flexDirection="column" alignItems="right">
            <Typography variant="h6" color="textSecondary" sx={labelStyles}>{label}</Typography>
            <Typography variant="h1" color={valueColor} sx={labelStyles}>{value}</Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

StatBox.propTypes = {
  icon: PropTypes.elementType,
  iconColor: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  valueColor: PropTypes.string
};

export default StatBox;
