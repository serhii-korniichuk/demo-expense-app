import React from "react";
import Layout from "../layout";

const NotFoundPage = () => (
  <Layout
    seo={{
      metaTitle: "404",
      metaDescription: "Not found",
    }}
  >
    <h1>{"NOT FOUND"}</h1>
    <p>{"You just hit a route that doesn't exist... the sadness."}</p>
  </Layout>
);

export default NotFoundPage;
