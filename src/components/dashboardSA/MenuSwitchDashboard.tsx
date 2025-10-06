
import { Box, Grid, IconButton } from '@mui/material';
import { Home, Notifications, Person, RecentActors, Settings, Storefront } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

const MenuSwitchDasboard = () => {
  // State to track the selected option
  const location = useLocation()
  const navigate = useNavigate()
  // Array of icons for easier mapping



    const menuItems = [
      { icon: <Home />,  path:"/superdashboard" },
      { icon: <RecentActors />,  path:"/superdashboard/allusers"  },
      { icon: <Storefront />, path:"" },
    ];
  
      const menuItemsconfig = [
      { icon: <Notifications />, path:""  }, 
      { icon: <Person />,  path:'/superdashboard/settings/profile'  },
      { icon: <Settings />,  path:'/superdashboard/settings/config'  },
     
    ];

  return (
<Grid sx={{
    display:'flex',
    alignItems:'center',
    justifyContent:'start',
    flexDirection:'column',
    gap:2,
    m:2,
    
  }} >
    <Grid sx={{
    display:'flex',
    alignItems:'center',
    justifyContent:'start',
    flexDirection:'column',
    gap:2,
    m:2,
    height:'80%',
    width:'100%'
  }}>
  <Box
      sx={{
        borderRadius: '80px',
        height: 'auto',
         // Adjust height as needed (e.g., 30% of parent)
        width: '40%', // Adjust width as needed
        minWidth:'3rem',
        background: 'rgba(179, 176, 176, 0.36)', // Semi-transparent gray for glass effect
        backdropFilter: 'blur(10px)', // Stronger blur for liquid glass effect
        WebkitBackdropFilter: 'blur(10px)', // For Safari support
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'space-around', // Evenly space icons
        alignItems: 'center', // Center icons vertically
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        border: '1px solid rgba(255, 255, 255, 0.2)', // Light border for glass edge
      }}
    >
      {menuItems.map((item) => (
        <Box
          key={item.path}
          sx={{
            display: 'flex',
            justifyContent: 'center',
           
            py:1,
            alignItems: 'center',
            width: '100%', // Fixed size for icon container
            height: '100%',
            borderRadius: '50%', // Circular shape
            background: location.pathname === item.path ? '#ffffff' : 'transparent', // White for selected
            transition: 'background 0.3s ease', // Smooth transition
          }}
          
        >
          <IconButton
           onClick={()=>navigate(item.path)} // Update selected state
            sx={{
              color: location.pathname === item.path ? '#000000' : '#292929ff', // Black for selected, white for unselected
              '&:hover': {
                background:location.pathname === item.path ? '#ffffff' : 'rgba(255, 255, 255, 0.1)', // Subtle hover effect
              },
            }}
          >
            {item.icon}
          </IconButton>
        </Box>
      ))}
    </Box>


    <Box
sx={{
  
    borderRadius: '40px',
      
        width: '40%', // Adjust width as needed
        minWidth:'3rem',
        background: 'rgba(179, 176, 176, 0.36)', // Semi-transparent gray for glass effect
        backdropFilter: 'blur(10px)', // Stronger blur for liquid glass effect
        WebkitBackdropFilter: 'blur(10px)', // For Safari support
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'space-around', // Evenly space icons
        alignItems: 'center', // Center icons vertically
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        border: '1px solid rgba(255, 255, 255, 0.2)',

    height:'auto',
 
  
  }}
>

{menuItemsconfig.map((item) => (
        <Box
          key={item.path}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
             py:1,
            width: '100%', // Fixed size for icon container
            height: '100%',
            borderRadius: '50%', // Circular shape
            background: location.pathname === item.path? '#ffffff' : 'transparent', // White for selected
            transition: 'background 0.3s ease', // Smooth transition
          }}
        >
          <IconButton
             onClick={()=>navigate(item.path)} // Update selected state
            sx={{
              color: location.pathname === item.path ? '#000000' : '#292929ff', // Black for selected, white for unselected
              '&:hover': {
                background: location.pathname === item.path ? '#ffffff' : 'rgba(255, 255, 255, 0.1)', // Subtle hover effect
              },
            }}
          >
            {item.icon}
          </IconButton>
        </Box>
      ))}
</Box>
    
    </Grid>



  </Grid>
  );
};

export default MenuSwitchDasboard;