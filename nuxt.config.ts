// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'RO-Calculator',
      meta: [
        // <meta name="description" content="My amazing site">
        { hid: 'description', name: 'description', content: 'My amazing site.' },
        { hid: 'google-site-verification', name: 'google-site-verification', content: 'kXt8f679wMbmWGxorwLli467A1-wSC9nbi0aX3wIQNs' },
      ],
      script: [
        { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6174292774814788', async: true, crossorigin: 'anonymous' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
