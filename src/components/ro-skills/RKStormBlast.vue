<script lang="ts">
import { defineComponent } from "vue";
import { getAnalytics, logEvent } from "firebase/analytics";

import { firebaseApp } from "@/nv-plugins/firebase";

export default defineComponent({
  name: "RKStormBlast",

  mounted() {
    console.log("RKStormBlast mounted");
    // this.newCalculationATK();
  },

  data() {
    return {
      newCalculation: {
        str: 1,
        skillLevel: 1,
        atk: 0,
      },
    };
  },

  methods: {
    newCalculationATK() {
      const { str, skillLevel } = this.newCalculation;
      const atk = (skillLevel + str / 8) * 100;
      this.newCalculation.atk = atk;

      const analytics = getAnalytics(firebaseApp);
      logEvent(analytics, "RKStormBlast_newCalculationATK", {
        str: str,
        skillLevel: skillLevel,
        value: atk,
      });
    },
  },
});
</script>

<template>
  <div
    class="container p-3 bg-slate-100 rounded-xl divide-y divide-solid shadow-xl"
  >
    <h2 class="text-2xl font-bold">RK Storm Blast (Pertz Runestone)</h2>

    <div>
      <h3 class="text-xl font-bold">New</h3>

      <div>
        <label for="str" class="block text-sm font-medium text-gray-700">
          STR (1-130):
        </label>
        <input
          type="number"
          id="str"
          v-model="newCalculation.str"
          min="1"
          max="130"
          step="1"
          class="block rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label
          for="skill-level"
          class="block text-sm font-medium text-gray-700"
        >
          Rune Mastery Skill Level (1-10):
        </label>
        <input
          type="number"
          id="skill-level"
          v-model="newCalculation.skillLevel"
          min="1"
          max="10"
          step="1"
          class="block rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <strong>
          Damage = ATK [{Rune Mastery Skill Level + (STR / 8)} x 100] %
        </strong>
      </div>

      <div>
        <button
          class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          @click="newCalculationATK()"
        >
          Calculate
        </button>
      </div>

      <div>
        ATK% = <strong>{{ newCalculation.atk }}</strong>
      </div>
    </div>
  </div>
</template>
