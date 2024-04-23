import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import WishList from "../components/wishlist/WishList.vue";
import Cart from "../components/Cart/Cart.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/wishlist",
    name: "WishList",
    component: WishList,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
