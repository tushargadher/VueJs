<template>
  <div>
    <div v-if="!loading" class="product-container">
      <h1 v-if="error">{{ error }}</h1>
      <!-- {{ typeof galleryData.productImages }} -->
      <div
        class="image-container"
        v-if="
          galleryData &&
          galleryData.productImages &&
          galleryData.productThumbImages
        "
      >
        <ImageGallery
          :mainImages="galleryData.productImages"
          :thumbnails="galleryData.productThumbImages"
        />
      </div>

      <ProductDetails :product="productData" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import ImageGallery from "../../components/ProductDetails/ImageGallery.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: { ImageGallery },

  created() {
    this.initializeProductData(this.slug);
  },
  computed: {
    ...mapState({
      productData: (state) => state.productStore.productData,
      galleryData: (state) => state.productStore.galleryData,
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
    ]),
    async initializeProductData(slug) {
      try {
        this.$store.commit("productStore/setLoading", true);
        await Promise.all([
          this.fetchProductGeneralData({ slug }),
          this.fetchProductGalleryData({ slug }),
          // this.fetchProductGroupingData({ slug }),
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
.product-container {
  display: flex;
  justify-content: center;
  width: 100vw;
  padding: 30px 0;
}
.image-container {
  width: 45%;
  /* border: 1px solid black; */
}
</style>
