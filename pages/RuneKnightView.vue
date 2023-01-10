<script setup lang="ts">
import { RN_RUNE_KNIGHT, getHead } from '@/app/router.options'

//#region use...
useHead(getHead(RN_RUNE_KNIGHT))

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
