import React from 'react';
import { 
  Box, 
  useTheme, 
  useMediaQuery,
  Typography,
  Paper
} from '@mui/material';
import { TravelExplore } from '@mui/icons-material';

interface ResponsiveStepperProps {
  activeStep: number;
  steps?: readonly string[];
  breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const defaultSteps = ['Datos del Perfil', 'Habilidades', 'Requerimientos (opcionales)', 'Resultados'] as const;

const ResponsiveStepper: React.FC<ResponsiveStepperProps> = ({
  activeStep,
  steps = defaultSteps,
  breakpoint = 'sm',
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Cambiado a 'md' para mejor manejo
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg')); // Detectar pantallas grandes

  if (activeStep < 0 || activeStep >= steps.length) {
    console.warn(`activeStep (${activeStep}) is out of bounds for steps length (${steps.length})`);
    return null;
  }

  return (
    <Box sx={{ 
      width: isLargeScreen ? '60%' : '70%', // Reducir ancho en pantallas grandes
      maxWidth: isMobile ? '100%' : 800, 
      p: 2,
      display: 'flex',
      flexDirection: isMobile ? 'row' : 'column',
      justifyContent: 'start',
      alignItems: 'center',
      gap: isMobile ? 1 : 1,
      mx: 'auto' // Centrar en pantallas grandes
    }}>
      {steps.map((label, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;
        
        return (
          <Paper
            key={index}
            elevation={isActive ? 3 : 0}
            sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              p: isLargeScreen ? 1.5 : isMobile ? 1.5 : 2, // Ajustar padding para pantallas grandes
              borderRadius: 3,
              border: `1px solid ${
                isActive 
                  ? 'gray' 
                  : isCompleted 
                    ? theme.palette.success.light 
                    : theme.palette.grey[300]
              }`,
              backgroundColor: isActive 
                ? 'white'
                : isCompleted 
                  ? theme.palette.success.light + '20' // 20% opacity
                  : 'white',
              minWidth: isMobile ? 100 : '100%',
              width: isLargeScreen ? '90%' : '100%', // Reducir ancho en pantallas grandes
              position: 'relative',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-1px)',
                boxShadow: 2
              }
            }}
          >
            {/* Número del paso */}
            <Box
              sx={{
                width: isLargeScreen ? 30 : isMobile ? 32 : 40, // Tamaño reducido para LG
                height: isLargeScreen ? 30 : isMobile ? 32 : 40, // Tamaño reducido para LG
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isActive 
                  ? '#6A0066' 
                  : isCompleted 
                    ? theme.palette.success.main 
                    : theme.palette.grey[300],
                color: isActive || isCompleted ? 'white' : theme.palette.text.secondary,
                fontWeight: 'bold',
                fontSize: isLargeScreen ? '0.7rem' : isMobile ? '0.8rem' : '1rem', // Tamaño de fuente reducido
                mr: isMobile ? 0 : isLargeScreen ? 1 : 2, // Margen reducido para LG
                mb: isMobile ? 1 : 0
              }}
            >
              {isCompleted ? '✓' : index===3?<TravelExplore sx={{ fontSize: isLargeScreen ? '1rem' : 'inherit' }} /> : index + 1}
            </Box>
            
            {/* Texto del paso */}
            <Typography
              variant={isMobile ? 'body2' : isLargeScreen ? 'body2' : 'body1'} // Body2 para pantallas grandes
              sx={{
                fontWeight: isActive ? 600 : 400,
                color: isActive 
                  ? theme.palette.primary.main 
                  : isCompleted 
                    ? theme.palette.success.main 
                    : 'inherit',
                textAlign: 'center',
                fontSize: isLargeScreen ? '0.9rem' : 'inherit' // Tamaño de texto reducido para LG
              }}
            >
              {label}
            </Typography>
            
            {/* Línea conectora para versión móvil */}
            {isMobile && index < steps.length - 1 && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: -8,
                  height: 2,
                  width: 8,
                  backgroundColor: theme.palette.grey[400],
                  transform: 'translateY(-50%)'
                }}
              />
            )}
          </Paper>
        );
      })}
    </Box>
  );
};

export default React.memo(ResponsiveStepper);