<template>
  <div class="container">
    Vue.js is a progressive JavaScript framework known for its simplicity and
    flexibility in building user interfaces. It features a gentle learning curve
    and can be incrementally adopted into projects.

    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" v-model="name" />
      <br /><br />
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" v-model="email" />
      <br /><br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "VueComponent",
  data() {
    return {
      name: "",
      email: "",
    };
  },
};
</script>

<style scoped>
.container {
  width: 300px;
  border: 2px solid black;
  padding: 10px;
}
</style>
