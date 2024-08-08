import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider theme={theme}> 
    <CssBaseline>
    <App />
    </CssBaseline>
  </ThemeProvider>
  </StrictMode>
);