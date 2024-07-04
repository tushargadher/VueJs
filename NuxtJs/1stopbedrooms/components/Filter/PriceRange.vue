<template>
  <div class="range-container">
    <coreInput type="text" placeholder="min" :value="Math.round(minPrice)" />
    <span class="separator">to</span>

    <coreInput type="text" placeholder="max" :value="Math.round(maxPrice)" />

    <coreButton @click="handleFilter">Apply</coreButton>
  </div>
</template>

<script>
import { mapState } from "vuex";
//stil working on this
export default {
  props: {
    filterData: {
      type: Object,
      required: true,
    },
  },
  //call handle filter change function here to when user click on apply button
  computed: {
    ...mapState(["minPrice", "maxPrice"]),
  },
  methods: {
    handleFilter() {
      // console.log(`${Math.round(this.minPrice)}-${Math.round(this.maxPrice)}`);
      const filter = {
        attrCode: this.filterData.attrCode,
        attrValue: `${Math.round(this.minPrice)}-${Math.round(this.maxPrice)}`,
        isChecked: true,
      };
      this.$store.dispatch("handleFilterChange", {
        filter,
        query: this.$route.query,
        router: this.$router,
      });
    },
  },
};
</script>

<style scoped>
.range-container {
  display: flex;
  align-items: center;
  width: 100%;
}

.input-field {
  width: 20%;
  padding: 5px;
}
</style>
