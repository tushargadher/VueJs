<template>
  <div class="reviews-ratings">
    <h2>Reviews & Ratings</h2>
    <div class="rating-summary">
      <div class="overall-rating">
        <span class="rating-number">{{ reviewData.rating.rating }}</span>
        <div class="star-container">
          <ProductRating
            :rating="reviewData.rating.rating * 100"
            :numberOfReviews="reviewData.rating.number"
          />
          <span class="review-count"
            >{{ reviewData.rating.number }} reviews</span
          >
        </div>
      </div>
      <RatingBreakdown
        :reviewData="reviewData"
        :rating="rating"
        @star-filter="handleStarFilter"
      />
    </div>
    <button class="write-review-btn">Write a Review</button>
    <CustomerPhotos />
    <ReviewFilter
      :searchRequest="searchRequest"
      :reviewRange="reviewRange"
      :sortBy="sortBy"
      :ReviewfilterOptions="ReviewfilterOptions"
      @update:search-request="updateSearchRequest"
      @search="handleReviewSearch"
      @update:sort-by="updateSortBy"
    />
    <div class="review-item-container" v-if="reviewData.items.items.length > 0">
      <ReviewCard
        v-for="review in reviewData.items.items"
        :key="review.id"
        :review="review"
      />
      <button
        @click="loadMoreReview"
        v-if="reviewData.items.items.length < reviewData.items.totalQty"
        class="show-more-button"
      >
        Show More Reviews
      </button>
    </div>
    <div v-else>
      <b>Sorry. We couldn’t find any results</b>
      Try checking your spelling or use more general terms.
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ProductRating from "../Product/Details/ProductRating.vue";
import CustomerPhotos from "./CustomerPhotos.vue";
import ReviewCard from "./ReviewCard.vue";
import RatingBreakdown from "./RatingBreakdown.vue";
import ReviewFilter from "./ReviewFilter.vue";

export default {
  components: {
    CustomerPhotos,
    ReviewCard,
    ProductRating,
    RatingBreakdown,
    ReviewFilter,
  },
  data() {
    return {
      searchRequest: "",
      rating: [],
    };
  },
  computed: {
    ...mapState({
      reviewData: (state) => state.productStore.reviewData,
      ReviewfilterOptions: (state) => state.productStore.ReviewfilterOptions,
      sortBy: (state) => state.productStore.sortBy,
      pageId: (state) => state.productStore.pageId,
    }),
    slug() {
      return this.$route.path;
    },
    reviewRange() {
      const itemCount = this.reviewData.items.items.length;
      if (itemCount === 0) {
        return "0 reviews";
      }
      const start = 1;
      const end = itemCount;
      return `Showing ${start}-${end} of ${this.reviewData.items.totalQty} reviews`;
    },
  },
  methods: {
    ...mapActions("productStore", [
      "handleFilterChange",
      "fetchProductReviewData",
      "updateReviewItemPage",
    ]),
    handleStarFilter(starValue, checked) {
      if (checked) {
        this.rating.push(parseInt(starValue));
      } else {
        this.rating = this.rating.filter(
          (item) => item !== parseInt(starValue)
        );
      }
    },
    updateSortBy(value) {
      this.handleFilterChange(value);
    },
    updateSearchRequest(value) {
      this.searchRequest = value;
    },
    handleReviewSearch(value) {
      this.fetchProductReviewData({
        slug: this.slug,
        searchRequest: value,
        rating: this.rating,
      });
    },
    loadMoreReview() {
      this.updateReviewItemPage(this.pageId + 1);
      this.fetchProductReviewData({
        slug: this.slug,
        searchRequest: this.searchRequest,
        rating: this.rating,
      });
    },
  },
  watch: {
    sortBy() {
      this.fetchProductReviewData({
        slug: this.slug,
        searchRequest: this.searchRequest,
      });
    },
    rating() {
      this.fetchProductReviewData({
        slug: this.slug,
        searchRequest: this.searchRequest,
        rating: this.rating,
      });
    },
  },
};
</script>

<style scoped>
.reviews-ratings {
  background-color: #f8f8f8;
  padding: 60px;
}
.star-container {
  display: flex;
  align-items: baseline;
  font-size: 0.9rem;
}
.review-count {
  margin: 0px 10px;
}
.rating-summary {
  display: flex;
}
.rating-number {
  font-weight: bold;
  font-size: 4rem;
}
.write-review-btn {
  background-color: #1a73e8;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.show-more-button {
  background-color: white;
  border: 2px solid #23349f;
  color: #23349f;
  padding: 5px 15px;
  border-radius: 20px;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  text-align: center;
}
</style>
