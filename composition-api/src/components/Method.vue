<template>
  <div class="container">
    <h2>Replacing Method using composition API</h2>

    <input type="text" placeholder="Enter Name" v-model="name" />

    <input type="text" placeholder="Enter Role" v-model="role" />

    <h3>{{ name }} {{ role }}</h3>
    <button @click="handleClick">Reset Details</button>
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
      state.name = "Tushar Gadher";
      state.role = "Full Stack Developer";
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
