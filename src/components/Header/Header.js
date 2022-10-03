import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import siteMetadata from "../../constants/siteMetadata";

const Header = () => {
  const { title, subTitle } = siteMetadata;
  return (
    <Container maxWidth="xl" align="left" sx={{ marginTop: "48px" }}>
      <NavLink to="/">
        <Typography
          component="h3"
          variant="h3"
          color="logo.main"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <Typography
          component="h5"
          variant="h5"
          color="logo.sub"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          {subTitle}
        </Typography>
      </NavLink>
    </Container>
  );
};

export default Header;
