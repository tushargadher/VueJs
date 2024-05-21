<template>
  <div>
    <h1>Home Page</h1>
  </div>
</template>

<script>
const api = "https://api.escuelajs.co/api/v1/products";
export default {
  name: "IndexPage",
  // locally using head object
  head: {
    title: "Home - SEO",
    titleTemplate: "%s - Nuxt",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Home Page",
      },
      // hid indicates unique id, below description is ignored since we have assigned hid, if we remove then both descriptions apply
      {
        hid: "description",
        name: "description",
        content: "Second SEO and meta tag in nuxtjs",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  async fetch() {
    // window.location;

    const result = await fetch(api);
    const data = await result.json();
    // localStorage.setItem(products, JSON.stringify(data)); //when storing data into localstorage we need to stringfy because localstorage support only string datatype, If you try to store an object or array directly, it will be converted to the string "[object Object]", which is not useful.
    console.log(data);
  },
};
</script>
