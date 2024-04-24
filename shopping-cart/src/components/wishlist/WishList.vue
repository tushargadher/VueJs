<template>
  <div class="container d-flex flex-wrap justify-content-between mt-5">
    <WishListItem v-for="item in wishlist" :key="item.id" :product="item" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import WishListItem from "./WishListItem.vue";
export default {
  name: "WishList",
  components: {
    WishListItem,
  },
  computed: {
    ...mapState(["wishlist"]),
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
