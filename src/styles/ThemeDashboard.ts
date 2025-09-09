import { createTheme } from '@mui/material/styles';

// Define el tema con una fuente personalizada
const themeDasboard = createTheme({
  typography: {
    fontFamily: '"Sansation", sans-serif', // Fuente personalizada
  },
  palette: {
    primary: {
      main: '#000000ff', // Color primario
    },
    secondary: {
      main: '#7a7a7aff', // Color secundario
    },
  },
});

export default themeDasboard;