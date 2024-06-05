<template>
  <div v-if="loading" class="container loading-indicator">
    <FullLoader />
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
          v-for="category in categories"
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
    <div class="pagination" v-show="!selectedCategory && !searchQuery">
      <button class="button" @click="handlePreviousPage" v-show="this.offset">
        Previous
      </button>
      <button class="button" @click="handleNextPage">Next</button>
    </div>
  </div>
</template>

<script>
import { debounce } from "lodash";
import {
  GET_PRODUCT_AND_CATEGORIES,
  GET_PRODUCT_BY_CATEGORIES,
  SEARCH_PRODUCT,
} from "../../GraphQL/Query/query";

export default {
  middleware: "auth",
  data() {
    return {
      loading: false,
      products: [],
      categories: [],
      searchQuery: "",
      selectedCategory: null,
      offset: 0,
      limit: 9,
    };
  },
  created() {
    this.fetchProductsandCategory();
    this.debouncedHandleSearch = debounce(this.handleSearch, 400);
  },
  watch: {
    offset() {
      this.fetchProductsandCategory();
    },
  },
  methods: {
    handleNextPage() {
      if (this.products.length < this.limit) {
        alert("You are not last page");
      } else {
        this.offset += this.limit;
      }
    },
    handlePreviousPage() {
      this.offset -= this.limit;
    },
    async fetchProductsandCategory() {
      // console.log("fetching product");
      this.loading = true;
      try {
        const response = await this.$apollo.query({
          query: GET_PRODUCT_AND_CATEGORIES,
          variables: {
            limit: this.limit,
            offset: this.offset,
          },
        });
        this.loading = false;
        this.products = response.data ? response.data.products : null;
        this.categories = response.data ? response.data.categories : null;
      } catch (error) {
        this.loading = false;
        console.log(`error while fetching products ${error}`);
      }
    },
    async filterBycategory(e) {
      this.selectedCategory = parseFloat(e.target.value);
      console.log(e.target.value);
      try {
        const response = await this.$apollo.query({
          query: GET_PRODUCT_BY_CATEGORIES,
          variables: {
            categoryId: this.selectedCategory,
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
      this.fetchProductsandCategory();
    },

    //search product
    async handleSearch() {
      if (!this.searchQuery) {
        this.fetchProductsandCategory();
        return;
      }
      try {
        const response = await this.$apollo.query({
          query: SEARCH_PRODUCT,
          variables: {
            title: this.searchQuery,
            categoryId: this.selectedCategory || null, // Pass null if no category is selected
          },
        });
        console.log(response.data.products);
        this.products = response.data.products;
      } catch (error) {
        console.error(`Error while searching product: ${error}`);
      }
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
.pagination {
  display: flex;
  justify-content: space-evenly;
}
.button {
  width: fit-content;
}
@media only screen and (max-width: 1200px) {
  .container {
    padding: 100px;
  }
}
@media only screen and (max-width: 900px) {
  .container {
    padding: 100px 30px;
  }
}
</style>
