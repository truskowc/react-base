import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  NavLink as RouterLink,
  matchPath,
  useLocation
} from 'react-router-dom';
import {
  Button,
  ListItem,
  Box,
  Typography,
  Collapse
} from '@mui/material';
import {
  ExpandMore
} from '@mui/icons-material';

const buttonStyles = {
  color: 'sidebar.main',
  justifyContent: 'space-between',
  textTransform: 'none',
  letterSpacing: -0.5,
  borderRadius: 0,
  py: 1.25,
  pl: 2,
  pr: 0,
  width: '100%',
  '& svg': {
    mr: 2
  },
  '&:hover': {
    bgcolor: 'sidebar.hover'
  },
};

const listItemStyles = {
  display: 'flex',
  py: 0,
};

const NavItemLink = ({
  icon: Icon,
  href,
  title,
  submenuItem
}) => {
  const location = useLocation();

  const active = href ? !!matchPath({
    path: href,
    end: false
  }, location.pathname) : false;

  return (
    <ListItem disableGutters sx={listItemStyles}>
      <Button
        component={RouterLink}
        sx={{
          ...buttonStyles,
          ...{ color: (active ? 'primary.main' : 'sidebar.main') }
        }}
        to={href}
      >
        <Box display="flex" sx={submenuItem && { paddingLeft: '45px' }}>
          {Icon && (<Icon />)}
          <Typography variant="sidebarMenuItem">
            {title}
          </Typography>
        </Box>
      </Button>
    </ListItem>
  );
};

NavItemLink.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string,
  submenuItem: PropTypes.bool
};

const NavItemList = ({ icon: Icon, title, submenu }) => {
  const [open, setOpen] = useState(false);

  const expandIconStyles = open
    ? { transform: 'rotate(180deg)', transition: 'all 0.5s ease' }
    : { transform: 'rotate(0deg)', transition: 'all 0.3s ease' };

  return (
    <>
      <ListItem disableGutters sx={listItemStyles}>
        <Button sx={buttonStyles} onClick={() => setOpen(!open)}>
          <Box display="flex">
            {Icon && (<Icon size="20" />)}
            <Typography variant="sidebarMenuItem">
              {title}
            </Typography>
          </Box>
          <ExpandMore sx={expandIconStyles} />
        </Button>
      </ListItem>
      <Collapse in={open}>
        <Box sx={{ bgcolor: 'sidebar.submenu' }}>
          {submenu.map((item) => (
            <NavItemLink
              key={item.title}
              href={item.href}
              title={item.title}
              submenuItem
            />
          ))}
        </Box>
      </Collapse>
    </>
  );
};

NavItemList.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string,
  submenu: PropTypes.array,
};

const SidebarMenuItem = (props) => {
  const { submenu } = props;
  return (submenu ? <NavItemList {...props} /> : <NavItemLink {...props} />);
};

SidebarMenuItem.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string,
  href: PropTypes.string,
  submenu: PropTypes.array,
};

export default SidebarMenuItem;
