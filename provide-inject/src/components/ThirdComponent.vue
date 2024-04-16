<template>
  <div class="container">
    <h4>Third Component</h4>
    <p>{{ username }}</p>
    <p>{{ secondMessage }}</p>
  </div>
</template>
<script>
export default {
  name: "ThirdComponent",
  inject: ["username", "secondMessage"],
};
</script>
<style scoped>
.container {
  border: 1px solid black;
}
</style>
