import React from 'react';
import { Card, CardContent, Box, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';

// Definición de tipos para las props
interface SolutionBoxButtonProps {
  nombre: string;
  icono: React.ReactNode;
  leyenda: string;
  onClick?: () => void;
}

// Componente estilizado con Material UI
const StyledCard = styled(Card)(({  }) => ({
/*   minWidth: 250,
  maxWidth: 300, */
  height: '90%',

  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  background: 'white',
  border: '1px solid #f0f0f0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(106, 70, 165, 0.15)',
    borderColor: '#d4ccf2',
  },
  '&:active': {
    transform: 'translateY(-2px)',
  },
}));

const IconContainer = styled(Box)(({  }) => ({
  width: 86,
  height: 86,
  borderRadius: '10%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 2,
  backgroundColor: '#f5f3fa46', // Fondo morado muy suave
  color: '#6a46a5', // Color morado para el icono
  fontSize: '3rem',
  placeSelf:'center'
}));

const TitleText = styled(Typography)(({  }) => ({
  fontWeight: 600,
  color: '#333',
  fontSize: '1.1rem',
  marginBottom: '8px',
}));

const LegendText = styled(Typography)(({  }) => ({
  color: '#666',
  fontSize: '0.875rem',
  lineHeight: 1.4,
}));

const HoverEffect = styled(Box)(({  }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: 4,
  background: 'linear-gradient(90deg, #8a63d2, #6a46a5)',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  '.MuiCard-root:hover &': {
    opacity: 1,
  },
}));

// Componente principal
const SolutionBoxButton: React.FC<SolutionBoxButtonProps> = ({ 
  nombre, 
  icono, 
  leyenda, 
  onClick 
}) => {
  return (
    <StyledCard onClick={onClick}>
      <HoverEffect />
      <CardContent sx={{ padding: '24px 16px' }}>
        <IconContainer>
          {icono}
        </IconContainer>
        <TitleText variant="h6">
          {nombre}
        </TitleText>
        <LegendText variant="body2">
          {leyenda}
        </LegendText>
      </CardContent>
    </StyledCard>
  );
};

export default SolutionBoxButton;