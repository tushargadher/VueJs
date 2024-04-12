<template>
  <div class="container">
    <h1>First Component</h1>
    <!-- <p>{{ username }}</p> -->
    <SecondComponent />
  </div>
</template>
<script>
import SecondComponent from "./SecondComponent.vue";
export default {
  name: "FirstComponent",
  components: {
    SecondComponent,
  },
  //   inject: ["username"],
};
</script>
<style scoped>
.container {
  border: 1px solid black;
  padding: 10px;
  box-sizing: border-box;
  height: 60vh;
  width: 50vh;
}
</style>
