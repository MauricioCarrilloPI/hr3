import { Card, CardContent, Box, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const StyledCard = styled(Card)(({  }) => ({
  height: '90%',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  background: 'transparent',
  border: '2px dashed #e0e0e0', // Changed to dashed with light grey
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(106, 70, 165, 0.15)',
    borderColor: '#c4b5e0', // Lighter purple for dashed border on hover
    backgroundColor: '#faf9fd', // Subtle background on hover
  },
  '&:active': {
    transform: 'translateY(-2px)',
  },
}));

const ContentContainer = styled(CardContent)({
  position: 'relative',
  zIndex: 2,
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  background: 'transparent',
});

const FileUploadDesign = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5px',
  width: '100%',
  height: '100%',
  padding: '24px',
});

const StyledLabel = styled('label')({
  cursor: 'pointer',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '12px',
});

const BrowseButton = styled(Box)(({ }) => ({
  backgroundColor: '#757575', // Medium grey instead of purple
  padding: '10px 20px',
  borderRadius: '8px',
  color: 'white',
  transition: 'all 0.3s',
  fontSize: '0.9rem',
  fontWeight: 500,
  marginTop: '2px',
  '&:hover': {
    backgroundColor: '#616161', // Darker grey on hover
  },
}));

const CloseButton = styled(IconButton)({
  position: 'absolute',
  top: '8px',
  right: '8px',
  zIndex: 10,
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '50%',
  width: '28px',
  height: '28px',
  '&:hover': {
    backgroundColor: 'rgba(245, 245, 245, 0.9)',
  },
});

const InputFile = () => {
  const handleClose = () => {
    // Lógica para manejar el cierre del componente
    console.log('Cerrando componente');
  };

  return (
    <StyledCard>
      <CloseButton aria-label="cerrar" onClick={handleClose}>
        <CloseIcon sx={{ fontSize: '18px', color: '#616161' }} />
      </CloseButton>
      
      <ContentContainer>
        <form className="file-upload-form">
          <StyledLabel htmlFor="file">
            <FileUploadDesign>
              <svg height="2.5em" viewBox="0 0 640 512" fill="#757575">
                <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
              </svg>
              <Typography variant="body2" color="#616161" textAlign="center" fontWeight={500}>
                Arrastra y Pega CV
              </Typography>
              <Typography variant="body2" color="#9e9e9e" fontWeight={400}>
                o
              </Typography>
              <BrowseButton className="browse-button">
                Seleccionar archivo
              </BrowseButton>
            </FileUploadDesign>
            <input type="file" id="file" style={{ display: 'none' }} />
          </StyledLabel>
        </form>
      </ContentContainer>
    </StyledCard>
  );
};

export default InputFile;