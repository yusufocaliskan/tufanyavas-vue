import { createApp } from "vue";
import "./style.css";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import VueLazyload from "vue-lazyload";

createApp(App)
  .use(store)
  .use(router)
  .use(VueLazyload)

  .mount("#app");
