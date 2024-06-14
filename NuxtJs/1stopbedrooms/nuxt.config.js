import { setContext } from "apollo-link-context";
import { HttpLink } from "apollo-link-http";

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
    ],
  },

  css: ["@assets/css/main.css"],

  plugins: [],

  components: true,

  buildModules: [],

  modules: ["@nuxtjs/apollo"],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://www.sandbox9.1sb.pp.ua/graphql/1/listing",
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
