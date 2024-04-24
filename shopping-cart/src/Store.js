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
    //calcultate total price
    calculateTotalPrice(state) {
      return state.cart.reduce((accumulator, current) => {
        return accumulator + current.price * current.quantity;
      }, 0);
    },
  },
  mutations: {
    SET_PRODUCT(state, products) {
      state.products = products;
    },

    ADD_TOCART(state, product) {
      let productIncart = state.cart.find((item) => item.id === product.id);
      if (productIncart) {
        alert("Product Already In Cart");
      } else {
        let productToAdd = { ...product, quantity: 1 };
        state.cart.push(productToAdd);
      }
    },

    ADD_TOWISHLIST(state, product) {
      let productInWishlist = state.wishlist.find(
        (item) => item.id === product.id
      );
      if (productInWishlist) {
        alert("Product Already in Wishlist");
      } else {
        state.wishlist.push(product);
      }
    },

    REMOVE_CARTITEM(state, productToRemove) {
      state.cart = state.cart.filter((item) => item.id !== productToRemove.id);
    },

    REMOVE_WISHLISTITEM(state, productToRemove) {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== productToRemove.id
      );
    },

    INCREASE_ITEM_QUANTITY(state, product) {
      //find the index of product
      let productIndex = state.cart.findIndex((item) => item.id === product.id);

      if (productIndex !== -1) {
        state.cart[productIndex].quantity++;
      } else {
        alert("Error while updating Quantity");
      }
    },

    DECREASE_ITEM_QUANTITY(state, product) {
      let productIndex = state.cart.findIndex((item) => item.id === product.id);
      if (productIndex !== -1) {
        state.cart[productIndex].quantity--;
      } else {
        alert("Error while updating quantity");
      }
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

    //remove cart item

    removeCartItem({ commit }, productToRemove) {
      commit("REMOVE_CARTITEM", productToRemove);
    },

    //remove wishlits item

    removeWishListItem({ commit }, productToRemove) {
      commit("REMOVE_WISHLISTITEM", productToRemove);
    },

    //increase cart item quantity
    increseQuantity({ commit }, product) {
      commit("INCREASE_ITEM_QUANTITY", product);
    },

    //decrease cart item quantity
    decreseQuantity({ commit }, product) {
      commit("DECREASE_ITEM_QUANTITY", product);
    },
  },
});
