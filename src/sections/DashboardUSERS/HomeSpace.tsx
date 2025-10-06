import { Box, Grid } from "@mui/material"
import WelcomeCard from "../../components/WelcomeCard"
import SolutionsCardsItems from "../../components/dashboard/SolutionsCardsItems"
import HiringTools from "../../components/dashboard/hiringTools/HiringTools"


const HomeSpace = () => {
  return (
    <Grid container className="container-dashboard" spacing={1} sx={{ 
              backgroundColor: 'hsla(235, 0%, 100%, 1)',
    backgroundImage: `
      radial-gradient(at 92% 16%, hsla(240, 54%, 33%, 0.32) 0px, transparent 50%),
      radial-gradient(at 0% 15%, hsla(0, 0%, 100%, 0.33) 0px, transparent 50%)
    `,
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
  )
}

export default HomeSpace