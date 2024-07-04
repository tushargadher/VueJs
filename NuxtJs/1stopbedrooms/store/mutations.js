export default {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ITEMS_COUNT(state, count) {
    state.itemsCount = count;
  },
  SET_TITLE(state, title) {
    state.title = title;
  },
  SET_FILTERS_BLOCK(state, filtersBlock) {
    state.filtersBlock = filtersBlock;
  },
  SET_TOTAL_PAGES(state, totalPages) {
    state.totalPages = totalPages;
  },
  SET_FACET(state, facet) {
    state.facet = facet;
  },
  SET_FILTER_BADGE(state, filterBadge) {
    state.filterBadge = filterBadge;
  },
  SET_SORT_BY(state, sortBy) {
    state.sortBy = sortBy;
  },
  SET_PAR_PAGE(state, parPage) {
    state.parPage = parPage;
  },
  SET_PAR_PAGE_VALUE(state, perPageValue) {
    state.perPageValue = perPageValue;
  },
  SET_PAGE(state, page) {
    state.page = page;
  },
  SET_ROUTE_QUERY(state, query) {
    state.route.query = query;
  },
  SET_MIN_PRICE(state, minPrice) {
    state.minPrice = minPrice;
  },
  SET_MAX_PRICE(state, maxPrice) {
    state.maxPrice = maxPrice;
  },
};
