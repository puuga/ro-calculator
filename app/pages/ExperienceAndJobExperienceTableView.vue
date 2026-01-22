<script setup lang="ts">
import { GChart } from 'vue-google-charts'

import { RN_EXP_AND_JOB_EXP_TABLE, getHead } from '@/router.options'
import { 
  dataEXPsHeader as tableEXPsHeader,
  dataEXPs as tableEXPs, 
  dataJOBsHeader as tableJOBsHeader,
  dataJOBs as tableJOBs,
  dataClass4JOBsHeader as tableClass4JOBsHeader,
  dataClass4JOBs as tableClass4JOBs,
} from '@/repositories/ExperienceAndJobExperienceTable.repo'

//#region use...
useHead(getHead(RN_EXP_AND_JOB_EXP_TABLE))

const { $firebaseApp } = useNuxtApp()
//#endregion use...

//#region refs
const expRange = ref('all')
//#endregion refs

const chartEXPData = [[...tableEXPsHeader], ...tableEXPs]
const chartEXPOptions = {
  title: 'Class 3-4 EXPs Chart',
  height: 800,
}
const chartJOBData = [[...tableJOBsHeader], ...tableJOBs]
const chartJOBOptions = {
  title: 'Class 3 JOB EXPs Chart',
  height: 800,
}
const chartClass4JOBData = [[...tableClass4JOBsHeader], ...tableClass4JOBs]
const chartClass4JOBOptions = {
  title: 'Class 4 JOB EXPs Chart',
  height: 800,
}

function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num);
}
function summaryEXP(data: number[][], columnIndex = 1): number {
  return data.reduce((acc, cur) => acc + cur[columnIndex], 0)
}
function getExpRange(data: number[][], range: string): (string[] | number[])[] {
  if (range === 'all') return [[...tableEXPsHeader], ...data]
  const [min, max] = range.split('-').map(Number)
  return [[...tableEXPsHeader], ...data.filter((exp) => exp[0] >= min && exp[0] <= max)]
}
</script>

<template>
  <main class="container mx-auto">
    <h1 class="text-4xl font-bold">EXP &amp; Job EXP</h1>

    <h3 class="">SEO: RO-GGT 2022 ตาราง EXP, RO-GGT 2022 ตาราง Job EXP</h3>

    <!-- #region class 3-4 exp -->
    <div class="p-3">
      <div class="c-skill-card">
        <h3 class="text-xl font-bold">Class 3-4 EXP</h3>

        <div>
          <div>
            <label for="exp-range">Choose a range:</label>
            <select id="exp-range" name="exp-range" v-model="expRange">
              <option value="all" selected>All</option>
              <option value="100-175">100-175</option>
              <option value="175-185">175-185</option>
              <option value="175-200">175-200</option>
              <option value="200-260">200-260</option>
            </select>
          </div>
          <div>
            <GChart type="ColumnChart" :data="getExpRange(tableEXPs, expRange)" :options="chartEXPOptions" />
          </div>
        </div>

        <table class="c-table">
          <thead class="bg-slate-100 dark:bg-slate-800 sticky top-0">
            <tr>
              <th class="c-table-th">Level</th>
              <th class="c-table-th">EXP (old)</th>
              <th class="c-table-th">EXP (185/65)<br />2022-07-27</th>
              <th class="c-table-th">EXP (200/70)<br />????-??-??</th>
              <th class="c-table-th">EXP (250/50)<br />2024-11-14</th>
              <th class="c-table-th">EXP (260/??)<br />????-??-??</th>
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
              <td class="c-table-td text-right tabular-nums">
                {{ formatNumber(exp[3]) }}
              </td>
              <td class="c-table-td text-right tabular-nums">
                {{ formatNumber(exp[4]) }}
              </td>
              <td class="c-table-td text-right tabular-nums">
                {{ formatNumber(exp[5]) }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th class="c-table-th">Summary</th>
              <th class="c-table-th">{{ formatNumber(summaryEXP(tableEXPs, 1)) }}</th>
              <th class="c-table-th">{{ formatNumber(summaryEXP(tableEXPs, 2)) }}</th>
              <th class="c-table-th">{{ formatNumber(summaryEXP(tableEXPs, 3)) }}</th>
              <th class="c-table-th">{{ formatNumber(summaryEXP(tableEXPs, 4)) }}</th>
              <th class="c-table-th">{{ formatNumber(summaryEXP(tableEXPs, 5)) }}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <!-- #endregion class 3-4 exp -->

    <!-- #region job 3 exp -->
    <div class="p-3">
      <div class="c-skill-card">
        <h3 class="text-xl font-bold">Class 3 Job EXP</h3>

        <GChart type="ColumnChart" :data="chartJOBData" :options="chartJOBOptions" />

        <table class="c-table">
          <thead class="bg-slate-100 dark:bg-slate-800 sticky top-0">
            <tr>
              <th class="c-table-th">Level</th>
              <th class="c-table-th">Job (old)</th>
              <th class="c-table-th">Job (185/65)<br />2022-07-27</th>
              <th class="c-table-th">Job (200/70)<br />????-??-??</th>
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
              <td class="c-table-td text-right tabular-nums">
                {{ formatNumber(exp[3]) }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th class="c-table-th">Summary</th>
              <th class="c-table-th">{{ formatNumber(summaryEXP(tableJOBs, 1)) }}</th>
              <th class="c-table-th">{{ formatNumber(summaryEXP(tableJOBs, 2)) }}</th>
              <th class="c-table-th">{{ formatNumber(summaryEXP(tableJOBs, 3)) }}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <!-- #endregion job 3 exp -->

    <!-- #region job 4 exp -->
    <div class="p-3">
      <div class="c-skill-card">
        <h3 class="text-xl font-bold">Class 4 Job EXP</h3>

        <GChart type="ColumnChart" :data="chartClass4JOBData" :options="chartClass4JOBOptions" />

        <table class="c-table">
          <thead class="bg-slate-100 dark:bg-slate-800 sticky top-0">
            <tr>
              <th class="c-table-th">Level</th>
              <th class="c-table-th">Job (250/50)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="exp in tableClass4JOBs" :key="exp[0]">
              <td class="c-table-td text-right tabular-nums">
                {{ formatNumber(exp[0]) }}
              </td>
              <td class="c-table-td text-right tabular-nums">
                {{ formatNumber(exp[1]) }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th class="c-table-th">Summary</th>
              <th class="c-table-th">{{ formatNumber(summaryEXP(tableClass4JOBs, 1)) }}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <!-- #endregion job 4 exp -->
  </main>
</template>
