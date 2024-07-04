<template>
  <div class="listing-container">
    <ListingHeader />
    <ListingBadgeContainer />
    <SkeletonProductLoader v-if="loading" :count="perPageValue" />
    <ListingProductContainer v-else />
    <ListingFooter />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ProductContainer",
  computed: {
    ...mapState(["parPage", "loading", "perPageValue"]),
  },
};
</script>

<style scoped>
.listing-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  min-height: 100vh;
}
</style>
