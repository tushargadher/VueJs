<template>
  <div>
    <h1>About Page</h1>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "About - Nuxt SEO",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "About Page Description",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          herf: "https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap",
        },
      ],

      //  <link href="https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap" rel="stylesheet">
    };
  },
};
</script>

<style scoped>
h1 {
  font-family: "Poetsen One", sans-serif;
}
</style>
