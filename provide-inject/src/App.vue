<template>
  <p>UserName form App.vue {{ name }}</p>
  <FirstComponent />
</template>

<script>
import FirstComponent from "./components/FirstComponent.vue";
export default {
  name: "App",
  components: {
    FirstComponent,
  },
  data() {
    return {
      name: "Tushar Gadher",
    };
  },
  // provide: {
  //   username: "Tushar Gadher",
  // },
  provide() {
    return {
      username: this.name,
    };
  },
};
</script>

<style>
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
