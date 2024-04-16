<template>
  <div>
    <h1>Composition API</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HelloWorld",
  setup() {
    const message = ref("Hello this is composition api example");
    console.log(message);
    return {
      // key:pair
      // since both are same we write only one
      message,
    };
  },
};
</script>

<style scoped></style>
