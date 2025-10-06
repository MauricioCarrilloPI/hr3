import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface PropsForCard {
  name: string;
  numberof: number;
  littledescripcion: string;
  path: string;
}

const CardsButtonWithData: React.FC<PropsForCard> = ({ name, numberof, littledescripcion, path }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        p:'1',
       width:'96%',
       height:'50%',
        position: "relative",
        border: "1px solid #F5F5F5",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      <Button
        variant="outlined"
        onClick={() => navigate(path)}
        sx={{
          position: "absolute",
          top: "16px",
          right: "16px",
          color: "#ffffffff",
          borderColor: "#000000",
          background:'black',
          borderRadius: "20px",
          textTransform: "none",
          fontWeight: 500,
          fontSize: "14px",
          padding: "6px 12px",
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          gap:1,
          "&:hover": {
            backgroundColor: "#F3E8FF",
            borderColor: "#000000",
            color:'black'
          },
        }}
      >
        Ver Registros
        <ArrowRightAlt/>
      </Button>
      <Typography
        variant="h5"
        sx={{
            position:'absolute',
            top:'9%',
            left:'10%',
          fontWeight: 600,
          color: "#1F2937",
          marginBottom: "12px",
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="h4"
        sx={{
              position:'absolute',
            bottom:'35%',
            left:'20%',
          fontWeight: 800,
          color: "#6a6a6aff",
          marginBottom: "8px",
        }}
      >
        {numberof} 
      </Typography>
      <Typography
        variant="body2"
        sx={{
             position:'absolute',
           bottom:'10%',
            left:'10%',
          color: "#6B7280",
          lineHeight: 1.5,
          maxWidth: "80%",
          fontSize: "16px",
        }}
      >
        {littledescripcion}
      </Typography>
    </Box>
  );
};

export default CardsButtonWithData;