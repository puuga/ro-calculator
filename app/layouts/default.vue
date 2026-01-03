<template>
  <div>
    <LazyHeaderWebHeader />
    <slot />
    <LazyConsentViewV1 />
  </div>
</template>


<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');

  // Listen for changes in system preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
  });
});
</script>
