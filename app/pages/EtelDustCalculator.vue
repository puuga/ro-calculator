<script setup lang="ts">
import { RN_TOOL_ETEL_DUST_CALCULATOR, getHead } from '@/router.options'

//#region use...
useHead(getHead(RN_TOOL_ETEL_DUST_CALCULATOR))
//#endregion use...


//#region data...
const priceEtelDust = ref(25_000) // default value

const tableEtelDust = {
  name: "Etel Dust",
  table: {
    columnHeaders: [
      "ระดับ", 
      "ระดับ Refine", 
      "จำนวน Etel Stone", 
      "จำนวน Etel Dust", 
      "วัตถุดิบ", 
      "จำนวนวัตถุดิบ", 
      "Zeny", 
      "Etel Dust Price", 
      "Total Cost"
    ],
    rows: [
      ['No Grade > Grade D', '+11', 15, 75, 'Etel Aquamarine', 5, 500_000],
      ['Grade D > Grade C', '+11', 30, 150, 'Etel Topaz', 5, 625_000],
      ['Grade C > Grade B', '+11', 50, 250, 'Etel Amethyst', 5, 1_000_000],
      ['Grade B > Grade A', '+11', 150, 750, 'Etel Amber', 10, 2_500_000],
    ],
  },
}
//#endregion data...


//#region methods...
function totalCost(fixcost: number, priceEtelDust: number, quantity: number): number {
  return fixcost + (priceEtelDust * quantity)
}

function formatNumber(value: number): string {
  return value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
}
//#endregion methods...
</script>


<template>
  <main class="container mx-auto">
    <h1 class="text-4xl font-bold">
      {{ getHead(RN_TOOL_ETEL_DUST_CALCULATOR).title }}
    </h1>

    <div class="flex flex-col gap-3 my-5">
      <h3 class="text-2xl">Calculator</h3>

      <div class="flex flex-col gap-1">
        <label for="iEtelDustPrice">Current Etel Dust Price (Zeny)</label>
        <input 
          id="iEtelDustPrice" 
          type="number" 
          min="1" 
          step="1" 
          placeholder="Enter Etel Dust Price"
          class="border-2 border-gray-500 rounded-md p-3 w-60"
          v-model.number="priceEtelDust"
        />
      </div>

      <table class="table-auto border-collapse border border-gray-300 ">
        <thead>
          <tr class="bg-gray-100">
            <template v-for="column in tableEtelDust.table.columnHeaders">
              <th class="border border-gray-300 p-2 text-center">
                {{ column }}
              </th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in tableEtelDust.table.rows">
            <td class="border border-gray-300 p-2 text-center">{{ row[0] }}</td>
            <td class="border border-gray-300 p-2 text-center">{{ row[1] }}</td>
            <td class="border border-gray-300 p-2 text-center">{{ row[2] }}</td>
            <td class="border border-gray-300 p-2 text-center">{{ row[3] }}</td>
            <td class="border border-gray-300 p-2 text-center">{{ row[4] }}</td>
            <td class="border border-gray-300 p-2 text-center">{{ row[5] }}</td>
            <td class="border border-gray-300 p-2 text-center">{{ formatNumber(+row[6]) }}</td>
            <td class="border border-gray-300 p-2 text-center">{{ formatNumber(priceEtelDust) }}</td>
            <td class="border border-gray-300 p-2 text-center">
              <strong>{{ formatNumber(totalCost(+row[6], priceEtelDust, +row[3])) }}</strong>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="bg-gray-100">
            <td colspan="2" class="border border-gray-300 p-2 text-center">Total</td>
            <td class="border border-gray-300 p-2 text-center">
              {{ formatNumber(tableEtelDust.table.rows.reduce((acc, row) => acc + +row[2], 0)) }}
            </td>
            <td class="border border-gray-300 p-2 text-center">
              {{ formatNumber(tableEtelDust.table.rows.reduce((acc, row) => acc + +row[3], 0)) }}
            </td>
            <td colspan="2" class="border border-gray-300 p-2 text-center"></td>
            <td class="border border-gray-300 p-2 text-center">
              {{ formatNumber(tableEtelDust.table.rows.reduce((acc, row) => acc + +row[6], 0)) }}
            </td>
            <td class="border border-gray-300 p-2 text-center"></td>
            <td class="border border-gray-300 p-2 text-center">
              <strong>{{ formatNumber(totalCost(tableEtelDust.table.rows.reduce((acc, row) => acc + +row[6], 0), priceEtelDust, tableEtelDust.table.rows.reduce((acc, row) => acc + +row[3], 0))) }}</strong>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div>
      <h3 class="text-2xl">References</h3>
      <ul>
        <li><a target="_blank" href="https://ro.gnjoy.in.th/item-gradereform/" rel="noopener noreferrer">Item Grade&Reform System</a></li>
      </ul>
    </div>
  </main>
</template>


<style></style>
