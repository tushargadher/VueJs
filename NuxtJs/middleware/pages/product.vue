<template>
  <div>
    <h1>Product page</h1>
  </div>
</template>

<script>
export default {
  middleware: "FetchProduct", // Apply route-specific middleware

  // if we have to assign more then one middleware then use below syntex
  // middleware: ["FetchProduct", "othermiddlewarename"],
  head() {
    return {
      title: "Product Page",
    };
  },
};
</script>

<style lang="scss" scoped></style>
