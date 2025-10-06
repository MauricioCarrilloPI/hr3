import {  /* Button, */ Grid, ThemeProvider, /* Typography */ } from "@mui/material"
import { Outlet, useLocation,/*  useNavigate  */} from "react-router-dom"
import themeEpi from "../styles/ThemeEPI"
//import { Person, Settings, Home } from "@mui/icons-material"


const SettingsSpace = () => {
//const navigate = useNavigate()
const location =useLocation()


console.log(location.pathname)

  return (
    <ThemeProvider theme={themeEpi}>
          <Grid
            sx={{
              flexGrow: 1,
              minHeight: { xs: 'auto', md: '20rem' },
              height: { xs: 'auto', md: 'calc(100dvh - 80px)' },
              display: 'grid',
           /*   gridTemplateColumns: '20% 80%', */
             
            }}
          >


<Grid sx={{height:'100%',  overflowY:'scroll'}}>

    <Outlet/>

</Grid>

    </Grid>
   
   
    </ThemeProvider>
  )
}

export default SettingsSpace