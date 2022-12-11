<script setup lang="ts">
useHead({
  title: 'Lab 5 Headgear Enchantments | RO-Calculator',
  meta: [
    { name: 'description', content: 'Lab 5 Headgear Enchantments' }
  ],
})

const table2021Enchantments = [
  // Mettle
  {
    name: "Mettle",
    table: {
      columnHeaders: ["Level", "Enchant Description"],
      rows: [
        ["1", "Atk +3%, HIT +3"],
        ["2", "Atk +6%, HIT +6"],
        ["3", "Atk +9%, HIT +9"],
        ["4", "Atk +12%, HIT +12"],
        ["5", "Atk +15%, HIT +15"],
        ["6", "Atk +18%, HIT +18"],
        ["7", "Atk +21%, HIT +21"],
        ["8", "Atk +24%, HIT +24"],
        ["9", "Atk +27%, HIT +27"],
        ["10", "Atk +33%, HIT +33"],
      ],
    },
  },
  // Magic Essence
  {
    name: "Magic Essence",
    table: {
      columnHeaders: ["Level", "Enchant Description"],
      rows: [
        ["1", "MAtk +3%, Reduces fixed casting time by 0.1 seconds."],
        ["2", "MAtk +6%, Reduces fixed casting time by 0.2 seconds."],
        ["3", "MAtk +9%, Reduces fixed casting time by 0.3 seconds."],
        ["4", "MAtk +12%, Reduces fixed casting time by 0.4 seconds."],
        ["5", "MAtk +15%, Reduces fixed casting time by 0.5 seconds."],
        ["6", "MAtk +18%, Reduces fixed casting time by 0.6 seconds."],
        ["7", "MAtk +21%, Reduces fixed casting time by 0.7 seconds."],
        ["8", "MAtk +24%, Reduces fixed casting time by 0.8 seconds."],
        ["9", "MAtk +27%, Reduces fixed casting time by 0.9 seconds."],
        ["10", "MAtk +33%, Reduces fixed casting time by 1 second."],
      ],
    },
  },
  // Master Archer
  {
    name: "Master Archer",
    table: {
      columnHeaders: ["Level", "Enchant Description"],
      rows: [
        ["1", "ASPD +1%, +physical damage by 4% when using a bow."],
        ["2", "ASPD +2%, +physical damage by 8% when using a bow."],
        ["3", "ASPD +3%, +physical damage by 12% when using a bow."],
        ["4", "ASPD +4%, +physical damage by 16% when using a bow."],
        ["5", "ASPD +5%, +physical damage by 20% when using a bow."],
        ["6", "ASPD +6%, +physical damage by 24% when using a bow."],
        ["7", "ASPD +7%, +physical damage by 28% when using a bow."],
        ["8", "ASPD +8%, +physical damage by 32% when using a bow."],
        ["9", "ASPD +9%, +physical damage by 36% when using a bow."],
        ["10", "ASPD +10%, +physical damage by 44% when using a bow."],
      ],
    },
  },
  // Adamantine
  {
    name: "Adamantine",
    table: {
      columnHeaders: ["Level", "Enchant Description"],
      rows: [
        ["1", "Max HP +5%, DEF +15"],
        ["2", "Max HP +10%, DEF +30"],
        ["3", "Max HP +15%, DEF +45"],
        ["4", "Max HP +20%, DEF +60"],
        ["5", "Max HP +25%, DEF +75"],
        ["6", "Max HP +30%, DEF +90"],
        ["7", "Max HP +35%, DEF +105"],
        ["8", "Max HP +40%, DEF +120"],
        ["9", "Max HP +45%, DEF +135"],
        ["10", "Max HP +55%, DEF +150"],
      ],
    },
  },
  // Affection
  {
    name: "Affection",
    table: {
      columnHeaders: ["Level", "Enchant Description"],
      rows: [
        ["1", "MDef +3%, +recovery rate of recovery skills by 5%"],
        ["2", "MDef +6%, +recovery rate of recovery skills by 10%"],
        ["3", "MDef +9%, +recovery rate of recovery skills by 15%"],
        ["4", "MDef +12%, +recovery rate of recovery skills by 20%"],
        ["5", "MDef +15%, +recovery rate of recovery skills by 25%"],
        ["6", "MDef +18%, +recovery rate of recovery skills by 30%"],
        ["7", "MDef +21%, +recovery rate of recovery skills by 35%"],
        ["8", "MDef +24%, +recovery rate of recovery skills by 40%"],
        ["9", "MDef +27%, +recovery rate of recovery skills by 45%"],
        ["10", "MDef +30%, +recovery rate of recovery skills by 55%"],
      ],
    },
  },
  // Acute
  {
    name: "Acute",
    table: {
      columnHeaders: ["Level", "Enchant Description"],
      rows: [
        ["1", "CRIT +3%, +critical damage on targets by 10%"],
        ["2", "CRIT +6%, +critical damage on targets by 20%"],
        ["3", "CRIT +9%, +critical damage on targets by 30%"],
        ["4", "CRIT +12%, +critical damage on targets by 40%"],
        ["5", "CRIT +15%, +critical damage on targets by 50%"],
        ["6", "CRIT +18%, +critical damage on targets by 60%"],
        ["7", "CRIT +21%, +critical damage on targets by 70%"],
        ["8", "CRIT +24%, +critical damage on targets by 80%"],
        ["9", "CRIT +27%, +critical damage on targets by 90%"],
        ["10", "CRIT +30%, +critical damage on targets by 110%"],
      ],
    },
  },
];
</script>

<template>
  <main class="container mx-auto">
    <h1 class="text-4xl font-bold">Enchantment</h1>

    <h3 class="">SEO: หมวก Lab 5, Headgear Enchantments, อ๊อฟหมวก</h3>

    <!-- #region card -->
    <div
      v-for="enchantment in table2021Enchantments"
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
