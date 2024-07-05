export default {
  head: {
    title: "1stopbedrooms",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css",
        integrity:
          "sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==",
        crossorigin: "anonymous",
        referrerpolicy: "no-referrer",
      },
    ],
  },
  css: ["@assets/css/main.css"],

  plugins: [],
  components: true,
  buildModules: ["@nuxtjs/fontawesome"],
  fontawesome: {
    component: "Fa",
    suffix: false,
    icons: {
      solid: true,
      brands: true,
    },
  },

  modules: ["@nuxtjs/apollo"],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://www.sandbox9.1sb.pp.ua/graphql/1",
        httpLinkOptions: {
          headers: {
            Authorization: `Basic ${Buffer.from(
              "user:ovietiiwai4Ooyi"
            ).toString("base64")}`,
          },
        },
      },
    },
  },

  build: {},
};