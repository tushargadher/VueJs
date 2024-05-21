<template>
  <div>
    <h1>Contact Page</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Contact-Nuxt SEO",
    };
  },
  // using heed as a fuction we have access to data and computed property
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "About Page Description",
        },
      ],
      bodyAttrs: {
        class: ["darkmode"],
      },
    };
  },
};
</script>

<style>
.darkmode {
  background-color: rgb(24, 24, 24);
  color: white;
}
</style>
