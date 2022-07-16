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
  },
});
</script>

<template>
  <div class="main">
    <h1>RuneKnight View</h1>
    Scroll down to see the skills.
  </div>

  <div class="space">
    <RKEnchantBlade />
  </div>

  <div class="space">
    <RKSonicWave />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .main {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .space {
    margin: 2rem;
  }
}
</style>
