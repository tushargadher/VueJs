import { createMemoryHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Watcher from "./components/Watcher.vue";
import User from "./components/user.vue";
import UserDetail from "./components/userDetails.vue";
import Tushar from "./components/Binding.vue";

//array of routes
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/watcher",
    component: Watcher,
  },
  {
    path: "/user",
    component: User,
  },
  //dyanmic routes
  {
    path: "/user/:id",
    component: UserDetail,
  },
  {
    path: "/binding",
    component: Tushar,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;

//now we have to marge this file in main.js
