<template>
  <!-- click for handing click event in botton componet -->
  <button @click="handleClick">{{ buttonTitle }}</button>
</template>

<script>
export default {
  props: {
    buttonTitle: {
      type: String,
      default: "button title",
    },
  },
  methods: {
    handleClick() {
      this.$emit("clicked");
    },
  },
};
</script>

<style scoped>
button {
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px 15px;
  color: black;
}
</style>
