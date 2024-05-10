<template>
  <button class="btn" @click="onClick">{{ buttonTitle }}</button>
</template>

<script>
export default {
  props: {
    buttonTitle: {
      type: String,
      //   require: true,
      default: "My Button",
    },
  },
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
  background-color: #42b983;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.btn:hover {
  background-color: #3aa374;
}
</style>
