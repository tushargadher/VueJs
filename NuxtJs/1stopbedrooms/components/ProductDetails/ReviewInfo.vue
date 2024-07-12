<template>
  <div class="review">
    <ProductRating
      :rating="review.rating.rating * 100"
      :numberOfReviews="review.rating.number"
    />
    <p>{{ review.rating.number }} reviews</p>
    |
    <p>Web ID : {{ webId }}</p>
  </div>
</template>

<script>
import ProductRating from "./../Product/Details/ProductRating.vue";

export default {
  props: {
    review: {
      type: Object,
      required: true,
    },
    webId: {
      type: String,
      required: true,
    },
  },
  components: { ProductRating },
};
</script>

<style scoped>
.review {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
}
</style>
