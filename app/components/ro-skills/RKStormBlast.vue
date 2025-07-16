<script lang="ts">
import { defineComponent } from "vue";
import { getAnalytics, logEvent } from "firebase/analytics";
import { consola } from 'consola';


export default defineComponent({
  name: "RKStormBlast",

  mounted() {
    consola.log("RKStormBlast mounted");
  },

  data() {
    return {
      calculation20220721: {
        str: 1,
        skillLevel: 1,
        atk: 0,
      },
      calculation20240621: {
        str: 1,
        baseLevel: 100,
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

      const analytics = getAnalytics(this.$firebaseApp());
      logEvent(analytics, "RKStormBlast_calculation20220721ATK", {
        str: str,
        skillLevel: skillLevel,
        value: atk,
      });
    },
    calculation20240621ATK() {
      const { str, skillLevel, baseLevel } = this.calculation20240621;
      const atk = ((skillLevel + (str / 8)) * 140 ) * (baseLevel/100);
      this.calculation20240621.atk = atk;

      const analytics = getAnalytics(this.$firebaseApp());
      logEvent(analytics, "RKStormBlast_calculation20240621ATK", {
        str: str,
        baseLevel: baseLevel,
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

    <!-- #region Update 2024-06-21 -->
    <div class="p-1">
      <h3 class="text-xl font-bold">New</h3>

      <div>
        <span class="c-badge">Update 2024-06-21</span>
      </div>

      <div>
        <label for="str-20240621" class="c-input-label"> STR (1-130): </label>
        <input
          type="number"
          id="str-20240621"
          v-model="calculation20240621.str"
          min="1"
          max="130"
          step="1"
          class="c-input-number"
        />
      </div>

      <div>
        <label for="base-level-20240621" class="c-input-label">
          Base Level (100-200):
        </label>
        <input
          type="number"
          id="base-level-20240621"
          v-model="calculation20240621.baseLevel"
          min="100"
          max="200"
          step="1"
          class="c-input-number"
        />
      </div>

      <div>
        <label for="skill-level-20240621" class="c-input-label">
          Rune Mastery Skill Level (1-10):
        </label>
        <input
          type="number"
          id="skill-level-20240621"
          v-model="calculation20240621.skillLevel"
          min="1"
          max="10"
          step="1"
          class="c-input-number"
        />
      </div>

      <div>
        <button class="c-btn-primary" @click="calculation20240621ATK()">
          Calculate
        </button>
      </div>

      <div>
        <strong>
          Damage = ATK [ { ( เลเวลสกิล Rune Mastery + (STR ของผู้ใช้สกิล / 8 ) ) x 140 } X ( Base Lv ของผู้ใช้สกิล / 100 ) ] %
        </strong>
      </div>

      <div>
        <strong>ATK% = {{ calculation20240621.atk }}</strong>
      </div>
    </div>
    <!-- #endregion Update 2024-06-21 -->

    <!-- #region Update 2022-07-21 -->
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
    <!-- #endregion Update 2022-07-21 -->
  </div>
</template>
