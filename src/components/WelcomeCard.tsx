import  { useState, useEffect } from 'react';
import { Box, Typography, styled } from '@mui/material';

// Array de textos a mostrar
const textos = [
  "Simplifica la gestión de tu equipo humano",
  "Analiza y puntúa en segundos con IA",
  "Analiza datos clave para tomar mejores decisiones",
  "Mejora la experiencia de tus empleados",
  "Centraliza toda la información de RH en un solo lugar",
  "Automatiza el filtrado y reduce el gasto",
  "Filtra y muestra sólo  a quienes cumplen realmente con el perfil",
  "Los perfiles validados llegan en segundos, listos para continuar con el proceso",
  "Lo reduce con coincidencia por habilidades, experiencia y ajuste cultural",
  "Destaca señales de riesgo y ayuda a contratar al candidato correcto desde el inicio",
  "Automatizar el contacto para mantener al talento interesado",
  "Se adapta a ti con planes que permiten el número de usuarios que realemente necesitas"
];

// Componente estilizado para el contenedor con degradados
const GradientOverlay = styled(Box)({
  position: 'relative',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '50px',
    zIndex: 2,
    pointerEvents: 'none'
  },
  '&::before': {
    left: 0,
    background: 'linear-gradient(to right, rgba(255, 255, 255, 0.24) 0%, rgba(255,255,255,0) 100%)',
  },
  '&::after': {
    right: 0,
    background: 'linear-gradient(to left, rgba(255, 255, 255, 0.32) 0%, rgba(255,255,255,0) 100%)',
  }
});

const WelcomeCard = () => {
  const [textoActual, setTextoActual] = useState(0);
  const [animacion, setAnimacion] = useState(true);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setAnimacion(false);
      setTimeout(() => {
        setTextoActual((prev) => (prev + 1) % textos.length);
        setAnimacion(true);
      }, 800);
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <Box sx={{ 
      p: {xs:2, sm:2, lg:3, xl:4}, 
      textAlign: 'center',
  display:'flex',
  alignItems:'center',
flexDirection:'column',
justifyContent:'center',
      position: 'relative',
      height:'100%'
    }}>
      <Typography 
        variant="h2" 
        sx={{ 
          fontSize: { 
    xs: '1.8rem',     // Tamaño fijo para móviles
    sm: '2.2rem',     // Tamaño fijo para tablets
    md: '2.8rem',     // Tamaño fijo para desktop pequeño
    lg: '2.2rem',     // Tamaño fijo para desktop grande
    xl: '3.5rem'      // Tamaño fijo para pantallas extra grandes
  }, 
          fontWeight: 700, 
          color: '#292929ff',
          mb: 4,
          letterSpacing: '-0.5px'
        }}
      >
        Bienvenido a Purple HR.3
      </Typography>
      
      <GradientOverlay sx={{ height: 80, overflow: 'hidden', position: 'relative' }}>
        <Typography 
          sx={{ 
            fontSize: '1.5vw', 
            color: '#4b5563',
            opacity: animacion ? 1 : 0,
            transform: animacion ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
            lineHeight: 1.6,
            fontWeight: 400
          }}
        >
          {textos[textoActual]}
        </Typography>
      </GradientOverlay>
      
     {/*  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        {textos.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              mx: 0.5,
              bgcolor: index === textoActual ? '#5e5e60ff' : '#d1d5db',
              transition: 'background-color 0.3s ease'
            }}
          />
        ))}
      </Box> */}
    </Box>
  );
};

export default WelcomeCard;