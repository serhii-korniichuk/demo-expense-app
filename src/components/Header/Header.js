import React from "react";
import { Container, Typography } from "@mui/material";
import { graphql, Link, useStaticQuery } from "gatsby";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          subTitle
        }
      }
    }
  `);
  const { title, subTitle } = data.site.siteMetadata;
  return (
    <Container maxWidth="xl" align="left" sx={{ marginTop: "48px" }}>
      <Link to="/">
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
      </Link>
    </Container>
  );
};

export default Header;
