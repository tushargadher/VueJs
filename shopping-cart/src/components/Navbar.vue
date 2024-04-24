<template>
  <nav class="navbar navbar-expand-lg bg-dark position-fixed w-100 top-0">
    <div class="container">
      <router-link
        :to="{ name: 'Home' }"
        class="navbar-brand text-light"
        href="#"
        >Shopping Cart</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li> -->
        </ul>

        <!-- <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          /> -->
        <button class="border-0 mx-3 p-1">
          <router-link :to="{ name: 'WishList' }">
            Wishlist
            <i class="bi bi-heart">
              <span
                class="position-absolute top-4 translate-middle badge rounded-pill bg-danger"
                v-show="showWishListBagde"
              >
                {{ getTotalWishlistItem }}
              </span>
            </i>
          </router-link>
        </button>
        <button class="border-0 p-1">
          <router-link :to="{ name: 'Cart' }">
            My Cart
            <i class="bi bi-cart3">
              <span
                class="position-absolute top-4 translate-middle badge rounded-pill bg-danger"
                v-show="showCartBagde"
              >
                {{ getTotalCartItem }}
              </span></i
            >
          </router-link>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
/* eslint-disable */

import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  // computed: mapGetters({
  //   //name: gettername form store
  //   cartCount: "getTotalCartItem",
  // }),
  computed: {
    // getCartLength() {
    //   return this.$store.getters.getTotalCartItem;
    // },

    // getWishListLength() {
    //   return this.$store.getters.getTotalWishlistItem;
    // },
    
    //if both have same name then we can pass into array
    ...mapGetters(["getTotalCartItem", "getTotalWishlistItem"]),
    showCartBagde() {
      return this.getTotalCartItem > 0;
    },
    showWishListBagde() {
      return this.getTotalWishlistItem > 0;
    },
  },
};
</script>

<style scoped>
.navbar {
  z-index: 1000;
}
a {
  color: inherit;
  text-decoration: none;
}
.navbar-toggler {
  border-color: antiquewhite;
  background-color: white;
}
</style>
