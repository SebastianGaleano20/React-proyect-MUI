import { Sidebar } from './components/Sidebar.jsx';import { Navbar } from './components/Navbar.jsx';
import { Feed } from './components/Feed.jsx';
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';

export const App = () => {
   const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette:{
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={'background.default'} color={'text.primary'} sx={{
      fontFamily: 'roboto',
      margin: 0,
      padding: 0
    }}>
      <Navbar/>
      <Stack direction='row' spacing={2} justifyContent='space-between'>
      <Sidebar setMode={setMode} mode={mode} />
      <Feed />
      </Stack>
    </Box>
    </ThemeProvider>
  );
};
