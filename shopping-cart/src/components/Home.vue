<template>
  <div class="container d-flex flex-wrap justify-content-between mt-5">
    <Product v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import Product from "./Product.vue";
export default {
  name: "Home",
  components: {
    Product,
  },
  mounted() {
    this.getAllProduct();
  },
  methods: {
    getAllProduct() {
      //dispatch action to store
      console.log("Api calling");

      this.$store.dispatch("getAllProdoct");
    },
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style lang="scss" scoped></style>
