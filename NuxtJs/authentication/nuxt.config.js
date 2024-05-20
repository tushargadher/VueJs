export default {
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

  css: ["@assets/css/main.css"],

  plugins: [],

  components: true,

  buildModules: [],

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/auth-next", // Use @nuxtjs/auth-next for the latest version
  ],

  build: {},

  axios: {
    baseURL: "https://api.escuelajs.co/api/v1/", // Ensure there's no leading space
  },
  // router: {
  //   middleware: ["auth"],
  // },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "auth/login",
            method: "post",
            propertyName: "token", // Ensure this matches your API's response
          },
          logout: {
            url: "auth/logout", // Ensure this endpoint is correct
            method: "post",
          },
          user: {
            url: "auth/profile",
            method: "get", // Changed to 'get' if the profile is fetched with GET
            propertyName: "user", // If the user object is directly returned
          },
          // since nuxt auth module does not provide register user endpoint we create it with oursalve
        },
        tokenRequired: true,
        tokenType: "Bearer",
        autoFetchUser: true, // Ensure this is set to true
      },
    },
  },
};
// [GET] https://api.escuelajs.co/api/v1/auth/profile
// # Headers
// {
//   "Authorization": "Bearer {your access token}"
// }
