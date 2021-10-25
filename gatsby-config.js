module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.planserv.co.za',
    title: 'planserv',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js'), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
  ],
};
