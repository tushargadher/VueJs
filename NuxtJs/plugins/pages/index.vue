<template>
  <p>Home page</p>
</template>

<script>
export default {
  name: "IndexPage",
  mounted() {
    //calling custom function that is created in myPlugin
    this.$customFunction();
  },
  head() {
    return {
      title: "Home Page",
    };
  },
};
</script>
