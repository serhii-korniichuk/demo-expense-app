import { PropTypes } from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";
import siteMetadata from "../../constants/siteMetadata";

const SEO = ({ seo = {} }) => {
  const { title, description, siteName } = siteMetadata;

  const defaultSeo = {
    metaTitle: title,
    metaDescription: description,
    shareImage: null, // need image
    favicon: null, // need image
  };

  /* Merge default and page-specific SEO values */
  const fullSeo = { ...defaultSeo, ...seo };

  const getMetaTags = () => {
    const tags = [];

    if (fullSeo.metaTitle) {
      tags.push(
        {
          property: "og:title",
          content: fullSeo.metaTitle,
        },
        {
          name: "twitter:title",
          content: fullSeo.metaTitle,
        }
      );
    }
    if (fullSeo.metaDescription) {
      tags.push(
        {
          name: "description",
          content: fullSeo.metaDescription,
        },
        {
          property: "og:description",
          content: fullSeo.metaDescription,
        },
        {
          name: "twitter:description",
          content: fullSeo.metaDescription,
        }
      );
    }

    if (fullSeo.article) {
      tags.push({
        property: "og:type",
        content: "article",
      });
    }

    tags.push({ name: "twitter:card", content: "summary_large_image" });

    return tags;
  };

  const metaTags = getMetaTags();

  return (
    <Helmet
      title={`${fullSeo.metaTitle}-${siteName}`}
      titleTemplate={`${fullSeo.metaTitle}-${siteName}`}
      meta={metaTags}
      link={[
        {
          rel: "icon",
          href: fullSeo.favicon && fullSeo.favicon.publicURL,
        },
      ]}
    />
  );
};

SEO.propTypes = {
  seo: PropTypes.object,
};

export default SEO;
