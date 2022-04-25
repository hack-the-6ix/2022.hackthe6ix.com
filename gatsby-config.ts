import type { GatsbyConfig } from "gatsby";
require("dotenv").config();

const config: GatsbyConfig = {
  jsxRuntime: "automatic",
  siteMetadata: {
    title: `2022-landing`,
    siteUrl: `https://www.yourdomain.tld`,
    applications: {
      start: new Date(),
      end: new Date(),
    },
    featureFlags: {
      applications: false,
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": process.env.GOOGLE_ANALYTICS_ID,
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
    }
  ]
};

export default config;
