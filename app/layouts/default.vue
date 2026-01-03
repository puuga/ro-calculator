<template>
  <div>
    <LazyHeaderWebHeader />
    <slot />
    <LazyConsentViewV1 />
  </div>
</template>


<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

let mediaQuery;

const handleColorSchemeChange = (e) => {
  document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
};

onMounted(() => {
  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  document.documentElement.setAttribute('data-theme', mediaQuery.matches ? 'dark' : 'light');

  // Listen for changes in system preference
  mediaQuery.addEventListener('change', handleColorSchemeChange);
});

onBeforeUnmount(() => {
  if (mediaQuery) {
    mediaQuery.removeEventListener('change', handleColorSchemeChange);
  }
});
</script>
