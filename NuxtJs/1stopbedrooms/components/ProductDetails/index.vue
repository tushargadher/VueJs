<template>
  <div class="product-details-container">
    <h1>{{ product.general.name }}</h1>
    <a href="">{{ product.general.collection.name }}</a>
    By
    <a href="">{{ product.general.brand.name }}</a>
    <ReviewInfo :review="product.review" :webId="product.general.webId" />
    <PriceInfo :price="product.general.price" />
    <DeliveryInfo :delivery="product.additional.delivery" />
    <DropDowns :additional="product.additional" />
  </div>
</template>

<script>
import ReviewInfo from "./ReviewInfo.vue";
import PriceInfo from "./PriceInfo.vue";
import DeliveryInfo from "./DeliveryInfo.vue";
import DropDowns from "./DropDowns.vue";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  components: { ReviewInfo, PriceInfo, DeliveryInfo, DropDowns },
};
</script>

<style scoped>
.product-details-container {
  padding: 0px 20px;
  width: 45%;
  /* border: 1px solid black; */
}
</style>
