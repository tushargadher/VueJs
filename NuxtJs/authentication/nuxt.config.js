export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "user-authentication-system",
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
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],
  axios: {
    baseURL: " https://api.escuelajs.co/api/v1/",
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: "access_token",
          global: true,
          required: true,
          type: "Bearer",
        },
        refreshToken: {
          property: "refresh_token",
          data: "refresh_token",
        },
        user: {
          property: false, // Use the whole response or specify user property if applicable
          autoFetch: true, // Ensure this is set to true for automatic fetching
        },
        endpoints: {
          login: { url: "auth/login", method: "post" },
          logout: { url: "/api/auth/logout", method: "post" },
          user: { url: "auth/profile", method: "get" },
        },
      },
    },

    // Enable verbose logging
    debug: true,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
