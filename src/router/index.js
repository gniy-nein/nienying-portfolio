import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
      meta: {
        layout: "MainLayout",
      },
    },
    {
      path: "/skill",
      name: "Skill",
      component: () => import("../views/SkillView.vue"),
    },
    {
      path: "/project",
      name: "Project",
      component: () => import("../views/ProjectView.vue"),
    },
    {
      path: "/experience",
      name: "Experience",
      component: () => import("../views/ExperienceView.vue"),
    },
  ],
});

export default router;
