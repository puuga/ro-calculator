<script lang="ts">
import { defineComponent } from "vue";
import { getAnalytics, logEvent } from "firebase/analytics";
import consola from "consola";


export default defineComponent({
  name: "RKEnchantBlade",

  mounted() {
    consola.log("RKSonicWave mounted");
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
      calculation20220721: {
        baseLevel: 100,
        skillLevel: 1,
        atk: 0,
        hit: 0,
      },
    };
  },

  methods: {
    calculation20220721ATK() {
      const { baseLevel, skillLevel } = this.calculation20220721;
      const atk = (skillLevel + 7) * 100 * (1 + (baseLevel - 100) / 100);
      this.calculation20220721.atk = atk;

      const hit = skillLevel * 7;
      this.calculation20220721.hit = hit;

      const analytics = getAnalytics(this.$firebaseApp());
      logEvent(analytics, "RKEnchantBlade_calculation20220721ATK", {
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
        <span class="c-badge">Update 2022-07-21</span>
      </div>

      <div>
        <label for="base-level" class="c-input-label">
          Base Level (100-185):
        </label>
        <input
          type="number"
          id="base-level"
          v-model="calculation20220721.baseLevel"
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
          Damage = ATK {((Skill level + 7)x100) x (1+[(BaseLV-100)/100])}%
        </strong>
      </div>

      <div>
        <strong>ATK% = {{ calculation20220721.atk }}</strong>
        <br />
        <strong>Bonus Hit = {{ calculation20220721.hit }}</strong>
      </div>
    </div>
  </div>
</template>
