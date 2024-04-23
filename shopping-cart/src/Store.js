import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    wishlist: [],
  },
  getters: {
    getTotalCartItem(state) {
      return state.cart.length;
    },
    getTotalWishlistItem(state) {
      return state.wishlist.length;
    },
  },
  mutations: {
    SET_PRODUCT(state, products) {
      state.products = products;
    },

    ADD_TOCART(state, product) {
      state.cart.push(product);
    },

    ADD_TOWISHLIST(state, product) {
      state.wishlist.push(product);
    },
  },
  actions: {
    async getAllProdoct({ commit }) {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        if (!response.ok) {
          throw new Error("Faild to fetch product");
        }
        const products = await response.json();
        // console.log(products);
        commit("SET_PRODUCT", products);
      } catch (error) {
        console.error(error);
      }
    },

    // commit is a method provided by Vuex store instances to trigger mutations
    addToCart({ commit }, product) {
      commit("ADD_TOCART", product);
    },

    addToWishlist({ commit }, product) {
      commit("ADD_TOWISHLIST", product);
    },
  },
});
