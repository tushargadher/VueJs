<template>
  <div class="container d-flex flex-wrap justify-content-between mt-5">
    <h1 v-show="!getTotalCartItem">Cart is Empty</h1>
    <div class="w-75 border" v-show="getTotalCartItem">
      <!-- cart is the state from storage -->
      <CartItem v-for="product in cart" :key="product.id" :product="product" />
    </div>
    <div class="w-25 border" v-show="getTotalCartItem">
      <div>
        <h1>Summery</h1>
        <p>Total Amount ${{ calculateTotalPrice }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import CartItem from "./CartItem.vue";
export default {
  name: "Cart",
  components: {
    CartItem,
  },
  computed: {
    ...mapState(["cart"]),
    // cartItems() {
    //   return this.$store.state.cart;
    // },

    ...mapGetters(["calculateTotalPrice", "getTotalCartItem"]),
    // getTotalPrice() {
    //   return this.$store.getters.calculateTotalPrice;
    // },
  },
};
</script>

<style scoped>
.mt-5 {
  margin-top: 80px !important;
}
</style>
