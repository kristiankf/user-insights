import { createWebHistory, createRouter } from "vue-router";
import LandingPage from "../views/LandingPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: LandingPage,
  },
  //   {
  //     path: "/app",
  //     name: "App",
  //     component: () =>
  //       import(
  //         /* webpackChunkName: "group-user" */ "../components/HelloWorld.vue"
  //       ),
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
