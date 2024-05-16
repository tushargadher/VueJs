<template>
  <div class="product-details" v-if="product">
    <div class="product-image-container">
      <!-- Render product images -->
      <img
        v-for="(image, index) in product.images"
        :key="index"
        :src="image"
        :alt="`Product Image ${index + 1}`"
        class="product-image"
      />
    </div>
    <div class="product-info">
      <h1 class="product-title">{{ product.title }}</h1>
      <p class="product-price">${{ product.price.toFixed(2) }}</p>
      <p class="product-description">{{ product.description }}</p>
      <div class="category-info">
        <h3 class="product-category">{{ product.category.name }}</h3>
        <img
          :src="product.category.image"
          :alt="product.category.name"
          class="category-image"
        />
      </div>
    </div>
  </div>
  <div v-else class="loading-message">Loading...</div>
</template>

<script>
export default {
  head() {
    return {
      title: "Product Details Page",
    };
  },
  data() {
    return {
      productId: this.$route.params.id,
      product: null,
    };
  },
  mounted() {
    this.fetchProduct();
  },
  methods: {
    async fetchProduct() {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        const data = await response.json();
        const filteredProduct = data.find(
          (item) => item.id === parseInt(this.productId)
        );
        this.product = filteredProduct;
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    },
  },
};
</script>

<style scoped>
.product-details {
  display: flex;
  gap: 20px;
}

.product-image-container {
  flex: 1;
}

.product-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-info {
  flex: 1;
}

.product-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.product-price {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-description {
  margin-bottom: 20px;
}

.category-info {
  display: flex;
  align-items: center;
}

.product-category {
  font-size: 18px;
  margin-right: 10px;
}

.category-image {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
}

.loading-message {
  font-size: 16px;
  font-style: italic;
  color: #666;
  text-align: center;
  padding: 20px;
}
</style>
