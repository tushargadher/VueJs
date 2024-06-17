<template>
  <div class="container">
    <div class="filter-container">
      <FilterBox
        v-for="filter in filtersBlock"
        :key="filter.attrCode"
        :filterData="filter"
        @filter-change="handleFilterChange"
      />
    </div>
    <div class="product-container">
      <div class="header">
        <div class="header-title">
          <b>{{ title }}</b>
          <p>{{ itemsCount }} items</p>
        </div>
        <div>
          <select v-model="sortBy" name="sort-filter" id="sort-filter">
            <option value="RELEVANCE">Recommended</option>
            <option value="PRICE_FROM_LOW">Price: Low – High</option>
            <option value="PRICE_FROM_HIGHT">Price: High – Low</option>
          </select>
        </div>
      </div>
      <div class="products">
        <Product
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
      <div>
        <select v-model="parPage" name="pageSize-filter" id="pageSize-filter">
          <option value="PER_PAGE_36">36</option>
          <option value="PER_PAGE_48">48</option>
          <option value="PER_PAGE_72">72</option>
        </select>
      </div>
      <div>
        <Pagination :currentPage="page" :totalPages="totalPages" />
      </div>
    </div>
  </div>
</template>

<script>
import { GET_PRODUCTS } from "../GraphQL/Query/query.js";

export default {
  name: "IndexPage",
  data() {
    return {
      products: [],
      filtersBlock: [],
      itemsCount: 0,
      title: "",
      sortBy: "RELEVANCE",
      parPage: "PER_PAGE_36",
      page: 1,
      totalPages: 0,
      facet: [],
    };
  },
  created() {
    const query = this.$route.query;
    if (query.sortBy) {
      this.sortBy = query.sortBy;
    }
    if (query.parPage) {
      this.parPage = query.parPage;
    }
    if (query.page) {
      this.page = parseInt(query.page);
    }
    this.parseFacetFromQuery(query);
    this.getProducts();
  },

  watch: {
    sortBy(newValue) {
      this.updateQuery({ sortBy: newValue });
    },
    parPage(newValue) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      this.updateQuery({ parPage: newValue });
    },
    facet: {
      handler() {
        this.getProducts();
      },
      deep: true,
    },
    "$route.query.sortBy": {
      handler(value) {
        this.sortBy = value || "RELEVANCE";
        this.getProducts();
      },
      // immediate: true,
    },
    "$route.query.parPage": {
      handler(value) {
        this.parPage = value || "PER_PAGE_36";
        this.getProducts();
      },
      // immediate: true,
    },
    "$route.query.page": {
      handler(value) {
        this.page = parseInt(value) || 1;
        this.getProducts();
      },
      // immediate: true,
    },
  },

  methods: {
    parseFacetFromQuery(query) {
      console.log("parseFacet from query is called...");
      this.facet = [];
      for (const [key, value] of Object.entries(query)) {
        if (key !== "sortBy" && key !== "parPage" && key !== "page") {
          const values = value.split("$");
          this.facet.push({
            attributeCode: key,
            value: values,
          });
        }
      }
    },
    handleFilterChange(filter) {
      const { attrCode, attrValue, isChecked } = filter;
      const query = { ...this.$route.query };
      // console.log(query);
      // console.log(query[attrCode]);
      if (isChecked) {
        // Add new value to the existing ones, or create a new entry if it doesn't exist
        if (query[attrCode]) {
          const values = query[attrCode].split("$");
          console.log(values);
          if (!values.includes(attrValue)) {
            values.push(attrValue);
            query[attrCode] = values.join("$");
          }
        } else {
          query[attrCode] = attrValue;
        }
      } else {
        // Remove the unchecked value
        if (query[attrCode]) {
          const values = query[attrCode]
            .split("$")
            .filter((val) => val !== attrValue);
          if (values.length) {
            query[attrCode] = values.join("$");
          } else {
            delete query[attrCode];
          }
        }
      }

      this.$router.push({ query });
      // Update the facet array
      this.parseFacetFromQuery(query);
    },
    async getProducts() {
      try {
        console.log("Get product is calling...");
        const response = await this.$apollo.query({
          query: GET_PRODUCTS,
          variables: {
            slug: "bedroom/bedroom-sets",
            request: {
              sortBy: this.sortBy,
              perPage: this.parPage,
              page: this.page,
              facet: this.facet,
            },
          },
        });
        this.itemsCount = response.data.listing.listingCategory.itemsCount;
        this.title = response.data.listing.listingCategory.title;
        this.products = response.data.listing.listingCategory.items;
        this.filtersBlock = response.data.listing.listingCategory.filtersBlock;
        this.totalPages = response.data.listing.listingCategory.pages;
      } catch (error) {
        console.error(`Error while fetching products: ${error}`);
      }
    },
    updateQuery(params) {
      this.$router.push({ query: { ...this.$route.query, ...params } });
    },
  },
};
</script>

<style>
.container {
  display: flex;
  padding: 0 50px;
}

.filter-container {
  width: 20%;
  padding: 20px 10px;
}

.product-container {
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 20px;
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header select {
  border-radius: 5px;
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.header b {
  font-size: 24px;
}

.products {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  min-height: 80vh;
}
</style>
