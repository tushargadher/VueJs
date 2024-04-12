<template>
  <div class="container">
    <h2>Second Component</h2>
    <ThirdComponent />
  </div>
</template>
<script>
import ThirdComponent from "./ThirdComponent.vue";
export default {
  name: "SecondComponent",
  components: {
    ThirdComponent,
  },
};
</script>
<style scoped>
.container {
  border: 1px solid black;
}
</style>
