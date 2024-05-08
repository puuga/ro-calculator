<script setup lang="ts">
//#region define...
defineProps<{
  badgeText?: string,
  counterText?: string,
  max?: number,
  value?: number,
}>()
//#endregion define...

//#region use...
//#endregion use...
</script>

<template>
  <div class="mt-1">
    <span class="c-badge">{{ badgeText }}</span><br/>
  </div>
  <div>
    <progress 
      v-if="max && value"
      :value="value" 
      :max="max"
    > {{ (max-value) / max }} % </progress>
  </div>
  <div class="text-5xl mb-1">{{ counterText }}</div>
</template>