import { Grid } from "@mui/material"
import CardsButtonWithData from "../../ui/CardsButtonWithData"


const ElementsDasboard = () => {
  return (
   
<Grid sx={{
   display:'grid',
  gridTemplateColumns:'60% 40%',
  backgroundColor: 'hsla(235, 0%, 100%, 1)',
    backgroundImage: `
      radial-gradient(at 92% 16%, hsla(240, 54%, 33%, 1) 0px, transparent 50%),
      radial-gradient(at 0% 15%, hsla(240, 0%, 100%, 0.13) 0px, transparent 50%)
    `,
}}>
 <Grid sx={{
  display: 'grid',
  gridTemplateAreas: {
    xs: `
      'thirdspace'
      'firstChart'
      'secondChart'
    `,
    lg: `
      'firstChart firstChart'
      'secondChart thirdspace'
    `,
  },
  gridTemplateColumns: {
    xs: '1fr',
    md: '1fr 1fr',
  },
  gridTemplateRows: {
    xs: 'auto auto auto',
    md: '1fr 1fr',
  },
}}>
  <Grid sx={{ background: '#c7c7c76a', gridArea: 'firstChart' }}>Chart 1</Grid>
  <Grid sx={{ gridArea: 'secondChart' }}>Chart 2</Grid>
  <Grid sx={{ 
    gridArea: 'thirdspace', 
    display:'flex',
    flexDirection:'column',
justifyContent:'center',
alignItems:'center',
gap:1
    }}>

<CardsButtonWithData name='Usuarios' numberof={37} littledescripcion='Usuarios registrados' path='/superdashboard/allusers' />
<CardsButtonWithData name='Empresas' numberof={37} littledescripcion='Empresas registradas' path='#' />

    </Grid>
</Grid>
  <Grid  sx={{background:'#b6b6b617'}} >

  </Grid>

</Grid>


  )
}

export default ElementsDasboard