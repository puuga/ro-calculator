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
  <div class="c-skill-card">
    <h2 class="text-2xl font-bold">RK Storm Blast (Pertz Runestone)</h2>

    <div>
      <h3 class="text-xl font-bold">New</h3>

      <div>
        <label for="str" class="c-input-label"> STR (1-130): </label>
        <input
          type="number"
          id="str"
          v-model="newCalculation.str"
          min="1"
          max="130"
          step="1"
          class="c-input-number"
        />
      </div>

      <div>
        <label for="skill-level" class="c-input-label">
          Rune Mastery Skill Level (1-10):
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
        <strong>
          Damage = ATK [{Rune Mastery Skill Level + (STR / 8)} x 100] %
        </strong>
      </div>

      <div>
        <button class="c-btn-primary" @click="newCalculationATK()">
          Calculate
        </button>
      </div>

      <div>
        ATK% = <strong>{{ newCalculation.atk }}</strong>
      </div>
    </div>
  </div>
</template>
