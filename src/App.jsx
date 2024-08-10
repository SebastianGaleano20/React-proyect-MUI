import { Rightbar } from './components/Rightbar.jsx';
import { Sidebar } from './components/Sidebar.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { Box, Stack } from '@mui/material';

export const App = () => {
  return (
    <Box sx={{
      fontFamily: 'roboto',
      margin: 0,
      padding: 0
    }}>
      <Navbar/>
      <Stack direction='row' spacing={2} justifyContent='space-between'>
      <Sidebar />
      <Footer />
      <Rightbar />
      </Stack>
    </Box>
  );
};
