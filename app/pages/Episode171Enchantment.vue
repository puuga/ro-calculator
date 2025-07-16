<script setup lang="ts">
import { RN_EPISODE_171_ENCHANTMENT, getHead } from '@/router.options'

import IllusionArmorAtypeViewV1 from "@/components/equipments/illusion171/IllusionArmorAtypeViewV1.vue";
import IllusionArmorBtypeViewV1 from "@/components/equipments/illusion171/IllusionArmorBtypeViewV1.vue";
import IllusionEngineWingAtypeViewV1 from "@/components/equipments/illusion171/IllusionEngineWingAtypeViewV1.vue";
import IllusionEngineWingBtypeViewV1 from "@/components/equipments/illusion171/IllusionEngineWingBtypeViewV1.vue";
import IllusionLegAtypeViewV1 from "@/components/equipments/illusion171/IllusionLegAtypeViewV1.vue";
import IllusionLegBtypeViewV1 from "@/components/equipments/illusion171/IllusionLegBtypeViewV1.vue";
import IllusionBoosterRViewV1 from "@/components/equipments/illusion171/IllusionBoosterRViewV1.vue";
import IllusionBoosterLViewV1 from "@/components/equipments/illusion171/IllusionBoosterLViewV1.vue";
import IllusionBattleChipRViewV1 from "@/components/equipments/illusion171/IllusionBattleChipRViewV1.vue";
import IllusionBattleChipLViewV1 from "@/components/equipments/illusion171/IllusionBattleChipLViewV1.vue";

//#region use...
useHead(getHead(RN_EPISODE_171_ENCHANTMENT))

const { $firebaseApp } = useNuxtApp()
//#endregion use...

const tableWeaponPhysicalNormalEnchantments = [
  [
    "Increases damage to Water property enemies by 3~15%",
    "Increases damage to Earth property enemies by 3~15%",
    "Increases damage to Fire property enemies by 3~15%",
    "Increases damage to Wind property enemies by 3~15%",
    "Increases damage to Poison property enemies by 3~15%",
    "Increases damage to Holy property enemies by 3~15%",
    "Increases damage to Shadow property enemies by 3~15%",
    "Increases damage to Ghost property enemies by 3~15%",
    "Increases damage to Undead property enemies by 3~15%",
    "Atk + 5~20",
    "Atk + 1~5%",
    "Hit + 3~10",
    "Crit + 3~10",
  ],
  [
    "Increases damage to Formless race enemies by 3~10%",
    "Increases damage to Undead race enemies by 3~10%",
    "Increases damage to Brute race enemies by 3~10%",
    "Increases damage to Plant race enemies by 3~10%",
    "Increases damage to Insect race enemies by 3~10%",
    "Increases damage to Fish race enemies by 3~10%",
    "Increases damage to Demon race enemies by 3~10%",
    "Increases damage to Demi-Human race enemies by 3~10%",
    "Increases damage to Angel race enemies by 3~10%",
    "Increases damage to Dragon race enemies by 3~10%",
    "Increases damage to small size enemies by 3~10%",
    "Increases damage to medium size enemies by 3~10%",
    "Increases damage to large size enemies by 3~10%",
    "Increases ASPD by 3~10%",
    "Increases ASPD by 1",
    "Increases flee by 5~15",
    "Increases critical damage by 3~10%",
    "Increases long-range damage by 3~10%",
  ],
];
const tableWeaponPhysicalAdvancedEnchantments = [
  [
    "Increases damage to Water property enemies by 3~20%",
    "Increases damage to Earth property enemies by 3~20%",
    "Increases damage to Fire property enemies by 3~20%",
    "Increases damage to Wind property enemies by 3~20%",
    "Increases damage to Poison property enemies by 3~20%",
    "Increases damage to Holy property enemies by 3~20%",
    "Increases damage to Shadow property enemies by 3~20%",
    "Increases damage to Ghost property enemies by 3~20%",
    "Increases damage to Undead property enemies by 3~20%",
    "Atk + 15~40",
    "Atk + 1~10%",
    "Hit + 3~15",
    "Crit + 3~15",
  ],
  [
    "Increases damage to Formless race enemies by 3~15%",
    "Increases damage to Undead race enemies by 3~15%",
    "Increases damage to Brute race enemies by 3~15%",
    "Increases damage to Plant race enemies by 3~15%",
    "Increases damage to Insect race enemies by 3~15%",
    "Increases damage to Fish race enemies by 3~15%",
    "Increases damage to Demon race enemies by 3~15%",
    "Increases damage to Demi-Human race enemies by 3~15%",
    "Increases damage to Angel race enemies by 3~15%",
    "Increases damage to Dragon race enemies by 3~15%",
    "Increases damage to small size enemies by 3~15%",
    "Increases damage to medium size enemies by 3~15%",
    "Increases damage to large size enemies by 3~15%",
    "Increases ASPD by 3~15%",
    "Increases ASPD by 1",
    "Increases flee by 5~30",
    "Increases critical damage by 3~15%",
    "Increases long-range damage by 3~15%",
    "Decreases SP consumption by 1~5%",
  ],
];
const tableWeaponPhysicalSpecialEnchantments = [
  [
    "Increases damage to Water property enemies by 5~25%",
    "Increases damage to Earth property enemies by 5~25%",
    "Increases damage to Fire property enemies by 5~25%",
    "Increases damage to Wind property enemies by 5~25%",
    "Increases damage to Poison property enemies by 5~25%",
    "Increases damage to Holy property enemies by 5~25%",
    "Increases damage to Shadow property enemies by 5~25%",
    "Increases damage to Ghost property enemies by 5~25%",
    "Increases damage to Undead property enemies by 5~25%",
    "Atk + 20~60",
    "Atk + 3~15%",
    "Hit + 3~20",
    "Crit + 3~20",
  ],
  [
    "Increases damage to Formless race enemies by 3~20%",
    "Increases damage to Undead race enemies by 3~20%",
    "Increases damage to Brute race enemies by 3~20%",
    "Increases damage to Plant race enemies by 3~20%",
    "Increases damage to Insect race enemies by 3~20%",
    "Increases damage to Fish race enemies by 3~20%",
    "Increases damage to Demon race enemies by 3~20%",
    "Increases damage to Demi-Human race enemies by 3~20%",
    "Increases damage to Angel race enemies by 3~20%",
    "Increases damage to Dragon race enemies by 3~20%",
    "Increases damage to small size enemies by 3~20%",
    "Increases damage to medium size enemies by 3~20%",
    "Increases damage to large size enemies by 3~20%",
    "Increases ASPD by 3~20%",
    "Increases ASPD by 1~2",
    "Increases flee by 5~45",
    "Increases critical damage by 3~20%",
    "Increases long-range damage by 3~20%",
    "Decreases SP consumption by 1~10%",
    "Weapon cannot be broken in battle.",
  ],
];
const tableWeaponMagicalNormalEnchantments = [
  [
    "Increases magical damage to Water property enemies by 3~15%",
    "Increases magical damage to Earth property enemies by 3~15%",
    "Increases magical damage to Fire property enemies by 3~15%",
    "Increases magical damage to Wind property enemies by 3~15%",
    "Increases magical damage to Poison property enemies by 3~15%",
    "Increases magical damage to Holy property enemies by 3~15%",
    "Increases magical damage to Shadow property enemies by 3~15%",
    "Increases magical damage to Ghost property enemies by 3~15%",
    "Increases magical damage to Undead property enemies by 3~15%",
    "Matk + 5~20",
    "Matk + 1~5%",
    "Increases ASPD by 3~10%",
  ],
  [
    "Increases magical damage to Formless race enemies by 3~10%",
    "Increases magical damage to Undead race enemies by 3~10%",
    "Increases magical damage to Brute race enemies by 3~10%",
    "Increases magical damage to Plant race enemies by 3~10%",
    "Increases magical damage to Insect race enemies by 3~10%",
    "Increases magical damage to Fish race enemies by 3~10%",
    "Increases magical damage to Demon race enemies by 3~10%",
    "Increases magical damage to Demi-Human race enemies by 3~10%",
    "Increases magical damage to Angel race enemies by 3~10%",
    "Increases magical damage to Dragon race enemies by 3~10%",
    "Increases magical damage to small size enemies by 3~10%",
    "Increases magical damage to medium size enemies by 3~10%",
    "Increases damage against large size enemies by 3~10%",
    "Increases ASPD by 1",
    "Increases flee by 5~15",
    "Decreases variable cast time by 3~10%",
  ],
];
const tableWeaponMagicalAdvancedEnchantments = [
  [
    "Increases magical damage to Water property enemies by 3~20%",
    "Increases magical damage to Earth property enemies by 3~20%",
    "Increases magical damage to Fire property enemies by 3~20%",
    "Increases magical damage to Wind property enemies by 3~20%",
    "Increases magical damage to Poison property enemies by 3~20%",
    "Increases magical damage to Holy property enemies by 3~20%",
    "Increases magical damage to Shadow property enemies by 3~20%",
    "Increases magical damage to Ghost property enemies by 3~20%",
    "Increases magical damage to Undead property enemies by 3~20%",
    "Matk + 15~40",
    "Matk + 1~10%",
    "Increases ASPD by 3~10%",
  ],
  [
    "Increases magical damage to Formless race enemies by 3~15%",
    "Increases magical damage to Undead race enemies by 3~15%",
    "Increases magical damage to Brute race enemies by 3~15%",
    "Increases magical damage to Plant race enemies by 3~15%",
    "Increases magical damage to Insect race enemies by 3~15%",
    "Increases magical damage to Fish race enemies by 3~15%",
    "Increases magical damage to Demon race enemies by 3~15%",
    "Increases magical damage to Demi-Human race enemies by 3~15%",
    "Increases magical damage to Angel race enemies by 3~15%",
    "Increases magical damage to Dragon race enemies by 3~15%",
    "Increases magical damage to small size enemies by 3~15%",
    "Increases magical damage to medium size enemies by 3~15%",
    "Increases magical damage to large size enemies by 3~15%",
    "Increases ASPD by 1",
    "Increases flee by 5~30",
    "Decreases variable cast time by 3~15%",
    "Decreases SP consumption by 1~5%",
  ],
];
const tableWeaponMagicalSpecialEnchantments = [
  [
    "Increases magical damage to Water property enemies by 5~25%",
    "Increases magical damage to Earth property enemies by 5~25%",
    "Increases magical damage to Fire property enemies by 5~25%",
    "Increases magical damage to Wind property enemies by 5~25%",
    "Increases magical damage to Poison property enemies by 5~25%",
    "Increases magical damage to Holy property enemies by 5~25%",
    "Increases magical damage to Shadow property enemies by 5~25%",
    "Increases magical damage to Ghost property enemies by 5~25%",
    "Increases magical damage to Undead property enemies by 5~25%",
    "Matk + 20~60",
    "Matk + 3~15%",
    "Increases ASPD by 3~10%",
  ],
  [
    "Increases magical damage to Formless race enemies by 3~20%",
    "Increases magical damage to Undead race enemies by 3~20%",
    "Increases magical damage to Brute race enemies by 3~20%",
    "Increases magical damage to Plant race enemies by 3~20%",
    "Increases magical damage to Insect race enemies by 3~20%",
    "Increases magical damage to Fish race enemies by 3~20%",
    "Increases magical damage to Demon race enemies by 3~20%",
    "Increases magical damage to Demi-Human race enemies by 3~20%",
    "Increases magical damage to Angel race enemies by 3~20%",
    "Increases magical damage to Dragon race enemies by 3~20%",
    "Increases magical damage to small size enemies by 3~20%",
    "Increases magical damage to medium size enemies by 3~20%",
    "Increases magical damage to large size enemies by 3~20%",
    "Increases ASPD by 1~2",
    "Increases flee by 5~45",
    "Decreases variable cast time by 3~20%",
    "Decreases SP consumption by 1~10%",
    "Weapon cannot be broken in battle.",
  ],
];

const MODIFICATION_MODULE_COMMON = "/images/ic-common-module.webp";
const MODIFICATION_MODULE_RARE = "/images/ic-rare-module.webp";
const MODIFICATION_MODULE_UNIQUE = "/images/ic-unique-module.webp";
const MODIFICATION_MODULE_LEGENDARY = "/images/ic-legendary-module.webp";

const enum ModuleLevel {
  Common = 0,
  Rare = 1,
  Unique = 2,
  Legendary = 3,
}
const enum Equipment {
  IllusionArmorAtype,
  IllusionArmorBtype,
  IllusionEngineWingAtype,
  IllusionEngineWingBtype,
  IllusionLegAtype,
  IllusionLegBtype,
  IllusionBoosterR,
  IllusionBoosterL,
  IllusionBattleChipR,
  IllusionBattleChipL,
}

type EquipmentEnchantment = {
  level: ModuleLevel;
  modificationModule: string;
  modificationModuleIcon: string;
  modificationOrb: string;
  effect: string;
  equipmentLocation: Equipment[];
  maxCount: number;
};

const tableCommonEquipmentEnchantments: EquipmentEnchantment[] = [
  // Modification Module (Defense)
  {
    level: ModuleLevel.Common,
    modificationModule: "Modification Module (Defense)",
    modificationModuleIcon: MODIFICATION_MODULE_COMMON,
    modificationOrb: "Modification Orb (Defense)",
    effect:
      "Def + 25\nIf refine rate is 7 or higher, Def + 10\nIf refine rate is 9 or higher, Def + 10",
    equipmentLocation: [
      Equipment.IllusionArmorAtype,
      Equipment.IllusionArmorBtype,
      Equipment.IllusionEngineWingAtype,
      Equipment.IllusionEngineWingBtype,
      Equipment.IllusionLegAtype,
      Equipment.IllusionLegBtype,
    ],
    maxCount: 3,
  },
  // Modification Module (Magic Defense)
  {
    level: ModuleLevel.Common,
    modificationModule: "Modification Module (Magic Defense)",
    modificationModuleIcon: MODIFICATION_MODULE_COMMON,
    modificationOrb: "Modification Orb (Magic Defense)",
    effect:
      "Mdef + 2\nIf refine rate is 7 or higher, Mdef + 3\nIf refine rate is 9 or higher, Mdef + 3",
    equipmentLocation: [
      Equipment.IllusionArmorAtype,
      Equipment.IllusionArmorBtype,
      Equipment.IllusionEngineWingAtype,
      Equipment.IllusionEngineWingBtype,
      Equipment.IllusionLegAtype,
      Equipment.IllusionLegBtype,
    ],
    maxCount: 3,
  },
  // Modification Module (Vit)
  {
    level: ModuleLevel.Common,
    modificationModule: "Modification Module (Vit)",
    modificationModuleIcon: MODIFICATION_MODULE_COMMON,
    modificationOrb: "Vit + 3",
    effect: "Vit + 3",
    equipmentLocation: [
      Equipment.IllusionBoosterR,
      Equipment.IllusionBoosterL,
      Equipment.IllusionBattleChipR,
      Equipment.IllusionBattleChipL,
    ],
    maxCount: 3,
  },
  // Modification Module (Luk)
  {
    level: ModuleLevel.Common,
    modificationModule: "Modification Module (Luk)",
    modificationModuleIcon: MODIFICATION_MODULE_COMMON,
    modificationOrb: "Luk + 3",
    effect: "Luk + 3",
    equipmentLocation: [
      Equipment.IllusionBoosterR,
      Equipment.IllusionBoosterL,
      Equipment.IllusionBattleChipR,
      Equipment.IllusionBattleChipL,
    ],
    maxCount: 3,
  },
  // Modification Module (Str)
  {
    level: ModuleLevel.Common,
    modificationModule: "Modification Module (Str)",
    modificationModuleIcon: MODIFICATION_MODULE_COMMON,
    modificationOrb: "Str + 3",
    effect: "Str + 3",
    equipmentLocation: [
      Equipment.IllusionBoosterR,
      Equipment.IllusionBattleChipR,
    ],
    maxCount: 3,
  },
  // Modification Module (Agi)
  {
    level: ModuleLevel.Common,
    modificationModule: "Modification Module (Agi)",
    modificationModuleIcon: MODIFICATION_MODULE_COMMON,
    modificationOrb: "Agi + 3",
    effect: "Agi + 3",
    equipmentLocation: [
      Equipment.IllusionBoosterR,
      Equipment.IllusionBattleChipR,
    ],
    maxCount: 3,
  },
  // Modification Module (Int)
  {
    level: ModuleLevel.Common,
    modificationModule: "Modification Module (Int)",
    modificationModuleIcon: MODIFICATION_MODULE_COMMON,
    modificationOrb: "Int + 3",
    effect: "Int + 3",
    equipmentLocation: [
      Equipment.IllusionBoosterL,
      Equipment.IllusionBattleChipL,
    ],
    maxCount: 3,
  },
  // Modification Module (Dex)
  {
    level: ModuleLevel.Common,
    modificationModule: "Modification Module (Dex)",
    modificationModuleIcon: MODIFICATION_MODULE_COMMON,
    modificationOrb: "Dex + 3",
    effect: "Dex + 3",
    equipmentLocation: [
      Equipment.IllusionBoosterL,
      Equipment.IllusionBattleChipL,
    ],
    maxCount: 3,
  },
];
const tableRareEquipmentEnchantments: EquipmentEnchantment[] = [
  // Modification Module (HP recovery)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (HP recovery)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Modification Orb (HP recovery)",
    effect: "HP recovery + 20%",
    equipmentLocation: [
      Equipment.IllusionBoosterR,
      Equipment.IllusionBattleChipR,
    ],
    maxCount: 2,
  },
  // Modification Module (SP recovery)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (SP recovery)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Modification Orb (SP recovery)",
    effect: "SP recovery + 20%",
    equipmentLocation: [
      Equipment.IllusionBoosterL,
      Equipment.IllusionBattleChipL,
    ],
    maxCount: 2,
  },
  // Modification Module (Spell)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Spell)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "pell 5",
    effect: "MATK +18<br>Decrease Casting Time by 10%",
    equipmentLocation: [
      Equipment.IllusionBoosterR,
      Equipment.IllusionBoosterL,
      Equipment.IllusionBattleChipR,
      Equipment.IllusionBattleChipL,
    ],
    maxCount: 1,
  },
  // Modification Module (Attack Speed)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Attack Speed)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "ASPD Lv 4",
    effect: "ASPD + 10%",
    equipmentLocation: [
      Equipment.IllusionBoosterR,
      Equipment.IllusionBoosterL,
      Equipment.IllusionBattleChipR,
      Equipment.IllusionBattleChipL,
    ],
    maxCount: 1,
  },
  // Modification Module (Fatal)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Fatal)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Fatal Lv 4",
    effect: "Critical damage + 10%<br>CRI + 4",
    equipmentLocation: [
      Equipment.IllusionBoosterR,
      Equipment.IllusionBoosterL,
      Equipment.IllusionBattleChipR,
      Equipment.IllusionBattleChipL,
    ],
    maxCount: 1,
  },
  // Modification Module (Expert Archer)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Expert Archer)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Expert Archer 5",
    effect: "Ranged Attack +10%",
    equipmentLocation: [
      Equipment.IllusionBoosterR,
      Equipment.IllusionBoosterL,
      Equipment.IllusionBattleChipR,
      Equipment.IllusionBattleChipL,
    ],
    maxCount: 1,
  },
  // Modification Module (Vital)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Vital)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Modification Orb (Vital)",
    effect:
      "MaxHP + 5%<br>If refine rate is 7 or higher, MaxHP + 500<br>If refine rate is 9 or higher, additional MaxHP + 750",
    equipmentLocation: [Equipment.IllusionLegAtype, Equipment.IllusionLegBtype],
    maxCount: 2,
  },
  // Modification Module (Mental)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Mental)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Modification Orb (Mental)",
    effect:
      "MaxSP + 5%<br>If refine rate is 7 or higher, MaxSP + 100<br>If refine rate is 9 or higher, additional MaxSP + 150",
    equipmentLocation: [Equipment.IllusionLegAtype, Equipment.IllusionLegBtype],
    maxCount: 2,
  },
  // Modification Module (Heal)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Heal)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Modification Orb (Willpower)",
    effect:
      "Increases heal effectiveness by 5%<br>If refine rate is 7 or higher, increases heal effectiveness by additional 5%<br>If refine rate is 9 or higher, increases heal effectiveness by additional 5%.",
    equipmentLocation: [Equipment.IllusionLegAtype, Equipment.IllusionLegBtype],
    maxCount: 2,
  },
  // Modification Module (Power)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Power)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Modification Orb (Power)",
    effect:
      "Atk + 5%<br>If refine rate is 7 or higher, Atk + 25<br>If refine rate is 9 or higher, additional Atk + 25",
    equipmentLocation: [
      Equipment.IllusionArmorAtype,
      Equipment.IllusionArmorBtype,
    ],
    maxCount: 2,
  },
  // Modification Module (Magic)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Magic)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Modification Orb (Magic)",
    effect:
      "Matk + 5%<br>If refine rate is 7 or higher, Matk + 25<br>If refine rate is 9 or higher, additional Matk + 25",
    equipmentLocation: [
      Equipment.IllusionArmorAtype,
      Equipment.IllusionArmorBtype,
    ],
    maxCount: 2,
  },
  // Modification Module (Shooter)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Shooter)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Modification Orb (Shooter)",
    effect:
      "Increases long ranged physical damage by 3%<br>If refine rate is 7 or higher, increases long ranged physical damage by additional 2%<br>If refine rate is 9 or higher, increases long ranged physical damage by additional 2%",
    equipmentLocation: [
      Equipment.IllusionArmorAtype,
      Equipment.IllusionArmorBtype,
    ],
    maxCount: 2,
  },
  // Modification Module (Fast)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Fast)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Modification Orb (Fast)",
    effect:
      "ASPD + 1<br>If refine rate is 7 or higher, increases attack speed (reduces delay after attack by 3%)<br>If refine rate is 9 or higher, increases attack speed (reduces delay after attack by additional 3%)",
    equipmentLocation: [
      Equipment.IllusionEngineWingAtype,
      Equipment.IllusionEngineWingBtype,
    ],
    maxCount: 2,
  },
  // Modification Module (Caster)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Caster)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Modification Orb (Caster)",
    effect:
      "Reduces variable casting time by 5%<br>If refine rate is 7 or higher, reduces variable casting time by additional 3%<br>If refine rate is 9 or higher, reduces variable casting time by additional 3%",
    equipmentLocation: [
      Equipment.IllusionEngineWingAtype,
      Equipment.IllusionEngineWingBtype,
    ],
    maxCount: 2,
  },
  // Modification Module (Critical)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Critical)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Modification Orb (Critical)",
    effect:
      "Cri + 10<br>If refine rate is 7 or higher, increases critical damage by 5%<br>If refine rate is 9 or higher, increases critical damage by additional 5%",
    equipmentLocation: [
      Equipment.IllusionEngineWingAtype,
      Equipment.IllusionEngineWingBtype,
    ],
    maxCount: 2,
  },
];
const tableUniqueEquipmentEnchantments: EquipmentEnchantment[] = [
  // Modification Module (Delay After Skill)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Modification Module (Delay After Skill)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Modification Orb (Delay After Skill)",
    effect:
      "Reduces delay after skill by 5%<br>If refine rate is 7 or higher, reduces delay after skill by additional 5%<br>If refine rate is 9 or higher, reduces delay after skill by additional 5%",
    equipmentLocation: [
      Equipment.IllusionArmorAtype,
      Equipment.IllusionArmorBtype,
    ],
    maxCount: 1,
  },
  // Modification Module (Fixed Casting)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Modification Module (Fixed Casting)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Modification Orb (Fixed Casting)",
    effect:
      "Reduces fixed casting time by 0.3 second<br>If refine rate is 7 or higher, reduces fixed casting time by additional 0.2 second<br>If refine rate is 9 or higher, reduces fixed casting time by additional 0.2 second",
    equipmentLocation: [Equipment.IllusionLegAtype, Equipment.IllusionLegBtype],
    maxCount: 1,
  },
  // Modification Module (Above All)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Modification Module (Above All)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Modification Orb (Above All)",
    effect:
      "Reduces physical and magical damage taken from all property enemies by 5%<br>If refine rate is 7 or higher, reduces physical and magical damage taken from all size enemies by 5%<br>If refine rate is 9 or higher, reduces physical and magical damage taken from all race enemies by 5% (excludes player)",
    equipmentLocation: [
      Equipment.IllusionEngineWingAtype,
      Equipment.IllusionEngineWingBtype,
    ],
    maxCount: 1,
  },
  // Modification Module (Drain Life)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Modification Module (Drain Life)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Modification Orb (Drain Life)",
    effect:
      "Has a 2% chance to restore 2% of damage as HP when dealing physical damage",
    equipmentLocation: [
      Equipment.IllusionBoosterR,
      Equipment.IllusionBattleChipR,
    ],
    maxCount: 1,
  },
  // Modification Module (Drain Soul)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Modification Module (Drain Soul)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Modification Orb (Drain Soul)",
    effect:
      "Has a 1% chance to restore 1% of damage as SP when dealing physical damage",
    equipmentLocation: [
      Equipment.IllusionBoosterL,
      Equipment.IllusionBattleChipL,
    ],
    maxCount: 1,
  },
  // MModification Module (Magic Healing)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Modification Module (Magic Healing)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Modification Orb (Magic Healing)",
    effect:
      "Has a 2% chance to recover 400 HP per 0.5 second for 10 seconds when dealing magical damage",
    equipmentLocation: [
      Equipment.IllusionBoosterR,
      Equipment.IllusionBattleChipR,
    ],
    maxCount: 1,
  },
  // Modification Module (Drain Soul)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Modification Module (Magic Soul)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Modification Orb (Magic Soul)",
    effect:
      "Has a 1% chance to recover 80 SP per 0.5 second for 10 seconds when dealing magical damage",
    equipmentLocation: [
      Equipment.IllusionBoosterL,
      Equipment.IllusionBattleChipL,
    ],
    maxCount: 1,
  },
];
const tableLegendaryEquipmentEnchantments: EquipmentEnchantment[] = [
  // Modification Module (Unlimited Vital)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Modification Module (Unlimited Vital)",
    modificationModuleIcon: MODIFICATION_MODULE_LEGENDARY,
    modificationOrb: "Modification Orb (Unlimited Vital)",
    effect:
      'Has a chance to gain "Everlasting Life" for 10 seconds when receiving physical or magical damage<br><br>[Everlasting Life]<br>Vit + 50, recover 400 HP per 0.5 second, drains 20 SP per second for 10 seconds',
    equipmentLocation: [Equipment.IllusionLegAtype, Equipment.IllusionLegBtype],
    maxCount: 1,
  },
  // Modification Module (Spell Buster)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Modification Module (Spell Buster)",
    modificationModuleIcon: MODIFICATION_MODULE_LEGENDARY,
    modificationOrb: "Modification Orb (Spell Buster)",
    effect:
      'Has a chance to gain "Magic Storm" for 10 seconds when dealing magical damage<br><br>[Magic Storm]<br>Int + 50, Matk + 15%, Atk - 15% for 10 seconds',
    equipmentLocation: [Equipment.IllusionLegAtype, Equipment.IllusionLegBtype],
    maxCount: 1,
  },
  // Modification Module (Firing Shot)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Modification Module (Firing Shot)",
    modificationModuleIcon: MODIFICATION_MODULE_LEGENDARY,
    modificationOrb: "Modification Orb (Firing Shot)",
    effect:
      'Has a chance to gain "Plunging Shooter" for 10 seconds when dealing physical damage<br><br>[Plunging Shooter]<br>Dex + 50, increases long ranged physical damage by 10%, drains 20 SP per second for 10 seconds',
    equipmentLocation: [Equipment.IllusionLegAtype, Equipment.IllusionLegBtype],
    maxCount: 1,
  },
  // Modification Module (Overpower)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Modification Module (Overpower)",
    modificationModuleIcon: MODIFICATION_MODULE_LEGENDARY,
    modificationOrb: "Modification Orb (Overpower)",
    effect:
      'Has a chance to gain "Raging Fight" for 10 seconds when dealing physical damage<br><br>[Raging Fight]<br>Str + 50, Atk + 15%, Matk - 15% for 10 seconds',
    equipmentLocation: [Equipment.IllusionLegAtype, Equipment.IllusionLegBtype],
    maxCount: 1,
  },
  // Modification Module (Fatal Flash)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Modification Module (Fatal Flash)",
    modificationModuleIcon: MODIFICATION_MODULE_LEGENDARY,
    modificationOrb: "Modification Orb (Fatal Flash)",
    effect:
      'Has a chance to gain "Deadly Lightspeed" for 10 seconds when dealing physical damage<br><br>[Deadly Lightspeed]<br>Agi + 50, increases critical damage by 10%, drains 300 HP per second for 10 seconds',
    equipmentLocation: [Equipment.IllusionLegAtype, Equipment.IllusionLegBtype],
    maxCount: 1,
  },
  // Modification Module (Lucky Strike)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Modification Module (Lucky Strike)",
    modificationModuleIcon: MODIFICATION_MODULE_LEGENDARY,
    modificationOrb: "Modification Orb (Lucky Strike)",
    effect:
      'Has a chance to gain "Good Fortune" for 10 seconds when dealing magical damage<br><br>[Good Fortune]<br>Luk + 50, increases all property magical damage by 10%, drains 300 HP per second for 10 seconds',
    equipmentLocation: [Equipment.IllusionLegAtype, Equipment.IllusionLegBtype],
    maxCount: 1,
  },
];
const tableEquipmentEnchantments: {
  level: string;
  table: EquipmentEnchantment[];
}[] = [
    { level: "Common Enchants", table: tableCommonEquipmentEnchantments },
    { level: "Rare Enchants", table: tableRareEquipmentEnchantments },
    { level: "Unique Enchants", table: tableUniqueEquipmentEnchantments },
    { level: "Legendary Enchants", table: tableLegendaryEquipmentEnchantments },
  ];

const tableWeaponPhysicalNormalEnchantmentsCollapse = ref(true);
const tableWeaponPhysicalAdvancedEnchantmentsCollapse = ref(true);
const tableWeaponPhysicalSpecialEnchantmentsCollapse = ref(true);
const tableWeaponMagicalNormalEnchantmentsCollapse = ref(true);
const tableWeaponMagicalAdvancedEnchantmentsCollapse = ref(true);
const tableWeaponMagicalSpecialEnchantmentsCollapse = ref(true);

function toggleCollapseAllWeaponTable() {
  tableWeaponPhysicalNormalEnchantmentsCollapse.value = false;
  tableWeaponPhysicalAdvancedEnchantmentsCollapse.value = false;
  tableWeaponPhysicalSpecialEnchantmentsCollapse.value = false;
  tableWeaponMagicalNormalEnchantmentsCollapse.value = false;
  tableWeaponMagicalAdvancedEnchantmentsCollapse.value = false;
  tableWeaponMagicalSpecialEnchantmentsCollapse.value = false;
}

function toggleUncollapseAllWeaponTable() {
  tableWeaponPhysicalNormalEnchantmentsCollapse.value = true;
  tableWeaponPhysicalAdvancedEnchantmentsCollapse.value = true;
  tableWeaponPhysicalSpecialEnchantmentsCollapse.value = true;
  tableWeaponMagicalNormalEnchantmentsCollapse.value = true;
  tableWeaponMagicalAdvancedEnchantmentsCollapse.value = true;
  tableWeaponMagicalSpecialEnchantmentsCollapse.value = true;
}

function formatBreakLine(text: string) {
  return text.replace(/<br>/g, "<br>");
}

function getComponent(equipment: Equipment) {
  switch (equipment) {
    case Equipment.IllusionArmorAtype:
      return IllusionArmorAtypeViewV1;
    case Equipment.IllusionArmorBtype:
      return IllusionArmorBtypeViewV1;
    case Equipment.IllusionEngineWingAtype:
      return IllusionEngineWingAtypeViewV1;
    case Equipment.IllusionEngineWingBtype:
      return IllusionEngineWingBtypeViewV1;
    case Equipment.IllusionLegAtype:
      return IllusionLegAtypeViewV1;
    case Equipment.IllusionLegBtype:
      return IllusionLegBtypeViewV1;
    case Equipment.IllusionBoosterR:
      return IllusionBoosterRViewV1;
    case Equipment.IllusionBoosterL:
      return IllusionBoosterLViewV1;
    case Equipment.IllusionBattleChipR:
      return IllusionBattleChipRViewV1;
    case Equipment.IllusionBattleChipL:
      return IllusionBattleChipLViewV1;
    default:
      break;
  }
}
</script>

<template>
  <main class="container mx-auto">
    <h1 class="text-4xl font-bold">Episode 17.1 Enchantment</h1>

    <h3 class="">SEO: EP 17.1, Weapon Enchantments, Equipment Enchantments</h3>

    <!-- #region Weapon Enchantments card -->
    <div class="p-3">
      <div class="c-skill-card">
        <h3 class="text-xl font-bold">Weapon Enchantments</h3>

        <div class="my-3">
          <a href="#" class="text-blue-600" @click.prevent="toggleCollapseAllWeaponTable()">
            [Callapse All]
          </a>
          /
          <a href="#" class="text-blue-600" @click.prevent="toggleUncollapseAllWeaponTable()">
            [Uncallapse All]
          </a>
        </div>

        <!-- #region Physical - Normal table -->
        <div class="mb-5">
          <h4 class="text-l font-bold">
            Physical - Normal
            <a href="#" class="text-blue-600" @click.prevent="
              tableWeaponPhysicalNormalEnchantmentsCollapse =
              !tableWeaponPhysicalNormalEnchantmentsCollapse
            ">
              [Collapse]
            </a>
          </h4>
          <table :class="
            tableWeaponPhysicalNormalEnchantmentsCollapse ? '' : 'collapse'
          " class="c-table">
            <thead>
              <tr>
                <th class="c-table-th">1st Enchant</th>
                <th class="c-table-th">2nd Enchant</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="c-table-td pl-6 align-top">
                  <ul class="list-disc">
                    <li v-for="enchantment in tableWeaponPhysicalNormalEnchantments[0]" :key="enchantment">
                      {{ enchantment }}
                    </li>
                  </ul>
                </td>
                <td class="c-table-td pl-6 align-top">
                  <ul class="list-disc">
                    <li v-for="enchantment in tableWeaponPhysicalNormalEnchantments[1]" :key="enchantment">
                      {{ enchantment }}
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- #endregion Physical - Normal table -->

        <!-- #region Physical - Advanced table -->
        <h4 class="text-l font-bold">
          Physical - Advanced
          <a href="#" class="text-blue-600" @click.prevent="
            tableWeaponPhysicalAdvancedEnchantmentsCollapse =
            !tableWeaponPhysicalAdvancedEnchantmentsCollapse
          ">
            [Collapse]
          </a>
        </h4>
        <table :class="
          tableWeaponPhysicalAdvancedEnchantmentsCollapse ? '' : 'collapse'
        " class="c-table">
          <thead>
            <tr>
              <th class="c-table-th">1st Enchant</th>
              <th class="c-table-th">2nd Enchant</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="c-table-td pl-6 align-top">
                <ul class="list-disc">
                  <li v-for="enchantment in tableWeaponPhysicalAdvancedEnchantments[0]" :key="enchantment">
                    {{ enchantment }}
                  </li>
                </ul>
              </td>
              <td class="c-table-td pl-6 align-top">
                <ul class="list-disc">
                  <li v-for="enchantment in tableWeaponPhysicalAdvancedEnchantments[1]" :key="enchantment">
                    {{ enchantment }}
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- #endregion Physical - Advanced table -->

        <div class="mb-5"></div>

        <!-- #region Physical - Special table -->
        <h4 class="text-l font-bold">
          Physical - Special
          <a href="#" class="text-blue-600" @click.prevent="
            tableWeaponPhysicalSpecialEnchantmentsCollapse =
            !tableWeaponPhysicalSpecialEnchantmentsCollapse
          ">
            [Collapse]
          </a>
        </h4>
        <table :class="
          tableWeaponPhysicalSpecialEnchantmentsCollapse ? '' : 'collapse'
        " class="c-table">
          <thead>
            <tr>
              <th class="c-table-th">1st Enchant</th>
              <th class="c-table-th">2nd Enchant</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="c-table-td pl-6 align-top">
                <ul class="list-disc">
                  <li v-for="enchantment in tableWeaponPhysicalSpecialEnchantments[0]" :key="enchantment">
                    {{ enchantment }}
                  </li>
                </ul>
              </td>
              <td class="c-table-td pl-6 align-top">
                <ul class="list-disc">
                  <li>Increases damage to Formless race enemies by 3~20%</li>
                  <li>Increases damage to Undead race enemies by 3~20%</li>
                  <li>Increases damage to Brute race enemies by 3~20%</li>
                  <li>Increases damage to Plant race enemies by 3~20%</li>
                  <li>Increases damage to Insect race enemies by 3~20%</li>
                  <li>Increases damage to Fish race enemies by 3~20%</li>
                  <li>Increases damage to Demon race enemies by 3~20%</li>
                  <li>Increases damage to Demi-Human race enemies by 3~20%</li>
                  <li>Increases damage to Angel race enemies by 3~20%</li>
                  <li>Increases damage to Dragon race enemies by 3~20%</li>
                  <li>Increases damage to small size enemies by 3~20%</li>
                  <li>Increases damage to medium size enemies by 3~20%</li>
                  <li>Increases damage to large size enemies by 3~20%</li>
                  <li>Increases ASPD by 3~20%</li>
                  <li>Increases ASPD by 1~2</li>
                  <li>Increases flee by 5~45</li>
                  <li>Increases critical damage by 3~20%</li>
                  <li>Increases long-range damage by 3~20%</li>
                  <li>Decreases SP consumption by 1~10%</li>
                  <li>Weapon cannot be broken in battle</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- #endregion Physical - Special table -->

        <div class="mt-5"></div>

        <!-- #region Magical - Normal table -->
        <h4 class="text-l font-bold">
          Magical - Normal
          <a href="#" class="text-blue-600" @click.prevent="
            tableWeaponMagicalNormalEnchantmentsCollapse =
            !tableWeaponMagicalNormalEnchantmentsCollapse
          ">
            [Collapse]
          </a>
        </h4>
        <table :class="
          tableWeaponMagicalNormalEnchantmentsCollapse ? '' : 'collapse'
        " class="c-table">
          <thead>
            <tr>
              <th class="c-table-th">1st Enchant</th>
              <th class="c-table-th">2nd Enchant</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="c-table-td pl-6 align-top">
                <ul class="list-disc">
                  <li v-for="enchantment in tableWeaponMagicalNormalEnchantments[0]" :key="enchantment">
                    {{ enchantment }}
                  </li>
                </ul>
              </td>
              <td class="c-table-td pl-6 align-top">
                <ul class="list-disc">
                  <li v-for="enchantment in tableWeaponMagicalNormalEnchantments[1]" :key="enchantment">
                    {{ enchantment }}
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- #endregion Magical - Normal table -->

        <div class="mt-5"></div>

        <!-- #region Magical - Advanced table -->
        <h4 class="text-l font-bold">
          Magical - Advanced
          <a href="#" class="text-blue-600" @click.prevent="
            tableWeaponMagicalAdvancedEnchantmentsCollapse =
            !tableWeaponMagicalAdvancedEnchantmentsCollapse
          ">
            [Collapse]
          </a>
        </h4>
        <table :class="
          tableWeaponMagicalAdvancedEnchantmentsCollapse ? '' : 'collapse'
        " class="c-table">
          <thead>
            <tr>
              <th class="c-table-th">1st Enchant</th>
              <th class="c-table-th">2nd Enchant</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="c-table-td pl-6 align-top">
                <ul class="list-disc">
                  <li v-for="enchantment in tableWeaponMagicalAdvancedEnchantments[0]" :key="enchantment">
                    {{ enchantment }}
                  </li>
                </ul>
              </td>
              <td class="c-table-td pl-6 align-top">
                <ul class="list-disc">
                  <li v-for="enchantment in tableWeaponMagicalAdvancedEnchantments[1]" :key="enchantment">
                    {{ enchantment }}
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- #endregion Magical - Advanced table -->

        <div class="mt-5"></div>

        <!-- #region Magical - Special table -->
        <h4 class="text-l font-bold">
          Magical - Special
          <a href="#" class="text-blue-600" @click.prevent="
            tableWeaponMagicalSpecialEnchantmentsCollapse =
            !tableWeaponMagicalSpecialEnchantmentsCollapse
          ">
            [Collapse]
          </a>
        </h4>
        <table :class="
          tableWeaponMagicalSpecialEnchantmentsCollapse ? '' : 'collapse'
        " class="c-table">
          <thead>
            <tr>
              <th class="c-table-th">1st Enchant</th>
              <th class="c-table-th">2nd Enchant</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="c-table-td pl-6 align-top">
                <ul class="list-disc">
                  <li v-for="enchantment in tableWeaponMagicalSpecialEnchantments[0]" :key="enchantment">
                    {{ enchantment }}
                  </li>
                </ul>
              </td>
              <td class="c-table-td pl-6 align-top">
                <ul class="list-disc">
                  <li v-for="enchantment in tableWeaponMagicalSpecialEnchantments[1]" :key="enchantment">
                    {{ enchantment }}
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- #endregion Magical - Special table -->
      </div>
    </div>
    <!-- #endregion Weapon Enchantments card -->

    <!-- #region Equipments Enchantments card -->
    <div class="p-3">
      <div class="c-skill-card">
        <h3 class="text-xl font-bold">Equipment Enchantments</h3>

        <table class="c-table">
          <thead>
            <tr>
              <th class="c-table-th">Modification Module</th>
              <th class="c-table-th">Modification Orb</th>
              <th class="c-table-th">Effect</th>
              <th class="c-table-th">Equipment Location</th>
              <th class="c-table-th">Max Count</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="enchantment in tableEquipmentEnchantments" :key="enchantment.level">
              <tr>
                <td colspan="5" class="c-table-td align-top text-center font-bold">
                  {{ enchantment.level }}
                </td>
              </tr>
              <tr v-for="enchant in enchantment.table" :key="enchant.modificationModule">
                <td class="c-table-td align-top">
                  <picture>
                    <img :src="enchant.modificationModuleIcon" :alt="enchant.modificationModule" class="inline" />
                  </picture>
                  {{ enchant.modificationModule }}
                </td>
                <td class="c-table-td align-top">
                  {{ enchant.modificationOrb }}
                </td>
                <td class="c-table-td align-top" v-html="formatBreakLine(enchant.effect)"></td>
                <td class="c-table-td align-top">
                  <component v-for="equipment in enchant.equipmentLocation" :key="equipment"
                    :is="getComponent(equipment)" />
                </td>
                <td class="c-table-td align-top">{{ enchant.maxCount }}</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
    <!-- #endregion Equipments Enchantments card -->
  </main>
</template>
