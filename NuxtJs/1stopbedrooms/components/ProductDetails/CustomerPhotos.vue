<template>
  <div class="customer-photos">
    <h2>Customer Photos</h2>
    <div class="photo-gallery">
      <div
        v-for="(image, index) in reviewData.images"
        :key="index"
        class="photo-item"
      >
        <img :src="image.src" :alt="image.atl" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      reviewData: (state) => state.productStore.reviewData,
    }),
  },
};
</script>

<style scoped>
.customer-photos {
  margin-top: 20px;
  border-top: 1px solid #ececec;
  padding: 20px 0px;
}
.photo-gallery {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  margin-top: 20px;
}
.photo-item img {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 5px;
}
</style>
