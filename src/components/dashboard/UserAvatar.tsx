import { useState, useCallback, type MouseEvent } from 'react';
import {
  Avatar,
  Popover,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Divider,
  Typography,
  Box,
  /* useTheme, */
 /*  useMediaQuery */
} from '@mui/material';
import {
  Settings as SettingsIcon,
  Person as PersonIcon,
  ExitToApp as LogoutIcon
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectAuth, selectIsAuthenticated,  } from '../../store/slices/AuthSlice';
import { useNavigate } from 'react-router-dom';


const UserAvatar = () => {
  //const theme = useTheme();
 // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();


 const authdata = useSelector(selectAuth);
  
  const isAuthenticated = useSelector(selectIsAuthenticated);
const dispatch = useDispatch()
  
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);






  const handleAvatarClick = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleNavigation = useCallback((path: string) => {
    navigate(path);
    handleClose();
  }, [navigate, handleClose]);

  const handleSettings = useCallback(() => {
    handleNavigation('/settings');
  }, [handleNavigation]);

  const handleProfile = useCallback(() => {
    handleNavigation('/profile');
  }, [handleNavigation]);

 /*  const handleLogout = useCallback(() => {
    // Aquí iría la lógica de logout
    console.log('Logout');
    handleClose();
    
  }, [handleClose]); */



const handleLogout = () => {
  handleClose()
    dispatch(logout());
  };


  

  const open = Boolean(anchorEl);
  const popoverId = open ? 'user-popover' : undefined;

  // Obtener iniciales para el avatar


  if (!isAuthenticated) {
    return null;
  }



  console.log(authdata)

  return (
    <>
      <Avatar
        onClick={handleAvatarClick}
        sx={{
          cursor: 'pointer',
        
          width: { xs: 36, sm: 40 },
          height: { xs: 36, sm: 40 },
          fontSize: '0.875rem',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: 2
          }
        }}
     /*    src={user?.avatarUrl || ''}
        alt={user?.name || 'User'} */
      >
       
      </Avatar>
      
      <Popover
        id={popoverId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            width: 220,
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            overflow: 'visible',
            mt: 1,
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: -8,
              right: 14,
              width: 16,
              height: 16,
              bgcolor: 'background.paper',
              transform: 'rotate(45deg)',
              zIndex: 0,
            }
          }
        }}
      >
        {/* Encabezado con información del usuario */}
       {/*  {user && ( */}
          <Box sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="subtitle1" noWrap >
               {authdata.name} {authdata.last_name} {authdata.second_last_name}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              {authdata.email}  
            </Typography>
          </Box>
      {/*  /*  )}  */ }
        
        <Divider />
        
        <List sx={{ py: 0 }}>
          <ListItem disablePadding>
            <ListItemButton onClick={handleProfile}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Perfil" 
                primaryTypographyProps={{ variant: 'body2' }}
              />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton onClick={handleSettings}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Configuración" 
                primaryTypographyProps={{ variant: 'body2' }}
              />
            </ListItemButton>
          </ListItem>
          
          <Divider />
          
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Cerrar sesión" 
                primaryTypographyProps={{ variant: 'body2' }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
    </>
  );
};

export default UserAvatar;