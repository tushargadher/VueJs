import * as productActions from "./actions/productActions";
import * as filterActions from "./actions/filterActions";
import * as paginationActions from "./actions/paginationActions";
import * as routeActions from "./actions/routeActions";
import mutations from "./mutations.js";
import getters from "./getters.js";

const priceSortOptions = [
  { value: "RELEVANCE", text: "Recommended" },
  { value: "PRICE_FROM_LOW", text: "Price: Low – High" },
  { value: "PRICE_FROM_HIGHT", text: "Price: High – Low" },
];
const parPageOptions = [
  { value: "PER_PAGE_36", text: "36" },
  { value: "PER_PAGE_48", text: "48" },
  { value: "PER_PAGE_72", text: "72" },
];
const state = () => ({
  products: [],
  filtersBlock: [],
  filterBadge: [],
  facet: [],
  itemsCount: 0,
  totalPages: 0,
  page: 1,
  title: "",
  sortBy: "RELEVANCE",
  parPage: "PER_PAGE_36",
  perPageValue: 32,
  minPrice: 0,
  maxPrice: 1100,
  loading: false,
  priceSortOptions,
  parPageOptions,
  route: {
    query: {},
  },
});
const actions = {
  ...productActions,
  ...filterActions,
  ...paginationActions,
  ...routeActions,
};

export default {
  state,
  getters,
  mutations,
  actions,
};
