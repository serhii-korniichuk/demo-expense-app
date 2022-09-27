import React from "react";
import Layout from "../layout";

const NotFoundPage = () => (
  <Layout
    onlyPublicRoute
    seo={{
      metaTitle: "Register",
      metaDescription: "Register in 50 Stars Rentals ",
    }}
  >
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
