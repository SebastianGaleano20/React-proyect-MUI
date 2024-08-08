import { Rightbar } from './components/Rightbar.jsx';
import { Sidebar } from './components/Sidebar.jsx';
//import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { Box, Stack } from '@mui/material';

export const App = () => {
  return (
    <Box>
      <Stack direction='row' spacing={5} justifyContent='center'>
      <Sidebar />
      <Rightbar />
      <Footer />
      </Stack>
    </Box>
  );
};
