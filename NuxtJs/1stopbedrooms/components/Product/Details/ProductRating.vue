<template>
  <div class="stars" v-show="rating">
    <span
      v-for="n in 5"
      :key="n"
      class="star"
      :class="{ filled: n <= calculateRating(rating) }"
      >★</span
    >
    <p v-show="showNUmberofReviews">({{ numberOfReviews }})</p>
  </div>
</template>

<script>
export default {
  name: "ProductRating",
  props: {
    rating: {
      type: Number,
      required: true,
    },
    numberOfReviews: {
      type: Number,
      required: true,
    },
    showNUmberofReviews: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    calculateRating(rating) {
      return Math.round((rating / 100) * 5);
    },
  },
};
</script>

<style scoped>
.stars {
  display: flex;
  align-items: center;
}

.star {
  font-size: 1.4rem;
  color: #ccc;
}

.star.filled {
  color: #f25d0d;
}

p {
  margin-left: 10px;
  font-size: 14px;
  color: #555;
}
</style>
