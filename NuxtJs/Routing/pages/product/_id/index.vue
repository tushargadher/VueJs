<template>
  <div>
    <v-container>
      <!-- Product Hero Section -->
      <v-row>
        <v-col cols="12" md="6">
          <v-carousel
            :cycle="true"
            :show-arrows="false"
            hide-delimiter-background
            delimiter-icon="mdi-circle"
          >
            <v-carousel-item
              v-for="(image, index) in product.images"
              :key="index"
              :src="image"
            >
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="12" md="6">
          <h1>{{ product.title }}</h1>
          <p>Price: {{ product.price }} $</p>
          <p>{{ product.description }}</p>

          <h2>Product Details</h2>
          <ul>
            <li>Category: {{ product.category.name }}</li>
          </ul>
          <h2>Category: {{ product.category.name }}</h2>
          <v-img
            :src="product.category.image"
            alt="Category Image"
            max-height="200px"
            max-width="200px"
          ></v-img>

          <v-btn
            ><NuxtLink :to="`/product/${product.id}/reviews`">
              Write a Review
            </NuxtLink></v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import products from "../../../static/products";
export default {
  name:'product-details',
  validate({ params }) {
    //this is validate that the id params must be string and digit
    return typeof params.id === "string" && /^\d+$/.test(params.id);
  },
  data() {
    return {
      slug: this.$route.params,
      id: this.$route.params.id,
    };
  },
  computed: {
    product() {
      return products.find((product) => product.id == this.id);
    },
  },
};
</script>
