import { Box, type BoxProps } from "@mui/material";
import type { ReactNode } from "react";


interface CardSpaceProps extends BoxProps {
  children: ReactNode;
}

const CardSpace = ({ children, ...props }: CardSpaceProps) => {
  return (
    <Box
    
      sx={{
        border: "1px solid #d4d4d456",
        borderRadius:'10px',
        boxShadow:'2px #000000a8',
        width: "100%",
        height:'auto',
        background: "#ffffff",
        ...props.sx, // Permite sobrescribir estilos desde las props
      }}
      {...props} // Pasa cualquier otra prop de Box
    >
      {children}
    </Box>
  );
};

export default CardSpace;