<template>
  <NavBar />
  <!-- to display route components -->
  <router-view />
  <!-- <Home />
  <Watcher /> -->
</template>

<script>
import NavBar from "./components/NavBar.vue";
// import Home from "./components/Home.vue";
// import Watcher from "./components/Watcher.vue";
export default {
  components: {
    NavBar,
    // Home,
    // Watcher,
  },
};
</script>
