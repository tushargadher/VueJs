export function updateSortBy({ commit, dispatch, state }, { sortBy, router }) {
  // commit("SET_PAGE", 1);
  commit("SET_SORT_BY", sortBy);
  dispatch("updateRoute", { query: { sortBy }, router });
}

export function updateParPage(
  { commit, dispatch, state },
  { parPage, router }
) {
  commit("SET_PAR_PAGE", parPage);
  dispatch("updateRoute", {
    query: { ...state.route.query, parPage },
    router,
  });
}
export function updatePage({ commit, dispatch, state }, { page, router }) {
  // console.log("updatepage is called", page);
  commit("SET_PAGE", page);
  dispatch("updateRoute", { query: { ...state.route.query, page }, router });
}
