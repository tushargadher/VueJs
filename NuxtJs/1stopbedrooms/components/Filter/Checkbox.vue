<template>
  <div class="checkbox">
    <input
      type="checkbox"
      :id="checkboxId"
      :name="options.attrLabel"
      :value="options.attrValue"
      :checked="isSelected"
      @change="handleChange"
      :disabled="isDisabled || options.itemCount === 0"
    />
    <div :class="labelClass">
      <label :for="checkboxId">{{ options.attrLabel }}</label>
      <p class="item-count">({{ options.itemCount }})</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
    attrCode: {
      type: String,
      required: true,
    },
    isSelected: {
      type: Boolean,
      required: true,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    checkboxId() {
      return `checkbox_${this.attrCode}_${this.options.attrValue}`;
    },
    labelClass() {
      return {
        label: true,
        "disable-label": this.isDisabled || this.options.itemCount === 0,
      };
    },
  },
  methods: {
    handleChange(event) {
      const isChecked = event.target.checked;
      this.$emit("change", {
        attrCode: this.attrCode,
        attrValue: this.options.attrValue,
        isChecked,
      });
    },
  },
};
</script>

<style scoped>
.checkbox {
  display: flex;
  opacity: 0.9;
  margin: 10px 0;
}
label,
p {
  font-size: 0.9rem;
}
p {
  opacity: 0.7;
}
input[type="checkbox"] {
  margin-right: 6px;
  font-size: 1.3rem;
}
.label {
  display: flex;
}
.disable-label {
  opacity: 0.5;
}
</style>
