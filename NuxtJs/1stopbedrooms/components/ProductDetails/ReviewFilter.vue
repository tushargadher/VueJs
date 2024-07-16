<template>
  <div class="review-filter">
    <SearchInput
      placeholder="Search Review"
      width="40%"
      :value="searchRequest"
      @input="$emit('update:search-request', $event)"
      @clicked="$emit('search', searchRequest)"
      :showClearButton="false"
    />
    <div class="filter-option">
      <p>{{ reviewRange }}</p>
      <coreDropDown
        label="Sort By"
        name="sort-filter"
        id="sort-filter"
        :value="sortBy"
        :options="ReviewfilterOptions"
        @input="$emit('update:sort-by', $event)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchRequest: String,
    reviewRange: String,
    sortBy: String,
    ReviewfilterOptions: Array,
  },
};
</script>

<style scoped>
.filter-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}
</style>
