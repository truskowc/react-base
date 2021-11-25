import { createTheme } from '@mui/material/styles';
import GlobalStyles from './GlobalStyles';
import shadows from './shadows';
import typography from './typography';

export default createTheme({
  palette: {
    mode: 'light',
    background: {
      lighter: '#f9f9f9',
      default: '#f2f2f2',
      darker: '#fafafa',
      paper: '#ffffff',
    },
    navbar: {
      background: '#ffffff',
      main: '#343a40'
    },
    sidebar: {
      background: '#343a40',
      submenu: '#212529',
      lighter: '#68747f',
      main: '#95a9bd',
      hover: '#3b4651'
    },
    scrollbars: {
      content: {
        thumb: '#888888',
        track: '#cccccc',
      }
    },
    page: {
      banner: 'linear-gradient(180deg, #f2f2f2 0%, #ffffff 100%)',
      main: '#aaaaaa'
    },
    table: {
      oddRow: '#f6f6f6',
      hoverRow: '#e0faff'
    },
    primary: {
      contrastText: '#ffffff',
      main: '#00bceb',
    },
    secondary: {
      contrastText: '#7a8087',
      main: '#1e4471'
    },
    success: {
      contrastText: '#ffffff',
      main: '#6abf4b'
    },
    error: {
      contrastText: '#ffffff',
      main: '#e2231a'
    },
    warning: {
      contrastText: '#ffffff',
      main: '#fbab18'
    },
    text: {
      contrast: '#ffffff',
      primary: '#172b4d',
      secondary: '#6b778c',
      muted: '#98a4b7',
    }
  },
  shadows,
  typography,
  components: {
    MuiCssBaseline: {
      styleOverrides: GlobalStyles
    }
  }
});
