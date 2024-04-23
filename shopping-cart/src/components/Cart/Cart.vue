<template>
  <div class="container d-flex flex-wrap justify-content-between mt-5">
    <!-- <Product v-for="product in products" :key="product.id" :product="product" /> -->
    <CartItem
      v-for="product in cartItems"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
export default {
  name: "Cart",
  components: {
    CartItem,
  },
  computed: {
    cartItems() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style lang="scss" scoped></style>
