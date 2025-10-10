import {  AccountTree,  CalendarMonth,  QueryStats, Wallet } from "@mui/icons-material"
import { Box,  Button,  Grid } from "@mui/material"
import WalletTalent from "./WalletTalent"


const HiringTools = () => {
  return (
        <Grid p={1}>
                    <Box sx={{
                width:'100%',
                height:'100%',
                background:'#bebebe2d',
                borderRadius:'10px',
                display:'grid',
                gridTemplateColumns:'70% 30%'
                }}>
<WalletTalent/>

<Box
  sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            justifyContent: 'start',
            alignItems:'center',
            flexDirection:'column',
                background:'#bebebe3a',
            borderRadius:2
            
          }}
>

 <Button
          variant="contained"
          sx={{
            /*  filter:'blur(2px)',  */
            borderRadius: 3,
            px: 2,
            textTransform: 'none',
            width: '95%',
            height: '20%',
            fontWeight: '700',
            // Gradiente animado con los colores especificados
            background: `
              linear-gradient(
                270deg,
                #220a37ff,
                #4a1478ff,
                #460cb9ff,
                #380aacff,
                #460cb9ff,

                #2b1478ff,
                #4a1478ff,


                #420b72ff,
                
        
                #000000ff
              )
            `,
          /*    backdropFilter: 'blur(25px)', 
            WebkitBackdropFilter: 'blur(25px)',  */
            boxShadow: `
              0 8px 32px rgba(0, 0, 0, 0.3),
              inset 0 1px 1px rgba(255, 255, 255, 0.3),
              inset 0 -1px 1px rgba(0, 0, 0, 0.2)
            `,
            border: '1px solid rgba(255, 255, 255, 0.18)',
            backgroundSize: '1000% 1000%',
            animation: 'gradientAnimation 6s ease infinite',
            position: 'relative',
            overflow: 'hidden',
            color: 'white',
           
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
            },
            // Efecto de "presión" con pseudo-elementos
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '0',
              height: '0',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              transition: 'width 0.6s ease, height 0.6s ease',
            },
            '&:active::before': {
              width: '300px',
              height: '300px',
            },
            // Definición de la animación
            '@keyframes gradientAnimation': {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' },
            },
          }}
          startIcon={<Wallet />}
        >
          Wallet de talento
        </Button> 

 <Button 
            variant="contained" 
            sx={{
                /*   filter:'blur(2px)',  */
              borderRadius: 3,
              px: 4,
              textTransform: 'none',
              width:'95%',
              height:'20%',
              fontWeight:'700'
            }}
            startIcon={<AccountTree/>}
          >
          Seguimiento de contratación
          </Button>
         <Button 
            variant="contained" 
            sx={{
              borderRadius: 3,
              px: 4,
              textTransform: 'none',
              width:'95%',
              height:'20%',
              fontWeight:'700'
            }}
            startIcon={<CalendarMonth/>}
          >
            Entrevistas programadas
          </Button>  
    
    <Button 
            variant="contained" 
            sx={{
             /*  filter:'blur(2px)',  */
              borderRadius: 3,
              px: 2,
              textTransform: 'none',
              width:'95%',
              height:'20%',
              fontWeight:'700'
            }}
            startIcon={<QueryStats/>}

          >
            Estadísticas
          </Button>

           
          
          
</Box>
            </Box>
            </Grid> 
  )
}

export default HiringTools