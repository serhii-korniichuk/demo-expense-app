import { Box, Typography } from "@mui/material";
import React from "react";

const Logo: React.FC = () => {

  return (
    <Box >
      <Typography sx={{
        color: "#FFFFFF",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "36px",
        lineHeight: "150%",
        mt: "48px",
        boxSizing: "border-box",
      }}>
        InCode
      </Typography>;
      <Typography sx={{
        m: "-25px 0px 0px 1px",
        width: "66px",
        height: "25px",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "155%",
        color: "#539713"
      }}>
        Finance
      </Typography>;
    </Box >
  );
};

export default Logo;