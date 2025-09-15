import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Definición de tipos para las props
interface SolutionBoxButtonProps {
  nombre: string;
  icono: React.ReactNode;
  leyenda: string;
  videoSrc: string; // URL del video de fondo
  onClick?: () => void;
}

// Componente estilizado con Material UI
const StyledCard = styled(Card)(({  }) => ({
  height: '90%',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  background: 'transparent',
  border: '1px solid #f0f0f0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end', // Alinea contenido al final
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(106, 70, 165, 0.15)',
    borderColor: '#d4ccf2',
  },
  '&:active': {
    transform: 'translateY(-2px)',
  },
}));

const VideoBackground = styled('video')({
position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transform: 'scale(2.5)', // Ajusta el valor (1.2 es un 20% de zoom)
  objectPosition: 'top left', // Ajusta la posición del video (puedes usar 'top', 'bottom', 'left', 'right' o valores en % como '20% 30%')
  zIndex: 0,
});

const BlurOverlay = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '65%',
  background: 'linear-gradient(to bottom, rgba(210, 210, 210, 0), rgba(255, 255, 255, 1))', // Degradado de blanco a transparente
  backdropFilter: 'blur(1px)',
  zIndex: 1,
});

const ContentContainer = styled(CardContent)({
  position: 'relative',
  zIndex: 2,
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background:'linear-gradient(to bottom, rgba(138, 137, 137, 0.04), rgba(255, 255, 255, 1))'
});

const IconTitleRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '8px',
});

const IconContainer = styled(Box)(({  }) => ({
  width: 48,
  height: 48,
  borderRadius: '10%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f5f3fa46',
  color: '#57348fff',
  fontSize: '2rem',
}));

const TitleText = styled(Typography)(({  }) => ({
  fontWeight: 800,
  color: '#000000ff',
  fontSize: '1.2rem',
 
  
}));

const LegendText = styled(Typography)(({  }) => ({
  color: '#383737ff',
  fontSize: '1rem',
  lineHeight: 1.4,
  textAlign: 'center',
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
  videoSrc,
  onClick,
}) => {
  return (
    <StyledCard onClick={onClick}>
      <VideoBackground autoPlay loop muted playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <BlurOverlay />
      <HoverEffect />
      <ContentContainer>
        <IconTitleRow>
          <IconContainer>{icono}</IconContainer>
          <TitleText variant="h6">{nombre}</TitleText>
        </IconTitleRow>
        <LegendText variant="body2">{leyenda}</LegendText>
      </ContentContainer>
    </StyledCard>
  );
};

export default SolutionBoxButton;