import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { observer } from "mobx-react";
import Header from "../components/Header/Header";
import "../assets/css/main.css";
// import SEO from '../components/SEO';
// import themeStore from '../stores/themeStore';
import PropTypes from "prop-types";
import store from "../stores/store";
import { navigate } from "gatsby";
// import NotificationsBlock from '../components/NotificationsBlock';
import Container from "@mui/material/Container";
import theme from "./theme";

const Layout = ({ children, seo, privateRoute, onlyPublicRoute }) => {
  useEffect(() => {
    store.authUser();
  }, []);

  const isBrowser = typeof window !== "undefined";

  const isAuth = store && store.isAuth;

  if (privateRoute && !isAuth && isBrowser) {
    navigate("/auth");
    return null;
  }

  if (onlyPublicRoute && isAuth && isBrowser) {
    navigate("/");
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      {/* <SEO seo={seo} /> */}
      <Header />
      {/* <NotificationsBlock /> */}
      <Container
        maxWidth="lg"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Container>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default observer(Layout);
