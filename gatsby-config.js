/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `personal-website-v2`,
    siteUrl: `https://www.evanyanx.netlify.app`
  },
  plugins: ["gatsby-plugin-netlify","gatsby-plugin-styled-components", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/logos.png"
  }}]


}