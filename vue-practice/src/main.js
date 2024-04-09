import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import router from "./route.js"; //for routing in vue js

createApp(App).use(router).mount("#app");
