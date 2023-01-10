<script setup lang="ts">
//#region define...
defineProps<{
  avif?: string,
  webp?: string,
  default: string,
  classHTML?: string,
  alt?: string,
}>()
//#endregion define...

//#region use...
//#endregion use...
</script>

<template>
  <picture>
    <source v-if="avif" srcset="/images/hero-images/hero-image-crafting-nfs-items.avif" type="image/avif">
    <source v-if="webp" srcset="/images/hero-images/hero-image-crafting-nfs-items.webp" type="image/webp">
    <img
      :src="default" 
      :alt="alt || ''"
      :class="classHTML || ''"
      loading="lazy"
    >
  </picture>
</template>