import { createWebHistory, createRouter } from "vue-router";
import ParticipantHome from "../views/ParticipantHome.vue";

const routes = [
  {
    path: "/",
    name: "ParticipantHome",
    component: ParticipantHome,
  },
  {
    path: "/researcher",
    name: "ResearcherHome",
    component: () =>
      import(
        /* webpackChunkName: "researcher" */ "../views/ResearcherHome.vue"
      ),
  },
  {
    path: "/researcher/sign-up",
    name: "ResearcherSignup",
    component: () =>
      import(
        /* webpackChunkName: "researchersign" */ "../views/ResearcherSignup.vue"
      ),
  },
  {
    path: "/participant/sign-up",
    name: "ParticipantSignup",
    component: () =>
      import(
        /* webpackChunkName: "Participantsign" */ "../views/ParticipantSignup.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active-link",
});

export default router;
