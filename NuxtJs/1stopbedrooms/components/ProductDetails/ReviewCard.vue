<template>
  <div class="review-card">
    <div class="reviewer-info">
      <h4 class="reviewer-name">{{ review?.author?.name }}</h4>
      <p class="reviewer-location" v-show="review.address">
        from {{ review?.address?.city }}, {{ review?.address?.regionCode }}
      </p>
      <div class="rating">
        <span
          v-for="i in 5"
          :key="i"
          class="star"
          :class="{ filled: i <= review.rating }"
          >★</span
        >
      </div>
      <p class="verified-purchase" v-if="review.isVerifiedPurchase">
        VERIFIED PURCHASE
      </p>
    </div>
    <div class="review-details">
      <p class="review-summary">{{ review?.summary }}</p>
      <div class="review-images">
        <img
          v-for="image in review.images"
          :key="image.src"
          :src="image.src"
          :alt="image.alt"
          class="review-image"
        />
      </div>
      <p class="review-date">{{ review?.date }}</p>
    </div>
    <div class="button-container">
      <button class="helpful-button">Helpful</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.review-card {
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: start;
}

.reviewer-info {
  padding: 10px;
  flex: 2;
  font-size: 0.8rem;
}

.review-summary {
  opacity: 0.9;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.review-details {
  padding: 10px;
  flex: 10;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
}

.reviewer-name {
  margin: 0;
  font-size: 18px;
}

.reviewer-location {
  margin: 5px 0;
  color: #666;
}

.rating {
  margin: 5px 0;
}

.star {
  color: #e0e0e0;
  font-size: 20px;
}

.star.filled {
  color: #f25d0d;
}

.verified-purchase {
  font-size: 12px;
  margin: 5px 0;
}

.helpful-button {
  background-color: white;
  border: 2px solid #23349f;
  color: #23349f;
  padding: 5px 15px;
  border-radius: 20px;
  cursor: pointer;
}

.review-images {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.review-images img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 4px;
}

.review-date {
  color: #666;
  font-size: 0.8rem;
  margin: 10px 0;
}
</style>
