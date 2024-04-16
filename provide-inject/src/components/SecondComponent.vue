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
  data() {
    return {
      SecondComponentData: "This message is from second component",
    };
  },
  provide() {
    return {
      secondMessage: this.SecondComponentData,
    };
  },
};
</script>
<style scoped>
.container {
  border: 1px solid black;
}
</style>
