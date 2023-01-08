<script setup lang="ts">
import { RN_RUNE_KNIGHT, findRouteByName } from '@/app/router.options'

//#region use...
const route = findRouteByName(RN_RUNE_KNIGHT)
const _title = route?.title || 'Rune Knight | RO-Calculator'
const _description = route?.description || 'Rune Knight'
useHead({
  title: _title,
  meta: [
    { hid: 'description', name: 'description', content: _description },
    { hid: 'og:description', name: 'og:description', content: _description },
  ],
})

const { $firebaseApp } = useNuxtApp()
//#endregion use...
</script>

<template>
  <main class="container mx-auto">
    <div class="main">
      <h1 class="text-4xl font-bold">RuneKnight View</h1>
    </div>

    <div class="p-3">
      <LazyRoSkillsRKEnchantBlade />
    </div>

    <div class="p-3">
      <LazyRoSkillsRKSonicWave />
    </div>

    <div class="p-3">
      <LazyRoSkillsRKStormBlast />
    </div>

    <div class="p-3">
      <LazyRoSkillsRKCrushStrike />
    </div>
  </main>
</template>

<style scoped></style>
