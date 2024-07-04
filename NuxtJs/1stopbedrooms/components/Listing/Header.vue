<template>
  <div class="header">
    <div class="header-title">
      <SkeletonLoader v-if="loading" width="100px" />
      <b v-else>{{ title }}</b>
      <SkeletonLoader v-if="loading" />
      <p v-else>{{ itemsCount }} items</p>
    </div>

    <coreDropDown
      label="Sort By"
      :value="sortBy"
      :options="priceSortOptions"
      @input="updateSortBy"
      name="sort-filter"
      id="sort-filter"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState([
      "itemsCount",
      "title",
      "sortBy",
      "priceSortOptions",
      "loading",
    ]),
  },
  methods: {
    ...mapActions(["updateSortBy"]),
    updateSortBy(value) {
      console.log(value);
      this.$store.dispatch("updateSortBy", {
        sortBy: value,
        route: this.$route,
        router: this.$router,
      });
    },
  },
};
</script>

<style scoped>
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
</style>
