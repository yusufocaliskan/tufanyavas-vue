import { createRouter, createWebHistory } from "vue-router";

//lagouts
import adminLayout from "../layouts/adminLayout.vue";
//pages
import Home from "../views/Home.vue";
import Crypto from "../views/Crypto.vue";
import ElliotWaveSchool from "../views/ElliotWaveSchool.vue";
const routes = [
  {
    path: "/",
    component: adminLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/crypto",
        name: "crypto",
        component: Crypto,
      },
      {
        path: "/elliotwaveschool",
        name: "elliotwaveschool",
        component: ElliotWaveSchool,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
