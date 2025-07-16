<script setup lang="ts">
import { routeData } from '@/router.options'

const links = routeData.filter((link) => !['/', '/about'].includes(link.path))
</script>

<template>
  <div class="">
    <h1 class="text-2xl font-bold">All Content</h1>
    <div 
      v-for="link in links"
      :key="link.title"
      class="p-2"
    >
      <div class="c-skill-card">
        <NuxtLink :to="link.path" class="">
          <div class="text-2xl font-bold">{{ link.title }}</div>

          <div class="p-1">
            {{ link.description }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
