import { useState } from 'react';
import { Box, Typography, IconButton, InputAdornment, TextField, Button, Tooltip, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ContentCopy from '@mui/icons-material/ContentCopy';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';

interface NewUserDataCardProps {
  Email: string;
  Password: string;
 setAccountCreatedSuccesfully: React.Dispatch<React.SetStateAction<boolean>>;
}


const NewUserDataCard: React.FC<NewUserDataCardProps> = ({ Email, Password, setAccountCreatedSuccesfully }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copiedCredentials, setCopiedCredentials] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);
   const handleCopyPassword = () => {
    navigator.clipboard.writeText(Password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  const handleCopyCredentials = () => {
    const credentialsText = `Tus datos de acceso a HR3 son:\nCorreo: ${Email}\nContraseña: ${Password}\nEnlace: https://purple-hr3.vercel.app`;
    navigator.clipboard.writeText(credentialsText);
    setCopiedCredentials(true);
    setTimeout(() => setCopiedCredentials(false), 2000);
  };

  const handleCreateAnotherAccount = () => {
    setAccountCreatedSuccesfully(false)
    // Placeholder for creating another account logic
    console.log('Create another account clicked');
  };

  console.log('PASSWORD:', Password)

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        background: 'linear-gradient(135deg, rgba(240, 242, 245, 0.3) 0%, rgba(255, 255, 255, 0.4) 100%)',
        height: 'auto',
        width: '82%',
       /*  maxWidth: '400px', */
        borderRadius: '16px',
        position: 'relative',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        p: 3,
        gap: 2,

        
      }}
      component={motion.div}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >

<Grid sx={{
     display: 'grid',
        gridTemplateColumns: '70% 30%',
        width:'100%'
}}>
    <Grid sx={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:2
    }}>
  {/* Correo */}
      <Box
        sx={{
          width: '80%',
          background: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '8px',
          p: 2,
          border: '1px solid rgba(0, 0, 0, 0.05)',
        }}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            color: '#2d3748',
          }}
        >
          {Email}
        </Typography>
      </Box>
      {/* contraseña */}
      <Box
        sx={{
          width: '80%',
          background: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '8px',
          p: 2,
          border: '1px solid rgba(0, 0, 0, 0.05)',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <TextField
          label="Contraseña"
          value={Password}
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          size="small"
          sx={{
            flexGrow: 1,
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.9)',
              '& fieldset': { borderColor: 'rgba(0, 0, 0, 0.1)' },
              '&:hover fieldset': { borderColor: 'rgba(0, 0, 0, 0.2)' },
            },
            '& .MuiInputLabel-root': { color: '#4a5568', fontWeight: 500 },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip title={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}>
                  <IconButton
                    onClick={handleTogglePassword}
                    sx={{ color: '#4a5568' }}
                    component={motion.button}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </Tooltip>
                <Tooltip title={copied ? '¡Copiado!' : 'Copiar contraseña'}>
                  <IconButton
                    onClick={handleCopyPassword}
                    sx={{ color: '#4a5568' }}
                    component={motion.button}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ContentCopy />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />
      </Box>
</Grid>
<Grid>
<Button
          variant="contained"
          startIcon={<ContentCopy />}
          onClick={handleCopyCredentials}
          sx={{
            flex: 1,
            background: 'black',
            color: '#fff',
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 600,
            height:'100%',
            '&:hover': {
              background: 'linear-gradient(135deg, rgba(98, 0, 147, 0.77) 0%, rgba(63, 0, 95, 0.9) 100%)',
              color:'white',
              fontWeight: 700,
            },
          }}
          component={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {copiedCredentials ? '¡Credenciales copiadas!' : 'Copiar credenciales'}
        </Button>
</Grid>

</Grid>
      
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection:'column',
          justifyContent:'center',
          gap: 1,
          mt: 1,
        }}
      >
        
        <Button
          variant="outlined"
          startIcon={<AddCircleOutline />}
          onClick={handleCreateAnotherAccount}
          sx={{
            flex: 1,
            borderColor: 'rgba(0, 0, 0, 0.1)',
            color: '#4a5568',
            borderRadius: '8px',
            textTransform: 'none',
            width:'90%',
            fontWeight: 500,
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.9)',
              borderColor: 'rgba(0, 0, 0, 0.2)',
            },
          }}
          component={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Crear otra cuenta
        </Button>
      </Box>
    </Box>
  );
};

export default NewUserDataCard;