<script setup lang="ts">
import { GChart } from 'vue-google-charts'

import { 
  dataEXPsHeader as tableEXPsHeader,
  dataEXPs as tableEXPs, 
  dataJOBsHeader as tableJOBsHeader,
  dataJOBs as tableJOBs,
} from '~/repositories/ExperienceAndJobExperienceTable.repo'

useHead({
  title: 'EXP Table & Job EXP Table | RO-Calculator',
  meta: [
    { name: 'description', content: 'RO-GGT, EXP Table & Job EXP Table' }
  ],
})

const chartEXPData = [[...tableEXPsHeader], ...tableEXPs]
const chartEXPOptions = {
  title: 'EXPs Chart',
  height: 800,
}
const chartJOBData = [[...tableJOBsHeader], ...tableJOBs]
const chartJOBOptions = {
  title: 'JOB EXPs Chart',
  height: 800,
}

function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num);
}
function summaryEXP(data: number[][], columnIndex = 1): number {
  return data.reduce((acc, cur) => acc + cur[columnIndex], 0)
}
</script>

<template>
  <main class="container mx-auto">
    <h1 class="text-4xl font-bold">EXP &amp; Job EXP</h1>

    <h3 class="">SEO: RO-GGT 2022 ตาราง EXP, RO-GGT 2022 ตาราง Job EXP</h3>

    <div class="p-3">
      <div class="c-skill-card">
        <h3 class="text-xl font-bold">EXP</h3>

        <GChart type="ColumnChart" :data="chartEXPData" :options="chartEXPOptions" />

        <table class="c-table">
          <thead>
            <tr>
              <th class="c-table-th">Level</th>
              <th class="c-table-th">EXP (old)</th>
              <th class="c-table-th">EXP (185/65)<br />2022-07-27</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="exp in tableEXPs" :key="exp[0]">
              <td class="c-table-td text-right tabular-nums">
                {{ formatNumber(exp[0]) }}
              </td>
              <td class="c-table-td text-right tabular-nums">
                {{ formatNumber(exp[1]) }}
              </td>
              <td class="c-table-td text-right tabular-nums">
                {{ formatNumber(exp[2]) }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th class="c-table-th">Summary</th>
              <th class="c-table-th">{{ formatNumber(summaryEXP(tableEXPs, 1)) }}</th>
              <th class="c-table-th">{{ formatNumber(summaryEXP(tableEXPs, 2)) }}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>

    <div class="p-3">
      <div class="c-skill-card">
        <h3 class="text-xl font-bold">Job EXP</h3>

        <GChart type="ColumnChart" :data="chartJOBData" :options="chartJOBOptions" />

        <table class="c-table">
          <thead>
            <tr>
              <th class="c-table-th">Level</th>
              <th class="c-table-th">Job (old)</th>
              <th class="c-table-th">Job (185/65)<br />2022-07-27</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="exp in tableJOBs" :key="exp[0]">
              <td class="c-table-td text-right tabular-nums">
                {{ formatNumber(exp[0]) }}
              </td>
              <td class="c-table-td text-right tabular-nums">
                {{ formatNumber(exp[1]) }}
              </td>
              <td class="c-table-td text-right tabular-nums">
                {{ formatNumber(exp[2]) }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th class="c-table-th">Summary</th>
              <th class="c-table-th">{{ formatNumber(summaryEXP(tableJOBs, 1)) }}</th>
              <th class="c-table-th">{{ formatNumber(summaryEXP(tableJOBs, 2)) }}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </main>
</template>
