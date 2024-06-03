<template>
  <div v-if="loading" class="container loading-indicator">
    <Loader />
  </div>
  <div v-else class="container">
    <div class="filter-product">
      <!-- search product input feild -->
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search for a product"
        class="search-input"
        @input="debouncedHandleSearch"
      />

      <!-- redner categorys dymacally -->
      <select name="category" id="category" @change="filterBycategory">
        <option value="" selected>Select Category</option>
        <option
          v-for="category in categroys"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <!-- show product if products is not empty -->

    <div v-if="this.products.length" class="product-container">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
        @deleteProduct="hadnleDeleteProductEvent"
      />
    </div>
    <div v-else>
      <NotFound />
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { debounce } from "lodash";

export default {
  middleware: "auth",
  data() {
    return {
      loading: true,
      products: [],
      categroys: [],
      searchQuery: "",
      SelectedCategory: null,
    };
  },
  created() {
    this.debouncedHandleSearch = debounce(this.handleSearch, 400);
  },
  methods: {
    async filterBycategory(e) {
      this.SelectedCategory = parseFloat(e.target.value);
      console.log(e.target.value);
      try {
        const response = await this.$apollo.query({
          query: gql`
            query getProductsByCategory($categoryId: Float!) {
              products(categoryId: $categoryId) {
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
            categoryId: this.SelectedCategory,
          },
        });
        // console.log(response);
        this.products = response.data.products;
      } catch (error) {
        console.error(`Error while fetching product category wise ${error}`);
      }
    },

    //delete product
    hadnleDeleteProductEvent(productID) {
      alert(`Product Deleted With ID ${productID}`);
      this.products = this.products.filter(
        (product) => product.id !== productID
      );
    },

    //search product
    async handleSearch() {
      try {
        const response = await this.$apollo.query({
          query: gql`
            query searchProduct($title: String, $categoryId: Float) {
              products(title: $title, categoryId: $categoryId) {
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
            categoryId: this.SelectedCategory || null, // Pass null if no category is selected
          },
        });
        console.log(response.data.products);
        this.products = response.data.products;
      } catch (error) {
        console.error(`Error while searching product: ${error}`);
      }
    },
  },
  apollo: {
    products: {
      query: gql`
        query getProductsAndCategories {
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
          categories {
            id
            name
            image
          }
        }
      `,
      //   The result function in the Apollo integration for Vue and Nuxt.js is a callback function that gets executed whenever the Apollo query's state changes.
      result({ loading, error, data }) {
        this.loading = loading;
        this.error = error;
        this.products = data ? data.products : null;
        this.categroys = data ? data.categories : null;
      },
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 60px 200px;
}
.product-container {
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  justify-content: space-between;
  background-color: #f0f2f5;
}
.filter-product {
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}
.filter-product input,
select {
  width: 30%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}
</style>
