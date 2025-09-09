import { Grid } from "@mui/material"
import SolutionBoxButton from "../../ui/SolutionBoxButton"
import {PersonSearch, Work, DynamicFormOutlined} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
const SolutionsCardsItems = () => {
const navigate = useNavigate()

  return (
    <Grid display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={"row"} height={'100%'} gap={2}>
       
<SolutionBoxButton   nombre={'Encuentra tu perfil ideal'}  icono={<PersonSearch fontSize="inherit"/>} leyenda={'Encuentra el perfil ideal atraves de linkedIn'} onClick={()=>navigate('etpi')} />
<SolutionBoxButton   nombre={'Espacio para subir ofertas de empleo'}  icono={<Work fontSize="inherit"/>} leyenda={'EN DESARROLLO'} onClick={()=>{}} />
<SolutionBoxButton   nombre={'Configuración de formulario creador de CV'}  icono={<DynamicFormOutlined fontSize="inherit"/>} leyenda={'EN DESARROLLO'} onClick={()=>{}} />

        </Grid>
  )
}

export default SolutionsCardsItems