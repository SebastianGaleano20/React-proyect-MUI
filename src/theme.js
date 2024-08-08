import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#4C8577',
    },
    secondary: {
      main: '#6A8D92',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;