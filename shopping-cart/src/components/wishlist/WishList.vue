<template>
  <div class="container d-flex flex-wrap justify-content-between mt-5">
    <h1 v-show="!getTotalWishlistItem">Wishlist is Empty</h1>
    <WishListItem
      v-for="item in wishlist"
      :key="item.id"
      :product="item"
      v-show="getTotalWishlistItem"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import WishListItem from "./WishListItem.vue";
export default {
  name: "WishList",
  components: {
    WishListItem,
  },
  computed: {
    ...mapState(["wishlist"]),
    ...mapGetters(["getTotalWishlistItem"]),
    // wishlistItem() {
    //   return this.$store.state.wishlist;
    // },
  },
};
</script>

<style scoped>
.mt-5 {
  margin-top: 80px !important;
}
</style>
