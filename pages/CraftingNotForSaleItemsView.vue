<script setup lang="ts">
import consola from 'consola'
import { getAnalytics, logEvent } from 'firebase/analytics'

import { RN_CRAFTING_NFS_ITEMS, getHead } from '@/app/router.options'
import { 
  items, 
  getZelumium, 
  getShadowdecon, 
  recipesExceptZelumiumAndShadowDecon
} from '@/repositories/CraftingItem.repo'

//#region use...
useHead(getHead(RN_CRAFTING_NFS_ITEMS))

const { $firebaseApp } = useNuxtApp()
//#endregion use...

//#region refs
const heroImage = {
  avif: '/images/hero-images/hero-image-crafting-nfs-items.avif',
  webp: '/images/hero-images/hero-image-crafting-nfs-items.webp',
  default: '/images/hero-images/hero-image-crafting-nfs-items.jpg',
  classHTML: 'mx-auto max-h-96',
  alt: 'Crafting Not For Sale Items',
}
//#endregion refs

//#region methods
//#endregion methods
</script>

<template>
  <main class="container mx-auto">
    <h1 class="text-4xl font-bold">Crafting Not For Sale Items | RO-Calculator</h1>

    <div>SEO: Crafting Not For Sale Items, Crafting NFS Items</div>

    <div>Update</div>
    <div class="pl-6">
      <ul class="list-disc">
        <li>2023-01-08: Initial</li>
      </ul>
    </div>

    <div>
      <picture>
        <source srcset="/images/hero-images/hero-image-crafting-nfs-items.avif" type="image/avif">
        <source srcset="/images/hero-images/hero-image-crafting-nfs-items.webp" type="image/webp">
        <img
          src="/images/hero-images/hero-image-crafting-nfs-items.jpg" 
          class="mx-auto max-h-96"
          alt="Crafting Not For Sale Items"
          loading="lazy"
        >
      </picture>
    </div>

    <LazySimpleNativeImageViewV1 
      :avif="heroImage.avif"
      :webp="heroImage.webp"
      :default="heroImage.default"
      :classHTML="heroImage.classHTML"
      :alt="heroImage.alt"
    />

    <!-- #region basic -->
    <div class="w-full c-card my-3">
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
    <div class="w-full c-card my-3">
      <div class="text-2xl">Item List</div>
      <table class="c-table">
        <thead>
          <tr>
            <th class="c-table-th" rowspan="2">
              Item [คำอธิบาย]
            </th>
            <th class="c-table-th" colspan="3">
              Recipes (วัตถุดิบ)
            </th>
          </tr>
          <tr>
            <th class="c-table-th">
              Zelumium
            </th>
            <th class="c-table-th">
              Shadow Decon
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
                rel="noopener noreferrer"
                class="text-blue-600"
              >
                [คำอธิบาย]
              </a>
              <picture v-if="item.item_image_url">
                <img :src="item.item_image_url" :alt="item.item" loading="lazy">
              </picture>
            </td>
            <td class="c-table-td tabular-nums text-center align-top">
              {{ getZelumium(item.recipes) }}
            </td>
            <td class="c-table-td tabular-nums text-center align-top">
              {{ getShadowdecon(item.recipes) }}
            </td>
            <td class="c-table-td pl-6 align-top">
              <ul class="list-disc">
                <li v-for="recipe in recipesExceptZelumiumAndShadowDecon(item.recipes)">
                  {{ recipe.item }} 
                  <span v-if="recipe.item_desc_url">
                    <a 
                      :href="recipe.item_desc_url" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="text-blue-600"
                    >
                      (Item)
                    </a>
                  </span>
                  x 
                  <strong>{{ recipe.amount }}</strong>
                  <ul class="list-circle pl-6">
                    <li v-for="dropFrom in recipe.drop_from" :key="dropFrom.name">
                      {{ dropFrom.name }}
                      <span v-if="dropFrom.desc_url">
                        -
                        <a 
                          :href="dropFrom.desc_url" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          class="text-blue-600"
                        >
                          (Monster)
                        </a>
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- #endregion item list -->

    <!-- #region basic -->
    <div class="w-full c-card my-3">
      <div class="text-2xl">References</div>
      <div class="pl-6">
        <ul class="list-disc">
          <li>
            Facebook MRTRIN: 
            <a 
              href="https://www.facebook.com/permalink.php?story_fbid=pfbid0n8xNFr6xGtCcoR6faic7tKdamp46C9cZfz2gXfbW4MJsCyRfFKcMSG6T3zvsLYeWl&id=100063936860154" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-blue-600"
            >
              [Link]
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- #endregion basic -->
  </main>
</template>