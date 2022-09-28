module.exports = {
  siteMetadata: {
    title: "InCode",
    logoTitle: "InCode",
    siteName: "InCode",
    subTitle: "Finance",
    description: "Demo Expense App InCode Finance",
    logoSubTitle: "Finance",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mui-emotion",
  ],
};
