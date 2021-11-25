import { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import {
  Button,
  IconButton,
  Hidden,
  Menu,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Stack,
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';

const MenuButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[4],
  color: theme.palette.primary.main,
  '&:hover': { backgroundColor: theme.palette.background.lighter },
  '&:active': { boxShadow: theme.shadows[1] }
}));

const ResponsiveMenu = ({ config }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (cb) => {
    handleClose();
    if (cb) cb();
  };

  return (
    <>
      <Hidden lgDown>
        <Stack spacing={1} direction="row">
          {config.map((cfg) => {
            if (cfg.show === false) return false;
            return (
              <MenuButton
                key={cfg.label}
                startIcon={cfg.icon || null}
                onClick={cfg.onClick}
                variant="contained"
                sx={cfg.sx}
              >
                {cfg.label}
              </MenuButton>
            );
          })}
        </Stack>
      </Hidden>
      <Hidden lgUp>
        <IconButton onClick={handleClick}><MoreVert /></IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          {config.map((cfg) => (
            <MenuItem key={cfg.label} onClick={() => handleMenuItemClick(cfg.onClick)}>
              {cfg.icon && <ListItemIcon>{cfg.icon}</ListItemIcon>}
              <ListItemText>{cfg.label}</ListItemText>
            </MenuItem>
          ))}
        </Menu>
      </Hidden>
    </>
  );
};

ResponsiveMenu.propTypes = {
  config: PropTypes.array
};

export default ResponsiveMenu;
