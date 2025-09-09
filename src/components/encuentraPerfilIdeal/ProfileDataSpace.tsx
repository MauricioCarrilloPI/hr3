import { Grid, TextField, Typography } from '@mui/material'

interface ProfileProps{
    Profile: string;
    handleChange: any;
    setStep: React.Dispatch<React.SetStateAction<number>>;
}

const ProfileDataSpace:React.FC<ProfileProps> = ({Profile, handleChange, setStep}) => {

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setStep(1)
    }
  };    

  return (
     <Grid
                  container
                  my={4}
                  spacing={2}
                  display={'flex'}
                  alignItems={'start'}
                  justifyContent={'center'}
                  flexDirection={'column'}
                  p={4}
                >
                  <Grid  size={12} >
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Puesto que deseas buscar
                    </Typography>
                  </Grid>
                  <Grid  size={12}>
                    <TextField
                    name='profile'
                      fullWidth
                      variant="outlined"
                      placeholder="Escribe el puesto..."
                      size="medium"
                      value={Profile}
                      onChange={handleChange}
                       onKeyDown={handleKeyPress} 
                       sx={{width:{xs:'100%', md:'20rem'}}} 
                    />
                  </Grid>
                  <Grid  size={12}>
                    <Typography variant="body2" color="text.secondary">
                      Ej. Gerente de marketing, Desarrollo de software, Diseñador
                      UX
                    </Typography>
                  </Grid>
                </Grid>
  )
}

export default ProfileDataSpace