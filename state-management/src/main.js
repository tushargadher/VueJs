import { createApp } from "vue";
import App from "./App.vue";
import Store from "./Store";

const app = createApp(App);

app.use(Store);
app.mount("#app");
