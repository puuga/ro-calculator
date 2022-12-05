<script lang="ts">
import { defineComponent } from "vue";
import { getAnalytics, logEvent } from "firebase/analytics";
import consola from "consola";

import { firebaseApp } from "@/nv-plugins/firebase";

export default defineComponent({
  name: "RKStormBlast",

  mounted() {
    consola.log("RKStormBlast mounted");
    // this.calculation20220721ATK();
  },

  data() {
    return {
      calculation20220721: {
        str: 1,
        skillLevel: 1,
        atk: 0,
      },
    };
  },

  methods: {
    calculation20220721ATK() {
      const { str, skillLevel } = this.calculation20220721;
      const atk = (skillLevel + str / 8) * 100;
      this.calculation20220721.atk = atk;

      const analytics = getAnalytics(firebaseApp);
      logEvent(analytics, "RKStormBlast_calculation20220721ATK", {
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

    <div class="p-1">
      <h3 class="text-xl font-bold">New</h3>

      <div>
        <span class="c-badge">Update 2022-07-21</span>
      </div>

      <div>
        <label for="str" class="c-input-label"> STR (1-130): </label>
        <input
          type="number"
          id="str"
          v-model="calculation20220721.str"
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
          v-model="calculation20220721.skillLevel"
          min="1"
          max="10"
          step="1"
          class="c-input-number"
        />
      </div>

      <div>
        <button class="c-btn-primary" @click="calculation20220721ATK()">
          Calculate
        </button>
      </div>

      <div>
        <strong>
          Damage = ATK [{Rune Mastery Skill Level + (STR / 8)} x 100] %
        </strong>
      </div>

      <div>
        <strong>ATK% = {{ calculation20220721.atk }}</strong>
      </div>
    </div>
  </div>
</template>
