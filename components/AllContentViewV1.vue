<script setup lang="ts">
import { routeData } from '@/app/router.options'

const links = routeData.filter((link) => !['/', '/about'].includes(link.path))

function goto(link: any) {
  const router = useRouter()
  router.push(link.path)
}
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">All Content</h1>

    <div class="">
      <div 
        v-for="link in links" 
        :key="link.title" 
        class="c-skill-card m-4"
        @click="goto(link)"
      >
        <div class="text-2xl font-bold">{{ link.title }}</div>

        <div class="p-1">
          {{ link.description }}
        </div>
      </div>
    </div>

    
  </div>
</template>
