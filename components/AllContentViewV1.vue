<script setup lang="ts">
import { routeData } from '@/app/router.options';

const links = routeData.filter((link) => !['/', '/about'].includes(link.path))
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">All Content</h1>

    <div v-for="link in links" :key="link.title">
      
      <div class="c-skill-card mb-4">
        <h2 class="text-2xl font-bold">{{ link.title }}</h2>

        <div class="p-1">
          <NuxtLink :to="link.path" class="text-blue-600">
            {{ link.title }}
          </NuxtLink>
        </div>
      </div>
    </div>

    
  </div>
</template>
