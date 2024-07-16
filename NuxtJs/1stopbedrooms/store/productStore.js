import {
  GET_PRODUCT_GALLERY_DATA,
  GET_PRODUCT_GROUPING_DATA,
  GET_PRODUCT_GENERAL_DATA,
  GET_REVIEW_DATA,
} from "../GraphQL/Query/Product";

const ReviewfilterOptions = [
  { value: "by_customer_photos", text: "Included Photos" },
  { value: "by_most_relevant", text: "Most Relevant" },
  { value: "by_date", text: "Latest" },
  { value: "by_rating_desc", text: "Highest Rating" },
  { value: "by_rating_asc", text: "Lowest Rating" },
  { value: "by_helpful", text: "Most Helpful" },
];

const state = () => ({
  productData: [],
  galleryData: [],
  groupingData: [],
  reviewData: [],
  error: null,
  loading: true,
  ReviewfilterOptions,
  pageId: 1,
  sortBy: "by_customer_photos",
});

const getters = {
  getProductData: (state) => state.productData,
  getGalleryData: (state) => state.galleryData,
  getError: (state) => state.error,
};

const mutations = {
  setProductData(state, data) {
    state.productData = data;
  },
  setGalleryData(state, data) {
    state.galleryData = data;
  },
  setGroupingData(state, data) {
    state.groupingData = data;
  },
  setReviewData(state, data) {
    state.reviewData = data;
  },
  //append review data
  appendReviewData(state, newReviews) {
    state.reviewData.items.items.push(...newReviews);
  },
  setError(state, error) {
    state.error = error;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },

  updateSortBy(state, data) {
    state.sortBy = data;
  },
  updatePage(state, data) {
    state.pageId = data;
  },
};

const actions = {
  async fetchProductGeneralData({ commit }, { slug }) {
    try {
      const apolloClient = this.app.apolloProvider.defaultClient;
      const response = await apolloClient.query({
        query: GET_PRODUCT_GENERAL_DATA,
        variables: { slug },
      });
      commit("setProductData", response.data.products.productBySlug);
    } catch (error) {
      console.error(`Error while fetching product general data: ${error}`);
      commit("setError", error.message);
    }
  },

  async fetchProductGalleryData({ commit }, { slug }) {
    try {
      const apolloClient = this.app.apolloProvider.defaultClient;
      const response = await apolloClient.query({
        query: GET_PRODUCT_GALLERY_DATA,
        variables: { slug },
      });
      commit("setGalleryData", response.data.products.productBySlug.gallery);
    } catch (error) {
      console.error(`Error while fetching product image data: ${error}`);
      commit("setError", error.message);
    }
  },

  async fetchProductGroupingData({ commit }, { slug }) {
    try {
      const apolloClient = this.app.apolloProvider.defaultClient;
      const response = await apolloClient.query({
        query: GET_PRODUCT_GROUPING_DATA,
        variables: { slug },
      });
      console.log(response);
      //   commit('setGalleryData', response.data.products.productBySlug.gallery);
    } catch (error) {
      console.error(`Error while fetching product image data: ${error}`);
      commit("setError", error.message);
    }
  },
  async fetchProductReviewData(
    { state, commit },
    { slug, searchRequest, rating }
  ) {
    try {
      const apolloClient = this.app.apolloProvider.defaultClient;
      const response = await apolloClient.query({
        query: GET_REVIEW_DATA,
        variables: {
          slug,
          pageId: state.pageId,
          sortMode: state.sortBy,
          rating,
          searchRequest,
        },
      });
      // console.log(response.data.products.productBySlug.review);
      if (state.pageId === 1) {
        commit("setReviewData", response.data.products.productBySlug.review);
      } else {
        let newReviews =
          response.data.products.productBySlug.review.items.items;
        commit("appendReviewData", newReviews);
      }
    } catch (error) {
      console.error(`Error while fetching product review data:${error}`);
      commit("setError", error.message);
    }
  },

  handleFilterChange({ commit }, value) {
    console.log(value);
    commit("updateSortBy", value);
  },
  updateReviewItemPage({ commit }, value) {
    commit("updatePage", value);
  },
  updateSearchRequest({ commit }, value) {
    commit("updateSearchRequest", value);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
