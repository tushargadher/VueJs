<template>
  <div class="container">
    <h2>Replacing Method using composition API</h2>

    <h3>{{ name }} {{ role }}</h3>
    <button @click="handleClick">Change Details</button>
  </div>
</template>

<script>
/* eslint-disable */
import { reactive, toRefs } from "vue";
export default {
  name: "Method",
  setup() {
    let state = reactive({
      name: "Tushar Gadher",
      role: "Full Stack Developer",
    });

    function handleClick() {
      state.role = "VueJs Developer";
    }
    return {
      //toRefs allow as to bind firstname and lastlast without use of state.
      ...toRefs(state),
      handleClick,
    };
  },
};
</script>

<style scoped>
.container {
  border: 1px solid black;
  margin-top: 20px;
}
</style>
