<template>
  <div><h2>About page</h2></div>
</template>

<script>
export default {
  layout: "about",
  middleware: "getToken",
  head() {
    return {
      title: "About as Page",
    };
  },
};
</script>

<style scoped></style>
