import { ArrowBack, Edit, Mail } from "@mui/icons-material";
import { Avatar, Box, Grid, IconButton, /* IconButton, */ Paper, Skeleton, Typography } from "@mui/material"
//import { useState } from "react";
import ensignia from '../../assets/reclutamientoensignia.png'
import { useNavigate, useParams } from "react-router-dom";
import { useGetServices } from "../../hooks/useGetServices";
import RolCard from "../../components/dashboard/userManagement/userView/RolCard";

const UserView = () => {

    const params = useParams()
    const navigate = useNavigate()



     const {
    data: dataUserDetail,
    isLoading: isLoadingadmin,
    error: erroradmin 
  } = useGetServices<any>({
    endpoint: `/auth/${params.id}`,
    queryKey: ['UserDetail'],
  });







/* 
  console.log('params',dataUserDetail) */



if (erroradmin?.message) {
  return (
    <Paper sx={{ p: 4, textAlign: 'center', m: 2 }}>
      <Typography variant="h6" color="error" gutterBottom>
        ¡Ups! Algo salió mal
      </Typography>
      <Typography variant="body2" sx={{ mb: 3 }}>
        {erroradmin.message}
      </Typography>
   
    </Paper>
  );
}



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
 <IconButton sx={{position:'absolute', top:10, left:'0'}} onClick={()=>navigate('/dashboarduser/usermanagement')}>
   <ArrowBack fontSize="large" />
 </IconButton>

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
       {
isLoadingadmin?
           <Skeleton width={'60%'} height={'60%'} sx={{placeSelf:'start'}}/>
       : <Typography fontSize={{sm:'1.3rem', md:'1.9vw', xl:'2vw'}} fontWeight={'700'} variant="h3">
            {dataUserDetail?.data?.name} {dataUserDetail?.data?.last_name}  {dataUserDetail?.data?.second_last_name}
            </Typography>
    } 

{
    isLoadingadmin?
           <Skeleton width={'40%'} height={'40%'} sx={{placeSelf:'start'}}/>

:
          <Typography fontSize={{sm:'1rem', md:'1.5vw', xl:'1.7vw'}} fontWeight={'600'} variant="h4" color="grey">

             {dataUserDetail?.data?.company_name} 
        </Typography>

}
    </Grid>
  
     
   

     
    <Grid p={3} display={'flex'} alignItems={'start'} flexDirection={'column'} justifyContent={'start'} gap={2}>
        

        {
    isLoadingadmin?
           <Skeleton width={'40%'} height={'40%'} sx={{placeSelf:'start'}}/>

:
            <Typography fontSize={{sm:'1rem', md:'1.5vw', xl:'1.5vw'}} fontWeight={'800'} variant="h5" color="black" display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} gap={1}>
         <Mail fontSize="large"/>   {dataUserDetail?.data?.email}
        </Typography>

}
        
      

  
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


{

isLoadingadmin?
<Skeleton width={'60%'} height={'60%'} sx={{placeSelf:'center'}}/>

:
<RolCard rol_id={dataUserDetail.data.rol_id} />
}

                </Box>


<Grid display={'flex'} flexDirection={'column'} alignItems={'start'} justifyContent={'end'} height={'50%'} gap={4} p={3}>
    <Box display={'flex'} flexDirection={'row'} gap={3}>
<Typography color="black" fontSize={{sm:'1rem', md:'1.5vw', xl:'1.5vw'}} fontWeight={'700'} variant="h5">Actualizado</Typography>
<Typography color="grey" fontSize={{sm:'1rem', md:'1vw', xl:'1.2vw'}} fontWeight={'700'} variant="h5">{dataUserDetail?.data?.created_at}</Typography>

    </Box>
    <Box display={'flex'} flexDirection={'row'} gap={3}>
<Typography color="black" fontSize={{sm:'1rem', md:'1.5vw', xl:'1.5vw'}} fontWeight={'700'} variant="h5">Creado</Typography>
<Typography color="grey" fontSize={{sm:'1rem', md:'1vw', xl:'1.2vw'}} fontWeight={'700'} variant="h5">{dataUserDetail?.data?.updated_at}</Typography>

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