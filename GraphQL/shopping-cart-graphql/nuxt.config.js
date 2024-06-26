export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Shopping Cart - eCommerce Site",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Discover the best online shopping experience with a wide range of products at unbeatable prices. Shop electronics, fashion, home goods, and more on My eCommerce Site.",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://kit.fontawesome.com/e850630278.js",
        crossorigin: "anonymous",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  plugins: [{ src: "@/plugins/cookies.js", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/apollo", "cookie-universal-nuxt"],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://api.escuelajs.co/graphql",
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
