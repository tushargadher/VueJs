import { createMemoryHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Watcher from "./components/Watcher.vue";
import User from "./components/user.vue";
import UserDetail from "./components/userDetails.vue";
import Binding from "./components/Binding.vue";
import Modifier from "./components/Modifier.vue";
import Posts from "./components/Posts.vue";
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
    path: "/jobform",
    component: Modifier,
  },
  {
    path: "/binding",
    component: Binding,
  },
  {
    path: "/post",
    component: Posts,
  },
];

const router = createRouter({
  history: createMemoryHistory("http://localhost:5173/"),
  routes,
});

export default router;

//now we have to marge this file in main.js
