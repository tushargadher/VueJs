<template>
  <div class="product-details-container">
    <h1>{{ productData.general.name }}</h1>
    <a href="">{{ productData.general.collection.name }}</a>
    By
    <a href="">{{ productData.general.brand.name }}</a>
    <ReviewInfo
      :review="productData.review"
      :webId="productData.general.webId"
    />
    <PriceInfo :price="productData.general.price" />
    <DeliveryInfo :delivery="productData.additional.delivery" />
    <DropDowns :additional="productData.additional" />
  </div>
</template>

<script>
import ReviewInfo from "./ReviewInfo.vue";
import PriceInfo from "./PriceInfo.vue";
import DeliveryInfo from "./DeliveryInfo.vue";
import DropDowns from "./DropDowns.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    ReviewInfo,
    PriceInfo,
    DeliveryInfo,
    DropDowns,
  },
  computed: {
    ...mapState({
      productData: (state) => state.productStore.productData,
    }),
  },
};
</script>

<style scoped>
.product-details-container {
  padding: 0px 20px;
  width: 45%;
  /* border: 1px solid black; */
}
</style>
