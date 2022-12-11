<script lang="ts">
import { defineComponent } from "vue";
import { getAnalytics, logEvent } from "firebase/analytics";
import consola from "consola";


export default defineComponent({
  name: "RKCrushStrike",

  mounted() {
    consola.log("RKCrushStrike mounted");
    // this.calculation20220721ATK();
  },

  data() {
    return {
      calculation20220721: {
        weaponLevel: 1,
        weaponEnhancement: 0,
        weaponAttack: 0,
        weaponWeight: 0,
        atk: 0,
      },
    };
  },

  methods: {
    calculation20220721ATK() {
      const { weaponLevel, weaponEnhancement, weaponAttack, weaponWeight } =
        this.calculation20220721;
      const atk =
        weaponLevel * (weaponEnhancement + 6) * 100 +
        weaponAttack +
        weaponWeight;
      this.calculation20220721.atk = atk;

      const analytics = getAnalytics(this.$firebaseApp());
      logEvent(analytics, "RKCrushStrike_calculation20220721ATK", {
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

    <div class="p-1">
      <div>
        <span class="c-badge">Update 2022-07-21</span>
      </div>

      <div>
        <label for="weapon-level" class="c-input-label">
          Weapon Level (1-4):
        </label>
        <input
          type="number"
          id="weapon-level"
          v-model="calculation20220721.weaponLevel"
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
          v-model="calculation20220721.weaponEnhancement"
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
          v-model="calculation20220721.weaponAttack"
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
          v-model="calculation20220721.weaponWeight"
          min="0"
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
          ATK% = ATK [{Weapon Level * (Weapon Enhancement + 6) * 100} + (Weapon
          Attack) + (Weapon Weight)] %
        </strong>
      </div>

      <div>
        <strong>ATK% = {{ calculation20220721.atk }}</strong>
      </div>
    </div>
  </div>
</template>
