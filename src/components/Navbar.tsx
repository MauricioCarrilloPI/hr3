import { AppBar, Toolbar, Typography, ThemeProvider /* Avatar */ } from '@mui/material';
/* import {  useNavigate } from 'react-router-dom';
import { useState } from 'react'; */
import themeDasboard from '../styles/ThemeDashboard';
/* import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../store/slices/AuthSlice'; */
import UserAvatar from './dashboard/UserAvatar';
/* import { useNavigate } from 'react-router-dom'; */
const Navbar: React.FC = () => {
  //const isAuthenticated = useSelector(selectIsAuthenticated);


/*   const navigate = useNavigate() */
  return (
    <ThemeProvider theme={themeDasboard}>
    <AppBar position="static" color="default" elevation={1} sx={{ backgroundColor: '#ffffff', borderRadius:'3px' }}>
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1, fontWeight:800 }} >
          HR3
        </Typography>

<UserAvatar/>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;