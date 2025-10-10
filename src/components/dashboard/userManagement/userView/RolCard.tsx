import { Grid, Paper, Skeleton, Typography } from "@mui/material";
import { useGetServices } from "../../../../hooks/useGetServices";

interface RolCardProps {
  rol_id: string;
}


const RolCard = ({ rol_id }: RolCardProps) => {

     const {
    data: dataRol,
     isLoading: LoadingIsRol,
 /*    error: errorRol  */
  } = useGetServices<any>({
    endpoint: `/rol/${rol_id}`,
    queryKey: ['rol'],
  });



  return (
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
    
     {
   LoadingIsRol?
   <Skeleton/>
        :
        <Typography variant="h5" fontWeight={'600'}>{dataRol?.data?.rol_name}</Typography>
    } 
    
    </Grid>

</Paper>
  )
}

export default RolCard