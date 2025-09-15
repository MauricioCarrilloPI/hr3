import { Box, Button, Grid, ThemeProvider, Typography } from "@mui/material"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import themeEpi from "../styles/ThemeEPI"
import { Person, Settings } from "@mui/icons-material"


const SettingsSpace = () => {
const navigate = useNavigate()
const location =useLocation()
const options = [
    {
        title:'Perfil',
        icon:<Person/>,
        path:'/settings/profile'
    },
     {
        title:'Configuración',
        icon:<Settings/>,
        path:'/settings/config'
    }

]

console.log(location.pathname)

  return (
    <ThemeProvider theme={themeEpi}>
          <Grid
            sx={{
              flexGrow: 1,
              minHeight: { xs: 'auto', md: '20rem' },
              height: { xs: 'auto', md: 'calc(100dvh - 80px)' },
              display: 'grid',
             gridTemplateColumns: '25% 75%',
             
            }}
          >

  <Grid display={'flex'} alignItems={'center'} justifyContent={'start'} flexDirection={'column'} flexWrap={'wrap'} p={3} gap={1} sx={{borderRight: '2px solid #ebebebff'}}>
{options.map((item) => (
  <Button
    key={item.path} // Added key for React list rendering
    role="button"
    sx={{
      border: '1px solid #0000001A', // Slightly transparent black for better contrast
      width: '100%',
      height: '10%',
      backgroundColor:  item.path===location.pathname? '#ffffffff':'#e9e9e95c', // Consistent color format
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start', // More explicit than 'start'
      gap: 1,
      px: 2,
      // Hover effect with transition for smoothness
      '&:hover': {
        border: '1px solid #b5b5b5ff', // Fixed color and removed extra space
        backgroundColor: '#ffffffff', // Slightly lighter on hover
        transform: 'translateY(-2px)', // Subtle lift effect
        transition: 'all 0.2s ease-in-out', // Smooth transition
      },
      // Optional: Add focus state for accessibility
   
    }}
    onClick={() => navigate(item.path)}
  >
    {item.icon}
    <Typography
      sx={{
        fontSize: '1vw',
        fontWeight: 'bold',
        color: '#000000', // Explicit text color for consistency
      }}
    >
      {item.title}
    </Typography>
  </Button>
))}
  </Grid>
 
<Grid sx={{height:'100%',  overflowY:'scroll'}}>

    <Outlet/>

</Grid>

    </Grid>
   
   
    </ThemeProvider>
  )
}

export default SettingsSpace