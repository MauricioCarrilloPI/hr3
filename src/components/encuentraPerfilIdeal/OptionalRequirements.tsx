import {  Autocomplete, Grid, TextField, Typography } from "@mui/material"
import AutocompleteCatalogs from "../../ui/AutocompleteCatalogs"



interface OptionalRequirementsProps {
  
  formikMethod:any;
}

const languages = [
  { id: 'es', label: 'Español' },
  { id: 'en', label: 'English' },
  { id: 'fr', label: 'Français' },
  { id: 'de', label: 'Deutsch' },
  { id: 'it', label: 'Italiano' },
  { id: 'pt', label: 'Português' },
  { id: 'zh', label: '中文' },
  { id: 'ja', label: '日本語' },
  { id: 'ru', label: 'Русский' },
  { id: 'ar', label: 'العربية' },
];

const OptionalRequirements:React.FC<OptionalRequirementsProps> = ({ formikMethod}) => {
 
/*   const [selectedLanguage, setSelectedLanguage] = useState(); */



  return (
     <Grid
                  container
                  spacing={2}
                  display={'flex'}
                  alignItems={'start'}
                  justifyContent={'center'}
                  flexDirection={'column'}
                  p={4}
                >
                  <Grid size={{xs:12}} >
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Lugares de residencia
                    </Typography>
                  </Grid>
                  <Grid size={{xs:12}}>
                   <AutocompleteCatalogs  formikMethod={formikMethod} type={"LOCATION"} label={"Seleccione lugares de residencia"} placeholder={"Seleccione escuelas de procendecia para tu búsqueda"} flag={"location"}/>

                  </Grid>

                  <Grid size={{xs:12}}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Escuelas de procedencia
                    </Typography>
                  </Grid>
                  <Grid size={{xs:12}}>
                   <AutocompleteCatalogs  formikMethod={formikMethod} type={"SCHOOL"} label={"Escuelas"} placeholder={"Seleccione escuelas de procendecia para tu búsqueda"} flag={"school"} />
               
                  </Grid>

                  <Grid size={{xs:12}} >
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Empresas de referencia
                    </Typography>
                  </Grid>
                  <Grid size={{xs:12}}>
                   <AutocompleteCatalogs  formikMethod={formikMethod} type={"COMPANY"} label={"Empresas"} placeholder={"Seleccione empresas de procendecia para tu búsqueda"} flag={"company"} />
                  </Grid>

                     <Grid size={{ xs: 12 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Idiomas ideal del perfil
        </Typography>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Autocomplete
         sx={{ width: "60%" }}
          multiple
          options={languages}
          /* getOptionLabel={(option) => (typeof option === "string" ? option : option.title)} */
          value={formikMethod.values.language}
           onChange={(_event, newValue) => {
          // Map to store either objects or strings (for freeSolo)
          const updatedValue = newValue.map((item:any) =>
            typeof item === "string" ? item : item
          );
          formikMethod.setFieldValue('language', updatedValue); // Store full objects or strings in Formik
        }}

/*  onInputChange={(_event, newValue) => setText(newValue || "")} */
   /*      filterSelectedOptions */
       /*  freeSolo */

          renderInput={(params) => (
            <TextField
              {...params}
              label="Seleccionar idioma"
              variant="outlined"
              fullWidth
            />
          )}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          getOptionKey={(option) => option.id}
        />
      </Grid>

                  <Grid size={{xs:12}}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      ¿Cómo imaginas a tu próximo candidato?
                    </Typography>
                  </Grid>
                  <Grid size={{xs:12}}>
                    <TextField
                      name="about"
                      fullWidth
                      variant="outlined"
                      onChange={formikMethod.handleChange}
                      placeholder="Describe al candidato..."
                      size="medium"
                        sx={{width:'30rem'}}
                    />
                  </Grid>
                </Grid>
  )
}

export default OptionalRequirements