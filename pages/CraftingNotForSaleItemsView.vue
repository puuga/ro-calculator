<script setup lang="ts">
import consola from 'consola'
import { getAnalytics, logEvent } from 'firebase/analytics'

import { RN_CRAFTING_NFS_ITEMS, findRouteByName } from '@/app/router.options'
import { 
  items, 
  getZelumium, 
  getShadowdecon, 
  recipesExceptZelumiumAndShadowDecon
} from '@/repositories/CraftingItem.repo'

//#region use...
const route = findRouteByName(RN_CRAFTING_NFS_ITEMS)
const _title = route?.title || 'Crafting Not For Sale Items | RO-Calculator'
const _description = route?.description || 'Crafting Not For Sale Items'
useHead({
  title: _title,
  meta: [
    { hid: 'description', name: 'description', content: _description },
    { hid: 'og:description', name: 'og:description', content: _description },
  ],
})

const { $firebaseApp } = useNuxtApp()
//#endregion use...

//#region refs
//#endregion refs

//#region methods
//#endregion methods
</script>

<template>
  <main class="container mx-auto">
    <h1 class="text-4xl font-bold">{{ _title }}</h1>

    <div>SEO: Crafting Not For Sale Items, Crafting NFS Items</div>

    <div>Update</div>
    <div class="pl-6">
      <ul class="list-disc">
        <li>2023-01-08: Initial</li>
      </ul>
    </div>

    <!-- #region basic -->
    <div class="w-full c-card m-1">
      <div class="text-2xl">Basic</div>
      <div class="pl-6">
        <ol class="list-decimal">
          <li>ใบคราฟของทั้งหมด สามารถเปิดหา (สุ่ม) จาก MYSTERIOUS COMBINATION BUNDLE ที่ดรอปจาก MVP ที่มีออร่าเขียว (ของเข้าตัวคนได้ MVP ?)</li>
          <li>รายการไอเท็มเป็น Not for Sale ทั้งหมด และจะอัพเดตปีละครั้ง ?</li>
          <li>ไอเท็มบางอย่างจะเป็นสุ่มในสุ่ม เช่น มัฟดำ ที่มี 3 แบบ ใบคราฟ จะมีแบบเดียว ของจะสุ่มออกมาเป็น 1 ใน 3</li>
          <li>Zelumium และ Shadowdecon เม็ดเล็กดรอปจาก Monster ปกติ ใช้ 20 เม็ดรวมเป็นเม็ดใหญ่ ส่วนเม็ดใหญ่ดรอปจาก MVP</li>
          <li>รายการอาจมีการเปลี่ยนแปลง รอดู Official สัปดาห์หน้า (2023-01-12)</li>
        </ol>
      </div>
    </div>
    <!-- #endregion basic -->

    <!-- #region item list -->
    <div class="w-full c-card m-1">
      <div class="text-2xl">Item List</div>
      <table class="c-table">
        <thead>
          <tr>
            <th class="c-table-th" rowspan="2">
              Item [Ability]
            </th>
            <th class="c-table-th" colspan="3">
              Recipes
            </th>
          </tr>
          <tr>
            <th class="c-table-th">
              Zelumium
            </th>
            <th class="c-table-th">
              Shadowdecon
            </th>
            <th class="c-table-th">
              Others
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.item">
            <td class="c-table-td align-top">
              <strong>{{ item.item }}</strong>
              <a 
                v-for="url in item.item_desc_urls" 
                :key="url" 
                :href="url" 
                target="_blank" 
                class="text-blue-600"
              >
                [Ability]
              </a>
              <picture v-if="item.item_image_url">
                <img :src="item.item_image_url" :alt="item.item" loading="lazy">
              </picture>
            </td>
            <td class="c-table-td tabular-nums align-top">
              {{ getZelumium(item.recipes) }}
            </td>
            <td class="c-table-td tabular-nums align-top">
              {{ getShadowdecon(item.recipes) }}
            </td>
            <td class="c-table-td pl-6 align-top">
              <ul class="list-disc">
                <li v-for="recipe in recipesExceptZelumiumAndShadowDecon(item.recipes)">
                  {{ recipe.item }} x <strong>{{ recipe.amount }}</strong> [{{ recipe.drop_from }}]
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- #endregion item list -->
  </main>
</template>