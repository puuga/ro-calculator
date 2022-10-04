<script lang="ts">
import { defineComponent } from "vue";
import { getAnalytics, logEvent } from "firebase/analytics";

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

      const analytics = getAnalytics(this.$firebaseApp);
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
  <h2>RK Storm Blast (Pertz Runestone)</h2>

  <hr />

  <div>
    <h3>New</h3>

    <div>
      <label for="str">STR (1-130): </label>
      <input
        type="number"
        id="str"
        v-model="newCalculation.str"
        min="1"
        max="130"
        step="1"
      />
    </div>

    <div>
      <label for="skill-level">Rune Mastery Skill Level (1-10): </label>
      <input
        type="number"
        id="skill-level"
        v-model="newCalculation.skillLevel"
        min="1"
        max="10"
        step="1"
      />
    </div>

    <div>
      <strong>
        Damage = ATK [{Rune Mastery Skill Level + (STR / 8)} x 100] %
      </strong>
    </div>

    <div>
      <button @click="newCalculationATK()">Calculate</button>
    </div>

    <div>
      ATK% = <strong>{{ newCalculation.atk }}</strong>
    </div>
  </div>
</template>
