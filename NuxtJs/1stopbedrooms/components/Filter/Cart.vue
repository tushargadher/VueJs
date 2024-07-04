<template>
  <div class="filterBox-container">
    <div class="title" @click="toggleFilters">
      <b>{{ filterData.title }}</b>
      <button class="toggle-button">{{ showFilters ? "▲" : "▼" }}</button>
    </div>

    <div v-show="showFilters" class="checkbox-container">
      <SearchInput
        placeholder="Search brands..."
        @input="handleSearchChange"
        :value="searchKeyword"
        v-if="showSearchBar"
      />
      <p v-if="filteredFacets.length == 0">Your search returned no results.</p>
      <FilterCheckbox
        v-for="(options, index) in filteredFacets"
        :key="index"
        :options="options"
        :attrCode="filterData.attrCode"
        :isSelected="isSelected(filterData.attrCode, options.attrValue)"
        :isDisabled="loading"
        @change="handleFilterChange"
        v-else
      />
      <FilterPriceRange v-if="showPriceRange" :filterData="filterData" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    filterData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showFilters: true,
      searchKeyword: "",
    };
  },
  methods: {
    handleSearchChange(keyword) {
      this.searchKeyword = keyword.toLowerCase();
    },
    handleFilterChange(filter) {
      this.$store.dispatch("handleFilterChange", {
        filter,
        query: this.$route.query,
        router: this.$router,
      });
    },
    toggleFilters() {
      this.showFilters = !this.showFilters;
    },
  },
  computed: {
    ...mapState(["filterBadge", "loading"]),
    filteredFacets() {
      if (!this.searchKeyword) {
        return this.filterData.facets;
      }
      return this.filterData.facets.filter((facet) =>
        facet.attrLabel.toLowerCase().includes(this.searchKeyword)
      );
    },
    isSelected() {
      return (attrCode, attrValue) =>
        this.filterBadge.some(
          (badge) =>
            badge.attrCode === attrCode && badge.attrValue === attrValue
        );
    },
    showPriceRange() {
      return this.filterData.attrCode === "price";
    },
    showSearchBar() {
      return this.filterData.attrCode === "brand";
    },
  },
};
</script>

<style scoped>
.filterBox-container {
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.toggle-button {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
}

.checkbox-container {
  /* border: 1px solid black; */
  height: 30vh;
  margin-top: 5px;
  overflow-y: auto;
}

/* scroll bar css */
.checkbox-container::-webkit-scrollbar {
  width: 7px;
  background-color: transparent;
}

.checkbox-container::-webkit-scrollbar-track {
  background-color: transparent;
}

.checkbox-container::-webkit-scrollbar-thumb {
  background-color: #b4b5b4;
  border-radius: 5px;
}

.checkbox-container::-webkit-scrollbar-button {
  background-color: transparent;
}
</style>
