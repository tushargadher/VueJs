<template>
  <div class="container">
    <h4>Third Component</h4>
    <p>{{ username }}</p>
    <p>{{ secondMessage }}</p>
    <p>Name from App Component {{ name }}</p>
    <p>{{ productName }}</p>
  </div>
</template>
<script>
import { inject, toRefs } from "vue";
export default {
  name: "ThirdComponent",
  setup() {
    //inject have two parameter first is key and second is default value
    const name = inject("provide_name");
    const productData = inject("productData", {productName:"Default Name"});
    return {
      name,
      ...toRefs(productData),
    };
  },
  inject: ["username", "secondMessage"],
};
</script>
<style scoped>
.container {
  border: 1px solid black;
}
</style>
