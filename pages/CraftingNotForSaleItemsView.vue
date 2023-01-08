<script setup lang="ts">
import consola from 'consola'
import { getAnalytics, logEvent } from 'firebase/analytics'

import { RN_CRAFTING_NFS_ITEMS, findRouteByName } from '@/app/router.options'

//#region use...
const route = findRouteByName(RN_CRAFTING_NFS_ITEMS)
const _title = route?.title || 'Crafting Not For Sale Items | RO-Calculator'
const _description = route?.description || 'Crafting Not For Sale Items'
useHead({
  title: _title,
  meta: [
    { name: 'description', content: _description }
  ],
})

const { $firebaseApp } = useNuxtApp()
//#endregion use...

//#region refs
type Recipe = {
  item: string
  amount: number
  item_image_url?: string
  drop_from?: string
  drop_from_image_url?: string
}
type Item = {
  item: string
  item_image_url?: string
  item_desc_url: string
  recipes: Recipe[]
}
const zelumium100: Recipe = { item: 'Zelumium', amount: 100 }
const zelumium60: Recipe = { item: 'Zelumium', amount: 60 }
const shadowdecon100: Recipe = { item: 'Shadowdecon', amount: 100, }
const shadowdecon60: Recipe = { item: 'Shadowdecon', amount: 60, }
const items: Item[] = [
  // [Not for Sale] Raven Of Tomb Combination
  {
    item: '[Not for Sale] Raven Of Tomb Combination',
    item_image_url: '/images/crafting-items/Raven Of Tomb.png',
    item_desc_url: 'https://www.divine-pride.net/database/item/410136/raven-of-tomb',
    recipes: [
      zelumium100,
      shadowdecon100,
      { item: 'Piece of Shield', amount: 300, drop_from: 'Lord of the Dead' },
    ]
  },
  // [Not for Sale] The Spirit Of World Combination
  {
    item: '[Not for Sale] The Spirit Of World Combination',
    item_image_url: '/images/crafting-items/The Spirit Of World.png',
    item_desc_url: 'https://www.divine-pride.net/database/item/420134/the-spirit-of-world',
    recipes: [
      zelumium100,
      shadowdecon100,
      { item: 'Young Twig', amount: 300, drop_from: 'Mistress' },
    ]
  },
  // [Not for Sale] Flutter Butterfly Combination
  {
    item: '[Not for Sale] Flutter Butterfly Combination',
    item_image_url: '/images/crafting-items/Flutter Butterfly.png',
    item_desc_url: 'https://www.divine-pride.net/database/item/420141/flutter-butterfly',
    recipes: [
      zelumium100,
      shadowdecon100,
      { item: 'Fragment of Rossata Stone', amount: 300, drop_from: 'Amon Ra' },
    ]
  },
  // [Not for Sale] Bastawtozaq Heart Combination
  {
    item: '[Not for Sale] Bastawtozaq Heart Combination',
    item_image_url: '/images/crafting-items/Bastawtozaq Heart.png',
    item_desc_url: 'https://www.divine-pride.net/database/item/480182/bastawtozaq-heart-1',
    recipes: [
      zelumium100,
      shadowdecon100,
      { item: 'Ba Gua', amount: 300, drop_from: 'Evil Snake Lord' },
    ]
  },
  // [Not for Sale] Fairy Leaf Powder Combination
  {
    item: '[Not for Sale] Fairy Leaf Powder Combination',
    item_image_url: '/images/crafting-items/Fairy Leaf Powder.png',
    item_desc_url: 'https://www.divine-pride.net/database/item/28438/fairy-leaf-powder-1',
    recipes: [
      zelumium100,
      shadowdecon100,
      { item: 'Valhala\'s Flower', amount: 300, drop_from: 'Valkyrie Randgris' },
    ]
  },

  // [Not for Sale] Hunting Shoes Combination
  {
    item: '[Not for Sale] Hunting Shoes Combination',
    item_desc_url: 'https://www.divine-pride.net/database/item/470123/hunting-shoes-1',
    recipes: [
      zelumium60,
      shadowdecon60,
      { item: 'Fragment of Rossata Stone', amount: 300, drop_from: 'Amon Ra' },
    ]
  },
  // [Not for Sale] Vassalage Ring Combination
  {
    item: '[Not for Sale] Hunting Shoes Combination',
    item_desc_url: 'https://www.divine-pride.net/database/item/490246/vassalage-ring-1',
    recipes: [
      zelumium60,
      shadowdecon60,
      { item: 'Ba Gua', amount: 300, drop_from: 'Evil Snake Lord' },
    ]
  },
  // [Not for Sale] Doram Shield Combination
  {
    item: '[Not for Sale] Doram Shield Combination',
    item_desc_url: 'https://www.divine-pride.net/database/item/28948/doram-shield-1',
    recipes: [
      zelumium60,
      shadowdecon60,
      { item: 'Darkred Scale Piece', amount: 300, drop_from: 'Nidhoggur\'s Shadow' },
    ]
  },
  // [Not for Sale] Inception Ring Combination
  {
    item: '[Not for Sale] Inception Ring Combination',
    item_desc_url: 'https://www.divine-pride.net/database/item/490265/inception-ring-1',
    recipes: [
      zelumium60,
      shadowdecon60,
      { item: 'Ice Scale', amount: 300, drop_from: 'Ktullanux' },
    ]
  },
  // [Not for Sale] Fallen Warrior's Shield Combination
  {
    item: '[Not for Sale] Fallen Warrior\'s Shield Combination',
    item_desc_url: 'https://www.divine-pride.net/database/item/28977/fallen-warriors-shield-1',
    recipes: [
      zelumium60,
      shadowdecon60,
      { item: 'Gem Stone', amount: 300, drop_from: 'Tao Gunka' },
    ]
  },
  // [Not for Sale] Ancient Hero Boots Combination
  {
    item: '[Not for Sale] Ancient Hero Boots Combination',
    item_desc_url: 'https://www.divine-pride.net/database/item/22171/ancient-hero-boots-1',
    recipes: [
      zelumium60,
      shadowdecon60,
      { item: 'Mother\'s Nightmare', amount: 300, drop_from: 'Maya' },
    ]
  },
  // [Not for Sale] Keraunos Combination
  {
    item: '[Not for Sale] Keraunos Combination',
    item_desc_url: 'https://www.divine-pride.net/database/item/28503/keraunos-1',
    recipes: [
      zelumium60,
      shadowdecon60,
      { item: 'Pocket Watch', amount: 300, drop_from: 'Kiel D-01' },
    ]
  },

  // [Not for Sale] Subject Cap Combination
  // [Not for Sale] Temporal Armor Combination

  // [Not for Sale] Anti-Magic Manteau Combination
  // [Not for Sale] Geffen Magic Muffler Combination
  // [Not for Sale] Exotic Temporal Boots Combination

  // [Not for Sale] Ancient Hero Weapon Combination
  
  // [Not for Sale] Giant Snake Breath Combination
  // [Not for Sale] Poring Sunglasses K+ Combination
  // [Not for Sale] Smoky Transform Hat Leaf Combination
  // [Not for Sale] Shining Trapezohedron Combination
  // [Not for Sale] Thorn Staff of Darkness Combination
  // [Not for Sale] Glast Heim Spectator Combination
  // [Not for Sale] Lunatic Family Balloon Combination
  // [Not for Sale] Fallen Warrior Armor Combination
  // [Not for Sale] Fumi Fan Combination
  // [Not for Sale] Thornbush Hairband Combination
  // [Not for Sale] Cursed Mad Bunny Combination
  // [Not for Sale] Luminous Blue Stone Combination
  // [Not for Sale] Officer's Hat Combination
  // [Not for Sale] Menblatt Wing Manteau Combination
  // [Not for Sale] Lapine Shield Combination
  // [Not for Sale] Kafra Uniform Combination

  // [Not for Sale] Sprint Gloves Combination
  // [Not for Sale] Poring Sunglasses K Combination
  // [Not for Sale] Isabella Carrot Combination
  // [Not for Sale] Silk Hat of Earth Combination
  // [Not for Sale] Hunting Cap of Gust Combination
  // Not for Sale] Knit Cap Of Water Combination
  // Not for Sale] Cookie Hat Combination
  // Not for Sale] Elemental Crown Combination
  // Not for Sale] Feeling of Love Combination
  // Not for Sale] Sting Silk Ribbon Combination
  // Not for Sale] Whistle Combination
  // Not for Sale] Indigo Rear Ribbon Combination
  // Not for Sale] Kafra Employee Band Combination
  // Not for Sale] Candy Bag Backpack Combination
]
//#endregion refs

//#region methods
function getZelumium(recipes: Recipe[]) {
  return recipes.find(recipe => recipe.item === 'Zelumium')?.amount || 0
}
function getShadowdecon(recipes: Recipe[]) {
  return recipes.find(recipe => recipe.item === 'Shadowdecon')?.amount || 0
}
function recipesExceptZelumiumAndShadowdecon(recipes: Recipe[]) {
  return recipes.filter(recipe => recipe.item !== 'Zelumium' && recipe.item !== 'Shadowdecon')
}
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
              <a :href="item.item_desc_url" target="_blank" class="text-blue-600">[Ability]</a>
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
                <li v-for="recipe in recipesExceptZelumiumAndShadowdecon(item.recipes)">
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