<script setup lang="ts">
import { RouterView } from "vue-router";

// import HelloWorld from "@/components/HelloWorld.vue";
import WebHeader from '@/components/WebHeader.vue'
</script>

<template>
  <div class="">
    <header>
      <WebHeader />
    </header>

    <RouterView />
  </div>
</template>

<style scoped></style>
