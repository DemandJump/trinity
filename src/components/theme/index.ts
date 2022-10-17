import { createTheme } from '@mui/material/styles/index.js';
import "@fontsource/source-sans-pro";
// info on how to add custom colors: https://stackoverflow.com/questions/50069724/how-to-add-custom-mui-palette-colors
const defaultTheme = createTheme();

const theme = createTheme({
  palette: {
    primary: {
      main: '#008CCE',
    },
    secondary: {
      main: '#2ABBFF',
    },
    success: {
      main: "#44AF69"
    },
    error: {
      main: '#B00020',
    },
    info: {
      main: "#FFA400"
    },
    warning: {
      main: "#FE4A49"
    }
  }, typography: {
    fontFamily: [
      'Source Sans Pro'
    ].join(','),
  },
});

export default theme;