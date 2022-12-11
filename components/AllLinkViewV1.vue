<script setup lang="ts">
const links = [
  {
    title: "Rune Knight",
    href: "/runeknight",
  },
  {
    title: "EXP & Job EXP",
    href: "/exp-and-job-exp-table",
  },
  {
    title: "Lab 5 Headgear Enchantment",
    href: "/lab-5-headgear-enchantment",
  },
  {
    title: "Enchantment",
    href: "/enchantment",
  },
  {
    title: "Episode 17.1 Enchantment",
    href: "/episode171-enchantment",
  },
];
</script>

<template>
  <div>
    <div v-for="link in links" :key="link.title">
      <NuxtLink :to="link.href" class="text-blue-600">
        {{ link.title }}
      </NuxtLink>
    </div>
  </div>
</template>
