<template>
  <div class="app-container">
    <h1>Teleport Component Example</h1>
    <p>
      In Vue.js, creating a teleport component allows you to render a
      component's HTML output at a different place in the DOM hierarchy than
      where the component itself is located. This is particularly useful when
      you want to render content in a different part of the DOM tree, like
      directly under the body tag, outside of the current component's scope.
    </p>
    <button @click="showModel = true">Show Model</button>

    <teleport to=".model-root">
      <Model v-show="showModel" @closepopup="showModel = false">
        <template v-slot:heading>
          <h1>Basic Usage</h1>
        </template>
        <template v-slot:body>
          <p>
            Wrap the content you want to teleport with teleport and use the to
            attribute to specify the target destination where the content should
            be rendered.
          </p>
        </template>
      </Model>
    </teleport>
  </div>
</template>

<script>
import Model from "./components/popup-model.vue";

export default {
  name: "App",
  components: {
    Model,
  },
  data() {
    return {
      showModel: false,
    };
  },
};
</script>

<style>
* {
  margin: 0;
}
.app-container {
  margin: 20px;
  border: 1px solid black;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
}
</style>
