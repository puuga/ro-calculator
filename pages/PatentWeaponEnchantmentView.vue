<script setup lang="ts">
import { RN_PATENT_WEAPON_ENCHANTMENT, getHead } from '@/app/router.options'

//#region use...
useHead(getHead(RN_PATENT_WEAPON_ENCHANTMENT))

const { $firebaseApp } = useNuxtApp()
//#endregion use...

const tableGreatHeroBravery = {
  name: 'Great Hero\'s Bravery',
  tables: [
    {
      name: '1st Enchant List',
      columns: ['Enchant List', 'Min ~ Max'],
      data: [
        ['ATK', '5 ~ 40'],
        ['ASPD', '1 ~ 2'],
        ['%Reduce Delay After Attack', '3 ~ 12'],
        ['%Increases Long Ranged Physical Damage', '3 ~ 12'],
        ['%Increases Melee Physical Damage', '3 ~ 12'],
        ['%Increases Physical Damage to Neutral Property Monster', '3 ~ 25'],
        ['%Increases Physical Damage to Water Property Monster', '3 ~ 25'],
        ['%Increases Physical Damage to Earth Property Monster', '3 ~ 25'],
        ['%Increases Physical Damage to Fire Property Monster', '3 ~ 25'],
        ['%Increases Physical Damage to Wind Property Monster', '3 ~ 25'],
        ['%Increases Physical Damage to Poison Property Monster', '3 ~ 25'],
        ['%Increases Physical Damage to Holy Property Monster', '3 ~ 25'],
        ['%Increases Physical Damage to Shadow Property Monster', '3 ~ 25'],
        ['%Increases Physical Damage to Ghost Property Monster', '3 ~ 25'],
        ['%Increases Physical Damage to Undead Property Monster', '3 ~ 25'],
      ]
    },
    {
      name: '2nd Enchant List',
      columns: ['Enchant List', 'Min ~ Max'],
      data: [
        ['%ATK', '1 ~ 7'],
        ['%Increses Critical Damage', '3 ~ 12'],
        ['%Increases Physical Damage to Formless Race Monster', '3 ~ 25'],
        ['%Increases Physical Damage to Undead Race Monster', '3 ~ 25'],
        ['%Increases Physical Damage to Brute Race Monster', '3 ~ 25'],
        ['%Increases Physical Damage to Plant Race Monster', '3 ~ 25'],
        ['%Increases Physical Damage to Insect Race Monster', '3 ~ 25'],
        ['%Increases Physical Damage to Fish Race Monster', '3 ~ 25'],
        ['%Increases Physical Damage to Demon Race Monster', '3 ~ 25'],
        ['%Increases Physical Damage to Demihuman Race Monster', '3 ~ 25'],
        ['%Increases Physical Damage to Angel Race Monster', '3 ~ 25'],
        ['%Increases Physical Damage to Dragon Race Monster', '3 ~ 25'],
        ['%Increases Physical Damage to Normal Monster', '3 ~ 12'],
        ['%Increases Physical Damage to Boss Monster', '3 ~ 12'],
        ['Weapon can\'t be destroyed', ''],
      ]
    }
  ]
};
const tableGreatHeroWisdom = {
  name: 'Great Hero\'s Wisdom',
  tables: [
    {
      name: '1st Enchant List',
      columns: ['Enchant List', 'Min ~ Max'],
      data: [
        ['MATK', '5 ~ 40'],
        ['%Heal Effectiveness', '3 ~ 25'],
        ['%Reduces Variable Casting Time', '3 ~ 12'],
        ['%Reduces Delay After Skill', '1 ~ 5'],
        ['%Increases Neutral Property Magical Damage', '3 ~ 12'],
        ['%Increases Water Property Magical Damage', '3 ~ 12'],
        ['%Increases Earth Property Magical Damage', '3 ~ 12'],
        ['%Increases Fire Property Magical Damage', '3 ~ 12'],
        ['%Increases Wind Property Magical Damage', '3 ~ 12'],
        ['%Increases Poison Property Magical Damage', '3 ~ 12'],
        ['%Increases Holy Property Magical Damage', '3 ~ 12'],
        ['%Increases Shadow Property Magical Damage', '3 ~ 12'],
        ['%Increases Ghost Property Magical Damage', '3 ~ 12'],
        ['%Increases Magical Damage to Neutral Property Monster', '3 ~ 25'],
        ['%Increases Magical Damage to Water Property Monster', '3 ~ 25'],
        ['%Increases Magical Damage to Earth Property Monster', '3 ~ 25'],
        ['%Increases Magical Damage to Fire Property Monster', '3 ~ 25'],
        ['%Increases Magical Damage to Wind Property Monster', '3 ~ 25'],
        ['%Increases Magical Damage to Poison Property Monster', '3 ~ 25'],
        ['%Increases Magical Damage to Holy Property Monster', '3 ~ 25'],
        ['%Increases Magical Damage to Shadow Property Monster', '3 ~ 25'],
        ['%Increases Magical Damage to Ghost Property Monster', '3 ~ 25'],
        ['%Increases Magical Damage to Undead Property Monster', '3 ~ 25'],
      ]
    },
    {
      name: '2nd Enchant List',
      columns: ['Enchant List', 'Min ~ Max'],
      data: [
        ['%MATK', '1 ~ 7'],
        ['%Reduces Variable Casting Time', '3 ~ 12'],
        ['%Increases Magical Damage to Formless Race Monster', '3 ~ 25'],
        ['%Increases Magical Damage to Undead Race Monster', '3 ~ 25'],
        ['%Increases Magical Damage to Brute Race Monster', '3 ~ 25'],
        ['%Increases Magical Damage to Plant Race Monster', '3 ~ 25'],
        ['%Increases Magical Damage to Insect Race Monster', '3 ~ 25'],
        ['%Increases Magical Damage to Fish Race Monster', '3 ~ 25'],
        ['%Increases Magical Damage to Demon Race Monster', '3 ~ 25'],
        ['%Increases Magical Damage to Demihuman Race Monster', '3 ~ 25'],
        ['%Increases Magical Damage to Angel Race Monster', '3 ~ 25'],
        ['%Increases Magical Damage to Dragon Race Monster', '3 ~ 25'],
        ['%Increases Magical Damage to Normal Monster', '3 ~ 12'],
        ['%Increases Magical Damage to Boss Monster', '3 ~ 12'],
      ]
    }
  ]
};
const tableHeroBravery = {
  name: 'Hero\'s Bravery',
  tables: [
    {
      name: '1st Enchant List',
      columns: ['Enchant List', 'Min ~ Max'],
      data: [
        ['ATK', '5 ~ 30'],
        ['ASPD', '1 ~ 1'],
        ['%Reduce Delay After Attack', '3 ~ 10'],
        ['%Increases Long Ranged Physical Damage', '3 ~ 10'],
        ['%Increases Physical Damage to Neutral Property Monster', '3 ~ 20'],
        ['%Increases Physical Damage to Water Property Monster', '3 ~ 20'],
        ['%Increases Physical Damage to Earth Property Monster', '3 ~ 20'],
        ['%Increases Physical Damage to Fire Property Monster', '3 ~ 20'],
        ['%Increases Physical Damage to Wind Property Monster', '3 ~ 20'],
        ['%Increases Physical Damage to Poison Property Monster', '3 ~ 20'],
        ['%Increases Physical Damage to Holy Property Monster', '3 ~ 20'],
        ['%Increases Physical Damage to Shadow Property Monster', '3 ~ 20'],
        ['%Increases Physical Damage to Ghost Property Monster', '3 ~ 20'],
        ['%Increases Physical Damage to Undead Property Monster', '3 ~ 20'],
      ]
    },
    {
      name: '2nd Enchant List',
      columns: ['Enchant List', 'Min ~ Max'],
      data: [
        ['%ATK', '1 ~ 5'],
        ['%Increses Critical Damage', '3 ~ 10'],
        ['%Increases Physical Damage to Formless Race Monster', '3 ~ 20'],
        ['%Increases Physical Damage to Undead Race Monster', '3 ~ 20'],
        ['%Increases Physical Damage to Brute Race Monster', '3 ~ 20'],
        ['%Increases Physical Damage to Plant Race Monster', '3 ~ 20'],
        ['%Increases Physical Damage to Insect Race Monster', '3 ~ 20'],
        ['%Increases Physical Damage to Fish Race Monster', '3 ~ 20'],
        ['%Increases Physical Damage to Demon Race Monster', '3 ~ 20'],
        ['%Increases Physical Damage to Demihuman Race Monster', '3 ~ 20'],
        ['%Increases Physical Damage to Angel Race Monster', '3 ~ 20'],
        ['%Increases Physical Damage to Dragon Race Monster', '3 ~ 20'],
        ['%Increases Physical Damage to Normal Monster', '3 ~ 10'],
        ['%Increases Physical Damage to Boss Monster', '3 ~ 10'],
        ['Weapon can\'t be destroyed', ''],
      ]
    }
  ]
};
const tableHeroWisdom = {
  name: 'Hero\'s Wisdom',
  tables: [
    {
      name: '1st Enchant List',
      columns: ['Enchant List', 'Min ~ Max'],
      data: [
        ['%Heal Effectiveness', '3 ~ 20'],
        ['%Reduces Variable Casting Time', '3 ~ 10'],
        ['%Reduces Delay After Skill', '1 ~ 5'],
        ['%Increases Magical Damage to Neutral Property Monster', '3 ~ 20'],
        ['%Increases Magical Damage to Water Property Monster', '3 ~ 20'],
        ['%Increases Magical Damage to Earth Property Monster', '3 ~ 20'],
        ['%Increases Magical Damage to Fire Property Monster', '3 ~ 20'],
        ['%Increases Magical Damage to Wind Property Monster', '3 ~ 20'],
        ['%Increases Magical Damage to Poison Property Monster', '3 ~ 20'],
        ['%Increases Magical Damage to Holy Property Monster', '3 ~ 20'],
        ['%Increases Magical Damage to Shadow Property Monster', '3 ~ 20'],
        ['%Increases Magical Damage to Ghost Property Monster', '3 ~ 20'],
        ['%Increases Magical Damage to Undead Property Monster', '3 ~ 20'],
      ]
    },
    {
      name: '2nd Enchant List',
      columns: ['Enchant List', 'Min ~ Max'],
      data: [
        ['%Reduces Variable Casting Time', '3 ~ 10'],
        ['%Increases Magical Damage to Formless Race Monster', '3 ~ 20'],
        ['%Increases Magical Damage to Undead Race Monster', '3 ~ 20'],
        ['%Increases Magical Damage to Brute Race Monster', '3 ~ 20'],
        ['%Increases Magical Damage to Plant Race Monster', '3 ~ 20'],
        ['%Increases Magical Damage to Insect Race Monster', '3 ~ 20'],
        ['%Increases Magical Damage to Fish Race Monster', '3 ~ 20'],
        ['%Increases Magical Damage to Demon Race Monster', '3 ~ 20'],
        ['%Increases Magical Damage to Demihuman Race Monster', '3 ~ 20'],
        ['%Increases Magical Damage to Angel Race Monster', '3 ~ 20'],
        ['%Increases Magical Damage to Dragon Race Monster', '3 ~ 20'],
        ['%Increases Magical Damage to Normal Monster', '3 ~ 10'],
        ['%Increases Magical Damage to Boss Monster', '3 ~ 10'],
      ]
    }
  ]
};
</script>

<template>
  <main class="container mx-auto">
    <h1 class="text-4xl font-bold">Patent Weapon Enchantment</h1>

    <h3 class="">SEO: Patent Weapon Enchantment</h3>

    <!-- #region card tableGreatHeroBravery -->
    <div class="p-3">
      <div class="c-skill-card">
        <h3 class="text-xl font-bold">{{ tableGreatHeroBravery.name }}</h3>

        <!-- #region table -->
        <table 
          v-for="table of tableGreatHeroBravery.tables" 
          :key="table.name" 
          class="c-table mb-3"
        >
          <thead>
            <tr>
              <th colspan="2" class="c-table-th">
                {{ table.name }}
              </th>
            </tr>
            <tr>
              <th class="c-table-th">
                {{ table.columns[0] }}
              </th>
              <th class="c-table-th">
                {{ table.columns[1] }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in table.data" :key="data[0]">
              <td class="c-table-td tabular-nums">
                {{ data[0] }}
              </td>
              <td class="c-table-td tabular-nums">
                {{ data[1] }}
              </td>
            </tr>
          </tbody>
        </table>
        <!-- #endregion table -->
      </div>
    </div>
    <!-- #endregion card tableGreatHeroBravery -->

    <!-- #region card tableGreatHeroWisdom -->
    <div class="p-3">
      <div class="c-skill-card">
        <h3 class="text-xl font-bold">{{ tableGreatHeroWisdom.name }}</h3>

        <!-- #region table -->
        <table 
          v-for="table of tableGreatHeroWisdom.tables" 
          :key="table.name" 
          class="c-table mb-3"
        >
          <thead>
            <tr>
              <th colspan="2" class="c-table-th">
                {{ table.name }}
              </th>
            </tr>
            <tr>
              <th class="c-table-th">
                {{ table.columns[0] }}
              </th>
              <th class="c-table-th">
                {{ table.columns[1] }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in table.data" :key="data[0]">
              <td class="c-table-td tabular-nums">
                {{ data[0] }}
              </td>
              <td class="c-table-td tabular-nums">
                {{ data[1] }}
              </td>
            </tr>
          </tbody>
        </table>
        <!-- #endregion table -->
      </div>
    </div>
    <!-- #endregion card tableGreatHeroWisdom -->

    <!-- #region card tableHeroBravery -->
    <div class="p-3">
      <div class="c-skill-card">
        <h3 class="text-xl font-bold">{{ tableHeroBravery.name }}</h3>

        <!-- #region table -->
        <table 
          v-for="table of tableHeroBravery.tables" 
          :key="table.name" 
          class="c-table mb-3"
        >
          <thead>
            <tr>
              <th colspan="2" class="c-table-th">
                {{ table.name }}
              </th>
            </tr>
            <tr>
              <th class="c-table-th">
                {{ table.columns[0] }}
              </th>
              <th class="c-table-th">
                {{ table.columns[1] }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in table.data" :key="data[0]">
              <td class="c-table-td tabular-nums">
                {{ data[0] }}
              </td>
              <td class="c-table-td tabular-nums">
                {{ data[1] }}
              </td>
            </tr>
          </tbody>
        </table>
        <!-- #endregion table -->
      </div>
    </div>
    <!-- #endregion card tableHeroBravery -->

    <!-- #region card tableHeroWisdom -->
    <div class="p-3">
      <div class="c-skill-card">
        <h3 class="text-xl font-bold">{{ tableHeroWisdom.name }}</h3>

        <!-- #region table -->
        <table 
          v-for="table of tableHeroWisdom.tables" 
          :key="table.name" 
          class="c-table mb-3"
        >
          <thead>
            <tr>
              <th colspan="2" class="c-table-th">
                {{ table.name }}
              </th>
            </tr>
            <tr>
              <th class="c-table-th">
                {{ table.columns[0] }}
              </th>
              <th class="c-table-th">
                {{ table.columns[1] }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in table.data" :key="data[0]">
              <td class="c-table-td tabular-nums">
                {{ data[0] }}
              </td>
              <td class="c-table-td tabular-nums">
                {{ data[1] }}
              </td>
            </tr>
          </tbody>
        </table>
        <!-- #endregion table -->
      </div>
    </div>
    <!-- #endregion card tableHeroWisdom -->

    <!-- #region references -->
    <div>
      <h3 class="">References</h3>
      <ul>
        <li>
          <a href="https://ro.gnjoy.in.th/new-enchant-ancient-weapon-temporal-manteau">https://ro.gnjoy.in.th/new-enchant-ancient-weapon-temporal-manteau</a>
        </li>
        <li>
          <a href="https://www.divine-pride.net/forum/index.php?/topic/3377-kro-cash-items-enchant-refine-and-upgrade/#comment-7155">https://www.divine-pride.net/forum/index.php?/topic/3377-kro-cash-items-enchant-refine-and-upgrade/#comment-7155</a>
        </li>
      </ul>
    </div>
    <!-- #endregion references -->
  </main>
</template>
