<template>
  <div class="container">
    <div class="product-page">
      <div class="product-container">
        <div class="product-images">
          <img
            v-for="(image, index) in product?.images"
            :key="index"
            :src="image"
            alt="Product Image"
            @error="handleImageError"
          />
        </div>
        <div class="product-details">
          <h1>{{ product?.title }}</h1>
          <p class="price">Price: ${{ product?.price }}</p>
          <p class="description">{{ product?.description }}</p>
          <p class="category">Category: {{ product?.category.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  methods: {
    handleImageError(e) {
      e.target.src =
        "https://www.feed-image-editor.com/sites/default/files/perm/wysiwyg/image_not_available.png";
    },
  },
  apollo: {
    product: {
      query: gql`
        query getProduct($id: ID!) {
          product(id: $id) {
            id
            title
            price
            description
            images
            category {
              id
              name
              image
            }
          }
        }
      `,
      // If your GraphQL query requires variables (e.g., dynamic values like IDs), you can define a variables function inside the query object.
      // This function returns an object containing the variables needed for the query, and it is executed before the query is sent to the server
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
    },
  },
};
</script>
<style scoped>
.product-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.product-container {
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1000px;
}

.product-images {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.product-images img {
  max-width: 100%;
  border-radius: 8px;
  margin: 0 10px;
  height: 300px;
}

.product-details {
  text-align: center;
}

.product-details h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

.product-details .price {
  font-size: 1.5rem;
  color: #007bff;
  font-weight: bold;
  margin-bottom: 20px;
}

.product-details .description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
}

.product-details .category {
  font-size: 1rem;
  color: #555;
  font-style: italic;
}
</style>
