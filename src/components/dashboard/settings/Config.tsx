import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Divider,
  Alert,
  CircularProgress, // Importar CircularProgress para el loader
} from "@mui/material";
import {
  PersonOutline,
  LockOutlined,
  LinkedIn,
  CheckCircle,
  LinkOff,
  Code,
} from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import CardSpace from "../../../ui/CardSpace";
import { useState } from "react";
import hr3GetClient from "../../../api/hr3GetClient";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, updateAccountId } from "../../../store/slices/AuthSlice";

const Config = () => {
  const authdata = useSelector(selectAuth);
  const dispatch = useDispatch();
  const [showCodeForm, setShowCodeForm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [Account_id_helper, setAccountIdHelper] = useState<string | undefined>();
  const [loading, setLoading] = useState(false); // Estado para controlar el loader

  // Validation schema for username/password form
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("El nombre de usuario es requerido")
      .min(3, "Debe tener al menos 3 caracteres"),
    password: Yup.string()
      .required("La contraseña es requerida")
      .min(6, "Debe tener al menos 6 caracteres"),
  });

  // Validation schema for code entry form
  const codeValidationSchema = Yup.object({
    code: Yup.string()
      .required("El código es requerido")
      .min(4, "El código debe tener al menos 4 caracteres"),
  });

  // Formik for username/password form
  const formik = useFormik({
    initialValues: {
      user_id: authdata.user_id,
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true); // Activar el loader
      try {
        setError(null);
        const result = await hr3GetClient.post("/auth/linkedin", values);

        if (result.status === 202) {
          setAccountIdHelper(result.data.data.account_id);
          setShowCodeForm(true);
        } else if (result.status === 200) {
          dispatch(updateAccountId(result.data.data.account_id));
        }
      } catch (error) {
        setError("Error al vincular usuario a LinkedIn. Por favor, intenta de nuevo.");
        console.error("Error al vincular usuario a LinkedIn:", error);
      } finally {
        setLoading(false); // Desactivar el loader
      }
    },
  });

  // Formik for code entry form
  const codeFormik = useFormik({
    initialValues: {
      code: "",
      user_id: authdata.user_id,
    },
    validationSchema: codeValidationSchema,
    onSubmit: async (values) => {
      setLoading(true); // Activar el loader
      try {
        setError(null);
        const result = await hr3GetClient.post("/auth/2fa", {
          ...values,
        });

        if (result.status === 200) {
          if (Account_id_helper !== undefined) {
            dispatch(updateAccountId(Account_id_helper));
          }
          setShowCodeForm(false);
        }
      } catch (error) {
        setError("Código inválido o error en la verificación. Por favor, intenta de nuevo.");
        console.error("Error al verificar código:", error);
      } finally {
        setLoading(false); // Desactivar el loader
      }
    },
  });

  // Function to handle account unlinking
  const handleUnlinkAccount = async () => {
    setLoading(true); // Activar el loader
    try {
      await hr3GetClient.post("/auth/linkedin/unlink", { user_id: authdata.user_id });
      //dispatch(updateAccountId(null)); // Descomentar si es necesario
    } catch (error) {
      setError("Error al desvincular la cuenta. Por favor, intenta de nuevo.");
      console.error("Error al desvincular cuenta:", error);
    } finally {
      setLoading(false); // Desactivar el loader
    }
  };

  return (
    <Grid
      p={3}
      sx={{ width: "100%" }}
      display={"flex"}
      alignContent={"center"}
      justifyItems={"center"}
      flexDirection={"column"}
      gap={3}
    >
      <CardSpace>
        <Grid
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDirection={"row"}
          width={"100%"}
        >
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
              height: "auto",
              p: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{ placeSelf: "start", fontWeight: "700", color: "grey" }}
            >
              Vinculación de LinkedIn
            </Typography>

            {/* Display error message if any */}
            {error && (
              <Alert severity="error" sx={{ mb: 2, width: "100%" }}>
                {error}
              </Alert>
            )}

            {/* Linked Account UI */}
            {authdata.account_id !== null ? (
              <Box
                sx={{
                  p: 4,
                  borderRadius: 2,
                  backgroundColor: "white",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "#4caf50",
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  <CheckCircle sx={{ fontSize: 36, color: "white" }} />
                </Box>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "text.primary", mb: 1 }}
                >
                  Cuenta de LinkedIn Vinculada
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  Tu cuenta de LinkedIn está correctamente vinculada
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Button
                  color="secondary"
                  variant="outlined"
                  fullWidth
                  onClick={handleUnlinkAccount}
                  size="large"
                  startIcon={<LinkOff />}
                  disabled={loading} // Deshabilitar botón durante la carga
                  sx={{
                    mt: 2,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  {loading ? <CircularProgress size={24} /> : "Desvincular cuenta"}
                </Button>
              </Box>
            ) : showCodeForm ? (
              /* Code Entry Form */
              <Box
                sx={{
                  p: 4,
                  borderRadius: 2,
                  backgroundColor: "white",
                  textAlign: "center",
                }}
              >
                <Code sx={{ fontSize: 48, color: "#0077B5", mb: 2 }} />
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "text.primary", mb: 1 }}
                >
                  Ingresa el código de verificación
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 3 }}
                >
                  Introduce el código que recibiste para completar la vinculación
                </Typography>
                <Divider sx={{ my: 2 }} />
                <form onSubmit={codeFormik.handleSubmit}>
                  <TextField
                    fullWidth
                    id="code"
                    name="code"
                    label="Código de verificación"
                    value={codeFormik.values.code}
                    onChange={codeFormik.handleChange}
                    onBlur={codeFormik.handleBlur}
                    error={codeFormik.touched.code && Boolean(codeFormik.errors.code)}
                    helperText={codeFormik.touched.code && codeFormik.errors.code}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Code />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ mb: 2 }}
                    disabled={loading} // Deshabilitar input durante la carga
                  />
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                    size="large"
                    disabled={loading} // Deshabilitar botón durante la carga
                    sx={{
                      mt: 2,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: 600,
                      backgroundColor: "#0077B5",
                      "&:hover": {
                        backgroundColor: "#005885",
                      },
                    }}
                  >
                    {loading ? <CircularProgress size={24} /> : "Verificar código"}
                  </Button>
                </form>
                <Typography
                  variant="caption"
                  display="block"
                  sx={{ mt: 3, color: "text.secondary" }}
                >
                  Revisa tu correo o LinkedIn para el código
                </Typography>
              </Box>
            ) : (
              /* Username/Password Form */
              <Box
                sx={{
                  p: 4,
                  borderRadius: 2,
                  backgroundColor: "white",
                  textAlign: "center",
                }}
              >
                <LinkedIn sx={{ fontSize: 48, color: "#0077B5", mb: 2 }} />
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "text.primary", mb: 1 }}
                >
                  Vincula tu cuenta de LinkedIn
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 3 }}
                >
                  Conecta tu cuenta para acceder a más funciones
                </Typography>
                <Divider sx={{ my: 2 }} />
                <form onSubmit={formik.handleSubmit}>
                  <Box sx={{ mb: 2 }}>
                    <TextField
                      fullWidth
                      id="username"
                      name="username"
                      label="Nombre de usuario"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.username && Boolean(formik.errors.username)}
                      helperText={formik.touched.username && formik.errors.username}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonOutline />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ mb: 2 }}
                      disabled={loading} // Deshabilitar input durante la carga
                    />
                    <TextField
                      fullWidth
                      id="password"
                      name="password"
                      label="Contraseña"
                      type="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.password && Boolean(formik.errors.password)}
                      helperText={formik.touched.password && formik.errors.password}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockOutlined />
                          </InputAdornment>
                        ),
                      }}
                      disabled={loading} // Deshabilitar input durante la carga
                    />
                  </Box>
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                    size="large"
                    disabled={loading} // Deshabilitar botón durante la carga
                    sx={{
                      mt: 2,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: 600,
                      backgroundColor: "#0077B5",
                      "&:hover": {
                        backgroundColor: "#005885",
                      },
                    }}
                  >
                    {loading ? <CircularProgress size={24} /> : "Vincular cuenta"}
                  </Button>
                </form>
                <Typography
                  variant="caption"
                  display="block"
                  sx={{ mt: 3, color: "text.secondary" }}
                >
                  Tus datos están protegidos y encriptados
                </Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </CardSpace>
    </Grid>
  );
};

export default Config;