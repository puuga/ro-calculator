<script setup lang="ts">
import { getAnalytics, logEvent } from 'firebase/analytics'
import { consola } from 'consola'

const { $firebaseApp } = useNuxtApp()

useHead({
  title: 'RO-Calculator',
  meta: [
    { name: 'description', content: 'RO-Calculator' }
  ],
})

onMounted(() => {
  consola.log('index page onMounted')
  const analytics = getAnalytics($firebaseApp())
  logEvent(analytics, 'Hello World')
})
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold">
      RO-Calculator ❤️ Nuxt 3
    </h1>

    <LazyAllContentViewV1 />

    <hr/>

    <div class="text-lg">
      Contents:
    </div>
    <LazyAllLinkViewV1 />
  </div>
</template>
  