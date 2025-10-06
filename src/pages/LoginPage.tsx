import  { useEffect, useState } from 'react';
import {
  Box,
/*   Container, */
  Paper,
  TextField,
  Button,
  Typography,
/*   Link,
  Divider, */
  InputAdornment,
  IconButton,
  CircularProgress,
  Alert
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  ArrowBack,
  CheckCircle
} from '@mui/icons-material';
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
/* import image from '../assets/windowS.jpg';
import faro from '../assets/faro.jpg'; */
import acuarela from '../assets/acuarela.jpg'
import type { AppDispatch, RootState } from '../store';
import {  login, selectAuth, selectIsAuthenticated } from '../store/slices/AuthSlice';
import Navbar from '../components/Navbar';



const LoginPage = () => {
const dispatch = useDispatch<AppDispatch>();
const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const authdata = useSelector(selectAuth);
  const { loading,  error } = useSelector((state: RootState) => state.auth);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);




  //const [error, setError] = useState('');
  const [isRegister, ] = useState(false);
  const [isVerification, ] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setIsLoading(true);
   /*  setError(''); */
    
    // Simulación de proceso de login
    setTimeout(() => {
      setIsLoading(false);
      if (email && password) {
        console.log('Login exitoso');
      } else {
       /*  setError('Por favor, complete todos los campos'); */
      }
    }, 1500);
  };

/*   const handleToggleView = () => {
    setIsRegister(!isRegister);
     setError(''); 
  }; */

  const handleToggleForgotPassword = () => {
    setIsForgotPassword(!isForgotPassword);
    /* setError(''); */
  };

 /*  const handleToggleVerification = () => {
    setIsVerification(!isVerification);
    setError('');
  }; */




const handleLogin = () => {
    dispatch(login({ email, password }));
  };

/*   const handleLogout = () => {
    dispatch(logout());
  }; */

  // Verificar caducidad al montar o en intervalos (opcional)
 /*  useEffect(() => {
    dispatch(checkTokenExpiration());
  }, [dispatch]); */


/* useEffect(() => {
    if (isAuthenticated && !loading) {
      navigate('/'); // Redirige a la ruta deseada
    }
  }, [isAuthenticated, loading, navigate]);
 */
const roleRoutes: { [key: number]: string } = {
  1125899906842625: '/superdashboard',
  2251799813685249: '/dashboarduser',
  1125899907000000: '/dashboarduser'
};

useEffect(() => {
  if (isAuthenticated && !loading && authdata?.rol_id != null) {
    // Type guard ensures rol_id is not null
    const role  = authdata.rol_id;
    // Redirige a la ruta correspondiente según el rol
    const redirectTo = roleRoutes[role] || '/'; // Ruta por defecto si el rol no está definido
    navigate(redirectTo);
  } else {
    // Handle the case where authdata.rol_id is null or undefined
    navigate('/');
  }
}, [isAuthenticated, navigate, loading, authdata]);




  //console.log('isAuthenticated',isAuthenticated)

  return (
    <>
    <Navbar />
   
    <Box sx={{ 
      minHeight: '90dvh', 
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' }, // Column on mobile, row on desktop
      alignItems: 'stretch',
      bgcolor: '#f5f5f5',
       
    }}>
    

      {/* Sección de imagen */}
      <Box sx={{
        flex: { xs: '0 0 200px', md: '0 0 45%' }, // Fixed height on mobile, 40% width on desktop
        backgroundImage: `url(${acuarela})`,
        backgroundSize: 'cover',
        
        backgroundPosition: 'center',
        position: 'relative',
        transition: 'all 0.3s ease',
        order: { xs: 2, md: 1 }, // Image second on mobile
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.103), rgba(0, 0, 0, 0.055))'
        }
      }} />
      
  {/* Sección del formulario */}
      <Box sx={{
        flex: { xs: '1 1 auto', md: '0 0 45%', lg:'0 0 50%' }, // Full width on mobile, 60% on desktop
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: { xs: '1rem', sm: '2rem' },
        order: { xs: 1, md: 2 }, // Form first on mobile
      
      }}>
        <Paper elevation={8} sx={{
          borderRadius: '10px',
          padding: { xs: '1.5rem', sm: '2.5rem' },
          fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
          color: '#333',
          border: '1px solid #e1e4e8',
          textAlign: 'center',
          backgroundColor: 'white',
          boxShadow: { xs: 'none', sm: '0 4px 20px rgba(0, 0, 0, 0.08)' },
          width: '100%',
          maxWidth: '450px',
          position: 'relative'
        }}>
          {/* Logo */}
          <Box sx={{ marginBottom: '2rem' }}>
            <Typography variant="h2" sx={{ 
              color: '#1d2227ff', 
              margin: '1rem 0 0.5rem',
              fontSize: { xs: '1.25rem', sm: '2rem' },
              fontWeight: 600
            }}>
              Bienvenido
            </Typography>
            <Typography variant="body2" sx={{ 
              color: '#7f8c8d', 
              marginBottom: '1.5rem',
              fontSize: { xs: '0.8rem', sm: '0.9rem' }
            }}>
              {isForgotPassword 
                ? 'Ingresa tu email para restablecer tu contraseña' 
                : isVerification 
                  ? 'Verifica tu cuenta' 
                  : isRegister 
                    ? 'Crea una nueva cuenta' 
                    : 'Ingresa a tu cuenta'}
            </Typography>
          </Box>

          {/* Mensaje de error */}
          {error && (
            <Alert severity="error" sx={{ 
              marginBottom: '1rem',
              backgroundColor: '#fdecea',
              color: '#e74c3c',
              fontSize: { xs: '0.8rem', sm: '0.875rem' }
            }}>
              {error}
            </Alert>
          )}

          {isVerification ? (
            // Vista de verificación
            <Box>
              <Box sx={{ animation: 'bounce 2s infinite', marginBottom: '1.5rem' }}>
                <CheckCircle color="primary" sx={{ fontSize: { xs: 40, sm: 60 } }} />
              </Box>
              <Typography variant="body1" sx={{ marginBottom: '1.5rem', fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                Hemos enviado un enlace de verificación a tu correo electrónico.
              </Typography>
              
              <Box sx={{ textAlign: 'left', margin: '1.5rem 0', padding: '0 1rem' }}>
                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#555', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                  <CheckCircle color="success" sx={{ fontSize: { xs: 14, sm: 16 } }} />
                  Revisa tu bandeja de entrada
                </Typography>
                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#555', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                  <CheckCircle color="success" sx={{ fontSize: { xs: 14, sm: 16 } }} />
                  Si no encuentras el correo, revisa la carpeta de spam
                </Typography>
                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#555', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                  <CheckCircle color="success" sx={{ fontSize: { xs: 14, sm: 16 } }} />
                  El enlace expirará en 24 horas
                </Typography>
              </Box>
              
              <Button 
                variant="contained" 
                sx={{
                  backgroundColor: '#1a5175ff',
                  '&:hover': { backgroundColor: '#105989ff' },
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  padding: { xs: '10px 20px', sm: '12px 24px' },
                  marginTop: '1rem',
                  height: { xs: '40px', sm: '48px' }
                }}
             /*    onClick={handleToggleVerification} */
              >
                Reenviar enlace
              </Button>
              
              <Button 
                sx={{
                  color: '#1a4866ff',
                  marginTop: '1rem',
                  display: 'block',
                  width: '100%',
                  fontSize: { xs: '0.8rem', sm: '0.9rem' }
                }}
                /* onClick={handleToggleVerification} */
              >
                Volver al login
              </Button>
            </Box>
          ) : isForgotPassword ? (
            // Vista de recuperación de contraseña
            <Box component="form" onSubmit={handleSubmit}>
              <Button 
                startIcon={<ArrowBack />}
                sx={{
                  color: '#3498db',
                  marginBottom: '1rem',
                  justifyContent: 'flex-start',
                  padding: 0,
                  fontSize: { xs: '0.8rem', sm: '0.9rem' }
                }}
                onClick={handleToggleForgotPassword}
              >
                Volver atrás
              </Button>
              
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{ marginBottom: '1.5rem' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
              
              <Button 
                type="submit"
                fullWidth
                variant="contained"
                disabled={isLoading}
                sx={{
                  backgroundColor: '#3498db',
                  '&:hover': { backgroundColor: '#2980b9' },
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  padding: { xs: '12px', sm: '14px' },
                  height: { xs: '40px', sm: '48px' },
                  marginBottom: '1rem'
                }}
              >
                {isLoading ? <CircularProgress size={20} sx={{ color: 'white' }} /> : 'Enviar enlace de recuperación'}
              </Button>
              
              <Box sx={{ textAlign: 'left', marginTop: '1.5rem', color: '#555' }}>
                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                  <CheckCircle color="success" sx={{ fontSize: { xs: 14, sm: 16 } }} />
                  Revisa tu bandeja de entrada
                </Typography>
                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                  <CheckCircle color="success" sx={{ fontSize: { xs: 14, sm: 16 } }} />
                  Sigue las instrucciones del correo
                </Typography>
                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                  <CheckCircle color="success" sx={{ fontSize: { xs: 14, sm: 16 } }} />
                  Crea una nueva contraseña segura
                </Typography>
              </Box>
            </Box>
          ) : (
            // Vista de login/registro normal
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', rowGap: '1.5rem' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                />
                
                <TextField
                  fullWidth
                  label="Contraseña"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              
              {isRegister && (
                <TextField
                  fullWidth
                  label="Confirmar contraseña"
                  type={showPassword ? 'text' : 'password'}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
              
         {/*      {!isRegister && (
                <Box sx={{ textAlign: 'right' }}>
                  <Link 
                    component="button" 
                    type="button"
                    variant="body2"
                    onClick={handleToggleForgotPassword}
                    sx={{
                      color: '#7f8c8d',
                      fontSize: { xs: '0.75rem', sm: '0.85rem' },
                      '&:hover': {
                        color: '#3498db'
                      }
                    }}
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </Box>
              )} */}
              
              <Button 
               /*  type="submit" */
                fullWidth
                variant="contained"
                disabled={isLoading}
                onClick={handleLogin}
                sx={{
                  backgroundColor: '#040608ff',
                  '&:hover': { 
                    backgroundColor: '#000000ff',
                    transform: 'translateY(-1px)'
                  },
                  borderRadius: '8px',
                  fontWeight: 600,
                
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  padding: { xs: '12px', sm: '14px' },
                  height: { xs: '40px', sm: '48px' }
                }}
              >
                {loading ? <CircularProgress size={20} sx={{ color: 'white' }} /> : 
                  isRegister ? 'Registrarse' : 'Iniciar sesión'}
              </Button>
              
           {/*    <Divider sx={{ margin: '1.5rem 0' }}>
                <Typography variant="body2" sx={{ color: '#95a5a6', textTransform: 'uppercase', fontSize: { xs: '0.7rem', sm: '0.75rem' } }}>
                  o
                </Typography>
              </Divider> */}
              
           {/*    <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                {isRegister ? '¿Ya tienes una cuenta?' : '¿No tienes una cuenta?'}{' '}
                <Link 
                  component="button" 
                  type="button"
                  onClick={handleToggleView}
                  sx={{
                    color: '#3498db',
                    fontSize: { xs: '0.8rem', sm: '0.9rem' },
                    '&:hover': {
                      color: '#2980b9'
                    }
                  }}
                >
                  {isRegister ? 'Inicia sesión' : 'Regístrate'}
                </Link>
              </Typography> */}
            </Box>
          )}
        </Paper>
      </Box>

      {/* Estilos de animación */}
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
            40% {transform: translateY(-15px);}
            60% {transform: translateY(-7px);}
          }
        `}
      </style>
    </Box>
     </>
  );
};

export default LoginPage;