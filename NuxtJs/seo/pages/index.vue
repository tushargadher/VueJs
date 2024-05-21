<template>
<div>
  <h1>Home Page</h1>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  // locally using head object
  head: {
    title: 'Home - SEO-Optimization',
    titleTemplate: '%s - Nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Home Page',
      },
      // hid indicates unique id, below description is ignored since we have assigned hid, if we remove then both descriptions apply
      {
        hid: 'description',
        name: 'description',
        content: 'Second SEO and meta tag in nuxtjs',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
};
</script>
