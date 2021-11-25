import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider, styled } from '@mui/material/styles';
import DarkTheme from '../../../theme/dark';
import LightTheme from '../../../theme/light';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const LayoutRoot = styled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  })
);

const LayoutWrapper = styled('div')(
  ({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 56,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    }
  })
);

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const LayoutContent = styled('div')(
  ({ theme }) => ({
    flex: '1 1 auto',
    height: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    color: theme.palette.text.primary,
    '::-webkit-scrollbar, *::-webkit-scrollbar': {
      width: '6px',
      height: '6px',
    },
    '*::-webkit-scrollbar-thumb, ::-webkit-scrollbar-thumb': {
      background: theme.palette.scrollbars.content.thumb,
    },
    '*::-webkit-scrollbar-thumb:hover, ::-webkit-scrollbar-thumb:hover': {
      background: theme.palette.primary.main,
      borderRadius: '3px'
    },
    '*::-webkit-scrollbar-track, ::-webkit-scrollbar-track': {
      background: theme.palette.scrollbars.content.track
    }
  })
);

const Layout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [theme, setTheme] = useState(true);

  return (
    <ThemeProvider theme={theme ? LightTheme : DarkTheme}>
      <LayoutRoot>
        <Navbar
          onMobileNavOpen={() => setMobileNavOpen(true)}
          onThemeToggle={() => setTheme(!theme)}
        />
        <Sidebar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
          onThemeToggle={() => setTheme(!theme)}
        />
        <LayoutWrapper>
          <LayoutContainer>
            <LayoutContent>
              <Outlet />
            </LayoutContent>
          </LayoutContainer>
        </LayoutWrapper>
      </LayoutRoot>
    </ThemeProvider>
  );
};

export default Layout;
