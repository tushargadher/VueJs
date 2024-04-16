<template>
  <div class="container">
    <h1>First Component</h1>
    <!-- <p>{{ secondMessage }}</p> -->
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
  //   using provide and inject we can send data parent to inner child but not from inner child to parent,
  // for this we use custome event
  //   inject: ["secondMessage"],
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
