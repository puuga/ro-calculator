<script lang="ts">
import { defineComponent } from "vue";
import { getAnalytics, logEvent } from "firebase/analytics";

import { firebaseApp } from "@/nv-plugins/firebase";

export default defineComponent({
  name: "RKCrushStrike",

  mounted() {
    console.log("RKCrushStrike mounted");
    // this.newCalculationATK();
  },

  data() {
    return {
      newCalculation: {
        weaponLevel: 1,
        weaponEnhancement: 0,
        weaponAttack: 0,
        weaponWeight: 0,
        atk: 0,
      },
    };
  },

  methods: {
    newCalculationATK() {
      const { weaponLevel, weaponEnhancement, weaponAttack, weaponWeight } =
        this.newCalculation;
      const atk =
        weaponLevel * (weaponEnhancement + 6) * 100 +
        weaponAttack +
        weaponWeight;
      this.newCalculation.atk = atk;

      const analytics = getAnalytics(firebaseApp);
      logEvent(analytics, "RKCrushStrike_newCalculationATK", {
        weaponLevel: weaponLevel,
        weaponAttack: weaponAttack,
        weaponWeight: weaponWeight,
        value: atk,
      });
    },
  },
});
</script>

<template>
  <div class="c-skill-card">
    <h2 class="text-2xl font-bold">RK CrushStrike (Rhydo Runestone)</h2>

    <div>
      <div>
        <label for="weapon-level" class="c-input-label">
          Weapon Level (1-4):
        </label>
        <input
          type="number"
          id="weapon-level"
          v-model="newCalculation.weaponLevel"
          min="1"
          max="4"
          step="1"
          class="c-input-number"
        />
      </div>

      <div>
        <label for="weapon-enhancement" class="c-input-label">
          Weapon Enhancement (0-20):
        </label>
        <input
          type="number"
          id="weapon-enhancement"
          v-model="newCalculation.weaponEnhancement"
          min="0"
          max="20"
          step="1"
          class="c-input-number"
        />
      </div>

      <div>
        <label for="weapon-attack" class="c-input-label">Weapon Attack: </label>
        <input
          type="number"
          id="weapon-attack"
          v-model="newCalculation.weaponAttack"
          min="0"
          step="1"
          class="c-input-number"
        />
      </div>

      <div>
        <label for="weapon-weight" class="c-input-label">
          Weapon Weight:
        </label>
        <input
          type="number"
          id="weapon-weight"
          v-model="newCalculation.weaponWeight"
          min="0"
          step="1"
          class="c-input-number"
        />
      </div>

      <div>
        <strong>
          Damage = ATK [{Weapon Level * (Weapon Enhancement + 6) * 100} +
          (Weapon Attack) + (Weapon Weight)] %
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
