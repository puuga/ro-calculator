<script lang="ts">
import { defineComponent } from "vue";
import { getAnalytics, logEvent } from "firebase/analytics";

import { firebaseApp } from "@/nv-plugins/firebase";

export default defineComponent({
  name: "RKEnchantBlade",

  mounted() {
    console.log("RuneKnightView mounted");
    // this.newCalculationMATK();
  },

  data() {
    return {
      skills: [
        { level: 1, desc: "+120 MATK" },
        { level: 2, desc: "+140 MATK" },
        { level: 3, desc: "+160 MATK" },
        { level: 4, desc: "+180 MATK" },
        { level: 5, desc: "+200 MATK" },
      ],
      newCalculation: {
        baseLevel: 100,
        skillLevel: 1,
        int: 1,
        matk: 0,
      },
    };
  },

  methods: {
    newCalculationMATK() {
      const { baseLevel, skillLevel, int } = this.newCalculation;
      const matk = (skillLevel * 20 + 100) * (baseLevel / 150) + int;
      this.newCalculation.matk = matk;

      const analytics = getAnalytics(firebaseApp);
      logEvent(analytics, "RKEnchantBlade_newCalculationMATK", {
        baseLevel: baseLevel,
        skillLevel: skillLevel,
        int: int,
        value: matk,
      });
    },
  },
});
</script>

<template>
  <div class="c-skill-card">
    <h2 class="text-2xl font-bold">RK Enchant Blade</h2>

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

    <div>
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
        <label for="int" class="c-input-label"> Int (1-130): </label>
        <input
          type="number"
          id="int"
          v-model="newCalculation.int"
          min="1"
          max="130"
          step="1"
          class="c-input-number"
        />
      </div>

      <div>
        <strong>+MATK = [(Skill level x 20 + 100) x (BaseLv/150)] + INT</strong>
      </div>

      <div>
        <button class="c-btn-primary" @click="newCalculationMATK()">
          Calculate
        </button>
      </div>

      <div>
        +MATK = <strong>{{ newCalculation.matk }}</strong>
      </div>
    </div>
  </div>
</template>
