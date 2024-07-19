<template>
  <div class="related-search-container">
    <p>Related Searches</p>
    <div class="related-search">
      <div
        v-for="(search, index) in shippingData.relatedSearch"
        :key="index"
        class="search-item"
      >
        <NuxtLink :to="search.link" class="search-link">{{
          search.title
        }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      shippingData: (state) => state.productStore.shippingData,
    }),
  },
};
</script>

<style scoped>
.related-search-container {
  width: 100%;
  margin: 0 auto;
  padding: 20px 60px;
}

.related-search-container p {
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 20px;
}

.related-search {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.search-item {
  display: flex;
}

.search-link {
  background-color: #f0f2ff;
  border-radius: 20px;
  padding: 10px 20px;
  text-decoration: none;
  color: #0000ff;
  font-size: 0.9rem;
  white-space: nowrap;
}

.search-link:hover {
  text-decoration: underline;
}
</style>
