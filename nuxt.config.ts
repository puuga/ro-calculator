import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'RO-Calculator',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' },
        { name: 'google-site-verification', content: 'kXt8f679wMbmWGxorwLli467A1-wSC9nbi0aX3wIQNs' },
      ],
      script: [
        { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6174292774814788', async: true, crossorigin: 'anonymous' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: true,
      ignore: [
        '/AboutView',
        '/BuffCooldownCounterView',
        '/ComboArchangelWingAndArchangelBalloonPage',
        '/CraftingNotForSaleItemsView',
        '/DungeonNotificationView',
        '/EnchantmentsView',
        '/Episode171Enchantment',
        '/Episode172Enchantment',
        '/ExperienceAndJobExperienceTableView',
        '/Lab5HeadgearEnchantmentView',
        '/PatentWeaponEnchantmentView',
        '/RuneKnightView',
        '/ToolBuildRuneSuccessRateView',
        '/EtelDustCalculator',
        '/RefineSimulator'
      ],
    },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  compatibilityDate: '2024-12-20',
})