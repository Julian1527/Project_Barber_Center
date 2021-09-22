// index.js

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/home_page"),
  },
  {
    path: "/agregar",
    name: "agregar",
    component: () => import("../components/CreateComponent"),
  },
  {
    path: "/view",
    name: "view",
    component: () => import("../components/ListComponent"),
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("../components/EditComponent"),
  },
  {
    path: "/cita",
    name: "cita",
    component: () => import("../components/cita"),
  },
  {
    path: "/sesion",
    name: "sesion",
    component: () => import("../components/login"),
  },
  {
    path: "/registar",
    name: "registar",
    component: () => import("../components/register"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
