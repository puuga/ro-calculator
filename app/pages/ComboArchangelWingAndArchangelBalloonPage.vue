<script setup lang="ts">
import { consola } from 'consola'
import { getAnalytics, logEvent } from 'firebase/analytics'

import { RN_COMBO_ARCHANGEL_WING_AND_ARCHANGEL_BALLOON, getHead } from '@/router.options'

//#region use...
useHead(getHead(RN_COMBO_ARCHANGEL_WING_AND_ARCHANGEL_BALLOON))

const { $firebaseApp } = useNuxtApp()
//#endregion use...

//#region refs
const ArchangelWingImage = {
  default: '/images/2023-03-18/Archangel-Wing.png',
  classHTML: 'mx-auto max-h-96',
  alt: 'Archangel Wing [1]',
}
const ArchangelBalloonImage = {
  default: 'images/2023-03-18/Archangel-Balloon.jpg',
  classHTML: 'mx-auto max-h-96',
  alt: 'Archangel Balloon',
}
const enchantList = [
  'STR+1',
  'AGI+1',
  'VIT+1',
  'INT+1',
  'DEX+1',
  'LUK+1',
  'STR+2',
  'AGI+2',
  'VIT+2',
  'INT+2',
  'DEX+2',
  'LUK+2',
  'MATK+1%',
  'MATK+2%',
  'Sharp 2',
  'Sharp 3',
  'Spell 2Lv',
  'Spell 3Lv',
  'Expert Archer 2Lv',
  'Expert Archer 3Lv',
  'Fighting Spirit 2Lv',
  'Fighting Spirit 3Lv',
  'Archbishop2LV',
  'Archbishop3LV',
  'Archbishop4LV',
  'Immuned 1Lv',
  'Cranial 1Lv',
  'Special STR',
  'Special AGI',
  'Special VIT',
  'Special INT',
  'Special DEX',
  'Special LUK',
]
//#endregion refs

//#region methods
//#endregion methods
</script>

<template>
  <main class="container mx-auto">
    <h1 class="text-4xl font-bold">Combo Archangel Wing [1] and Archangel Balloon | RO-Calculator</h1>

    <div>SEO: Combo Archangel Wing [1] and Archangel Balloon</div>

    <div>Update</div>
    <div class="pl-6">
      <ul class="list-disc">
        <li>2023-03-18: Initial</li>
      </ul>
    </div>

    <!-- #region content -->
    <div>
      <!-- #region content-desc -->
      <div class="my-5">
        <div>
          มาแล้ว กับ Combo Item ที่ (น่าจะ) เป็นที่นิยมมาก ๆ ในเกม Ragnarok Online
          คือ Combo Archangel Wing [1] and Archangel Balloon
          เนื่องจาก Combo นี้ ใช้งานได้ดีทั้งสายกายภาพ และสายเวทมนตร์
          เงื่อนไขการใช้งาน จะว่าง่ายก็ง่าย จะว่ายากก็ยาก
          และที่สำคัญคือใส่ได้ตั้งแต่เลเวล 1
        </div>
        <h3 class="text-2xl font-bold">สายกายภาพ</h3>
        <div>
          เด่นสุดก็ต้องเป็น <strong>เพิ่ม Damage ทางกายภาพระยะใกล้ 3% ทุก ๆ Base STR 20</strong>
          ก็ถ้าเรามี Base STR 120 ก็จะได้เพิ่ม Damage ทางกายภาพระยะใกล้ 18% อันนี้คือสุดมาก
        </div>
        <div>
          เด่นไม่แพ้กัน ก็คือ <strong>ลด Delay หลังใช้สกิล 3% ทุก ๆ Base DEX 20</strong>
          ก็ถ้าเรามี Base DEX 120 ก็จะลด Delay หลังใช้สกิล 18% หาแบบนี้ที่ไหนได้อีก
        </div>
        <h3 class="text-2xl font-bold">สายกายภาพ</h3>
        <div>
          เด่นสุดก็ต้องเป็น <strong>เพิ่ม Damage ทางเวทมนตร์ทุกธาตุ 3% ทุก ๆ Base INT 20</strong>
          ก็ถ้าเรามี Base ATR 120 ก็จะได้เพิ่ม Damage ทางเวทมนตร์ระยะใกล้ 18% อันนี้คือสุดมาก
        </div>
        <h3 class="text-2xl font-bold">ดีไม่สุด</h3>
        <div>
          ขาดลดร่าย และเพิ่ม ASPD ไป แต่ก็นะ เราพอจะไปหาจากอย่างอื่นได้ไม่ยากนัก
        </div>
        <h3 class="text-2xl font-bold">Archangel Wing Enchant</h3>
        <div>
          เนื่องจากความขาด ๆ เกิน ๆ ของ Combo นี้ สิ่งที่จะช่วยมาอุดในจุดนี้ก็คือ
          ตัว Archangel Wing สามารถนำไป Enchant ได้ !
          แต่ก็เป็น Enchant ที่ดูแล้วธรรมดามาก ๆ แต่ก็ยังมีประโยชน์อยู่
        </div>
        <div>
          Archangel Wing สามารถนำไป Enchant Option ได้ที่ NPC Artisan of Fallen Angel
          พิกัด <strong>/navi malangdo 238/149</strong> เงื่อนไขการ Enchant Option
          <ol class="list-decimal pl-6">
            <li>ใช้ 1,000,000 zeny เป็นค่าใช้จ่าย</li>
            <li>ต้องสวมใส่ Archangel Wing ไว้ที่ตัวละครขณะทำการ Enchant</li>
            <li>มีโอกาสเล็กน้อยที่จะทำให้ Archangel Wing สูญหายจากการ Enchant</li>
            <li>สามารถลบ Enchant ได้โดยการใช้ 3 Silvervine</li>
          </ol>
        </div>
      </div>
      <!-- #endregion content-desc -->

      <!-- #region Archangel Balloon -->
      <div class="my-5">
        <h3 class="text-2xl font-bold">Archangel Balloon</h3>
        <LazySimpleNativeImageViewV1
          :default="ArchangelBalloonImage.default"
          :classHTML="ArchangelBalloonImage.classHTML"
          :alt="ArchangelBalloonImage.alt"
        />
      </div>
      <!-- #endregion Archangel Balloon -->

      <!-- #region Combo Archangel Wing [1] -->
      <div class="my-5">
        <h3 class="text-2xl font-bold">Archangel Wing</h3>
        <LazySimpleNativeImageViewV1
          :default="ArchangelWingImage.default"
          :classHTML="ArchangelWingImage.classHTML"
          :alt="ArchangelWingImage.alt"
        />
      </div>
      <!-- #endregion Combo Archangel Wing [1] -->

      <!-- #region Combo Archangel Wing [1] - Enchant -->
      <div class="my-5">
        <h3 class="text-2xl font-bold">Archangel Wing Enchant</h3>
        <table class="c-table">
        <thead>
          <tr>
            <th class="c-table-th">Enchant List</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="enchant in enchantList" :key="enchant">
            <td class="c-table-td">{{ enchant }}</td>
          </tr>
        </tbody>
      </table>
      </div>
      <!-- #endregion Combo Archangel Wing [1] - Enchant -->
    </div>
    <!-- #endregion content -->
  </main>
</template>