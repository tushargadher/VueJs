export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "authentication",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/auth-next", //this module allow us to use $auth.loggedIn and $auth.user
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  axios: {
    //api url
    baseURL: " https://api.escuelajs.co/api/v1/",
  },
  //configure auth
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "auth/login",
            method: "post",
            propertyName: "token",
          },
          logout: { url: "/api/auth/logout", method: "post" },
          user: { url: "auth/profile", method: "post", propertyName: "user" },
          //since nuxt auth does not give as register end point,so we are going to create new user oursalves
        },
      },
    },
  },
};
