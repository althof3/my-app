// @ts-nocheck
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/calculator",
    name: "calculator",
    component: () =>
      import(/* webpackChunkName: "calculator" */ "../views/Calculator.vue"),
  },
  {
    path: "/table",
    name: "table",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Table.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
