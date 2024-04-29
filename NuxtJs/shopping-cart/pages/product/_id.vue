<template>
  <div>
    <h1>product id {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log(this);
    // console.log(this.$router);
    console.log(this.$route);
  },
};
</script>

<style lang="scss" scoped></style>
