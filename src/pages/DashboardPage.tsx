import { /* Box,  Grid,  */ Grid, ThemeProvider } from '@mui/material';

import themeDasboard from '../styles/ThemeDashboard';
/* import WelcomeCard from '../components/WelcomeCard';
import SolutionsCardsItems from '../components/dashboard/SolutionsCardsItems';
import HiringTools from '../components/dashboard/hiringTools/HiringTools'; */
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import MenuSwitchDasboardUsers from '../components/dashboard/MenuSwitchDashboardUsers';
//import MenuSwitchDasboard from '../components/dashboardSA/MenuSwitchDashboard';

const DashboardPage: React.FC = () => (
  <ThemeProvider theme={themeDasboard}>
  <Navbar />

    <Grid sx={{
      display:'grid',
      gridTemplateColumns:'10% 90%',
        flexGrow: 1 , 
        minHeight:{sx:'auto', md:'666px', lg:'500px' , xl:'866px'}, 
        height:{sx:'auto', md:'calc(100dvh - 80px)'},

        
    }}>

    {/* ASIDE */}

<MenuSwitchDasboardUsers/>


  
 <Outlet/>

   
     </Grid>


   
  </ThemeProvider>
);

export default DashboardPage;