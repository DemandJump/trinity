import { createTheme } from '@mui/material/styles';

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
		error: {
			main: '#B00020',
		},
		metalgrey: defaultTheme.palette.augmentColor({
			color: {
				main: '#373F50',
			},
		}),
    // augmentColor is a step that Material-UI automatically does for the standard palette colors.
    // tertiary: defaultTheme.palette.augmentColor({
    //   color: { main: lime[500] },
    //   name: "tertiary"
    // })
  },
});

export default theme;