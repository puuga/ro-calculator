<script setup lang="ts">
import { consola } from 'consola'
import { getAnalytics, logEvent } from 'firebase/analytics'

import { RN_CRAFTING_NFS_ITEMS, getHead } from '@/router.options'
import { 
  items, 
  getZelumium, 
  getShadowdecon, 
  recipesExceptZelumiumAndShadowdecon
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
        <li>2023-01-12: Update Content from GGT</li>
        <li>2023-01-08: Initial</li>
      </ul>
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
          <li>ใบคราฟของทั้งหมด สามารถเปิดหา (สุ่ม) จาก MYSTERIOUS COMBINATION BUNDLE ที่ดรอปจาก MVP ที่มีออร่าเขียว (ของเข้าตัวคนได้ MVP)</li>
          <li>รายการไอเท็มเป็น Not for Sale ทั้งหมด และจะอัพเดตปีละครั้ง ในเดือนธันวาคม</li>
          <li>ไอเท็มบางอย่างจะเป็นสุ่มในสุ่ม เช่น มัฟดำ ที่มี 3 แบบ ใบคราฟ จะมีแบบเดียว ของจะสุ่มออกมาเป็น 1 ใน 3</li>
          <li>Zelumium และ Shadowdecon ดรอปจากบอส เม็ดเล็ก (Rough Zelunium และ Rough Shadowdecon) ดรอปจาก Monster ปกติบางตัว ใช้ 20 เม็ดรวมเป็นเม็ดใหญ่ ที่ NPC ใหม่ อยู่แถว ๆ จุดตีบวกในเมือง</li>
          <li>ข้อมูลในหน้านี้อาจจะมีผิดพลาดบางจุด เพราะข้อมูลเยอะมาก ตาลาย เข้าใจนะ</li>
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
              <picture>
                <img 
                  src="/images/crafting-items/recipes/Shadowdecon.png" 
                  alt="Shadowdecon" 
                  class="mx-auto"
                  loading="lazy"
                >
              </picture>
              Zelumium
            </th>
            <th class="c-table-th">
              <picture>
                <img 
                  src="/images/crafting-items/recipes/Zelunium.png" 
                  alt="Zelunium" 
                  class="mx-auto"
                  loading="lazy"
                >
              </picture>
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
              <br/>
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
                <li v-for="recipe in recipesExceptZelumiumAndShadowdecon(item.recipes)">
                  <picture v-if="recipe.item_image_url">
                    <img :src="recipe.item_image_url" :alt="recipe.item" class="inline mx-1">
                  </picture>
                  {{ recipe.item }} 
                  <span v-if="recipe.item_desc_url">
                    <a 
                      :href="recipe.item_desc_url" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="text-blue-600"
                    >
                      (?)
                    </a>
                  </span>
                  x 
                  <strong>{{ recipe.amount }}</strong>
                  <ul class="list-circle pl-6">
                    <li v-for="dropFrom in recipe.drop_from" :key="dropFrom.name">
                      {{ dropFrom.name }}
                      <span v-if="dropFrom.desc_url">
                        <a 
                          :href="dropFrom.desc_url" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          class="text-blue-600"
                        >
                          (?)
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
      <div class="text-2xl">Rough Zelunium, Rough Shadowdecon Exchange NPC</div>
      <div class="pl-6 mb-6">
        <ol class="list-disc">
          <li>ใช้แร่ Rough Zelunium จำนวนละ 20 ชิ้น แลกซื้อเป็น Zelunium ได้ 1 ชิ้น</li>
          <li>ใช้แร่ Rough Shadowdecon จำนวนละ 20 ชิ้น แลกซื้อเป็น Shadowdecon ได้ 1 ชิ้น</li>
        </ol>
      </div>
      <div class="pl-6 mb-6">
        <ol class="list-circle">
          <li>NPC Satana พิกัด alberta_in 24/63</li>
          <li>NPC Polinn Polath พิกัด prt_in 64/57</li>
          <li>NPC Marik Meloy พิกัด morocc_in 64/37</li>
          <li>NPC Jihu Jeyorr พิกัด payon 142/179</li>
          <li>NPC Dimille Maar พิกัด yuno_in01 164/31</li>
          <li>NPC Galan Gweniha พิกัด ein_in01 30/88</li>
          <li>NPC Nemill Newton พิกัด lhz_in02 275/23</li>
        </ol>
      </div>
    </div>
    <!-- #endregion basic -->

    <!-- #region References -->
    <div class="w-full c-card my-3">
      <div class="text-2xl">References</div>
      <div class="pl-6">
        <ul class="list-disc">
          <li>
            Combination System ระบบคราฟไอเท็มด้วยของบอส: 
            <a 
              href="https://ro.gnjoy.in.th/combination-system" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-blue-600"
            >
              [Link]
            </a>
          </li>
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