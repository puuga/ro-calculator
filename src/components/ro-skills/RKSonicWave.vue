<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    console.log("RKSonicWave mounted");
    this.newCalculationATK();
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
    },
  },
});
</script>

<template>
  <h2>RK Sonic Wave</h2>

  <hr />

  <div>
    <h3>Old</h3>
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

  <hr />

  <div>
    <h3>New</h3>

    <div>
      <label for="base-level">Base Level (100-185): </label>
      <input
        type="number"
        id="base-level"
        v-model="newCalculation.baseLevel"
        min="100"
        max="185"
        step="1"
        @input="newCalculationATK()"
      />
    </div>

    <div>
      <label for="skill-level">Skill Level (1-10): </label>
      <input
        type="number"
        id="skill-level"
        v-model="newCalculation.skillLevel"
        min="1"
        max="10"
        step="1"
        @input="newCalculationATK()"
      />
    </div>

    <div>Damage = ATK {((Skill level + 7)x100) x (1+[(BaseLV-100)/100])} %</div>

    <div>
      ATK% = <strong>{{ newCalculation.atk }}</strong>
      <br />
      Bonus Hit = <strong>{{ newCalculation.hit }}</strong>
    </div>
  </div>
</template>
