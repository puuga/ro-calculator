<script setup lang="ts">
import { RN_TOOL_ETEL_DUST_CALCULATOR, getHead } from '@/router.options'

//#region use...
useHead(getHead(RN_TOOL_ETEL_DUST_CALCULATOR))
//#endregion use...


//#region data...
const feeShadowdeconToLowGrade = 20_000
const feeLowGradeToMedium = 10_000
const feeMediumToHighGrade = 20_000
const feeHighGradeToSupreme = 50_000

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
const priceShadowdecon = ref(50_000)
const tableShadowdecon = {
  name: "Shadowdecon",
  table: {
    columnHeaders: [
      "Grade", 
      "Supreme", 
      "High", 
      "Medium", 
      "Low", 
      "Total Shadowdecon(s)"
    ],
    rows: [
    ],
  },
}
const countSupreme = ref(0)
const countHigh = ref(0)
const countMedium = ref(0)
const countLow = ref(0)

const totalShadowdecon = computed(() => {
  return countLow.value
})
const totalShadowdeconPrice = computed(() => {
  return totalShadowdecon.value * priceShadowdecon.value
})
const totalFeePrice = computed(() => {
  return (countLow.value * feeShadowdeconToLowGrade) +
         (countMedium.value * feeLowGradeToMedium) +
         (countHigh.value * feeMediumToHighGrade) +
         (countSupreme.value * feeHighGradeToSupreme)
})
//#endregion data...


//#region methods...
function totalCost(fixcost: number, priceEtelDust: number, quantity: number): number {
  return fixcost + (priceEtelDust * quantity)
}

function formatNumber(value: number): string {
  return value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
}

function onCountSupremeInput(value: number | null) {
  if (value === null || value < 0) {
    countSupreme.value = 0
    countHigh.value = 0
    countMedium.value = 0
    countLow.value = 0
    return
  }
  countHigh.value = value * 3
  countMedium.value = value * 9
  countLow.value = value * 27
}

function onCountHighInput(value: number | null) {
  if (value === null || value < 0) {
    countSupreme.value = 0
    countHigh.value = 0
    countMedium.value = 0
    countLow.value = 0
    return
  }
  countSupreme.value = 0
  
  countMedium.value = value * 3
  countLow.value = value * 9
}

function onCountMediumInput(value: number | null) {
  if (value === null || value < 0) {
    countSupreme.value = 0
    countHigh.value = 0
    countMedium.value = 0
    countLow.value = 0
    return
  }
  countSupreme.value = 0
  countHigh.value = 0
  
  countLow.value = value * 3
}

function onCountLowInput(value: number | null) {
  if (value === null || value < 0) {
    countSupreme.value = 0
    countHigh.value = 0
    countMedium.value = 0
    countLow.value = 0
    return
  }
  countSupreme.value = 0
  countHigh.value = 0
  countMedium.value = 0
}
//#endregion methods...
</script>


<template>
  <main class="container mx-auto">
    <h1 class="text-4xl font-bold">
      {{ getHead(RN_TOOL_ETEL_DUST_CALCULATOR).title }}
    </h1>

    <!-- #region etel dust -->
    <div class="flex flex-col gap-3 my-5">
      <h3 class="text-2xl">Etel Dust Calculator</h3>
      <a id="etel-dust-calculator"></a>

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
            <td class="border border-gray-300 p-2 text-center">{{ formatNumber(+(row[6] || 0)) }}</td>
            <td class="border border-gray-300 p-2 text-center">{{ formatNumber(priceEtelDust) }}</td>
            <td class="border border-gray-300 p-2 text-center">
              <strong>{{ formatNumber(totalCost(+(row[6] || 0), priceEtelDust, +(row[3] || 0))) }}</strong>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="bg-gray-100">
            <td colspan="2" class="border border-gray-300 p-2 text-center">Total</td>
            <td class="border border-gray-300 p-2 text-center">
              {{ formatNumber(tableEtelDust.table.rows.reduce((acc, row) => acc + +(row[2] || 0), 0)) }}
            </td>
            <td class="border border-gray-300 p-2 text-center">
              {{ formatNumber(tableEtelDust.table.rows.reduce((acc, row) => acc + +(row[3] || 0), 0)) }}
            </td>
            <td colspan="2" class="border border-gray-300 p-2 text-center"></td>
            <td class="border border-gray-300 p-2 text-center">
              {{ formatNumber(tableEtelDust.table.rows.reduce((acc, row) => acc + +(row[6] || 0), 0)) }}
            </td>
            <td class="border border-gray-300 p-2 text-center"></td>
            <td class="border border-gray-300 p-2 text-center">
              <strong>{{ formatNumber(totalCost(tableEtelDust.table.rows.reduce((acc, row) => acc + +(row[6] || 0), 0), priceEtelDust, tableEtelDust.table.rows.reduce((acc, row) => acc + +(row[3] || 0), 0))) }}</strong>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <!-- #endregion etel dust -->

    <hr class="my-10">

    <!-- #region shadowdecon -->
    <div class="flex flex-col gap-3 my-5">
      <h3 class="text-2xl">Shadowdecon Calculator</h3>
      <a id="shadowdecon-calculator"></a>

      <div class="flex flex-col gap-1">
        <label for="iShadowdeconPrice">Current Shadowdecon Dust Price (Zeny)</label>
        <input 
          id="iShadowdeconPrice" 
          type="number" 
          min="1" 
          step="1" 
          placeholder="Enter Shadowdecon Dust Price"
          list="shadowdeconPriceOptions"
          class="border-2 border-gray-500 rounded-md p-3 w-80"
          v-model.number="priceShadowdecon"
        />
        <datalist id="shadowdeconPriceOptions">
          <option value="50000">50,000</option>
          <option value="60000">60,000</option>
          <option value="70000">70,000</option>
          <option value="80000">80,000</option>
          <option value="90000">90,000</option>
          <option value="100000">100,000</option>
        </datalist>
      </div>

      <table class="table-fixed border-collapse border border-gray-300 ">
        <thead>
          <tr class="bg-gray-100">
            <template v-for="column in tableShadowdecon.table.columnHeaders">
              <th class="border border-gray-300 p-2 text-center">
                {{ column }}
              </th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-2 text-center">Count</td>
            <td class="border border-gray-300 p-2 text-center">
              <input 
                type="number" 
                min="0" 
                step="1" 
                v-model.number="countSupreme"
                class="border-2 border-gray-500 rounded-md p-2 w-32 text-center"
                list="supremeOptions"
                @input="onCountSupremeInput(+($event.target as HTMLInputElement).value)"
              />
              <datalist id="supremeOptions">
                <option value="100">100</option>
              </datalist>
            </td>
            <td class="border border-gray-300 p-2 text-center">
              <input 
                type="number" 
                min="0" 
                step="1" 
                v-model.number="countHigh"
                class="border-2 border-gray-500 rounded-md p-2 w-32 text-center"
                list="highOptions"
                @input="onCountHighInput(+($event.target as HTMLInputElement).value)"
              />
              <datalist id="highOptions">
                <option value="100">100</option>
                <option value="300">300</option>
              </datalist>
            </td>
            <td class="border border-gray-300 p-2 text-center">
              <input 
                type="number" 
                min="0" 
                step="1" 
                v-model.number="countMedium"
                class="border-2 border-gray-500 rounded-md p-2 w-32 text-center"
                list="mediumOptions"
                @input="onCountMediumInput(+($event.target as HTMLInputElement).value)"
              />
              <datalist id="mediumOptions">
                <option value="100">100</option>
                <option value="300">300</option>
                <option value="900">900</option>
              </datalist>
            </td>
            <td class="border border-gray-300 p-2 text-center">
              <input 
                type="number" 
                min="0" 
                step="1" 
                v-model.number="countLow"
                class="border-2 border-gray-500 rounded-md p-2 w-32 text-center"
                @input="onCountLowInput(+($event.target as HTMLInputElement).value)"
              />
              <datalist id="lowOptions">
                <option value="100">100</option>
                <option value="300">300</option>
                <option value="900">900</option>
                <option value="2700">2,700</option>
              </datalist>
            </td>
            <td class="border border-gray-300 p-2 text-center">
              <strong>{{ totalShadowdecon }}</strong>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="bg-gray-100">
            <td colspan="5" class="border border-gray-300 p-2 text-center">
              Total Shadowdecon Price
            </td>
            <td class="border border-gray-300 p-2 text-center">
              <strong>{{ formatNumber(totalShadowdeconPrice) }}</strong>
            </td>
          </tr>

          <tr class="bg-gray-100">
            <td colspan="5" class="border border-gray-300 p-2 text-center">
              Total Fee Price
            </td>
            <td class="border border-gray-300 p-2 text-center">
              <strong>{{ formatNumber(totalFeePrice) }}</strong>
            </td>
          </tr>

          <tr class="bg-gray-100">
            <td colspan="5" class="border border-gray-300 p-2 text-center">
              Total Price
            </td>
            <td class="border border-gray-300 p-2 text-center">
              <strong>{{ formatNumber(totalShadowdeconPrice + totalFeePrice) }}</strong>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <!-- #endregion shadowdecon -->

    <hr class="my-10">

    <div>
      <h3 class="text-2xl">References</h3>
      <ul>
        <li><a target="_blank" href="https://ro.gnjoy.in.th/item-gradereform/" rel="noopener noreferrer">Item Grade&Reform System</a></li>
      </ul>
    </div>
  </main>
</template>


<style></style>
