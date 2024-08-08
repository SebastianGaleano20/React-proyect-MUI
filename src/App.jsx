import { Rightbar } from './components/Rightbar.jsx';
import { Sidebar } from './components/Sidebar.jsx';
//import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';

export const App = () => {
  return (
    <>
      <Sidebar />
      <Rightbar />
      <Footer />
    </>
  );
};
