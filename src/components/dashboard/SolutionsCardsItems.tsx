import { Grid } from "@mui/material"
import SolutionBoxButton from "../../ui/SolutionBoxButton"
import {/* PersonAddAlt1, */ PersonSearch, /* Work, DynamicFormOutlined */} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import liquidVideo from '../../assets/liquidvideo.mp4'
/* import { useState } from "react";
import InputFile from "../../ui/InputFile"; */
/* import socialVideo from '../../assets/socialTalent.mp4' */
const SolutionsCardsItems = () => {
const navigate = useNavigate()
/* const [UploadTalent, setUploadTalent] = useState<boolean>(false) */
  return (
    <Grid display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={"row"} height={'100%'} gap={2}>
       
<SolutionBoxButton   
nombre={'Encuentra tu perfil ideal'}  
icono={<PersonSearch fontSize="inherit"/>} 
leyenda={'Encuentra el perfil ideal através de linkedIn'} 
videoSrc={liquidVideo} 
 onClick={()=>navigate('etpi')}  />
{/* {
  UploadTalent?
 

<InputFile setUploadTalent={setUploadTalent}/>

  :

<SolutionBoxButton   
nombre={'Cargar talento'}  
icono={<PersonAddAlt1 fontSize="inherit"/>} 
leyenda={'Agrega un perfil cargando su CV'} 
videoSrc={liquidVideo} 
onClick={()=>setUploadTalent(true)} 
/>
} */}

{/* <SolutionBoxButton   nombre={'Espacio para subir ofertas de empleo'}  icono={<Work fontSize="inherit"/>} leyenda={'EN DESARROLLO'} onClick={()=>{}} />
<SolutionBoxButton   nombre={'Configuración de formulario creador de CV'}  icono={<DynamicFormOutlined fontSize="inherit"/>} leyenda={'EN DESARROLLO'} onClick={()=>{}} />
 */}
        </Grid>
  )
}

export default SolutionsCardsItems