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
export const RN_ENCHANTMENTS = 'enchantments'
export const RN_EPISODE_171_ENCHANTMENT = 'episode-171-enchantment'
export const RN_EPISODE_172_ENCHANTMENT = 'episode-172-enchantment'
export const RN_BUFF_COOLDOWN_COUNTER_TOOL = 'buff-cooldown-counter-tool'
export const RN_CRAFTING_NFS_ITEMS = 'crafting-nfs-items'
export const RN_COMBO_ARCHANGEL_WING_AND_ARCHANGEL_BALLOON = 'combo-archangel-wing-and-archangel-balloon'
export const RN_PATENT_WEAPON_ENCHANTMENT = 'patent-weapon-enchantment'
export const RN_TOOL_BUILD_RUNE_SUCCESS_RATE = 'tool-build-rune-success-rate'

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
    path: '/enchantments',
    name: RN_ENCHANTMENTS,
    title: 'Enchantments | RO-Calculator',
    description: 'Enchantments',
    component: () => import('@/pages/EnchantmentsView.vue'),
  },
  {
    path: '/episode-171-enchantment',
    name: RN_EPISODE_171_ENCHANTMENT,
    title: 'Episode 17.1 Enchantment',
    description: 'Episode 17.1 Enchantment',
    component: () => import('@/pages/Episode171Enchantment.vue'),
  },
  {
    path: '/episode-172-enchantment',
    name: RN_EPISODE_172_ENCHANTMENT,
    title: 'Episode 17.2 Enchantment',
    description: 'Episode 17.2 Enchantment',
    component: () => import('@/pages/Episode172Enchantment.vue'),
  },
  {
    path: '/buff-cooldown-counter-tool',
    name: RN_BUFF_COOLDOWN_COUNTER_TOOL,
    title: 'Cooldown Counter | RO-Calculator',
    description: 'Cooldown Counter Tool',
    component: () => import('@/pages/BuffCooldownCounterView.vue'),
  },
  {
    path: '/crafting-nfs-items',
    name: RN_CRAFTING_NFS_ITEMS,
    title: 'Crafting Not For Sale Items | RO-Calculator',
    description: 'Crafting Not For Sale Items, ระบบคราฟของ',
    component: () => import('@/pages/CraftingNotForSaleItemsView.vue'),
  },
  {
    path: '/combo-archangel-wing-and-archangel-balloon',
    name: RN_COMBO_ARCHANGEL_WING_AND_ARCHANGEL_BALLOON,
    title: 'Combo Archangel Wing [1] and Archangel Balloon | RO-Calculator',
    description: 'Combo Archangel Wing [1] and Archangel Balloon',
    component: () => import('@/pages/ComboArchangelWingAndArchangelBalloonPage.vue'),
  },
  {
    path: '/patent-weapon-enchantment',
    name: RN_PATENT_WEAPON_ENCHANTMENT,
    title: 'Patent Weapon Enchantment | RO-Calculator',
    description: 'Patent Weapon Enchantment',
    component: () => import('@/pages/PatentWeaponEnchantmentView.vue'),
  },
  {
    path: '/tool-build-rune-success-rate',
    name: RN_TOOL_BUILD_RUNE_SUCCESS_RATE,
    title: 'Build Rune Success Rate | RO-Calculator',
    description: 'Build Rune Success Rate Tool',
    component: () => import('@/pages/ToolBuildRuneSuccessRateView.vue'),
  },
]

export function findRouteByName(name: string) {
  return routeData.find((route) => route.name === name)
}

export function getHead(name: string) {
  const route = findRouteByName(name)
  const _title = route?.title || 'RO-Calculator'
  const _description = route?.description || 'RO-Calculator'

  return {
    title: _title,
    meta: [
      { hid: 'description', name: 'description', content: _description },
      { hid: 'og:description', name: 'og:description', content: _description },
    ],
  }
}