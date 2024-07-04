export function updateRoute({ commit, state }, { query, router }) {
  // console.log("updateRoute is called");
  const newQuery = { ...state.route.query, ...query };
  // console.log(newQuery);
  commit("SET_ROUTE_QUERY", newQuery);
  router.push({ query: newQuery });
}

export function initializeStateFromRoute({ commit, dispatch, state }, route) {
  const query = route.query;
  if (query) {
    if (query.sortBy) {
      commit("SET_SORT_BY", query.sortBy);
    }
    if (query.parPage) {
      commit("SET_PAR_PAGE", query.parPage);
    }
    if (query.page) {
      commit("SET_PAGE", parseInt(query.page));
    }
    dispatch("parseFacetFromQuery", query);
    dispatch("parseBadgeFromQuery", query);
  }
}
