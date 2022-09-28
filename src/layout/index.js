import React, { useEffect } from "react";
import { navigate } from "gatsby";
import { ThemeProvider } from "@mui/material/styles";
import { observer } from "mobx-react";
import PropTypes from "prop-types";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import store from "../stores/store";
import theme from "./theme";
import "../assets/css/main.css";

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
      <SEO seo={seo} />
      <Header />
      {children}
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  seo: PropTypes.object,
  privateRoute: PropTypes.bool,
  onlyPublicRoute: PropTypes.bool,
};

export default observer(Layout);
