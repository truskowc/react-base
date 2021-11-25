import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useRoutes } from 'react-router-dom';
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
  const routing = useRoutes(routes);
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
