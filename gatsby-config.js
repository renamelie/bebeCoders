const products = require("./src/products")

module.exports = {
  siteMetadata: {
    title: `BebeCoders`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    products: [...products],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `56e3d212d4325688d6e4a9b3cc298a`,
      },
    },
    {
      resolve: `gatsby-plugin-snipcartv3`,
      options: {
        apiKey: `OTgwMGMyZmYtYjU1Ni00MGExLTlhMTQtYmI0Njk0YWFhMWQ4NjM3MzIwNTY3NjU5ODgxNDUz`,
        autopop: true,
        js: "https://cdn.snipcart.com/themes/v3.0.18/default/snipcart.js",
        jquery: false,
        styles: "https://cdn.snipcart.com/themes/v3.0.18/default/snipcart.css",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
