import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Crypto from "../views/Crypto.vue";
import ElliotWaveSchool from "../views/ElliotWaveSchool.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/crytop",
    name: "crytop",
    component: Crypto,
  },
  {
    path: "/elliotwaveschool",
    name: "elliotwaveschool",
    component: ElliotWaveSchool,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
