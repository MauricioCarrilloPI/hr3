import { Avatar, /* Box, */  Grid,  ThemeProvider, Typography } from '@mui/material';
import themeDasboard from '../styles/ThemeDashboard';

import MenuSwitchDasboard from '../components/dashboardSA/MenuSwitchDashboard';

import { Outlet } from 'react-router-dom';



const DashboardSA : React.FC = () => {


  
  return (
    <ThemeProvider theme={themeDasboard}>
           <Grid container className="container-dashboard"  sx={{ 
        flexGrow: 1 , 


        
        minHeight:{sx:'auto', md:'666px', lg:'500px' , xl:'866px'}, 
        height:{sx:'auto', md:'calc(100dvh - 16px)'},
           display:'grid',
            gridTemplateRows: '8% 92%' 
        }} >

<Grid sx={{
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center'
}}>

     <Typography variant="h5" sx={{ flexGrow: 1, fontWeight:800, m:3 }} /* onClick={()=>navigate('/')} */>
          HR3
        </Typography>

<Avatar sx={{m:3}}/>
</Grid>

<Grid sx={{
  display:'grid',
  gridTemplateColumns:'10% 90%'
}}>



{/* ASIDE */}
  <Grid sx={{
    display:'flex',
    alignItems:'center',
    justifyContent:'start',
    flexDirection:'column',
    gap:2,
    m:2
  }} >
    <Grid sx={{
    display:'flex',
    alignItems:'center',
    justifyContent:'start',
    flexDirection:'column',
    gap:2,
    m:2,
    height:'80%'
  }}>
<MenuSwitchDasboard/>


    </Grid>



  </Grid>


  {/* Cuerpo que va a variar segun el outlet */}
<Outlet/>





</Grid>

        </Grid>
    </ThemeProvider>
  )
}

export default DashboardSA