import { AppBar, Toolbar, Typography, ThemeProvider } from '@mui/material';
/* import {  useNavigate } from 'react-router-dom';
import { useState } from 'react'; */
import themeDasboard from '../styles/ThemeDashboard';
const Navbar: React.FC = () => {
/*   const navigate = useNavigate();
  const [, setIsLoggedIn] = useState(false); */

/*   const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  }; */

  return (
    <ThemeProvider theme={themeDasboard}>
    <AppBar position="static" color="default" elevation={1} sx={{ backgroundColor: '#ffffff', borderRadius:'3px' }}>
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1, fontWeight:800 }}>
          HR3
        </Typography>
      
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;