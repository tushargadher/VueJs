<template>
  <div class="filter-container">
    <SkeletonFilterLoader v-if="!FiltersBlockCount" />
    <FilterCart
      v-for="filter in filtersBlock"
      :key="filter.attrCode"
      :filterData="filter"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["filtersBlock"]),
    ...mapGetters(["FiltersBlockCount"]),
  },
};
</script>

<style scoped>
.filter-container {
  width: 25%;
  padding: 20px 10px;
}
</style>
