<template>
  <div>
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
<style>
/* without scope this css will apply to whole app */
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
div {
  /* background-color: gray; */
  height: 100vh;
}
</style>
