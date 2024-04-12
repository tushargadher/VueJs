<template>
  <div class="container">
    <h4>Third Component</h4>
    <p>{{ username }}</p>
  </div>
</template>
<script>
export default {
  name: "ThirdComponent",
  inject: ["username"],
};
</script>
<style scoped>
.container {
  border: 1px solid black;
}
</style>
