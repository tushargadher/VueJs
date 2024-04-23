<template>
  <div class="product card m-2">
    <div class="product-images mt-3">
      <!-- <img
        v-for="(image, index) in product.images"
        :key="index"
        :src="image"
        :alt="'Product Image ' + (index + 1)"
        class="img-fluid rounded product-image"
      /> -->

      <img
        :src="product.images[0] ? product.images[0] : product.images[1]"
        alt=""
        srcset=""
        class="img-fluid rounded"
      />
    </div>
    <div class="card-body">
      <h2 class="card-title">{{ product.title }}</h2>
      <p class="card-text">Price: {{ product.price }}$</p>
      <!-- <p class="card-text">{{ product.description }}</p> -->
      <div class="d-flex justify-content-between">
        <button @click="addToCart" class="btn btn-primary">Add to Cart</button>
        <button @click="addToWishlist" class="btn btn-success">
          Add to WishList
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart() {
      //dispatch action to store
      this.$store.dispatch("addToCart", this.product);

      console.log(this.$store.state.cart);
    },
    addToWishlist() {
      this.$store.dispatch("addToWishlist", this.product);
    },
  },
};
</script>

<style scoped>
.product {
  width: 350px;
}

.product-images img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.card-text {
  margin-bottom: 10px;
}
</style>
