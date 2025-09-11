import { Tune, Wallet } from "@mui/icons-material"
import { Box, Grid, Input, TextField, Typography } from "@mui/material"
import { useState } from "react"


const WalletTalent = () => {

    const [SettingsFilterWalletTalent,setSettingsFilterWalletTalent] = useState<boolean>(false)

  return (
<Grid sx={{height:'100%'}} 
display={'flex'}
alignContent={'center'}
flexDirection={'column'} 

>
<Grid sx={{height:SettingsFilterWalletTalent?'40%':{xs:'40%', sm:'35%', md:'30%', lg:'25%', xl:'20%'}, /* background: 'rgba(232, 229, 229, 0.15)', */
        backdropFilter: 'blur(10px)', // Difuminado de fondo
    WebkitBackdropFilter: 'blur(10px)', // Safari
   
      background: 'rgba(255, 255, 255, 0.15)', // Fondo semi-transparente
    borderRadius: '15px'
}} p={1} display={'flex'} alignContent={'center'} flexDirection={'column'}>
    <Grid  display={'flex'} alignContent={'center'} justifyContent={'space-between'}>

    <Box sx={{ width:'auto',

p: 1,

backdropFilter: 'blur(10px)', // Difuminado de fondo
WebkitBackdropFilter: 'blur(10px)', // Safari
border: '1px solid rgba(161, 161, 161, 0.11)', // Borde suave translúcido
boxShadow: '0 4px 30px rgba(154, 154, 154, 0.05)', 
background: 'rgba(255, 255, 255, 0.15)', // Fondo semi-transparente
borderRadius: '15px'
}} p={1} display={'flex'} alignContent={'center'} justifyContent={'center'} flexDirection={'row'} gap={2}>
<Grid alignContent={'center'}>
     <Wallet fontSize="large" />
</Grid>
<Grid>
    <Typography variant="h6" fontWeight={'600'} sx={{display:'flex', alignItems:'center', gap:1, fontSize:'1vw'}}>
       Wallet de talento
    </Typography>
    <Typography color="grey"  fontWeight={'600'} sx={{fontSize:'1vw'}}>
    Perfiles
    </Typography>

</Grid>

    
    </Box>
    
    <Box display={'flex'} onClick={()=>setSettingsFilterWalletTalent(!SettingsFilterWalletTalent)} alignItems={'center'} p={2}>
        <Tune fontSize="large"/>
    </Box>

        </Grid>
{
SettingsFilterWalletTalent&&
<Grid my={3} sx={{height:'100%'}} display={'flex'} alignItems={'center'} justifyContent={'center'}>


<TextField id="outlined-basic" label="Búscar perfil" variant="outlined" sx={{width:'60%'}} />
</Grid>
}


</Grid>
<Grid sx={{height:SettingsFilterWalletTalent?'60%': {xs:'60%', sm:'65%', md:'70%', lg:'75%', xl:'80%'},  overflowY:'scroll'}}>


</Grid>
</Grid>
)
}

export default WalletTalent