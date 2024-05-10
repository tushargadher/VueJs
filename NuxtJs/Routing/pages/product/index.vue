<template>
  <div class="container">
    <Product v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import productData from "../../static/products";

export default {
  name: "product",
  data() {
    return {
      products: productData,
    };
  },
  head() {
    return {
      title: "Products",
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>
