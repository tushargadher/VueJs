<template>
  <div class="container" v-if="!loading">
    <h1 v-if="error">{{ error }}</h1>
    <div class="product-container">
      <ImageGallery />
      <ProductDetails />
    </div>
    <div class="review-container">
      <ReviewsAndRatings />
    </div>
    <ShippingAndReturns />
    <RelatedSearch />
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import ReviewsAndRatings from "@/components/ProductDetails/ReviewsAndRatings.vue";
import ImageGallery from "@/components/ProductDetails/ImageGallery.vue";
import ShippingAndReturns from "../../components/ProductDetails/ShippingAndReturns.vue";
import RelatedSearch from "../../components/ProductDetails/RelatedSearch.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    ImageGallery,
    ReviewsAndRatings,
    ShippingAndReturns,
    RelatedSearch,
  },

  created() {
    this.initializeProductData(this.slug);
  },
  computed: {
    ...mapState({
      error: (state) => state.productStore.error,
      loading: (state) => state.productStore.loading,
    }),
    slug() {
      return this.$route.path;
    },
  },
  methods: {
    ...mapActions("productStore", [
      "fetchProductGeneralData",
      "fetchProductGalleryData",
      "fetchProductGroupingData",
      "fetchProductReviewData",
      "fetchShippingAndRelatedSearchData",
    ]),
    async initializeProductData(slug) {
      try {
        this.$store.commit("productStore/setLoading", true);
        await Promise.all([
          this.fetchProductGeneralData({ slug }),
          this.fetchProductGalleryData({ slug }),
          this.fetchProductGroupingData({ slug }),
          this.fetchProductReviewData({ slug }),
          this.fetchShippingAndRelatedSearchData({ slug }),
        ]);
      } catch (error) {
        console.error(`Error initializing product data: ${error}`);
      } finally {
        this.$store.commit("productStore/setLoading", false);
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 100vw;
  padding: 30px 0;
}
.product-container {
  display: flex;
  justify-content: center;
  width: 100vw;
}
</style>
