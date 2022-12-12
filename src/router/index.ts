import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "form",
    component: () => import("../views/FormView.vue"),
  },
  {
    path: "/composition",
    name: "composition",
    component: () => import("../views/CompositionView.vue"),
  },
  {
    path: "/provide-inject",
    name: "ProvideInject",
    component: () => import("../views/ProvideInject.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export { routes, router };
