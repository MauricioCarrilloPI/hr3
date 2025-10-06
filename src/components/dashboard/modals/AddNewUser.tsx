import { CheckCircle, Close, /* ContentCopy */ Mail,  Storefront/* , Visibility, VisibilityOff  */} from "@mui/icons-material";
import { 
  Backdrop, Box, Button, CircularProgress, Fade, Grid, 
  IconButton, InputAdornment, Modal, TextField, /* Tooltip, */ Typography 
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import hr3GetClient from "../../../api/hr3GetClient";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../store/slices/AuthSlice";
import { motion } from 'framer-motion';
import { useState } from "react";
import NewUserDataCard from "../newUserHiringManager/NewUserDataCard";
 // ajusta la ruta si es diferente

interface AddNewUserProps {
  modalOpen: boolean;
  handleCloseModal: () => void;
  isLoadingCompany: boolean;
  dataComapany: any;
}

const AddNewUser: React.FC<AddNewUserProps> = ({
  modalOpen,
  handleCloseModal,
  isLoadingCompany,
  dataComapany,
}) => {

 const authdata = useSelector(selectAuth);
 const [AccountCreatedSuccesfully, setAccountCreatedSuccesfully] = useState<boolean>(false)

/*  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false); */

  const [Email, setEmail] = useState<string>('')
  const [Password, setPassword] = useState<string>('')
  

  const formik = useFormik({
    initialValues: {
      name: "",
      last_name: "",
      second_last_name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),
      last_name: Yup.string().required("El apellido paterno es obligatorio"),
      second_last_name: Yup.string(),
      email: Yup.string().email("Correo inválido").required("El correo es obligatorio"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const payload = {
          ...values,
          company_id: dataComapany?.data?.company_id, 
          parent_id: authdata.user_id,
          rol_id: 1125899907000000
        };

       const result = await hr3GetClient.post("/auth/", payload);
        console.log('RESULT ADD NEW USER', result)

       if(result.status===200){
         setAccountCreatedSuccesfully(true)
setEmail(result.data.data.email)
setPassword(result.data.data.password)
          }


        resetForm();
        /* handleCloseModal(); */
      } catch (error) {
        console.error("Error al crear usuario:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });


  

/*   const handleTogglePassword = () => setShowPassword(!showPassword);
  

 */


  return (
    <Modal
      open={modalOpen}
      onClose={handleCloseModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
      sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}
    >
      <Fade in={modalOpen}>
        <Box
          sx={{
            width: { xs: "100%", sm: "80%", md: "60%", lg: "40%" },
            height: "100vh",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            overflow: "auto",
            borderLeft: "1px solid",
            borderColor: "divider",
            zIndex: "99999",
          }}
        >
          {/* Header */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", my: 3 }}>
            <Typography variant="h5" fontWeight="bold">
              Agregar Nuevo Usuario
            </Typography>
            <IconButton onClick={handleCloseModal}>
              <Close />
            </IconButton>
          </Box>

        
          <Box 
            component="form" 
            onSubmit={formik.handleSubmit}
            sx={{ mt: 2, display: "flex", gap:2, alignItems: "center", justifyContent: "center", flexDirection: "column" }}
          >

            {/* Empresa */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#e0e0e09f",
                height: "15dvh",
                width: "90%",
                borderRadius: "10px",
                position: "relative",
              }}
            >
                
              <Typography fontWeight={"600"} sx={{ position: "absolute", top: "10%", left: "10%", display:'flex', flexDirection:'row', alignItems:'center', gap:1 }}>
                <Storefront fontSize="large"/> Empresa
              </Typography>

              {isLoadingCompany ? (
                <CircularProgress />
              ) : (
                <Typography color="black" fontWeight={"800"} variant="h4">
                  {dataComapany?.data.company_name}
                </Typography>
              )}
            </Box>

{
AccountCreatedSuccesfully?
<>
<Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        background: 'linear-gradient(135deg, #e0e0e09f 0%, #ffffffcc 100%)',
        height: 'auto',
        width: '90%',
        borderRadius: '16px',
        position: 'relative',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        overflow: 'hidden',
      }}
      component={motion.div}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, rgba(0, 255, 128, 0.2) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />
      <CheckCircle
        sx={{
          fontSize: 48,
          color: '#00cc66',
          mb: 1,
          zIndex: 1,
        }}
        component={motion.svg}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, ease: 'backOut' }}
      />
      <Typography
        variant="h6"
        sx={{
          color: '#101010ff',
          fontWeight: 600,
          textAlign: 'center',
          zIndex: 1,
          background:'black',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        component={motion.div}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Creaste una cuenta exitosamente
      </Typography>
</Box>


<NewUserDataCard Email={Email} Password={Password}  setAccountCreatedSuccesfully={setAccountCreatedSuccesfully}/>
</>
:
<Box>


            {/* Datos del usuario */}
            <Grid width={"100%"} flexWrap={"wrap"} display={"flex"} gap={1} my={3}>
              <TextField
                fullWidth
                label="Nombre completo"
                margin="normal"
                variant="outlined"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                sx={{ width: "48%" }}
                label="Apellido Paterno"
                margin="normal"
                variant="outlined"
                name="last_name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                helperText={formik.touched.last_name && formik.errors.last_name}
              />
              <TextField
                sx={{ width: "48%" }}
                label="Apellido Materno"
                margin="normal"
                variant="outlined"
                name="second_last_name"
                value={formik.values.second_last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.second_last_name && Boolean(formik.errors.second_last_name)}
                helperText={formik.touched.second_last_name && formik.errors.second_last_name}
              />
            </Grid>

            <TextField
              fullWidth
              label="Correo electrónico"
              margin="normal"
              variant="outlined"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Mail color="action" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Botones */}
            <Box sx={{ mt: 3, display: "flex", gap: 2, justifyContent: "flex-end" }}>
              <Button
                variant="outlined"
                onClick={handleCloseModal}
                sx={{ borderRadius: "8px" }}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={formik.isSubmitting}
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "black",
                  "&:hover": { backgroundColor: "grey.800" },
                }}
              >
                {formik.isSubmitting ? "Creando..." : "Crear Usuario"}
              </Button>
            </Box>
</Box>
}





          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AddNewUser;


