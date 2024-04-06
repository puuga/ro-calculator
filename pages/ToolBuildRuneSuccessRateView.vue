<script setup lang="ts">
import { consola } from 'consola'
import { getAnalytics, logEvent } from 'firebase/analytics'

import { RN_TOOL_BUILD_RUNE_SUCCESS_RATE, getHead } from '@/app/router.options'

//#region use...
useHead(getHead(RN_TOOL_BUILD_RUNE_SUCCESS_RATE))

const { $firebaseApp } = useNuxtApp()
//#endregion use...

//#region refs
const baseSuccessRateLevel = ref(0)
const inputRadioBaseSuccessRateLevels = [
  {
    id: 'InputBaseSuccessRateLevel1',
    value: 1,
    label: 'Skill Level 1'
  },
  {
    id: 'InputBaseSuccessRateLevel2',
    value: 2,
    label: 'Skill Level 2'
  },
  {
    id: 'InputBaseSuccessRateLevel3',
    value: 3,
    label: 'Skill Level 3'
  },
  {
    id: 'InputBaseSuccessRateLevel4',
    value: 4,
    label: 'Skill Level 4'
  },
  {
    id: 'InputBaseSuccessRateLevel5',
    value: 5,
    label: 'Skill Level 5'
  },
  {
    id: 'InputBaseSuccessRateLevel6',
    value: 6,
    label: 'Skill Level 6'
  },
  {
    id: 'InputBaseSuccessRateLevel7',
    value: 7,
    label: 'Skill Level 7'
  },
  {
    id: 'InputBaseSuccessRateLevel8',
    value: 8,
    label: 'Skill Level 8'
  },
  {
    id: 'InputBaseSuccessRateLevel9',
    value: 9,
    label: 'Skill Level 9'
  },
  {
    id: 'InputBaseSuccessRateLevel10',
    value: 10,
    label: 'Skill Level 10'
  },
]

const statDEX = ref(0)
const statLUK = ref(0)
const jobLv = ref(0)

const runeStoneBonus = ref(0)
const inputRadioRuneStoneBonuses = [
  {
    id: 'InputRadioRuneStoneBonusGeneral',
    value: 4,
    label: 'General Rune Stone (4%)'
  },
  {
    id: 'InputRadioRuneStoneBonusQuality',
    value: 8,
    label: 'Quality Rune Stone (8%)'
  },
  {
    id: 'InputRadioRuneStoneBonusRare',
    value: 15,
    label: 'Rare Rune Stone (15%)'
  },
  {
    id: 'InputRadioRuneStoneBonusAncient',
    value: 30,
    label: 'Ancient Rune Stone (30%)'
  },
  {
    id: 'InputRadioRuneStoneBonusMystic',
    value: 60,
    label: 'Mystic Rune Stone (60%)'
  },
]

const runeGrade = ref('')
const inputRadioRuneGrades = [
  {
    id: 'inputRadioRuneGradeTurisusRunestone',
    value: 5,
    label: 'Turisus Runestone (Giant Growth) [C]'
  },
  {
    id: 'inputRadioRuneGradeIsiaRunestone',
    value: 10,
    label: 'Isia Runestone (Vitality Activation) [B]'
  },
  {
    id: 'inputRadioRuneGradePertzRunestone',
    value: 10,
    label: 'Pertz Runestone (Storm Blast) [B]'
  },
  {
    id: 'inputRadioRuneGradeHagalasRunestone',
    value: 5,
    label: 'Hagalas Runestone (Stonehard Skin) [C]'
  },
  {
    id: 'inputRadioRuneGradeAsirRunestone',
    value: 5,
    label: 'Asir Runestone (Fighting Spirit) [C]'
  },
  {
    id: 'inputRadioRuneGradeUrjRunestone',
    value: 15,
    label: 'Urj Runestone (Abundance) [A]'
  },
  {
    id: 'inputRadioRuneGradeRhydoRunestone',
    value: 5,
    label: 'Rhydo Runestone (Crush Strike) [C]'
  },
  {
    id: 'inputRadioRuneGradeNosiegeRunestone',
    value: 15,
    label: 'Nosiege Runestone (Refresh) [A]'
  },
  {
    id: 'inputRadioRuneGradeVerkanaRunestone',
    value: 20,
    label: 'Verkana Runestone (Millennium Shield) [S]'
  },
  {
    id: 'inputRadioRuneGradeLuxAnimaRunestone',
    value: 20,
    label: 'Lux Anima Runestone (Lux Anima) [S]'
  },
]
//#endregion refs

//#region methods
function onFormSubmit(event: Event) {
  event.preventDefault()
}

function getRuneGradeValue(runeGrade: string) {
  return inputRadioRuneGrades.find((inputRadioRuneGrade) => inputRadioRuneGrade.label === runeGrade)?.value || 0
}

function calculateSuccessRate() {
  return baseSuccessRateLevel.value * 5 + (statDEX.value / 30 + statLUK.value / 10 + jobLv.value / 10) + runeStoneBonus.value - getRuneGradeValue(runeGrade.value)
}
//#endregion methods
</script>

<template>
  <main class="container mx-auto">
    <h1 class="text-4xl font-bold">Build Rune Success Rate Tool | RO-Calculator</h1>

    <div>SEO: Build Rune Success Rate Tool</div>
    <!-- #region main fomula -->
    <div class="w-100 c-card m-1">
      [Base Success Rate + (DEX ÷ 30 + LUK ÷ 10 + JobLv ÷ 10) + Rune Stone Bonus - Rune Grade]%
    </div>

    <div class="w-100 c-card m-1">
      [{{ baseSuccessRateLevel * 5 }} + ({{ statDEX }} ÷ 30 + {{ statLUK }} ÷ 10 + {{ jobLv }} ÷ 10) + {{ runeStoneBonus }} — {{ getRuneGradeValue(runeGrade) }}]%
    </div>

    <div class="w-100 c-card m-1 text-xl">
      {{ calculateSuccessRate() }} %
    </div>
    <!-- #endregion main fomula -->
    
    <div class="text-2xl">Calculator</div>
    
    <!-- #region form -->
    <form @submit="onFormSubmit" class="flex w-full">

    <!-- #region input Base Success Rate -->
    <div class="w-6/12 c-card m-1">
      <div class="text-xl">Base Success Rate (Rune Mastery Skill Level)</div>
      <template v-for="inputRadioBaseSuccessRateLevel in inputRadioBaseSuccessRateLevels">
        <div>
          <input 
            type="radio" 
            v-model="baseSuccessRateLevel" 
            :value="inputRadioBaseSuccessRateLevel.value" 
            :id="inputRadioBaseSuccessRateLevel.id" 
            name="InputBaseSuccessRateLevel" 
            class="mx-2"
          />
          <label :for="inputRadioBaseSuccessRateLevel.id">{{ inputRadioBaseSuccessRateLevel.label }}</label>
        </div>
      </template>
    </div>
    <!-- #endregion input Base Success Rate -->

    <!-- #region input stat -->
    <div class="w-6/12 c-card m-1">
      <div class="text-xl">DEX</div>
      <div class="mb-4">
        <label for="InputStatDEX">DEX</label>
        <input 
          type="number" 
          v-model="statDEX" 
          id="InputStatDEX" 
          name="InputStatDEX"
          min="1"
          max="500"
          step="1"
          class="mx-2"
        />
      </div>

      <div class="text-xl">LUK</div>
      <div class="mb-4">
        <label for="InputStatLUK">LUK</label>
        <input 
          type="number" 
          v-model="statLUK" 
          id="InputStatLUK" 
          name="InputStatLUK" 
          min="1"
          max="500"
          step="1"
          class="mx-2"
        />
      </div>

      <div class="text-xl">Job Level</div>
      <div class="mb-4">
        <label for="InputJobLv">Job Level</label>
        <input 
          type="number" 
          v-model="jobLv" 
          id="InputJobLv" 
          name="InputJobLv" 
          min="1"
          max="70"
          step="1"
          class="mx-2"
        />
      </div>
    </div>
    <!-- #endregion input stat -->

    <!-- #region input Rune Stone Bonus -->
    <div class="w-6/12 c-card m-1">
      <div class="text-xl">Rune Stone Bonus</div>
      <div class="mb-4">
        <template v-for="inputRadioRuneStoneBonus in inputRadioRuneStoneBonuses">
        <div>
          <input 
            type="radio" 
            v-model="runeStoneBonus" 
            :value="inputRadioRuneStoneBonus.value" 
            :id="inputRadioRuneStoneBonus.id" 
            name="InputRuneStoneBonus" 
            class="mx-2"
          />
          <label :for="inputRadioRuneStoneBonus.id">{{ inputRadioRuneStoneBonus.label }}</label>
        </div>
      </template>
      </div>
    </div>
    <!-- #endregion input Rune Stone Bonus -->

    <!-- #region input Rune Grade -->
    <div class="w-6/12 c-card m-1">
      <div class="text-xl">Rune Grade</div>
      <div class="mb-4">
        <template v-for="inputRadioRuneGrade in inputRadioRuneGrades">
        <div>
          <input 
            type="radio" 
            v-model="runeGrade" 
            :value="inputRadioRuneGrade.label" 
            :id="inputRadioRuneGrade.id" 
            name="InputRadioRuneGrade" 
            class="mx-2"
          />
          <label :for="inputRadioRuneGrade.id">{{ inputRadioRuneGrade.label }}</label>
        </div>
      </template>
      </div>
    </div>
    <!-- #endregion input Rune Grade -->

    </form>
    <!-- #endregion form -->
  </main>
</template>
