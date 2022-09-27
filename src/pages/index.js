import React from "react";
import { observer } from "mobx-react";
import Layout from "../layout";
import { Box, Button, Typography, Grid } from "@mui/material";
import { DecorImage, HomeImage } from "../components/Home/Images";
import store from "../stores/store";

const IndexPage = () => (
  <Layout
    privateRoute
    seo={{
      metaTitle: "Home",
      metaDescription: "Homepage InCode Finance",
    }}
  >
    <Grid
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="900px"
      maxWidth="xs"
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
          sx={{
            fontSize: {
              lg: "48px",
              xs: "22px",
            },
          }}
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
        Now you are on the main page. Soon we will provide you with detailed feedback on the result
        of your work
      </Typography>
      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => store.logout()}
      >
        See You
      </Button>
      <HomeImage src="/homePeople.svg" alt="InCode home" />
    </Grid>
  </Layout>
);

export default observer(IndexPage);
