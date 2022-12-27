<script setup lang="ts">
import { routeData as links } from '@/app/router.options';

</script>

<template>
  <div>
    <div v-for="link in links" :key="link.title">
      <NuxtLink :to="link.path" class="text-blue-600">
        {{ link.title }}
      </NuxtLink>
    </div>
  </div>
</template>
