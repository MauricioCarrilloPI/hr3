import { ArrowBack, Edit, Mail, Phone, /* Photo */ } from "@mui/icons-material";
import { Avatar, Box, Grid, /* IconButton, */ Paper, Typography } from "@mui/material"
//import { useState } from "react";
import ensignia from '../../assets/reclutamientoensignia.png'

const UserView = () => {
//const [image, setImage] = useState<any>(null);

/*   const handleImageChange = (event:any) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }; */


  return (
       <Grid
    sx={{
        display:'grid',
        flexGrow:1,
        gridTemplateRows:'50% 50%',
        borderRadius:'15px',
    }}
    >
       
        <Grid
        sx={{
            display:'grid',
            gridTemplateColumns:'30% 70%'
        }}
        >
 <Grid container position={'relative'} alignContent={'center'} justifyContent={'center'}>
   <ArrowBack fontSize="large" sx={{position:'absolute', top:10, left:'0'}}/>
    <Avatar src={ensignia} sx={{width:'44%', height:'50%'}} sizes="large"/>
</Grid> 


<Grid sx={{
    background:'#e5e5e57d',
    borderRadius:'20px',
    m:2,
    display:'grid',
    gridTemplateColumns:'90% 10%'
}}>

<Grid sx={{
     display:'grid',
    gridTemplateRows:' 45% 55% ',
    height:'100%',
    
}}>
    


    <Grid p={3} display={'flex'} alignItems={'start'} flexDirection={'column'} justifyContent={'center'} gap={2}>
        <Typography fontSize={{sm:'1.3rem', md:'1.9vw', xl:'2vw'}} fontWeight={'700'} variant="h3">Bryan Mauricio Carrillo García</Typography>
          <Typography fontSize={{sm:'1rem', md:'1.5vw', xl:'1.7vw'}} fontWeight={'600'} variant="h4" color="grey">
            Enterprice NAME
        </Typography>
    </Grid>
  
     
   

     
    <Grid p={3} display={'flex'} alignItems={'start'} flexDirection={'column'} justifyContent={'start'} gap={2}>
         <Typography fontSize={{sm:'1rem', md:'1.5vw', xl:'1.5vw'}} fontWeight={'800'} variant="h5" color="black" display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} gap={1}>
         <Mail fontSize="large"/>   mailtest13@test.com
        </Typography>

        <Typography fontSize={{sm:'1rem', md:'1.5vw', xl:'1.5vw'}} fontWeight={'800'} variant="h5" color="black" display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} gap={1}>
         <Phone fontSize="large"/>   +52 4355555444
        </Typography>
        </Grid>

   

</Grid>
<Grid display={'flex'} flexDirection={'row-reverse'} p={2}>
<Edit  sx={{color:'black'}} fontSize="large"/>
</Grid>

    

</Grid>

        </Grid>
        <Grid 
         sx={{
            display:'grid',
            gridTemplateColumns:'30% 70%'
        }}
        >

            <Grid sx={{
                 background:'#e5e5e57d',
    borderRadius:'20px',
    m:1
            }}>
                <Box sx={{
display:'grid',
background:'#9a9a9a37',
height:'50%',
borderRadius:'15px',

                }}>

<Paper elevation={0} sx={{height:'90%', 
width:'95%', 
background:'#ffffff63', 
border:'3px solid #9b9b9b7f', 
placeSelf:'center',
borderRadius:'15px',
display:'grid',
gridTemplateRows:'15% 85%'
}}>
<Grid p={1}>  <Typography color="grey" variant="h6">Rol de usuario</Typography></Grid>
<Grid display={'flex'} alignItems={'center'} justifyContent={'center'}>
    <Typography variant="h5" fontWeight={'600'}>Reclutador</Typography>
    
    </Grid>

</Paper>
                </Box>


<Grid display={'flex'} flexDirection={'column'} alignItems={'start'} justifyContent={'end'} height={'50%'} gap={4} p={3}>
    <Box display={'flex'} flexDirection={'row'} gap={3}>
<Typography color="black" fontSize={{sm:'1rem', md:'1.5vw', xl:'1.5vw'}} fontWeight={'700'} variant="h5">Actualizado</Typography>
<Typography color="grey" fontSize={{sm:'1rem', md:'1.5vw', xl:'1.5vw'}} fontWeight={'700'} variant="h5">24/09/2025</Typography>

    </Box>
    <Box display={'flex'} flexDirection={'row'} gap={3}>
<Typography color="black" fontSize={{sm:'1rem', md:'1.5vw', xl:'1.5vw'}} fontWeight={'700'} variant="h5">Creado</Typography>
<Typography color="grey" fontSize={{sm:'1rem', md:'1.5vw', xl:'1.5vw'}} fontWeight={'700'} variant="h5">24/09/2025</Typography>

    </Box>

</Grid>
            </Grid>
            <Grid sx={{background:'#cbcbcb0e'}}>

            </Grid>
        </Grid>
        
    </Grid>
  )
}

export default UserView