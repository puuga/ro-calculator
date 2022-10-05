<script lang="ts">
import { defineComponent } from "vue";
import { getAnalytics, logEvent } from "firebase/analytics";

import { firebaseApp } from "@/nv-plugins/firebase";

export default defineComponent({
  name: "RKEnchantBlade",

  mounted() {
    console.log("RKSonicWave mounted");
    // this.newCalculationATK();
  },

  data() {
    return {
      skills: [
        { level: 1, desc: "+600 % ATK" },
        { level: 2, desc: "+700 % ATK" },
        { level: 3, desc: "+800 % ATK" },
        { level: 4, desc: "+900 % ATK" },
        { level: 5, desc: "+1000 % ATK" },
      ],
      newCalculation: {
        baseLevel: 100,
        skillLevel: 1,
        atk: 0,
        hit: 0,
      },
    };
  },

  methods: {
    newCalculationATK() {
      const { baseLevel, skillLevel } = this.newCalculation;
      const atk = (skillLevel + 7) * 100 * (1 + (baseLevel - 100) / 100);
      this.newCalculation.atk = atk;

      const hit = skillLevel * 7;
      this.newCalculation.hit = hit;

      const analytics = getAnalytics(firebaseApp);
      logEvent(analytics, "RKEnchantBlade_newCalculationATK", {
        baseLevel: baseLevel,
        skillLevel: skillLevel,
        hit: hit,
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
    <h2 class="text-2xl font-bold">RK Sonic Wave</h2>

    <hr />

    <div>
      <h3 class="text-xl font-bold">Old</h3>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="skill in skills" :key="skill.level">
            <td>{{ skill.level }}</td>
            <td>{{ skill.desc }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <hr />

    <div>
      <h3 class="text-xl font-bold">New</h3>

      <div>
        <label for="base-level" class="block text-sm font-medium text-gray-700">
          Base Level (100-185):
        </label>
        <input
          type="number"
          id="base-level"
          v-model="newCalculation.baseLevel"
          min="100"
          max="185"
          step="1"
          class="block rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label
          for="skill-level"
          class="block text-sm font-medium text-gray-700"
        >
          Skill Level (1-10):
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
          Damage = ATK {((Skill level + 7)x100) x (1+[(BaseLV-100)/100])}%
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
        <br />
        Bonus Hit = <strong>{{ newCalculation.hit }}</strong>
      </div>
    </div>
  </div>
</template>
