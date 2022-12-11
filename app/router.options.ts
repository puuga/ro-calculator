import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  routes: (_routes) => [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/index.vue')
    },
    {
      path: "/runeknight",
      name: "runeknight",
      component: () => import("@/pages/RuneKnightView.vue"),
    },
    {
      path: "/exp-and-job-exp-table",
      name: "expandjobexptable",
      component: () =>
        import("@/pages/ExperienceAndJobExperienceTableView.vue"),
    },
    {
      path: "/lab-5-headgear-enchantment",
      name: "lab-5-headgear-enchantment",
      component: () => import("@/pages/Lab5HeadgearEnchantmentView.vue"),
    },
    {
      path: "/enchantment",
      name: "enchantment",
      component: () => import("@/pages/EnchantmentView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/pages/AboutView.vue"),
    },
    {
      path: "/episode171-enchantment",
      name: "episode171enchantment",
      component: () => import("@/pages/Episode171Enchantment.vue"),
    },
  ],
}
