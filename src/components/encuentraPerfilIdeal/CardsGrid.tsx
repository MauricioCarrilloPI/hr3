import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
/*   useTheme,
  useMediaQuery, */
  Avatar,
  Rating,
  Tooltip
} from '@mui/material';

import { Bookmark, Email, LinkedIn } from '@mui/icons-material';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

// Definimos la interfaz para los datos de la tarjeta
interface CardData {
  nombre: string;
  email: string | undefined;
  score_final: number;
  riesgo_abandono: number;
  score_afinidad: number;
  linkedin_url:string;
  profile_image:string;
}

interface CardGridProps {
  CardsFetched: CardData[];
}


const UserCard: React.FC<{ data: CardData }> = ({ data }) => {
  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.15)'
        }
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 1 }}>
        
        <Grid sx={{
            display:'grid',
            gridTemplateRows:'60% 40%',
            height:{xs: '35dvh', sm:'35dvh', md:'35dvh', lg:'43dvh' , xl:'30dvh' },
            width: '100%' ,
           /*  minWidth:'15rem' */
        }}>
            <Grid sx={{
                background:'#F0F0F0',
                borderRadius:'10px',
                display:'grid',
                gridTemplateRows:'55% 45%',
                 
                 }}>
                    <Grid
                    sx={{
                        display:'grid',
                        gridTemplateColumns:'30% 70%',
                        height:'100%'
                    }}
                    >
                        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                          <Avatar
  src={data.profile_image}
  sx={{ width: '80%', height:'70%' }}
  alt={data.nombre}
  onError={() => console.error("Error al cargar la imagen:", data.linkedin_url)}
>
  {data.nombre.charAt(0).toUpperCase()}
</Avatar>
                            </Box>

                        <Grid sx={{
                            display:'grid',
                            gridTemplateRows:'80% 20%'
                            }}>
                                <Grid sx={{
                                    display:'grid',
                                    gridTemplateColumns:'70% 30%'
                                }}>
                                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                        <Rating name="half-rating"   defaultValue={parseFloat(((data.score_final*100)/ 20).toFixed(2))  } // convierte 0–100 → 0–5
  precision={0.5} 
  max={5} 
  readOnly />

                                    </Box>
                                <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <Bookmark fontSize='large' 
                                    sx={{
                                      color:'grey'

                                    }}/>
                                    {/* 123458 */}
                                    </Box>
                                </Grid>

                                <Box>
                                    <hr color='#FFFFFF' />
                                </Box>
                            </Grid>
                    </Grid>
                    <Grid sx={{
                        display:'grid',
                        gridTemplateRows:'50% 50%',
                        textAlign:'center'}}>
                            <Box>
                        <Typography sx={{fontWeight:'600',  fontSize:'1.2vw' }}>
                        {data.nombre}
                        </Typography>
                            </Box>
                            <Grid 
                            sx={{
                                display:'grid',
                                gridTemplateColumns:'70% 10% 20%'
                            }}
                            >
                                <Box textAlign={'center'}>

                     
                                </Box>
                                <Box  height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                 {
    data.email === 'No disponible' ? null : (
      <Tooltip title={
          <Typography fontSize="1.2rem" padding="8px">
            {data.email}
          </Typography>
        }  arrow>
        <Email fontSize={'large'} sx={{ color: '#747474ff' }} />
      </Tooltip>
    )
  }            
                                  
                                </Box>
                                <Box height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                  <a
        href={data.linkedin_url}
        target="_blank"
        rel="noopener noreferrer" // Security best practice
      >
                                    <LinkedIn  fontSize={'large'}  sx={{ color:'#0A66C2'}}/>
                                    </a>
                                </Box>

                            </Grid>

                        
                        </Grid>

            </Grid>

            <Grid sx={{
                display:'grid',
                gridTemplateColumns:'50% 50%'
               
            }}>
                <Grid textAlign={'center'} display={'flex'} alignItems={'center'} alignContent={'center'} flexDirection={'column'}>
<Typography>Score final</Typography>
<Box>
  <Gauge width={100} 
        cornerRadius="50%"
      sx={(theme) => ({
     
        [`& .${gaugeClasses.valueArc}`]: {
          fill: '#19da9acf',
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: theme.palette.text.disabled,
        },
      })}
  height={100} value={parseFloat(((data.score_final*100)).toFixed(1))} />
</Box>
                </Grid>
                <Grid sx={{
                  display:'grid',
                  gridTemplateRows:'50% 50%'
                }}>
                  <Box textAlign={'center'}>
<Typography sx={{fontSize:{xs:'.7rem', lg:'.7vw' ,xl:'.7vw', textAlign:'center'}}}>Score afinidad</Typography>
  <Typography variant='h6' sx={{fontWeight:'600'}}>{ parseFloat(((data.score_afinidad*100)).toFixed(2))}%</Typography>
                  </Box>
                  <Box textAlign={'center'}>
                    <Typography sx={{fontSize:{xs:'.7rem', lg:'.7vw' ,xl:'.7vw', textAlign:'center'}}}>Riesgo de abandono</Typography>
 <Typography variant='h6' sx={{fontWeight:'600'}}>{data.riesgo_abandono}%</Typography>

                  </Box>


                </Grid>

            </Grid>

        </Grid>
   
      </CardContent>
    </Card>
  );
};

// Componente principal que renderiza la cuadrícula de tarjetas
const CardsGrid: React.FC<CardGridProps> = ({CardsFetched} ) => {
/*   const theme = useTheme(); */
  //const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
/*   const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
 */
  // Determinar el número de columnas según el tamaño de pantalla
/*   let columns = 4; // Por defecto 4 columnas para pantallas grandes
  if (isMediumScreen) columns = 3;
  if (isSmallScreen) columns = 2; */

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        {CardsFetched?.map((card: any, index: any) => (
          <Grid 
           size={{ xs: 12, sm: 6, md: 5, lg: 4 , xl:3}}
            key={index}
          >
            <UserCard data={card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardsGrid;