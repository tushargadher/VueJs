<template>
  <div class="filterBadge-container">
    <FilterBadge
      v-for="badge in filterBadge"
      :key="badge.attrValue"
      :Filter="badge"
    />
    <button v-show="filterBadge.length" @click="handleClearFilters">
      Clear Filters
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["filterBadge"]),
  },
  methods: {
    handleClearFilters() {
      this.$store.dispatch("handleClearFilters", {
        router: this.$router,
      });
    },
  },
};
</script>

<style scoped>
.filterBadge-container {
  margin-bottom: 14px;
}
.filterBadge-container button {
  border: none;
  background: transparent;
  color: blue;
}
.filterBadge-container button:hover {
  cursor: pointer;
}
</style>
