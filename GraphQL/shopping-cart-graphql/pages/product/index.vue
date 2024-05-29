<template>
  <div v-if="loading" class="container loading-indicator">Please wait...</div>
  <div v-else class="container">
    <Product
      v-for="product in products"
      :key="product.id"
      :product="product"
      @deleteProduct="hadnleDeleteProductEvent"
    />
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  middleware: "auth",
  data() {
    return {
      loading: true,
      products: null,
    };
  },
  methods: {
    hadnleDeleteProductEvent(productID) {
      alert(`Product Deleted With ID ${productID}`);
      //filter out deleted product from product array
      this.products = this.products.filter(
        (product) => product.id !== productID
      );
    },
  },
  apollo: {
    products: {
      query: gql`
        query getProducts {
          products {
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
      //   The result function in the Apollo integration for Vue and Nuxt.js is a callback function that gets executed whenever the Apollo query's state changes.
      result({ loading, error, data }) {
        this.loading = loading;
        this.error = error;
        this.products = data ? data.products : null;
      },
    },
  },
};
</script>

<style scoped></style>
