import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import {
  Badge,
  IconButton,
} from '@mui/material';
import {
  NotificationsOutlined as NotificationsIcon,
  Input as InputIcon,
  BrightnessHigh as LightThemeIcon,
  BrightnessLow as DarkThemeIcon
} from '@mui/icons-material';

const PageControls = ({
  onThemeToggle,
  color
}) => {
  const [notifications] = useState([]);
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const c = color || 'inherit';

  return (
    <>
      <IconButton color={c} onClick={() => onThemeToggle()}>
        { isDark ? <LightThemeIcon /> : <DarkThemeIcon /> }
      </IconButton>
      <IconButton color={c}>
        <Badge badgeContent={notifications.length} variant="dot">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton color={c}>
        <InputIcon />
      </IconButton>
    </>
  );
};

PageControls.propTypes = {
  onThemeToggle: PropTypes.func,
  color: PropTypes.string
};

export default PageControls;
