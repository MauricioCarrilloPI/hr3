import { Box, Grid, Typography } from "@mui/material"
import CardSpace from "../../../ui/CardSpace"


const Config = () => {
  return (
    <Grid p={3} sx={{width:'100%'}} display={'flex'} alignContent={'center'} justifyItems={'center'} flexDirection={'column'} gap={3}>

<CardSpace >
  <Grid display={'flex'} alignItems={'center'} justifyContent={'space-beetween'} flexDirection={'row'} width={'100%'}>
<Grid sx={{placeItems:'center', height:'20rem'}}>
<Typography>Vincular LinkedIN</Typography> 
</Grid>
 <Grid sx={{placeItems:'center', height:'20rem'}}>

<Typography>Vincular LinkedIN</Typography>  
  

 </Grid>

  </Grid>

</CardSpace>

{/* <CardSpace>
<Typography>Vincular email</Typography>  
<Box sx={{height:'20rem'}}>
<Typography>Vincular LinkedIN</Typography>  
  
</Box>
</CardSpace>


<CardSpace>
<Typography>Space plan</Typography>  
<Box sx={{height:'20rem'}}>
<Typography>Vincular LinkedIN</Typography>  
  
</Box>
</CardSpace> */}

    </Grid>
  )
}

export default Config