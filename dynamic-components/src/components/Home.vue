<template>
  <div class="container">
    <h1>Dyanmic Component</h1>
    <button @click="currentComponent = 'ReactComponent'">React</button>
    <button @click="currentComponent = 'VueComponent'">Vue</button>
    <button @click="currentComponent = 'AngularComponent'">Angular</button>

    <!-- use keep alive to avoid vue to create new insted everytime -->
    <keep-alive>
      <component v-bind:is="currentComponent" />
    </keep-alive>
  </div>
</template>

<script>
import VueComponent from "./VueComponent.vue";
import ReactComponent from "./ReactComponent.vue";
import AngularComponent from "./AngularComponent.vue";

/* eslint-disable */
export default {
  name: "Home",

  components: {
    VueComponent,
    ReactComponent,
    AngularComponent,
  },
  data() {
    return {
      currentComponent: "ReactComponent",
    };
  },
};
</script>

<style scoped>
.container {
  width: 60vw;
  border: 2px solid black;
  padding: 10px;
}
</style>
