<template>
  <h1>hello nuxt</h1>
</template>

<script>
export default {
  head() {
    return {
      title: "Home Page",
    };
  },
  // Anonymous middleware
  middleware() {
    console.log("Anonymous middleware");
  },
};
</script>
