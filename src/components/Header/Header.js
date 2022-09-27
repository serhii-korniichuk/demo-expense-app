import { Container, Typography } from "@mui/material";
import { Link } from "gatsby";
import React from "react";
// todo config logo
const Header = () => {
  return (
    <Container maxWidth="xl" align="left" sx={{ marginTop: "48px" }}>
      <Link to="/">
        <Typography
          component="h3"
          variant="h3"
          color="#FFFFFF"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          InCode
        </Typography>
        <Typography
          component="h5"
          variant="h5"
          color="primary.main"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          Finance
        </Typography>
      </Link>
    </Container>
  );
};

export default Header;
