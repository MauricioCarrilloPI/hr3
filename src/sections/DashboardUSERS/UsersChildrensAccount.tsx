import { Add,  Search } from "@mui/icons-material"
import { Box, Button,   Grid,  InputAdornment, 
  LinearProgress, Link,  Paper,  Table, TableBody, 
  TableCell, TableContainer, TableHead, TableRow, TextField,  Typography 
  } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetServices } from "../../hooks/useGetServices";
import { useSelector } from "react-redux";
import { selectAuth } from "../../store/slices/AuthSlice";
import AddNewUser from "../../components/dashboard/modals/AddNewUser";



const UsersChildrensAccount  = () => {
 
 const authdata = useSelector(selectAuth);
  const navigate = useNavigate()
 
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState<boolean>(false)



  const {
    data: dataComapany,
    isLoading: isLoadingCompany,
    /* error: errorCompany, */
  } = useGetServices<any>({
    endpoint: `/company/${authdata.company_id}`,
    queryKey: ['Company'],
  });


    const {
    data:dataUsers,
   /*  isLoading: isLoadingadmin,
    error: erroradmin */
  } = useGetServices<any>({
    endpoint: `/auth/admin/users/${authdata.user_id}`,
    queryKey: ['Admin'],
  });






console.log( 'AUTH:', authdata, )
console.log('TEST', dataUsers&&dataUsers )

console.log( 'dataComapany:', dataComapany&&dataComapany )





      const filteredUsers = dataUsers?.data?.filter((user: { name: string; candidate: string; }) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.candidate.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Status chip color mapping


    const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };



  return (
    <Grid
    sx={{
        display:'grid',
        flexGrow:1,
        gridTemplateRows:'20% 80%',
       
        borderRadius:'15px',
        
    }}
    >
<Grid 
sx={{
    display:'grid',
    gridTemplateColumns:'40% 20% 40%'
}}>
    <Grid sx={{   
    display:'grid',
    gridTemplateRows:'40% 60% '
}}>
       <Grid alignContent={'center'} textAlign={'start'}>
        <Typography display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2} fontSize={'1.8vw'} color="gray" variant="h5" fontWeight={'800'}>Gestion de usuarios <Typography fontSize={'1.8vw'} color="black" variant="h5" fontWeight={'800'}>{dataComapany?.data?.company_name}</Typography>  </Typography>
       </Grid>
       <Grid  alignContent={'center'}>
           <TextField
              variant="outlined"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search fontSize="small" />
                  </InputAdornment>
                ),
              }}
              sx={{
               
                width: '60%',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: 'background.paper'
                }
              }}
            />
       </Grid>

    </Grid>
    <Box></Box>
   <Box sx={{ borderRadius: '15px', background: '#e6e6e648', m: 1, p:{sm:0, md:0, xl:2}}} alignContent={'center'}>

<Box sx={{ display: 'grid', gridTemplateColumns:'40% 60%', height:'100%'}}>
    
   

    {/* Sección Derecha - Acciones (Ocupa ~30% del ancho, alineada a la derecha) */}
    <Grid sx={{
        display:'grid',
      
height:'100%'
    }} spacing={1} alignItems="center" >
      

     
      
      <Button sx={{background:'black', 
        color:'white', 
        fontWeight:'800', 
        width:'90%', 
        height:'70%', 
        fontSize:{sm:'1rem', md:'.9vw', xl:'.9vw'},
        borderRadius:'13px'}}
        
         onClick={handleOpenModal}
       
        
        ><Add/> Agregar Usuario</Button>

      
      {/* Enlace para más licencias */}
      <Link href="/upgrade-plan" fontSize={{sm:5, md:13, xl:15}}  fontWeight={'600'} variant="body2" color="#1b3fa5ff" textAlign={'center'}>
        Necesito más licencias
      </Link>

    </Grid>


 {/* Sección Izquierda - Información (Ocupa ~70% del ancho) */}
  <Box>
  <Typography variant="h6" color="grey" textAlign={'end'} fontWeight={'600'} fontSize={{ sm: '1rem', md: '1vw', xl: '1.3vw' }} gutterBottom>
    Usuarios disponibles
  </Typography>
  <Typography variant="h4" color="black" fontWeight={'700'} textAlign={'end'} gutterBottom>
    {dataUsers?.data?.length || 0} / {dataComapany?.data?.quantity_users}
  </Typography>
  <LinearProgress 
    variant="determinate" 
    value={(dataUsers?.data?.length / dataComapany?.data?.quantity_users) * 100 || 0}
    sx={{ borderRadius: 5, height: { md: 2, xl: 6 } }}
  />
</Box>


  </Box>

  

</Box>

</Grid>

<Grid  sx={{background:'rgba(215, 214, 214, 0.16)', borderRadius:'15px'}}>  <TableContainer component={Paper} sx={{ 
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(84, 84, 84, 0.13)'
          }}>
            <Table sx={{ minWidth: 650 }} aria-label="users table">
              <TableHead>
                <TableRow sx={{ 
                  backgroundColor: 'primary.light',
                  '& th': { 
                    fontWeight: 600,
                    color: 'primary.contrastText'
                  }
                }}>
                  <TableCell>Usuario</TableCell>
                  <TableCell>Empresa</TableCell>
                  <TableCell>Fecha de creación</TableCell>
                  <TableCell>Rol</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers?.map((user: any) => (
                  <TableRow
                    key={user.id}
                    onClick={()=>navigate(`/dashboarduser/user/${user.user_id}`)}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'action.hover',
                        transition: 'background-color 0.2s'
                      }
                    }}
                  >
                    <TableCell>{user.name} {user.last_name}  {user.second_last_name}</TableCell>
                    <TableCell>{user.company_id}</TableCell>
                    <TableCell>{user.created_at}</TableCell>
                    <TableCell>{user.rol_id}</TableCell>

                  
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer></Grid>





 <AddNewUser 
 modalOpen={modalOpen}  
 handleCloseModal={handleCloseModal}
 isLoadingCompany={isLoadingCompany}
 dataComapany={dataComapany}
/> 






    </Grid>
  )
}

export default UsersChildrensAccount