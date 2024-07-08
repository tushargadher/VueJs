<template>
  <div class="product-card">
    <ProductTag
      :text="product?.tags?.primaryDealTag"
      v-show="product?.tags?.primaryDealTag"
    />

    <ProductImage
      :mainImage="product?.images?.mainImage"
      :hoverImage="product?.images?.hoverImage"
      :slug="product?.slug"
    />
    <div class="product-info">
      <DynamicDetails
        :details="product?.dynamicAttribute"
        v-if="product.dynamicAttribute"
      />
      <ProductLink :url="product.url" v-if="!product.dynamicAttribute" />
      <ProductName
        :name="product?.name"
        :webId="product?.webId"
        :brandName="product?.brand?.name"
      />

      <ProductPrice
        :finalPrice="product?.price?.finalPrice"
        :msrp="product?.price?.msrp"
        :onSale="!!product?.price?.getSale"
        :getExcludePromo="product?.price?.getExcludePromo"
      />
      <Salestag v-show="product?.price?.getSale" />
      <ProductRating
        :rating="product?.reviews?.rating"
        :numberOfReviews="product?.reviews?.number"
      />
      <DiscountTag :text="product.labels[0]" v-show="shouldShowDiscountTag" />
      <ProductDetailsDelivery :deliveryType="product?.delivery?.method" />
    </div>
  </div>
</template>

<script>
import DiscountTag from "./Tags/DiscountTag.vue";
import Salestag from "./Tags/SaleTag.vue";
import DynamicDetails from "./Details/DynamicDetails.vue";
export default {
  name: "ProductCard",
  components: {
    DiscountTag,
    Salestag,
    DynamicDetails,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    shouldShowDiscountTag() {
      return (
        this.product.labels.length && this.product.labels[0] !== "clearance"
      );
    },
  },
};
</script>

<style scoped>
.product-card {
  width: 31%;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 10px;
  position: relative; /* Ensure position relative for badge absolute positioning */
}

.product-info {
  padding: 16px 0;
}
</style>
