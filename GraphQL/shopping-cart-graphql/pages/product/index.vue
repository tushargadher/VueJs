<template>
  <div v-if="loading" class="container loading-indicator">
    <Loader />
  </div>
  <div v-else class="container">
    <div class="filter-product">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search for a product"
        class="search-input"
        @change="handleSearch"
      />
    </div>
    <div class="product-container">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
        @deleteProduct="hadnleDeleteProductEvent"
      />
    </div>
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
      searchQuery: "",
    };
  },
  methods: {
    //delete product api
    hadnleDeleteProductEvent(productID) {
      alert(`Product Deleted With ID ${productID}`);
      //filter out deleted product from product array
      this.products = this.products.filter(
        (product) => product.id !== productID
      );
    },

    //search product

    async handleSearch() {
      try {
        const response = await this.$apollo.query({
          query: gql`
            query searchProduct($title: String) {
              products(title: $title) {
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
          variables: {
            title: this.searchQuery,
          },
        });
        console.log(response.data.products);
        this.products = response.data.products;
      } catch (error) {
        console.error(`Error while searching prodoct ${error}`);
      }
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

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.product-container {
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  justify-content: space-around;

  background-color: #f0f2f5;
}
</style>
