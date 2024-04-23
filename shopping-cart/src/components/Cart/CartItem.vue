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
  name: "CartItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeItem() {
      console.log(this.product);
    },
  },
};
</script>

<style scoped>
.cart-item {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}
.card-title {
  font-size: 1.2rem;
  font-weight: bold;
}
.card-text {
  font-size: 1rem;
  color: #333;
}
.cart-item img {
  width: 100px;
  height: auto;
  margin-bottom: 10px;
}
</style>
