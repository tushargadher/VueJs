const axios = require("axios");
export default {
  // mode: "universal", //universal mode enalbles server side rendering
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "SEO-Optimization",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "SEO and meta tag in nuxtjs",
      },
      //hid indicate unique id , below description is igonre since we have assign hid,if we remove then both description apply
      {
        hid: "description",
        name: "description",
        content: "Seocond SEO and meta tag in nuxtjs",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        herf: "https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap",
      },
    ],

    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // "@nuxtjs/eslint-module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/sitemap", "@nuxtjs/robots"],
  sitemap: {
    // options
    hostname: "http://localhost:3000", //Your website’s base URL.
    gzip: true, //Whether to compress the generated sitemap.
    // routes: [
    //   "/page1",
    //   "/page2",
    //   List of routes to include in the sitemap ,Add more routes if needed, or use a function to dynamically generate them
    // ],

    //generating dyamic routes
    routes: async () => {
      const { data } = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      ); // Replace with your API endpoint
      return data.map((product) => `/product/${product.id}`);
    },
    exclude: ["/admin"], //List of routes to exclude from the sitemap.
  },
  // robots file tells search engine crawlers (like Googlebot) which pages they are allowed to crawl and index
  robots: {
    UserAgent: "*", //This line specifies that the following rules apply to all web crawlers , You can also specify a specific user agent if you want to target a specific crawler, like Googlebot.
    Disallow: "/admin",
    Allow: "/",
    Sitemap: "http://localhost:3000/sitemap.xml", //This line provides the URL to the sitemap file. The sitemap helps crawlers understand the structure of your website and find all the pages that should be indexed.
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
