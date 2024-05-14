<template>
  <div class="product">
    <img :src="product.images[0]" alt="Product Image" class="product-image" />
    <div class="product-info">
      <h2 class="product-title">{{ product.title }}</h2>
      <p class="product-price">${{ product.price }}</p>
      <p class="product-description">{{ product.description }}</p>
      <h3 class="product-category">{{ product.category.name }}</h3>
      <img
        :src="product.category.image"
        alt="Category Image"
        class="category-image"
      />
      <button @click="showDetails">View</button>
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
    showDetails() {
      alert("Display ");
    },
  },
};
</script>

<style scoped>
.product {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: rgb(206, 208, 241);
  margin: 10px;
}

.product-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

.product-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}

.product-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.product-price {
  font-size: 20px;
  margin-bottom: 10px;
}

.product-description {
  margin-bottom: 20px;
}

.product-category {
  font-size: 18px;
  margin-bottom: 10px;
}

.category-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
}
</style>
