<template>
  <button class="btn" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  // props: {
  //   buttonTitle: {
  //     type: String,
  //     //   require: true,
  //     default: "My Button",
  //   },
  // },
  methods: {
    onClick() {
      this.$emit("clicked");
    },
  },
};
</script>

<style scoped>
.btn {
  border: none;
  padding: 10px;
  background-color: #426cb9;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.btn:hover {
  background-color: rgb(57, 97, 171);
}
</style>
