import { Container, Typography } from "@mui/material";
import React from "react";
import Layout from "../layout";

const NotFoundPage = () => (
  <Layout
    seo={{
      metaTitle: "404",
      metaDescription: "Not found",
    }}
  >
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h1" color="#FFFFFF" marginBottom="48px" align="center">
        {"NOT FOUND"}
      </Typography>
      <Typography component="h5" variant="h5" color="#FFFFFF" align="center">
        {"You just hit a route that doesn't exist"}
      </Typography>
    </Container>
  </Layout>
);

export default NotFoundPage;
