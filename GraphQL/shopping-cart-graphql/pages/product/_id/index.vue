<template>
  <div class="container">
    <div class="product-page">
      <div class="product-container">
        <div class="product-images">
          <img
            :src="product?.images[0]"
            alt="Main Product Image"
            class="main-image"
            @error="handleImageError"
          />
          <div class="thumbnail-images">
            <img
              v-for="(image, index) in product?.images.slice(1)"
              :key="index"
              :src="image"
              alt="Thumbnail Image"
              class="thumbnail-image"
              @error="handleImageError"
            />
          </div>
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
import { GET_PRODUCT_BY_ID } from "../../../GraphQL/Query/query";

export default {
  methods: {
    handleImageError(e) {
      e.target.src =
        "https://www.feed-image-editor.com/sites/default/files/perm/wysiwyg/image_not_available.png";
    },
  },
  apollo: {
    product: {
      query: GET_PRODUCT_BY_ID,
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
.container {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.product-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.product-container {
  display: flex;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  max-width: 1000px;
  width: 100%;
}

.product-images {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
}

.main-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

.thumbnail-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.thumbnail-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
}

.product-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: 20px;
  text-align: left;
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

@media only screen and (max-width: 768px) {
  .product-container {
    flex-direction: column;
    align-items: center;
  }

  .product-images,
  .product-details {
    width: 100%;
  }

  .product-details {
    text-align: center;
    padding: 0;
  }

  .thumbnail-images {
    justify-content: center;
  }
}
</style>
