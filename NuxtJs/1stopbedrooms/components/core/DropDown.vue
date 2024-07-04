<template>
  <SkeletonLoader v-if="loading" width="200px" height="40px" />
  <div class="container" v-else>
    <label>{{ label }}</label>
    <select
      @change="handleChange($event.target.value)"
      :value="value"
      :name="name"
      :id="id"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DropDownSelect",

  props: {
    label: {
      type: String,
    },
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: false,
    },
  },
  methods: {
    handleChange(value) {
      this.$emit("input", value);
    },
  },
  computed: {
    ...mapState(["loading"]),
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.container label {
  font-size: 0.8rem;
  opacity: 0.8;
}
select {
  border-radius: 5px;
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.3s, box-shadow 0.3s;
  width: auto;
  max-width: 100%;
}
</style>
