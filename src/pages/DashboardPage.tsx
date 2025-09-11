import { Box,  Grid,  ThemeProvider } from '@mui/material';

import themeDasboard from '../styles/ThemeDashboard';
import WelcomeCard from '../components/WelcomeCard';
import SolutionsCardsItems from '../components/dashboard/SolutionsCardsItems';
import HiringTools from '../components/dashboard/hiringTools/HiringTools';

const DashboardPage: React.FC = () => (
  <ThemeProvider theme={themeDasboard}>
  
 
      <Grid container className="container-dashboard" spacing={1} sx={{ 
        flexGrow: 1 , 
        minHeight:{sx:'auto', md:'666px', lg:'500px' , xl:'866px'}, 
        height:{sx:'auto', md:'calc(100dvh - 80px)'},
           display:'grid',
            gridTemplateRows: '40% 60%' 
        }}>
        <Grid   sx={{
            display:'grid',
            gridTemplateColumns: '40% 60%'    
        }} >
         
            <Grid sx={{height:'100%'}}>
              <WelcomeCard/>
            </Grid>
            <Grid sx={{height:'100%'}}>
                <SolutionsCardsItems/>
            </Grid> 
            
        </Grid>
        <Grid sx={{
            display:'grid',
            gridTemplateColumns: '45% 55%'    
        }}>

           <Grid p={1}>
            <Box sx={{
                width:'100%',
                height:'100%',
                background:'#eeeeee69',
                borderRadius:'10px'
                }}>

            </Box>
            </Grid> 
       
       <HiringTools/>

        </Grid>
    </Grid>
  </ThemeProvider>
);

export default DashboardPage;