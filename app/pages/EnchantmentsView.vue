<script setup lang="ts">
import { RN_ENCHANTMENTS, getHead } from '@/router.options'

//#region use...
useHead(getHead(RN_ENCHANTMENTS))
//#endregion use...

const tableEnchantments = [
  // ASPD
  {
    name: "ASPD",
    table: {
      columnHeaders: ["Enchant Type", "Enchant Description"],
      rows: [
        ["ASPD 1", "ASPD +4%"],
        ["ASPD 2", "ASPD +6%"],
        ["ASPD 3", "ASPD +8%"],
        ["ASPD 4", "ASPD +10%"],
        ["ASPD + 1", "ASPD +1"],
        ["ASPD + 2", "ASPD +2"],
      ],
    },
  },
  // Expert Archer
  {
    name: "Expert Archer",
    table: {
      columnHeaders: ["Enchant Type", "Enchant Description"],
      rows: [
        ["Expert Archer 1", "Ranged Damage +2%"],
        ["Expert Archer 2", "Ranged Damage +4%"],
        ["Expert Archer 3", "Ranged Damage +6%"],
        ["Expert Archer 4", "Ranged Damage +8%"],
        ["Expert Archer 5", "Ranged Damage +10%"],
        ["Expert Archer 6", "Ranged Damage +12%"],
        ["Expert Archer 7", "Ranged Damage +14%"],
        ["Expert Archer 8", "Ranged Damage +16%"],
        ["Expert Archer 9", "Ranged Damage +18%"],
        ["Expert Archer 10", "Ranged Damage +20%, ASPD +1"],
      ],
    },
  },
  // Fatal
  {
    name: "Fatal",
    table: {
      columnHeaders: ["Enchant Type", "Enchant Description"],
      rows: [
        ["Fatal", "Critical Damage +3%"],
        ["Fatal 1", "Critical Damage +4%, Crit +1"],
        ["Fatal 2", "Critical Damage +6%, Crit +2"],
        ["Fatal 3", "Critical Damage +8%, Crit +3"],
        ["Fatal 4", "Critical Damage +10%, Crit +4"],
      ],
    },
  },
  // Fighting Spirit
  {
    name: "Fighting Spirit",
    table: {
      columnHeaders: ["Enchant Type", "Enchant Description"],
      rows: [
        ["Fighting Spirit 1", "ATK +6, Hit +2"],
        ["Fighting Spirit 2", "ATK +9, Hit +3"],
        ["Fighting Spirit 3", "ATK +12, Hit +4"],
        ["Fighting Spirit 4", "ATK +15, Hit +5"],
        ["Fighting Spirit 5", "ATK +18, Hit +6"],
        ["Fighting Spirit 6", "ATK +21, Hit +7"],
        ["Fighting Spirit 7", "ATK +24, Hit +8"],
        ["Fighting Spirit 8", "ATK +27, Hit +9"],
        ["Fighting Spirit 9", "ATK +30, Hit +10"],
        ["Fighting Spirit 10", "ATK +50, Hit +15"],
      ],
    },
  },
  // Sharp
  {
    name: "Sharp",
    table: {
      columnHeaders: ["Enchant Type", "Enchant Description"],
      rows: [
        ["Sharp 1", "Crit +6, Hit +2"],
        ["Sharp 2", "Crit +9, Hit +3"],
        ["Sharp 3", "Crit +12, Hit +4"],
        ["Sharp 4", "Crit +14, Hit +5"],
        ["Sharp 5", "Crit +15, Hit +6"],
      ],
    },
  },
  // After Skill Delay
  {
    name: "After Skill Delay",
    table: {
      columnHeaders: ["Enchant Type", "Enchant Description"],
      rows: [
        ["After Skill Delay 1", "Reduces the global delay of skills by 2%"],
        ["After Skill Delay 2", "Reduces the global delay of skills by 4%"],
        ["After Skill Delay 3", "Reduces the global delay of skills by 6%"],
      ],
    },
  },
  // Spell
  {
    name: "Spell",
    table: {
      columnHeaders: ["Enchant Type", "Enchant Description"],
      rows: [
        ["Spell 1", "MATK +6, reduces Variable Cast Time of skills by 4%"],
        ["Spell 2", "MATK +9, reduces Variable Cast Time of skills by 6%"],
        ["Spell 3", "MATK +12, reduces Variable Cast Time of skills by 8%"],
        ["Spell 4", "MATK +15, reduces Variable Cast Time of skills by 10%"],
        ["Spell 5", "MATK +18, reduces Variable Cast Time of skills by 10%"],
        ["Spell 6", "MATK +21, reduces Variable Cast Time of skills by 10%"],
        ["Spell 7", "MATK +24, reduces Variable Cast Time of skills by 10%"],
        ["Spell 8", "MATK +27, reduces Variable Cast Time of skills by 10%"],
        ["Spell 9", "MATK +30, reduces Variable Cast Time of skills by 10%"],
        ["Spell 10", "MATK +50, reduces Variable Cast Time of skills by 20%"],
      ],
    },
  },
  // #region Star of Mettle
  {
    name: "Star of Mettle",
    table: {
      columnHeaders: ["Enchant Type", "Enchant Description"],
      rows: [
        ["Lv 1", "ATK + 3%, HIT + 10"],
        ["Lv 2", "ATK + 5%, HIT + 15"],
        ["Lv 3", "ATK + 7%, HIT + 20, P.ATK + 1"],
        ["Lv 4", "ATK + 10%, HIT + 25, P.ATK + 2"],
        ["Lv 5", "ATK + 15%, HIT + 30, P.ATK + 5"],
      ],
    },
  },
  // #endregion Star of Mettle
  // #region Star of Master Archer
  {
    name: "Star of Master Archer",
    table: {
      columnHeaders: ["Enchant Type", "Enchant Description"],
      rows: [
        ["Lv 1", "เพิ่ม Damage ทางกายภาพระยะไกล 2%, ATK + 2%"],
        ["Lv 2", "เพิ่ม Damage ทางกายภาพระยะไกล 3%, ATK + 3%"],
        ["Lv 3", "เพิ่ม Damage ทางกายภาพระยะไกล 5%, ATK + 5%, P.ATK + 1"],
        ["Lv 4", "เพิ่ม Damage ทางกายภาพระยะไกล 7%, ATK + 6%, P.ATK + 2"],
        ["Lv 5", "เพิ่ม Damage ทางกายภาพระยะไกล 10%, ATK + 7%, P.ATK + 4"],
      ],
    },
  },
  // #endregion Star of Master Archer
  // #region Star of Sharp
  {
    name: "Star of Sharp",
    table: {
      columnHeaders: ["Enchant Type", "Enchant Description"],
      rows: [
        ["Lv 1", "CRI + 2, เพิ่ม Critical Damage 2%"],
        ["Lv 2", "CRI + 3, เพิ่ม Critical Damage 3%"],
        ["Lv 3", "CRI + 5, เพิ่ม Critical Damage 5%, P.ATK + 1"],
        ["Lv 4", "CRI + 6, เพิ่ม Critical Damage 10%, P.ATK + 2"],
        ["Lv 5", "CRI + 8, เพิ่ม Critical Damage 15%, P.ATK + 2, C.Rate + 1"],
      ],
    },
  },
  // #endregion Star of Sharp
  // #region Star of Spell
  {
    name: "Star of Spell",
    table: {
      columnHeaders: ["Enchant Type", "Enchant Description"],
      rows: [
        ["Lv 1", "MATK + 5, ลดระยะเวลาร่ายแบบแปรผัน 5%"],
        ["Lv 2", "MATK + 7, ลดระยะเวลาร่ายแบบแปรผัน 5%"],
        ["Lv 3", "MATK + 11, ลดระยะเวลาร่ายแบบแปรผัน 7%, S.MATK + 1"],
        ["Lv 4", "MATK + 17, ลดระยะเวลาร่ายแบบแปรผัน 10%, S.MATK + 2"],
        ["Lv 5", "MATK + 25, ลดระยะเวลาร่ายแบบแปรผัน 15%, S.MATK + 4"],
      ],
    },
  },
  // #endregion Star of Spell
  // #region Star of Speed
  {
    name: "Star of Speed",
    table: {
      columnHeaders: ["Enchant Type", "Enchant Description"],
      rows: [
        ["Lv 1", "FLEE + 5, ASPD +5%"],
        ["Lv 2", "FLEE + 10, ASPD + 7%"],
        ["Lv 3", "FLEE + 15, ASPD + 7%"],
        ["Lv 4", "FLEE + 20, ASPD + 10%, ASPD + 1"],
        ["Lv 5", "FLEE + 30, ASPD + 15%, ASPD + 2"],
      ],
    },
  },
  // #endregion Star of Speed
  // #region Star of Vital
  {
    name: "Star of Vital",
    table: {
      columnHeaders: ["Enchant Type", "Enchant Description"],
      rows: [
        ["Lv 1", "MHP + 2%, RES + 1, MRES + 1"],
        ["Lv 2", "MHP + 3%, RES + 2, MRES + 2"],
        ["Lv 3", "MHP + 5%, RES + 4, MRES + 4"],
        ["Lv 4", "MHP + 7%, RES + 6, MRES + 6"],
        ["Lv 5", "MHP + 10%, RES + 10, MRES + 10"],
      ],
    },
  },
  // #endregion Star of Vital
  // #region Star of Spirit
  {
    name: "Star of Spirit",
    table: {
      columnHeaders: ["Enchant Type", "Enchant Description"],
      rows: [
        ["Lv 1", "เพิ่มปริมาณ Heal 5%, MSP + 3%, เพิ่มพลังฟื้นฟู SP 10%"],
        ["Lv 2", "เพิ่มปริมาณ Heal 7%, MSP + 5%, เพิ่มพลังฟื้นฟู SP 15%"],
        ["Lv 3", "เพิ่มปริมาณ Heal 10%, MSP + 5%, เพิ่มพลังฟื้นฟู SP 15%, H.PLUS + 1"],
        ["Lv 4", "เพิ่มปริมาณ Heal 10%, MSP + 7%, เพิ่มพลังฟื้นฟู SP 15%, H.PLUS + 3"],
        ["Lv 5", "เพิ่มปริมาณ Heal 15%, MSP + 10%, เพิ่มพลังฟื้นฟู SP 20%, H.PLUS + 5"],
      ],
    },
  },
  // #endregion Star of Spirit
];
</script>

<template>
  <main class="container mx-auto">
    <h1 class="text-4xl font-bold">Enchantments</h1>

    <!-- #region card -->
    <div
      v-for="enchantment in tableEnchantments"
      :key="enchantment.name"
      class="p-3"
    >
      <div class="c-skill-card">
        <h3 class="text-xl font-bold">{{ enchantment.name }}</h3>

        <!-- #region table -->
        <table class="c-table">
          <thead>
            <tr>
              <th class="c-table-th">
                {{ enchantment.table.columnHeaders[0] }}
              </th>
              <th class="c-table-th">
                {{ enchantment.table.columnHeaders[1] }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in enchantment.table.rows" :key="row[0]">
              <td class="c-table-td tabular-nums">
                {{ row[0] }}
              </td>
              <td class="c-table-td tabular-nums">
                {{ row[1] }}
              </td>
            </tr>
          </tbody>
        </table>
        <!-- #endregion table -->
      </div>
    </div>
    <!-- #endregion card -->
  </main>
</template>
