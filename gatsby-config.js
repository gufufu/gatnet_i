/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby-Bootstrap Project",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `mrsoficina.com`,
        protocol: `https`,
        hostingWPCOM: false,
      }
    },
    `gatsby-plugin-react-helmet`
  ],
}
