<template>
  <div class="container">
    <h1>Home page</h1>
    <input type="text" v-model="message" />

    <!-- passing props to message componet -->
    <Message :message="message" />

  
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      message: "Write Something",
    };
  },
};
</script>
<style scoped>
/* without scope this css will apply to whole app */

.container {
  /* background-color: gray; */
  height: 100vh;
  padding: 20px;
}
</style>
