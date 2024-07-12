<template>
  <div>
    <ProductDropDown title="Details & Overview" :data="additional.desc" />
    <ProductDropDown
      title="Weight & Dimensions"
      :data="additional.weightAndDim"
    />
    <ProductDropDown title="Specifications" :data="additional.specs" />
  </div>
</template>

<script>
import ProductDropDown from "./ProductDropDown.vue";

export default {
  props: {
    additional: {
      type: Object,
      required: true,
    },
  },
  components: { ProductDropDown },
};
</script>
