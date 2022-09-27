import React from "react";
import { observer } from "mobx-react";
import Layout from "../layout";
import { Box, Button, Typography, Grid } from "@mui/material";
import { DecorImage, HomeImage } from "../components/Home/Home";

const IndexPage = () => (
  <Layout
    privateRoute
    seo={{
      metaTitle: "Register",
      metaDescription: "Register in 50 Stars Rentals ",
    }}
  >
    <Grid
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="900px"
      // item
      // xs={12}
      // md={10}
    >
      <Box position="relative">
        <Typography
          component="h1"
          variant="h1"
          color="#FFFFFF"
          align="center"
          fontWeight="700"
          fontSize="48px"
          marginBottom="48px"
        >
          CONGRATULATIONS
        </Typography>
        <DecorImage src="/decor.svg" />
      </Box>

      <Typography
        component="h5"
        variant="h5"
        color="#FFFFFF"
        align="center"
        marginBottom="48px"
        maxWidth="450px"
      >
        Now you are on the main page. Soon we will provide you with detailed feedback
        on the result of your work
      </Typography>
      <Button type="submit" variant="contained" size="large" sx={{ mt: 3, mb: 2 }}>
        See You
      </Button>
      <HomeImage src="/homePeople.svg" alt="InCode home" />
    </Grid>
  </Layout>
);

export default observer(IndexPage);
