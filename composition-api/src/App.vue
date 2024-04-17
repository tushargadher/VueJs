<template>
  <HelloWorld id="myComponent"></HelloWorld>
  <Method></Method>
  <Watch></Watch>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Method from "./components/Method.vue";
import Watch from "./components/Watch.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Method,
    Watch,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
