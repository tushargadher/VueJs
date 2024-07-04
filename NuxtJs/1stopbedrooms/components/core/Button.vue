<template>
  <button @click="handleClick" :disabled="disabled" class="custom-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.custom-button {
  padding: 8px 16px;
  margin: 5px;
  font-size: 0.8rem;
  border: 2px solid #0e259a;
  border-radius: 30px;
  cursor: pointer;
  background-color: white;
  transition: background-color 0.3s ease;
  color: #0e259a;
  font-weight: bold;
}
.custom-button:hover {
  background-color: #edf0fc;
}
.custom-button.disabled {
  background-color: #ccc;
  color: #999;
  cursor: not-allowed;
}
</style>
