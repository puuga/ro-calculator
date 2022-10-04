<script lang="ts">
import { defineComponent } from "vue";
import { getAnalytics, logEvent } from "firebase/analytics";

import { firebaseApp } from "@/plugins/firebase";

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
  <h2>RK Storm Blast (Rhydo Runestone)</h2>

  <hr />

  <div>
    <h3>New</h3>

    <div>
      <label for="weapon-level">Weapon Level (1-4): </label>
      <input
        type="number"
        id="weapon-level"
        v-model="newCalculation.weaponLevel"
        min="1"
        max="4"
        step="1"
      />
    </div>

    <div>
      <label for="weapon-enhancement">Weapon Enhancement (0-20): </label>
      <input
        type="number"
        id="weapon-enhancement"
        v-model="newCalculation.weaponEnhancement"
        min="0"
        max="20"
        step="1"
      />
    </div>

    <div>
      <label for="weapon-attack">Weapon Attack: </label>
      <input
        type="number"
        id="weapon-attack"
        v-model="newCalculation.weaponAttack"
        min="0"
        step="1"
      />
    </div>

    <div>
      <label for="weapon-weight">Weapon Weight: </label>
      <input
        type="number"
        id="weapon-weight"
        v-model="newCalculation.weaponWeight"
        min="0"
        step="1"
      />
    </div>

    <div>
      <strong>
        Damage = ATK [{Weapon Level * (Weapon Enhancement + 6) * 100} + (Weapon
        Attack) + (Weapon Weight)] %
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
