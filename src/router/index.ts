import { createRouter, createWebHistory } from "vue-router";
import consola from "consola";
import { getAnalytics, logEvent } from "firebase/analytics";

import { firebaseApp } from "@/nv-plugins/firebase";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: "Home",
      },
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/runeknight",
      name: "runeknight",
      meta: {
        title: "Rune Knight",
      },
      component: () => import("@/views/RuneKnightView.vue"),
    },
    {
      path: "/exp-and-job-exp-table",
      name: "expandjobexptable",
      meta: {
        title: "EXP & Job EXP",
      },
      component: () =>
        import("@/views/ExperienceAndJobExperienceTableView.vue"),
    },
    {
      path: "/lab-5-headgear-enchantment",
      name: "lab-5-headgear-enchantment",
      meta: {
        title: "Lab 5 Headgear Enchantment",
      },
      component: () => import("@/views/Lab5HeadgearEnchantmentView.vue"),
    },
    {
      path: "/enchantment",
      name: "enchantment",
      meta: {
        title: "Enchantment",
      },
      component: () => import("@/views/EnchantmentView.vue"),
    },
    {
      path: "/about",
      name: "about",
      meta: {
        title: "About",
      },
      component: () => import("@/views/AboutView.vue"),
    },
  ],
});

router.beforeEach((to) => {
  consola.info(`Navigating to ${to.fullPath}`, to);

  const title = `${to.meta.title as string} | RO-Calculator`;
  document.title = title;

  logEvent(getAnalytics(firebaseApp), "screen_view", {
    firebase_screen: title,
    firebase_screen_class: title,
  });
});

export default router;
