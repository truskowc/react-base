import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useRoutes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import authAtom from 'src/components/state/auth';
import routes from 'src/routes';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from './theme/GlobalStyles';

const defaultTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: GlobalStyles
    }
  }
});

const App = () => {
  const auth = useRecoilValue(authAtom);
  const isLoggedIn = auth.isLoggedIn !== null;
  const routing = useRoutes(routes(isLoggedIn));

  return (
    <ThemeProvider theme={defaultTheme}>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <CssBaseline />
        {routing}
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
