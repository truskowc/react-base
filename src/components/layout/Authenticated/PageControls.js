import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
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
import authAtom from '../../state/auth';

const PageControls = ({
  onThemeToggle,
  color
}) => {
  const [notifications] = useState([]);
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const c = color || 'inherit';
  const setAuth = useSetRecoilState(authAtom);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    const userData = {
      isLoggedIn: null,
      meta: null
    };
    setAuth(userData);
    navigate('/login');
  };

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
      <IconButton color={c} onClick={() => logout()}>
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
