<template>
  <div class="cart-item card mb-3">
    <img
      :src="product.images[0] ? product.images[0] : product.images[1]"
      alt=""
      srcset=""
      class="img-fluid rounded"
    />
    <div class="card-body">
      <h5 class="card-title">{{ product?.title }}</h5>
      <p class="card-text">Price: ${{ product?.price }}</p>
      <!-- Display additional product details here -->
      <button @click="removeItem" class="btn btn-danger">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WishListItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeItem() {
      //dispatch action to store
      this.$store.dispatch("removeWishListItem", this.product);
    },
  },
};
</script>

<style scoped>
.card {
  width: 300px;
}
.cart-item img {
  /* width: 200px; */
}
</style>
