import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  routes: (_routes) => routeData,
}

export const RN_HOME = 'home'
export const RN_ABOUT = 'about'
export const RN_RUNE_KNIGHT = 'rune-knight'
export const RN_EXP_AND_JOB_EXP_TABLE = 'exp-and-job-exp-table'
export const RN_LAB_5_HEADGEAR_ENCHANTMENT = 'lab-5-headgear-enchantment'
export const RN_ENCHANTMENT = 'enchantment'
export const RN_EPISODE_171_ENCHANTMENT = 'episode-171-enchantment'
export const RN_BUFF_COOLDOWN_COUNTER_TOOL = 'buff-cooldown-counter-tool'

export const routeData = [
  {
    path: '/',
    name: RN_HOME,
    title: 'Home',
    description: 'Home',
    component: () => import('@/pages/index.vue')
  },
  {
    path: '/about',
    name: RN_ABOUT,
    title: 'About',
    description: 'About',
    component: () => import('@/pages/AboutView.vue'),
  },
  {
    path: '/rune-knight',
    name: RN_RUNE_KNIGHT,
    title: 'Rune Knight',
    description: 'Rune Knight',
    component: () => import('@/pages/RuneKnightView.vue'),
  },
  {
    path: '/exp-and-job-exp-table',
    name: RN_EXP_AND_JOB_EXP_TABLE,
    title: 'EXP & Job EXP',
    description: 'EXP & Job EXP',
    component: () =>
      import('@/pages/ExperienceAndJobExperienceTableView.vue'),
  },
  {
    path: '/lab-5-headgear-enchantment',
    name: RN_LAB_5_HEADGEAR_ENCHANTMENT,
    title: 'Lab 5 Headgear Enchantment',
    description: 'Lab 5 Headgear Enchantment',
    component: () => import('@/pages/Lab5HeadgearEnchantmentView.vue'),
  },
  {
    path: '/enchantment',
    name: RN_ENCHANTMENT,
    title: 'Enchantment',
    description: 'Enchantment',
    component: () => import('@/pages/EnchantmentView.vue'),
  },
  {
    path: '/episode-171-enchantment',
    name: RN_EPISODE_171_ENCHANTMENT,
    title: 'Episode 17.1 Enchantment',
    description: 'Episode 17.1 Enchantment',
    component: () => import('@/pages/Episode171Enchantment.vue'),
  },
  {
    path: '/buff-cooldown-counter-tool',
    name: RN_BUFF_COOLDOWN_COUNTER_TOOL,
    title: 'Cooldown Counter | RO-Calculator',
    description: 'Cooldown Counter Tool',
    component: () => import('@/pages/BuffCooldownCounterView.vue'),
  },
]

export function findRouteByName(name: string) {
  return routeData.find((route) => route.name === name)
}