import { GET_PRODUCTS } from "../../GraphQL/Query/query.js";
export async function getProducts({ state, commit }, slug) {
  commit("SET_LOADING", true);
  // console.log("getproduct called");
  try {
    const apolloClient = this.app.apolloProvider.defaultClient;
    const response = await apolloClient.query({
      query: GET_PRODUCTS,
      variables: {
        slug: slug,
        request: {
          sortBy: state.sortBy,
          perPage: state.parPage,
          page: state.page,
          facet: state.facet,
        },
      },
    });

    const data = response.data.listing.listingCategory;
    commit("SET_PRODUCTS", data.items);
    commit("SET_ITEMS_COUNT", data.itemsCount);
    commit("SET_TITLE", data.title);
    commit("SET_FILTERS_BLOCK", data.filtersBlock);
    commit("SET_TOTAL_PAGES", data.pages);
    commit("SET_MIN_PRICE", data.minPrice);
    commit("SET_PAR_PAGE_VALUE", data.perPage);
    // commit("SET_MAX_PRICE", data.maxPrice);
    commit("SET_LOADING", false);
    // console.log(state);
  } catch (error) {
    console.error(`Error while fetching products: ${error}`);
  } finally {
    commit("SET_LOADING", false);
  }
}
