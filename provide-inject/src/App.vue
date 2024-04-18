<template>
  <p>UserName form App.vue {{ name }}</p>
  <p>{{ productName }} {{ company }}</p>
  <FirstComponent />
</template>

<script>
import { reactive, toRefs, provide } from "vue";
import FirstComponent from "./components/FirstComponent.vue";
export default {
  name: "App",

  components: {
    FirstComponent,
  },
  setup() {
    let state = reactive({
      productName: "SmartWatch",
      company: "Boat",
    });
    //provide take two agrument first is key and second is value
    provide("provide_name", "Vuejs ");
    provide("productData", state);
    return {
      ...toRefs(state),
    };
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
