<template>
  <!-- if we need to only one or two class dynamically -->
  <!-- <div class="container" :class="{ styledContainer: applyStyle }"> -->
  <!-- but we need to apply more classes dynamically then -->
  <div class="container-bind" v-bind:class="applyClasses">
    <img v-bind:src="nuxtlogo" alt="nuxtlogo" />
    <h1>Binding in Nuxt js</h1>
    <h4>{{ message }}</h4>
    <input type="text" v-model="inputValue" />

    <p>{{ inputValue }}</p>
    <div>
      <a v-bind:href="NuxtUrl">learn Nuxt js</a>
    </div>

    <h4 v-bind:class="isAvailable ? 'green' : 'denger'">HTML Binding</h4>

    <span v-html="tag"></span>

    <b
      v-bind:style="{
        color: FontColor,
        // 'font-size': fontSize + 'px',
        fontSize: fontSize + 'px',
        padding: '20px',
      }"
      >Inline Style</b
    >
    <b v-bind:style="styleObject">Inline Style With Object</b>

    <button v-on:click="applyStyle = !applyStyle">Change Style</button>

    <!-- template tag dose not redner itself in dom -->
    <template v-if="show">
      <h3>Hello</h3>
      <h3>From</h3>
      <h3>Vue</h3>
    </template>
  </div>
</template>
<script>
export default {
  // The data() function is used to define the initial state (data) of a nuxt component.
  data() {
    return {
      nuxtlogo:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png",
      message: "Data Binding ",
      inputValue: "two way data binding",
      NuxtUrl: "https://nuxt.com/docs/getting-started/installation",
      applyStyle: false,
      tag: "<h1>this is html code</h1><p>This is paragraph</p>",
      spanMessgae: "this is span message",
      isAvailable: true,
      FontColor: "orange",
      fontSize: 50,
      show: true,
    };
  },

  computed: {
    applyClasses() {
      return {
        styledContainer: this.applyStyle,
        fontColor: this.applyStyle,
      };
    },
    styleObject() {
      return {
        color: this.FontColor,
        fontSize: this.fontSize + "px",
        padding: "20px",
      };
    },
  },
};
</script>
<style scoped>
.container-bind {
  padding: 20px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  box-sizing: border-box;
}
.styledContainer {
  background-color: rgb(85, 232, 85);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.fontColor {
  color: brown;
}
img {
  height: 10vh;
}
.denger {
  background-color: red;
}
.green {
  background-color: green;
}
</style>
