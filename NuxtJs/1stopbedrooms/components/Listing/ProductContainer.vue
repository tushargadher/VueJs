<template>
  <div class="products">
    <Product v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["products"]),
  },
};
</script>

<style scoped>
.products {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  min-height: 80vh;
}
</style>
