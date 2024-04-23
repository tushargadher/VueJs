<template>
  <Navbar />
  <router-view></router-view>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Home,
  },
};
</script>

<style>
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
