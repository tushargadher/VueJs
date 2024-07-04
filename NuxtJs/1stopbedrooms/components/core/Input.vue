<template>
  <input
    :type="type"
    :placeholder="placeholder"
    v-model="inputValue"
    class="custom-input"
  />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "Enter text...",
    },
    value: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
};
</script>

<style scoped>
.custom-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  margin: 10px 0px;
}

.custom-input:focus {
  border-color: #007bff; /* Example focus color */
}
</style>
