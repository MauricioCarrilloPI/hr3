import { Search } from "@mui/icons-material";
import { Box,  Chip, Grid,  InputAdornment,  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField,  Typography } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
interface User {
  id: number;
  name: string;
  candidate: string;
  lastActivity: string;
  status: 'Active' | 'Inactive' | 'Pending';
}

const dummyUsers: User[] = [
  { id: 1125899906842625, name: 'John Doe', candidate: 'Senior Developer', lastActivity: '2025-09-22', status: 'Active' , },
  { id: 2, name: 'Jane Smith', candidate: 'Project Manager', lastActivity: '2025-09-21', status: 'Pending' },
  { id: 3, name: 'Bob Johnson', candidate: 'UI/UX Designer', lastActivity: '2025-09-20', status: 'Inactive' },
  { id: 4, name: 'Alice Brown', candidate: 'Data Analyst', lastActivity: '2025-09-19', status: 'Active' },
];




const AllUsers = () => {
    const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('');

 

      const filteredUsers = dummyUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.candidate.toLowerCase().includes(searchTerm.toLowerCase())
  );






  const getStatusColor = (status: User['status']) => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'Inactive':
        return 'error';
      default:
        return 'default';
    }
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
        <Typography fontSize={'1.8vw'} color="gray" variant="h5" fontWeight={'800'}>Gestion de usuarios (administradores) {/* asociados a cuenta */}</Typography>
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
                  <TableCell>Ultima actividad</TableCell>
                  <TableCell>Estado</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow
                    key={user.id}
                    onClick={()=>navigate(`/dashboarduser/user/${user.id}`)}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'action.hover',
                        transition: 'background-color 0.2s'
                      }
                    }}
                  >
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.candidate}</TableCell>
                    <TableCell>{user.lastActivity}</TableCell>
                    <TableCell>
                      <Chip 
                        label={user.status} 
                        color={getStatusColor(user.status)}
                        size="small"
                        sx={{ fontWeight: 500 }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer></Grid>

    </Grid>
  )
}

export default AllUsers