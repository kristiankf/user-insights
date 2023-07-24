import { createWebHistory, createRouter } from "vue-router";
import ParticipantHome from "../views/ParticipantHome.vue";

const routes = [
  {
    path: "/",
    name: "ParticipantHome",
    component: ParticipantHome,
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
