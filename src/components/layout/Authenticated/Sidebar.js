import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  Typography
} from '@mui/material';
import SidebarMenu from './SidebarMenu';
import PageControls from './PageControls';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith'
};

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  bgcolor: 'sidebar.background',
  minHeight: '400px'
};

const profileStyles = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  py: 4,
};

const avatarStyles = {
  cursor: 'pointer',
  width: 64,
  height: 64,
  mb: 1
};

const controlsContainerStyles = {
  bgcolor: 'sidebar.background',
  p: 2,
  color: 'primaryContrastText',
  display: 'flex',
  justifyContent: 'center'
};

const Sidebar = ({ onMobileClose, openMobile, onThemeToggle }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box sx={containerStyles}>
      <Box sx={profileStyles}>
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={avatarStyles}
          to="/app/profile"
        />
        <Typography variant="h5" sx={{ color: 'primary.contrastText' }}>{ user.name }</Typography>
        <Typography variant="body2" sx={{ color: 'secondary.contrastText' }}>{ user.jobTitle }</Typography>
      </Box>
      <Divider sx={{ bgcolor: 'sidebar.lighter' }} />
      <Box sx={{ p: 0, flexGrow: 1 }}>
        <SidebarMenu />
      </Box>
      <Hidden lgUp>
        <Divider sx={{ bgcolor: 'sidebar.lighter' }} />
        <Box sx={controlsContainerStyles}>
          <PageControls onThemeToggle={onThemeToggle} color="primary" />
        </Box>
      </Hidden>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)',
              border: 'none'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

Sidebar.propTypes = {
  onMobileClose: PropTypes.func,
  onThemeToggle: PropTypes.func,
  openMobile: PropTypes.bool
};

Sidebar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default Sidebar;
