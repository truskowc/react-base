import { Outlet } from 'react-router-dom';
import { ThemeProvider, styled } from '@mui/material/styles';
import LightTheme from '../../../theme/light';
import Navbar from './Navbar';

const LayoutRoot = styled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  })
);

const LayoutWrapper = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64
});

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const LayoutContent = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const Layout = () => (
  <ThemeProvider theme={LightTheme}>
    <LayoutRoot>
      <Navbar />
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

export default Layout;
