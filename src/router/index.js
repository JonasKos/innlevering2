import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SimpleForm from "../views/SimpleForm.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/KontaktSkjema",
    name: "Kontaktskjema",
    component: SimpleForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
