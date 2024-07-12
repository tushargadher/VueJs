import {
  GET_PRODUCT_GALLERY_DATA,
  GET_PRODUCT_GROUPING_DATA,
  GET_PRODUCT_GENERAL_DATA,
} from "../GraphQL/Query/Product";

const state = () => ({
  productData: [],
  galleryData: [],
  error: null,
  loading: true,
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
  setError(state, error) {
    state.error = error;
  },
  setLoading(state, loading) {
    state.loading = loading;
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
};

export default {
  state,
  getters,
  mutations,
  actions,
};
