<template>
  <div class="rating-breakdown">
    <div
      v-for="rating in reviewData.rating.votes"
      :key="rating.stars"
      class="rating-bar"
    >
      <input
        type="checkbox"
        class="rating-checkbox"
        @click="handleStarFilter(rating.voteName, $event.target.checked)"
      />
      <span class="star-label"
        >{{ rating.voteName }} <span class="star">★</span></span
      >
      <div class="bar-container">
        <div class="bar" :style="{ width: rating.votePercent + '%' }"></div>
      </div>
      <span class="count">{{ rating.voteCount }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reviewData: Object,
    rating: Array,
  },
  methods: {
    handleStarFilter(starValue, checked) {
      this.$emit("star-filter", starValue, checked);
    },
  },
};
</script>

<style scoped>
.rating-breakdown {
  margin: 0 50px;
  width: 40%;
}
.rating-bar {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}
.bar-container {
  width: 300px;
  background-color: #f0f0f0;
  margin: 0 10px;
  height: 8px;
  border-radius: 10px;
}
.bar {
  height: 8px;
  border-radius: 10px;
  background-color: #1a73e8;
}
.star {
  color: #f25d0d;
}
.rating-checkbox {
  margin-right: 10px;
}
</style>
