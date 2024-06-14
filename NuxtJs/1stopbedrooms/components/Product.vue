<template>
  <div class="product-card">
    <div class="product-images">
      <img
        :src="product?.images?.mainImage?.src"
        :alt="product?.images?.mainImage?.alt"
        class="main-image"
      />
      <img
        :src="product?.images?.hoverImage?.src"
        :alt="product?.images?.hoverImage?.alt"
        class="hover-image"
      />
    </div>
    <div class="product-info">
      <a :href="product.url" target="_blank">More options</a>
      <p>{{ product.name }}</p>
      <p>By {{ product.brand.name }}</p>
      <div class="price">
        <p class="final-price">${{ product?.price?.finalPrice }}</p>
        <p class="MRP-price">${{ product?.price?.msrp }}</p>
      </div>

      <p>
        (Rating:
        {{ product.reviews.rating }}) ( {{ product.reviews.number }})
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-card {
  width: 31%;
  box-sizing: border-box;
  /* border: 1px solid #ccc; */
  background-color: #fff;
  margin-bottom: 10px;
}

.product-images {
  display: flex;
  justify-content: center;
  position: relative;
}
.main-image {
  width: 100%;
  /* max-width: 300px; */
}
.hover-image {
  width: 100%;
  /* max-width: 300px; */
  position: absolute;
  top: 0;
  opacity: 0;
  transition: opacity 0.3s;
}
.product-images:hover .hover-image {
  cursor: pointer;
  opacity: 1;
}
.product-info {
  padding: 16px 0px;
}
.product-info a {
  text-decoration: none;
  color: gray;
}
.product-info .price {
  display: flex;
  align-items: flex-end;
}
.final-price {
  font-weight: bold;
  padding-right: 5px;
  font-size: 1.1rem;
}
.MRP-price {
  text-decoration: line-through;
  font-size: 0.8rem;
  opacity: 0.9;
}
</style>
