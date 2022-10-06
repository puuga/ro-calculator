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
  <div class="c-skill-card">
    <h2 class="text-2xl font-bold">RK Sonic Wave</h2>

    <div class="p-1">
      <h3 class="text-xl font-bold">Old</h3>
      <table class="c-table">
        <thead>
          <tr>
            <th class="c-table-th">Level</th>
            <th class="c-table-th">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="skill in skills" :key="skill.level">
            <td class="c-table-td">{{ skill.level }}</td>
            <td class="c-table-td">{{ skill.desc }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="p-1">
      <h3 class="text-xl font-bold">New</h3>

      <div>
        <label for="base-level" class="c-input-label">
          Base Level (100-185):
        </label>
        <input
          type="number"
          id="base-level"
          v-model="newCalculation.baseLevel"
          min="100"
          max="185"
          step="1"
          class="c-input-number"
        />
      </div>

      <div>
        <label for="skill-level" class="c-input-label">
          Skill Level (1-10):
        </label>
        <input
          type="number"
          id="skill-level"
          v-model="newCalculation.skillLevel"
          min="1"
          max="10"
          step="1"
          class="c-input-number"
        />
      </div>

      <div>
        <button class="c-btn-primary" @click="newCalculationATK()">
          Calculate
        </button>
      </div>

      <div>
        <strong>
          Damage = ATK {((Skill level + 7)x100) x (1+[(BaseLV-100)/100])}%
        </strong>
      </div>

      <div>
        <strong>ATK% = {{ newCalculation.atk }}</strong>
        <br />
        <strong>Bonus Hit = {{ newCalculation.hit }}</strong>
      </div>
    </div>
  </div>
</template>
