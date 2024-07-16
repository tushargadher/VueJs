<template>
  <div class="input-container" :style="{ width: inputWidth }">
    <input
      type="text"
      class="input"
      :placeholder="placeholder"
      :value="value"
      @input="handleInput"
    />
    <i
      class="fa-solid fa-magnifying-glass magnifier"
      @click="handleSearchClick"
    ></i>
    <span
      v-show="showClearButton && value"
      class="icon close"
      @click="clearInput"
      >&#10006;</span
    >
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "placeholder",
    },
    value: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "100%",
    },
    showClearButton: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    inputWidth() {
      return this.width;
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    handleSearchClick() {
      this.$emit("clicked", this.value);
    },
    clearInput() {
      this.$emit("input", "");
    },
  },
};
</script>

<style scoped>
.input-container {
  position: relative;
  display: inline-block;
  /* width: 100%; */
}

.input {
  width: 100%;
  padding: 10px 35px 10px 15px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 0.9rem;
  outline: none;
  box-sizing: border-box;
}

.input:focus {
  border-color: #007bff;
}

.icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 1rem;
}

.magnifier {
  color: #ccc;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}
.magnifier:hover {
  cursor: pointer;
}

.close {
  color: #007bff;
}
</style>
