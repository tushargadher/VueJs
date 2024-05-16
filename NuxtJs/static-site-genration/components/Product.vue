<!-- components/Product.vue -->
<template>
  <div class="product">
    <div class="product-image">
      <img
        :src="product.images[0]"
        @error="handleImageError"
        alt="Product Image"
        @click="navigateTodetailsPage(product.id)"
      />
    </div>
    <div class="product-details">
      <h2>{{ product.title }}</h2>
      <p class="price">$ {{ product.price }}</p>
      <p class="description">{{ product.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleImageError(event) {
      // Display a fallback image URL directly when the primary image fails to load
      event.target.src =
        "https://www.feed-image-editor.com/sites/default/files/perm/wysiwyg/image_not_available.png"; // Fallback image URL
    },
    navigateTodetailsPage(productId) {
      this.$router.push(`/product/${productId}`);
    },
  },
};
</script>

<style scoped>
.product {
  display: flex;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  padding: 10px;
}

.product-image img {
  max-width: 200px;
  height: auto;
}

.product-details {
  padding-left: 20px;
}

.price {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.description {
  margin-top: 10px;
  color: #666;
}
img:hover {
  cursor: pointer;
}
</style>
