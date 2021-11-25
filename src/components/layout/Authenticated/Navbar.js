import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Logo from '../Logo';
import PageControls from './PageControls';

const Navbar = ({
  onMobileNavOpen,
  onThemeToggle,
  ...rest
}) => (
  <AppBar
    elevation={2}
    sx={{
      backgroundColor: 'navbar.background',
      backgroundImage: 'none',
      color: 'navbar.main',
      paper: {
        pl: 0
      }
    }}
    {...rest}
  >
    <Toolbar>
      <RouterLink to="/" style={{ lineHeight: 0 }}>
        <Logo />
      </RouterLink>
      <Typography variant="logoTitle" sx={{ pl: 2 }}>
        Testing
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      <Hidden lgDown>
        <PageControls onThemeToggle={onThemeToggle} />
      </Hidden>
      <Hidden lgUp>
        <IconButton color="inherit" onClick={onMobileNavOpen}>
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  </AppBar>
);

Navbar.propTypes = {
  onMobileNavOpen: PropTypes.func,
  onThemeToggle: PropTypes.func
};

export default Navbar;
