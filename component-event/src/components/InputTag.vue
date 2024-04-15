<template>
  for updating
  <input
    type="text"
    placeholder="Enter Input"
    v-bind:value="modelValue"
    class="custom-input"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
/* eslint-disable */
export default {
  name: "InputTag",
  //when we use v-model on custome component it will automacaltity recive prop call modelValue
  props: {
    modelValue: String,
  },
  data() {
    return {
      inputValue: "",
    };
  },
};
</script>

<style scoped>
.custom-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.custom-input:focus {
  outline: none;
  border-color: dodgerblue;
}

/* Placeholder style (optional) */
.custom-input::placeholder {
  color: #aaa;
}
</style>
