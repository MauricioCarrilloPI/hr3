import {
  Box,
  Button,
  Grid,
  ThemeProvider,
  Typography,


} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useState } from 'react';
import {  useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import ResponsiveStepper from '../components/encuentraPerfilIdeal/ResponsiveStepper';
import themeEpi from '../styles/ThemeEPI';
import Habilidades from '../components/encuentraPerfilIdeal/Habilidades';
import CardsGrid from '../components/encuentraPerfilIdeal/CardsGrid';
import ProfileDataSpace from '../components/encuentraPerfilIdeal/ProfileDataSpace';
import OptionalRequirements from '../components/encuentraPerfilIdeal/OptionalRequirements';
import LoaderBlocks from '../ui/LoaderBlocks';
import { useNavigate } from 'react-router-dom';

// Define types for autocomplete options

interface FormValues {
  profile: string;
  keywords: string;
  company: any[];
  about: string;
  language: any[];
  school: any[];
  location: any[];
}
interface CardData {
  nombre: string;
  email: string | undefined;
  score_final: number;
  riesgo_abandono: number;
  score_afinidad: number;
  linkedin_url:string;
  profile_image:string;
}


const EncuentraPerfilIdeal = () => {
  const [step, setStep] = useState<number>(0);
const [loanding, setLoanding] = useState<boolean>(false)
const [CardsFetched, setCardsFetched] = useState<CardData[]>([])
const [Message, setMessage] = useState<string>()
const navigate = useNavigate()


const mutation = useMutation({
  mutationFn: async (values: FormValues) => {
    const apiUrl = 'http://192.168.68.171:7000/api/talent/profile/v3';
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error('Failed to submit data');
    }
setLoanding(true)
    return response.json();
  },
  
  onSuccess: (data) => {
    console.log('Mutation successful, data:', data);
    setCardsFetched(data.data)
    setMessage(data.message)
    setStep(3); // Mover al paso de resultados después del éxito
    setLoanding(false)
  },
  onError: (error) => {
    console.error('Error al enviar:', error);
    setLoanding(false)

  },
});

  const initialValues: FormValues = {
    profile:'',
    keywords:'',
    company:[],
    about:'',
    language:[],
    school:[],
    location:[]
  }

const formik = useFormik<FormValues>({
  initialValues,
 
  validationSchema: Yup.object().shape({
    profile: Yup.string(),
    keywords: Yup.string().required('Habilidades requeridas'),
    
  }),
  
onSubmit: async (values: FormValues) => {
  console.log('Submitting values:', values);
    setLoanding(true)

  const locationIds = values.location && values.location.length > 0 ? values.location.map(i => i?.id) : [];
  const companyIds = values.company && values.company.length > 0 ? values.company.map(i => i?.id) : [];
  const schoolIds = values.school && values.school.length > 0 ? values.school.map(i => i?.id) : [];

  const languagesIds = values.language && values.language.length > 0 ? values.language.map(i => i?.id) : [];
  
  console.log('Location IDs:', locationIds);
  console.log('Company IDs:', companyIds);
  console.log('School IDs:', schoolIds);

  try {
    await mutation.mutateAsync({
      ...values,
      location: locationIds,
      company: companyIds,
      school: schoolIds,
      language:languagesIds,
    });
  } catch (error) {
    console.error('Submission error:', error);
    setLoanding(false)

  }
}
})
 console.log('VALUESFORMIK:', formik.values, 'Cards fetched: ', CardsFetched ) 


  return (
    <ThemeProvider theme={themeEpi}>
      <Grid
        sx={{
          flexGrow: 1,
          minHeight: { xs: 'auto', md: '20rem' },
          height: { xs: 'auto', md: 'calc(100dvh - 80px)' },
          display: 'grid',
          gridTemplateRows: '10% 90%',
        }}
      >
        <Grid
          p={3}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Typography variant="h5" sx={{ fontWeight: '700', color: 'grey' }}>
            Encuentra tu perfil ideal...
          </Typography>
          <Button
            sx={{
              background: '#6a006709',
              color: '#4b0348a7',
              border: '1px solid #4b03471f',
              fontWeight: 'bold',
              p: 1,
            }}
            onClick={() => navigate('/')}
          >
            <ArrowBack />
            Volver
          </Button>
        </Grid>
        <Grid
          sx={{
            display: 'grid',
            gridTemplateColumns: '25% 75%',
          }}
        >
          <Grid display={'flex'} alignItems={'center'} justifyContent={'start'} flexDirection={'column'}>
            <ResponsiveStepper activeStep={step}  />
            {

  step===3&&
<Box
  sx={{
    borderRadius: '15px',
    padding: '24px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    maxWidth: '400px', // Constrain width for readability
    margin: '16px auto', // Center the card
    transition: 'transform 0.2s ease-in-out', // Smooth hover effect
    '&:hover': {
      transform: 'translateY(-4px)', // Slight lift on hover
      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)', // Enhanced shadow on hover
    },
  }}
>
  {/* Title */}
  <Typography
   
    sx={{
      fontWeight: 600, // Bold for emphasis
      color: '#1a1a1a', // Dark color for contrast
      marginBottom: '16px', // Space below title
    }}
  >
    Resultados de búsqueda
  </Typography>

  {/* Profile */}
  <Typography
    variant="subtitle1"
    sx={{
      fontWeight: 500,
      color: '#333333',
      marginBottom: '8px',
    }}
  >
    Perfil: {formik?.values?.profile || 'No especificado'}
  </Typography>

  {/* Keywords */}
  <Typography
    variant="body2"
    sx={{
      color: '#555555',
      marginBottom: '8px',
      lineHeight: 1.5, // Improved readability
    }}
  >
    Palabras clave: {formik?.values?.keywords || 'No especificado'}
  </Typography>

  {/* Location */}
  <Typography
    variant="body2"
    sx={{
      color: '#555555',
      marginBottom: '8px',
      lineHeight: 1.5,
    }}
  >
    Ubicación: {/* {formik?.values?.location || 'No especificado'} */}
  </Typography>

  {/* Company */}
  <Typography
    variant="body2"
    sx={{
      color: '#555555',
      marginBottom: '8px',
      lineHeight: 1.5,
    }}
  >
    Empresa: {/* {formik?.values?.company || 'No especificado'} */}
  </Typography>

  {/* School */}
  <Typography
    variant="body2"
    sx={{
      color: '#555555',
      marginBottom: '8px',
      lineHeight: 1.5,
    }}
  >
    Escuela: {/* {formik?.values?.school || 'No especificado'} */}
  </Typography>

  {/* Language */}
 {/*  <Typography
    variant="body2"
    sx={{
      color: '#555555',
      marginBottom: '8px',
      lineHeight: 1.5,
    }}
  >
    Idioma: {formik.values.language || 'No especificado'}
  </Typography> */}

  {/* About */}
  <Typography
    variant="body2"
    sx={{
      color: '#555555',
      lineHeight: 1.5,
      fontStyle: 'italic', // Subtle style for about section
    }}
  >
    Acerca de: {formik?.values?.about || 'No especificado'}
  </Typography>
</Box>
            }


          </Grid>
          <form onSubmit={formik.handleSubmit}>

          
          <Grid display={'flex'} flexDirection={'column'} height={'100%'}>
            <Grid
              flexGrow={1}
              sx={{
                borderLeft: '1px solid #ccc',
                overflowY: 'auto',
                height:'auto',
                 maxHeight: '60dvh', 
              }}
            >

{loanding&&
<Box my={20}>

<LoaderBlocks/>
</Box>
}


              {step === 0 && (
               <ProfileDataSpace Profile={formik.values.profile} handleChange={formik.handleChange} setStep={setStep}/>
              )}

              {(step === 1 && !loanding) && (
                <Grid
                  container
                  spacing={1}
                  display={'flex'}
                  alignItems={'start'}
                  justifyContent={'center'}
                  flexDirection={'column'}
                  p={4}
                >
                  <Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Habilidades para un {formik.values.profile} que deseas buscar
                    </Typography>
                  </Box>
    <Habilidades
      Skills={formik.values.keywords}
      setSkills={(newSkills) => formik.setFieldValue('keywords', newSkills)}
    />
                </Grid>
              )}

              {(step === 2 && !loanding) && (
              <OptionalRequirements  formikMethod={formik} />
              )}

              {
                (step===3 && !loanding) &&(
                  Message==='No se encontraron perfiles.'?
                  <h5>No se encontraron perfiles.</h5>
:<CardsGrid CardsFetched={CardsFetched}/>
                  
                )
              }
            </Grid>
            <Grid
              p={4}
              sx={{ background: 'white', width: '100%', height: '15%' }}
              display={'flex'}
              justifyContent={step === 0 ? 'flex-end' : 'space-between'}
              alignItems={'center'}
            >
              {step !== 0 && (
                <Button
                  sx={{
                    background: '#3b043aff',
                    color: 'white',
                    fontWeight: 'BOLD',
                    p: 1,
                  }}
                  onClick={() => setStep(step - 1)}
                >
                  Regresar
                </Button>
              )}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  gap: 2,
                }}
              >
                {step === 1 && (
                  <Button
                    sx={{
                      background: '#3b043aff',
                      color: 'white',
                      fontWeight: 'BOLD',
                      p: 1,
                    }}
                    onClick={() => setStep(2)}
                  >
                    Requerimientos adicionales
                  </Button>
                )}

                  {step === 0 ?   <Button
                  sx={{
                    background: '#6A0066',
                    color: 'white',
                    fontWeight: 'BOLD',
                    p: 1,
                  }}
                  onClick={() => setStep(1)}
                >
                  Continuar
                </Button> :  step===3?null:
                 <Button
                   type="submit"
                  sx={{
                    background: '#6A0066',
                    color: 'white',
                    fontWeight: 'BOLD',
                    p: 1,
                  }}
                onClick={()=>formik.handleSubmit()}
                >
                   Buscar
                </Button>}
              
              </Box>
            </Grid>
          </Grid>
          </form>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default EncuentraPerfilIdeal;