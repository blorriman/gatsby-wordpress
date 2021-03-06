module.exports = {
  siteMetadata: {
    siteUrl: `https://bl-gatsby-wordpress.netlify.com/`,
    title: `Gatsby WordPress Demo`,
    description: `This is a demo of Gatsby using WordPress as a headless CMS`,
    author: `Bob Lorriman`,
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
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-wordpress-demo`,
        short_name: `wp-demo`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/avatar.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        // I have created a dummy site for us to use with the plugins we discussed
        baseUrl: "webrenovations.ca/",
        protocol: "http",
        hostingWPCOM: false,
        // We will be using some advanced custom fields
        useACF: false,
        acfOptionPageIds: [],
        verboseOutput: false,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: "http://www.webrenovations.ca/",
          replacementUrl: "https://localhost:8000",
        },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          // "**/pages",
          "**/media",
          // "**/tags",
          // "**/taxonomies",
          "**/users",
        ],
        excludedRoutes: [],
        normalizer: function({ entities }) {
          return entities
        },
        // defaults
        maxWidth: 650,
        wrapperStyle: ``,
        postTypes: ["post", "page"],
        backgroundColor: `white`,
        withWebp: false, // enable WebP files generation
        // add any image sharp fluid options here
        // ...
        plugins: [
          {
            resolve: `gatsby-wordpress-inline-images`,
            options: {
              baseUrl: `webrenovations.ca/`,
              protocol: `http`,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
