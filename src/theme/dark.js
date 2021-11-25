import { createTheme } from '@mui/material/styles';
import shadows from './shadows';
import typography from './typography';

export default createTheme({
  palette: {
    mode: 'dark',
    background: {
      lighter: '#555d66',
      default: '#495057',
      darker: '#3e454c',
      paper: '#212529'
    },
    navbar: {
      background: '#212529',
      main: '#dee2e6'
    },
    sidebar: {
      background: '#343a40',
      submenu: '#212529',
      lighter: '#494e54',
      main: '#95a9bd',
      hover: '#3b4651'
    },
    scrollbars: {
      content: {
        thumb: '#343a40',
        track: '#6c757f',
      }
    },
    page: {
      banner: 'linear-gradient(180deg, #495057 0%, #606870 100%)',
      main: '#898e94'
    },
    table: {
      oddRow: '#212529',
      hoverRow: '#2f3d29',
    },
    primary: {
      contrastText: '#ffffff',
      main: '#6abf4b'
    },
    secondary: {
      contrastText: '#7a8087',
      main: '#6abf4b'
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
      primary: '#dee2e6',
      secondary: '#adb5bd',
      muted: '#717c87',
    },
  },
  shadows,
  typography,
});
