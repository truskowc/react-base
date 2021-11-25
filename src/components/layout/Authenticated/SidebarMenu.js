import { List } from '@mui/material';
import {
  Home,
  ManageAccounts,
  Dashboard,
  Warning,
} from '@mui/icons-material';
import SidebarMenuItem from './SidebarMenuItem';

const menuItems = [
  {
    icon: Home,
    title: 'Home',
    submenu: [
      {
        href: '/app/home',
        title: 'Testing Item'
      },
      {
        href: '/app/home',
        title: 'Test Menu Item'
      },
      {
        href: '/app/home',
        title: 'Test 3'
      }
    ]
  },
  {
    href: '/app/dashboard',
    icon: Dashboard,
    title: 'Dashboard'
  },
  {
    href: '/app/accounts',
    icon: ManageAccounts,
    title: 'Accounts'
  },
  {
    href: '/app/invalid',
    title: 'Invalid Link',
    icon: Warning
  }
];

const SidebarMenu = () => (
  <List>
    {menuItems.map((item) => <SidebarMenuItem key={item.title} {...item} />)}
  </List>
);

export default SidebarMenu;
