<template>
  <div class="container">
    <h1>Hello User</h1>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  name: "IndexPage",
};
</script>
<style scoped>
img {
  height: 200px;
}
</style>
