import { createApp } from "vue";
import App from "./App.vue";
import Store from "./Store";
import router from "./Router";

const app = createApp(App);

app.use(router);
app.use(Store);
app.mount("#app");
