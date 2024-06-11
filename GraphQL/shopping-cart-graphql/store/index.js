import Vue from "vue";

export const state = () => ({
  cart: [],
});

export const getters = {
  totalCartItem(state) {
    return state.cart.length;
  },
};

export const mutations = {
  ADD_TO_CART(state, productData) {
    const product = state.cart.find((item) => item.id == productData.id);
    if (product) {
      alert("Product already in cart");
    } else {
      const product = { ...productData, quantity: 1 };
      state.cart.push(product);
    }
  },

  INCREASE_QUANTITY(state, product) {
    let productIndex = state.cart.findIndex((item) => item.id === product.id);
    console.log(productIndex);
    Vue.set(state.cart, productIndex, {
      ...product,
      quantity: product.quantity + 1,
    });
  },

  DECREASE_QUANTITY(state, product) {
    let productIndex = state.cart.findIndex((item) => item.id === product.id);
    console.log(productIndex);
    if (product.quantity > 1) {
      Vue.set(state.cart, productIndex, {
        ...product,
        quantity: product.quantity - 1,
      });
    } else {
      alert("Minimum One Required");
    }
  },

  REMOVE_ITEM(state, product) {
    state.cart = state.cart.filter((item) => item.id !== product.id);
  },

  CLEAR_CART(state) {
    state.cart = [];
  },
};

export const actions = {};
