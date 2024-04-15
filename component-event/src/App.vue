<template>
  <ParentComponent />
  <ChildComponent />
</template>

<script>
import ParentComponent from "./components/ParentComponent.vue";
export default {
  name: "App",
  components: {
    ParentComponent,
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
