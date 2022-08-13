import { Box, Container } from "@mui/material";
import React from "react";
import Logo from "../Logo";

type Props = {
  children: React.ReactNode;
}

const HomeLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <Container maxWidth={false} sx={{
      background: "#1D283A",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }} >
      <Box sx={{
        ml: "60px",
        minWidth: "100%",
      }}>
        <Logo></Logo>
      </Box>
      {children}
    </Container>
  );
};

export default HomeLayout;