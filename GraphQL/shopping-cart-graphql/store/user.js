export const state = () => ({
    accessToken: null,
  });
  export const mutations = {
    SET_ACCESSTOKEN(state, token) {
      state.accessToken = token;
    },
    REMOVE_ACCESSTOKEN(state, token) {
      state.accessToken = token;
    },
  };
  