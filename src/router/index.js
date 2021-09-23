// Router functionality and specifics live here

import { createWebHistory, createRouter } from "vue-router";

import Home from "@/view/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,

});
export default router;
