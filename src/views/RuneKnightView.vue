<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  components: {
    RKEnchantBlade: defineAsyncComponent(
      () => import("@/components/ro-skills/RKEnchantBlade.vue")
    ),
    RKSonicWave: defineAsyncComponent(
      () => import("@/components/ro-skills/RKSonicWave.vue")
    ),
    RKStormBlast: defineAsyncComponent(
      () => import("@/components/ro-skills/RKStormBlast.vue")
    ),
    RKCrushStrike: defineAsyncComponent(
      () => import("@/components/ro-skills/RKCrushStrike.vue")
    ),
  },
});
</script>

<template>
  <main class="container mx-auto">
    <div class="main">
      <h1 class="text-4xl font-bold">RuneKnight View</h1>
    </div>

    <div class="space">
      <RKEnchantBlade />
    </div>

    <div class="space">
      <RKSonicWave />
    </div>

    <div class="space">
      <RKStormBlast />
    </div>

    <div class="space">
      <RKCrushStrike />
    </div>
  </main>
</template>

<style scoped>
.space {
  margin: 2rem;
}
</style>
