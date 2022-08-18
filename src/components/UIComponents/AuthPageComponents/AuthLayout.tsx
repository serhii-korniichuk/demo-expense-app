import React, { FC } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Grid } from "@mui/material";
import Logo from "../Logo";


interface Props {
  children: React.ReactNode;
}

const AuthLayout: FC<Props> = ({ children }: Props) => {

  return (

    <React.Fragment>
      <CssBaseline />
      <Grid container style={{
        background: "#F1F2F1",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center"
      }}>
        <Box sx={{
          background: "#1D283A",
          width: "424px",
          px: "48px",
          fontFamily: "Montserrat",
        }}>
          <Logo></Logo>
          {children}
        </Box>
      </Grid>
    </React.Fragment>

  );
};

export default AuthLayout;