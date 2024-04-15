<template>
  <ParentComponent />
  <!-- our custom input tag does not bind app componet data name  -->
  <!-- this v-model value is pass to child compomonent as modelValue props automacaltity -->
  <InputTag v-model="name" />
  <InputTag v-model="place" />
</template>

<script>
import InputTag from "./components/InputTag.vue";
import ParentComponent from "./components/ParentComponent.vue";

export default {
  name: "App",
  components: {
    ParentComponent,
    InputTag,
  },
  data() {
    return {
      place: "home",
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
