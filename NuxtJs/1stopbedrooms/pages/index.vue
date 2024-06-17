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
    <div v-if="loading">Loading....</div>
    <div v-else class="product-container">
      <!-- header -->
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
      <!-- filter badge container -->
      <div class="filterBadge-container">
        <filterBadge
          v-for="badge in filterBadge"
          :key="badge.attrValue"
          :Filter="badge"
          @removeFilter="handleRemoveBadge"
        />
      </div>
      <!-- products container -->
      <div class="products">
        <Product
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
      <!-- per-page select options -->
      <div>
        <select v-model="parPage" name="pageSize-filter" id="pageSize-filter">
          <option value="PER_PAGE_36">36</option>
          <option value="PER_PAGE_48">48</option>
          <option value="PER_PAGE_72">72</option>
        </select>
      </div>
      <!-- pagination container -->
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
      filterBadge: [],
      facet: [],
      itemsCount: 0,
      totalPages: 0,
      page: 1,
      title: "",
      sortBy: "RELEVANCE",
      parPage: "PER_PAGE_36",
      loading: true,
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
    },
    "$route.query.parPage": {
      handler(value) {
        this.parPage = value || "PER_PAGE_36";
        this.getProducts();
      },
    },
    "$route.query.page": {
      handler(value) {
        this.page = parseInt(value) || 1;
        this.getProducts();
      },
    },
  },

  methods: {
    handleRemoveBadge({ attrValue }) {
      // Remove the filter from the URL query
      const query = { ...this.$route.query };
      for (const key in query) {
        if (query[key].includes(attrValue)) {
          const values = query[key]
            .split("$")
            .filter((val) => val !== attrValue);
          if (values.length) {
            query[key] = values.join("$");
          } else {
            delete query[key];
          }
        }
      }
      this.$router.push({ query });
      this.parseFacetFromQuery(query);
      this.getProducts();
    },
    parseFacetFromQuery(query) {
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
    parseBadgeFromQuery(query) {
      this.filterBadge = [];
      for (const [key, value] of Object.entries(query)) {
        if (key !== "sortBy" && key !== "parPage" && key !== "page") {
          const values = value.split("$");
          values.forEach((val) => {
            const filter = this.filtersBlock.find((fb) => fb.attrCode === key);
            if (filter) {
              const facet = filter.facets.find((f) => f.attrValue === val);
              if (facet) {
                const badge = {
                  attrCode: key,
                  attrValue: val,
                  attrLabel: facet.attrLabel,
                };
                this.filterBadge.push(badge);
              }
            }
          });
        }
      }
    },
    handleFilterChange(filter) {
      const { attrCode, attrValue, isChecked } = filter;
      const query = { ...this.$route.query };
      if (isChecked) {
        // Add new value to the existing ones, or create a new entry if it doesn't exist
        if (query[attrCode]) {
          const values = query[attrCode].split("$");
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
      this.parseFacetFromQuery(query);
    },
    async getProducts() {
      this.loading = true;
      try {
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
        this.parseBadgeFromQuery(this.$route.query);
      } catch (error) {
        console.error(`Error while fetching products: ${error}`);
      } finally {
        this.loading = false;
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
