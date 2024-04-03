<script setup lang="ts">
import { RN_EPISODE_172_ENCHANTMENT, getHead } from '@/app/router.options'

import AutomaticArmorAtypeViewV1 from "@/components/equipments/illusion172/AutomaticArmorAtypeViewV1.vue";
import AutomaticArmorBtypeViewV1 from "@/components/equipments/illusion172/AutomaticArmorBtypeViewV1.vue";
import AutomaticEngineWingAtypeViewV1 from "@/components/equipments/illusion172/AutomaticEngineWingAtypeViewV1.vue";
import AutomaticEngineWingBtypeViewV1 from "@/components/equipments/illusion172/AutomaticEngineWingBtypeViewV1.vue";
import AutomaticLegAtypeViewV1 from "@/components/equipments/illusion172/AutomaticLegAtypeViewV1.vue";
import AutomaticLegBtypeViewV1 from "@/components/equipments/illusion172/AutomaticLegBtypeViewV1.vue";
import AutomaticBoosterRViewV1 from "@/components/equipments/illusion172/AutomaticBoosterRViewV1.vue";
import AutomaticBoosterLViewV1 from "@/components/equipments/illusion172/AutomaticBoosterLViewV1.vue";
import AutomaticBattleChipRViewV1 from "@/components/equipments/illusion172/AutomaticBattleChipRViewV1.vue";
import AutomaticBattleChipLViewV1 from "@/components/equipments/illusion172/AutomaticBattleChipLViewV1.vue";

//#region use...
useHead(getHead(RN_EPISODE_172_ENCHANTMENT))

const { $firebaseApp } = useNuxtApp()
//#endregion use...

const tableWeaponPhysicalNormalEnchantments = [
  [
    "Atk + 5~25",
    "%Atk + 1~5%",
    "Hit + 3~10",
    "Crit + 3~10",
    "Increases damage to Neutral property enemies by 3~20%",
    "Increases damage to Water property enemies by 3~20%",
    "Increases damage to Wind property enemies by 3~20%",
    "Increases damage to Earth property enemies by 3~20%",
    "Increases damage to Fire property enemies by 3~20%",
    "Increases damage to Poison property enemies by 3~20%",
    "Increases damage to Shadow property enemies by 3~20%",
    "Increases damage to Holy property enemies by 3~20%",
    "Increases damage to Ghost property enemies by 3~20%",
    "Increases damage to Undead property enemies by 3~20%",
  ],
];
const tableWeaponPhysicalAdvancedEnchantments = [
  [
    "Atk + 5~25",
    "% Atk + 1~5%",
    "Hit + 3~10",
    "Crit + 3~10",
    "Increases damage to Neutral property enemies by 3~20%",
    "Increases damage to Water property enemies by 3~20%",
    "Increases damage to Wind property enemies by 3~20%",
    "Increases damage to Earth property enemies by 3~20%",
    "Increases damage to Fire property enemies by 3~20%",
    "Increases damage to Poison property enemies by 3~20%",
    "Increases damage to Shadow property enemies by 3~20%",
    "Increases damage to Holy property enemies by 3~20%",
    "Increases damage to Ghost property enemies by 3~20%",
    "Increases damage to Undead property enemies by 3~20%",
  ],
  [
    "% Reduces delay after attack 3~15%",
    "% Increases damage to Formless race enemies by 3~15%",
    "% Increases damage to Demi-Human race enemies by 3~15%",
    "% Increases damage to Brute race enemies by 3~15%",
    "% Increases damage to Plant race enemies by 3~15%",
    "% Increases damage to Fish race enemies by 3~15%",
    "% Increases damage to Undead race enemies by 3~15%",
    "% Increases damage to Demon race enemies by 3~15%",
    "% Increases damage to Angel race enemies by 3~15%",
    "% Increases damage to Insect race enemies by 3~15%",
    "% Increases damage to Dragon race enemies by 3~15%",
    "% Increases damage to large size enemies by 3~15%",
    "% Increases damage to medium size enemies by 3~15%",
    "% Increases damage to small size enemies by 3~15%",
  ],
];
const tableWeaponPhysicalPremiumEnchantments = [
  [
    "Atk + 5~25",
    "% Atk + 1~5%",
    "Hit + 3~10",
    "Crit + 3~10",
    "Increases damage to Neutral property enemies by 3~20%",
    "Increases damage to Water property enemies by 3~20%",
    "Increases damage to Wind property enemies by 3~20%",
    "Increases damage to Earth property enemies by 3~20%",
    "Increases damage to Fire property enemies by 3~20%",
    "Increases damage to Poison property enemies by 3~20%",
    "Increases damage to Shadow property enemies by 3~20%",
    "Increases damage to Holy property enemies by 3~20%",
    "Increases damage to Ghost property enemies by 3~20%",
    "Increases damage to Undead property enemies by 3~20%",
  ],
  [
    "Increases ASPD by 1~2",
    "Increases flee by 5~45",
    "% Reduces SP consumption by 1~10%",
    "Weapon cannot be broken in battle.",
    "% Reduces delay after attack 3~15%",
    "% Increases damage to Neutral property enemies by 3~20%",
    "% Increases damage to Water property enemies by 3~20%",
    "% Increases damage to Wind property enemies by 3~20%",
    "% Increases damage to Earth property enemies by 3~20%",
    "% Increases damage to Fire property enemies by 3~20%",
    "% Increases damage to Poison property enemies by 3~20%",
    "% Increases damage to Shadow property enemies by 3~20%",
    "% Increases damage to Holy property enemies by 3~20%",
    "% Increases damage to Ghost property enemies by 3~20%",
    "% Increases damage to Undead property enemies by 3~20%",
    "% Increases long-range damage by 3~20%",
    "% Increases melee damage by 3~20%",
    "% Increases critical damage by 3~20%",
    "% Increases damage to large size enemies by 3~20%",
    "% Increases damage to medium size enemies by 3~20%",
    "% Increases damage to small size enemies by 3~20%",
  ],
  [
    "Def + 30~100",
    "Mdef + 10~40",
    "MaxHP + 1~5%",
    "MaxSP + 1~5%",
    "% Reduces variable casting time by 3~10%",
    "% Increases physical damage to normal enemies by 3~10%",
    "% Ignores Def of normal enemies by 3~15%",
    "% Increases physical damage to boss enemies by 3~10%",
    "% Ignores Def of boss enemies by 3~15%",
    "% Reduces delay after skill 1~5%",
  ],
];

const tableWeaponMagicalNormalEnchantments = [
  [
    "% Reduces delay after skill 3~10%",
    "Matk + 5~25",
    "% Matk + 1~5%",
    "% Increases magical damage to Neutral property enemies by 3~20%",
    "% Increases magical damage to Water property enemies by 3~15%",
    "% Increases magical damage to Wind property enemies by 3~15%",
    "% Increases magical damage to Earth property enemies by 3~15%",
    "% Increases magical damage to Fire property enemies by 3~15%",
    "% Increases magical damage to Poison property enemies by 3~15%",
    "% Increases magical damage to Shadow property enemies by 3~15%",
    "% Increases magical damage to Holy property enemies by 3~15%",
    "% Increases magical damage to Ghost property enemies by 3~15%",
    "% Increases magical damage to Undead property enemies by 3~15%",
  ],
];
const tableWeaponMagicalAdvancedEnchantments = [
  [
    "% Reduces delay after skill 3~10%",
    "Matk + 5~25",
    "% Matk + 1~5%",
    "% Increases magical damage to Neutral property enemies by 3~20%",
    "% Increases magical damage to Water property enemies by 3~15%",
    "% Increases magical damage to Wind property enemies by 3~15%",
    "% Increases magical damage to Earth property enemies by 3~15%",
    "% Increases magical damage to Fire property enemies by 3~15%",
    "% Increases magical damage to Poison property enemies by 3~15%",
    "% Increases magical damage to Shadow property enemies by 3~15%",
    "% Increases magical damage to Holy property enemies by 3~15%",
    "% Increases magical damage to Ghost property enemies by 3~15%",
    "% Increases magical damage to Undead property enemies by 3~15%",
  ],
  [
    "% Reduces variable casting time by 3~15%",
    "% Increases magical damage to Formless race enemies by 3~15%",
    "% Increases magical damage to Demi-Human race enemies by 3~15%",
    "% Increases magical damage to Brute race enemies by 3~15%",
    "% Increases magical damage to Plant race enemies by 3~15%",
    "% Increases magical damage to Fish race enemies by 3~15%",
    "% Increases magical damage to Undead race enemies by 3~15%",
    "% Increases magical damage to Demon race enemies by 3~15%",
    "% Increases magical damage to Angel race enemies by 3~15%",
    "% Increases magical damage to Insect race enemies by 3~15%",
    "% Increases magical damage to Dragon race enemies by 3~15%",
    "% Increases magical damage to large size enemies by 3~15%",
    "% Increases magical damage to medium size enemies by 3~15%",
    "% Increases magical damage to small size enemies by 3~15%",

    "Decreases variable cast time by 3~15%",
    "Decreases SP consumption by 1~5%",
  ],
];
const tableWeaponMagicalPremiumEnchantments = [
  [
    "% Reduces delay after skill 3~10%",
    "Matk + 5~25",
    "% Matk + 1~5%",
    "% Increases magical damage to Neutral property enemies by 3~20%",
    "% Increases magical damage to Water property enemies by 3~15%",
    "% Increases magical damage to Wind property enemies by 3~15%",
    "% Increases magical damage to Earth property enemies by 3~15%",
    "% Increases magical damage to Fire property enemies by 3~15%",
    "% Increases magical damage to Poison property enemies by 3~15%",
    "% Increases magical damage to Shadow property enemies by 3~15%",
    "% Increases magical damage to Holy property enemies by 3~15%",
    "% Increases magical damage to Ghost property enemies by 3~15%",
    "% Increases magical damage to Undead property enemies by 3~15%",
  ],
  [
    "Increases ASPD by 1~2",
    "Increases flee by 5~45",
    "% Reduces SP consumption by 1~10%",
    "Weapon cannot be broken in battle.",
    "% Reduces variable casting time by 3~15%",
    "% Matk + 3~10%",
    "% Increases magical damage to Formless race enemies by 3~20%",
    "% Increases magical damage to Demi-Human race enemies by 3~20%",
    "% Increases magical damage to Brute race enemies by 3~20%",
    "% Increases magical damage to Plant race enemies by 3~20%",
    "% Increases magical damage to Fish race enemies by 3~20%",
    "% Increases magical damage to Undead race enemies by 3~20%",
    "% Increases magical damage to Demon race enemies by 3~20%",
    "% Increases magical damage to Angel race enemies by 3~20%",
    "% Increases magical damage to Insect race enemies by 3~20%",
    "% Increases magical damage to Dragon race enemies by 3~20%",
    "% Increases magical damage to large size enemies by 3~20%",
    "% Increases magical damage to medium size enemies by 3~20%",
    "% Increases magical damage to small size enemies by 3~20%",
  ],
  [
    "Def + 30~100",
    "Mdef + 10~40",
    "MaxHP + 1~5%",
    "MaxSP + 1~5%",
    "% Reduces variable casting time by 3~10%",
    "% Increases magical damage to normal enemies by 3~10%",
    "% Ignores Mdef of normal enemies by 3~15%",
    "% Increases magical damage to boss enemies by 3~10%",
    "% Ignores Mdef of boss enemies by 3~15%",
    "% Reduces delay after skill 1~5%",
  ],
];

const MODIFICATION_MODULE_NORMAL = "/images/ic-172/ic-common-module.png";
const MODIFICATION_ORB_NORMAL = "/images/ic-172/ic-common-orb.png";

const MODIFICATION_MODULE_RARE = "/images/ic-172/ic-rare-module.png";
const MODIFICATION_ORB_RARE = "/images/ic-172/ic-rare-orb.png";

const MODIFICATION_MODULE_UNIQUE = "/images/ic-172/ic-unique-module.png";
const MODIFICATION_ORB_UNIQUE = "/images/ic-172/ic-unique-orb.png";

const MODIFICATION_MODULE_LEGENDARY = "/images/ic-172/ic-legendary-module.png";
const MODIFICATION_ORB_LEGENDARY = "/images/ic-172/ic-legendary-orb.png";

const MODIFICATION_MODULE_EPIC = "/images/ic-172/ic-epic-module.png";
const MODIFICATION_ORB_EPIC = "/images/ic-172/ic-epic-orb.png";

const enum ModuleLevel {
  Normal = 0,
  Rare = 1,
  Unique = 2,
  Legendary = 3,
  Epic = 4,
}
const enum Equipment {
  AutomaticArmorAtype,
  AutomaticArmorBtype,
  AutomaticEngineWingAtype,
  AutomaticEngineWingBtype,
  AutomaticLegAtype,
  AutomaticLegBtype,
  AutomaticBoosterR,
  AutomaticBoosterL,
  AutomaticBattleChipR,
  AutomaticBattleChipL,
}

type EquipmentEnchantment = {
  level: ModuleLevel;
  modificationModule: string;
  modificationModuleIcon: string;
  modificationOrb: string;
  modificationOrbIcon: string;
  effect: string;
  equipmentLocation: Equipment[];
  maxCount: number;
};

const tableNormalEquipmentEnchantments: EquipmentEnchantment[] = [
  // Modification Module (Defense)
  {
    level: ModuleLevel.Normal,
    modificationModule: "Modification Module (Defense)",
    modificationModuleIcon: MODIFICATION_MODULE_NORMAL,
    modificationOrb: "Modification Orb (Defense)",
    modificationOrbIcon: MODIFICATION_ORB_NORMAL,
    effect:
      "Def + 25\nIf refine rate is 7 or higher, Def + 10\nIf refine rate is 9 or higher, Def + 10",
    equipmentLocation: [
      Equipment.AutomaticArmorAtype,
      Equipment.AutomaticArmorBtype,
      Equipment.AutomaticEngineWingAtype,
      Equipment.AutomaticEngineWingBtype,
      Equipment.AutomaticLegAtype,
      Equipment.AutomaticLegBtype,
    ],
    maxCount: 3,
  },
  // Modification Module (Magic Defense)
  {
    level: ModuleLevel.Normal,
    modificationModule: "Modification Module (Magic Defense)",
    modificationModuleIcon: MODIFICATION_MODULE_NORMAL,
    modificationOrb: "Modification Orb (Magic Defense)",
    modificationOrbIcon: MODIFICATION_ORB_NORMAL,
    effect:
      "Mdef + 2\nIf refine rate is 7 or higher, Mdef + 3\nIf refine rate is 9 or higher, Mdef + 3",
    equipmentLocation: [
      Equipment.AutomaticArmorAtype,
      Equipment.AutomaticArmorBtype,
      Equipment.AutomaticEngineWingAtype,
      Equipment.AutomaticEngineWingBtype,
      Equipment.AutomaticLegAtype,
      Equipment.AutomaticLegBtype,
    ],
    maxCount: 3,
  },
  // Modification Module (Vit)
  {
    level: ModuleLevel.Normal,
    modificationModule: "Modification Module (Vit)",
    modificationModuleIcon: MODIFICATION_MODULE_NORMAL,
    modificationOrb: "Vit + 3",
    modificationOrbIcon: MODIFICATION_ORB_NORMAL,
    effect: "Vit + 3",
    equipmentLocation: [
      Equipment.AutomaticBoosterR,
      Equipment.AutomaticBoosterL,
      Equipment.AutomaticBattleChipR,
      Equipment.AutomaticBattleChipL,
    ],
    maxCount: 3,
  },
  // Modification Module (Luk)
  {
    level: ModuleLevel.Normal,
    modificationModule: "Modification Module (Luk)",
    modificationModuleIcon: MODIFICATION_MODULE_NORMAL,
    modificationOrb: "Luk + 3",
    modificationOrbIcon: MODIFICATION_ORB_NORMAL,
    effect: "Luk + 3",
    equipmentLocation: [
      Equipment.AutomaticBoosterR,
      Equipment.AutomaticBoosterL,
      Equipment.AutomaticBattleChipR,
      Equipment.AutomaticBattleChipL,
    ],
    maxCount: 3,
  },
  // Modification Module (Str)
  {
    level: ModuleLevel.Normal,
    modificationModule: "Modification Module (Str)",
    modificationModuleIcon: MODIFICATION_MODULE_NORMAL,
    modificationOrb: "Str + 3",
    modificationOrbIcon: MODIFICATION_ORB_NORMAL,
    effect: "Str + 3",
    equipmentLocation: [
      Equipment.AutomaticBoosterR,
      Equipment.AutomaticBattleChipR,
    ],
    maxCount: 3,
  },
  // Modification Module (Agi)
  {
    level: ModuleLevel.Normal,
    modificationModule: "Modification Module (Agi)",
    modificationModuleIcon: MODIFICATION_MODULE_NORMAL,
    modificationOrb: "Agi + 3",
    modificationOrbIcon: MODIFICATION_ORB_NORMAL,
    effect: "Agi + 3",
    equipmentLocation: [
      Equipment.AutomaticBoosterR,
      Equipment.AutomaticBattleChipR,
    ],
    maxCount: 3,
  },
  // Modification Module (Int)
  {
    level: ModuleLevel.Normal,
    modificationModule: "Modification Module (Int)",
    modificationModuleIcon: MODIFICATION_MODULE_NORMAL,
    modificationOrb: "Int + 3",
    modificationOrbIcon: MODIFICATION_ORB_NORMAL,
    effect: "Int + 3",
    equipmentLocation: [
      Equipment.AutomaticBoosterL,
      Equipment.AutomaticBattleChipL,
    ],
    maxCount: 3,
  },
  // Modification Module (Dex)
  {
    level: ModuleLevel.Normal,
    modificationModule: "Modification Module (Dex)",
    modificationModuleIcon: MODIFICATION_MODULE_NORMAL,
    modificationOrb: "Dex + 3",
    modificationOrbIcon: MODIFICATION_ORB_NORMAL,
    effect: "Dex + 3",
    equipmentLocation: [
      Equipment.AutomaticBoosterL,
      Equipment.AutomaticBattleChipL,
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
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect: "HP recovery + 20%",
    equipmentLocation: [
      Equipment.AutomaticBoosterR,
      Equipment.AutomaticBattleChipR,
    ],
    maxCount: 2,
  },
  // Modification Module (SP recovery)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (SP recovery)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Modification Orb (SP recovery)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect: "SP recovery + 20%",
    equipmentLocation: [
      Equipment.AutomaticBoosterL,
      Equipment.AutomaticBattleChipL,
    ],
    maxCount: 2,
  },
  // Modification Module (Spell)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Spell)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "pell 5",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect: "MATK +18<br>Decrease Casting Time by 10%",
    equipmentLocation: [
      Equipment.AutomaticBoosterR,
      Equipment.AutomaticBoosterL,
      Equipment.AutomaticBattleChipR,
      Equipment.AutomaticBattleChipL,
    ],
    maxCount: 1,
  },
  // Modification Module (Attack Speed)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Attack Speed)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "ASPD Lv 4",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect: "ASPD + 10%",
    equipmentLocation: [
      Equipment.AutomaticBoosterR,
      Equipment.AutomaticBoosterL,
      Equipment.AutomaticBattleChipR,
      Equipment.AutomaticBattleChipL,
    ],
    maxCount: 1,
  },
  // Modification Module (Fatal)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Fatal)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Fatal Lv 4",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect: "Critical damage + 10%<br>CRI + 4",
    equipmentLocation: [
      Equipment.AutomaticBoosterR,
      Equipment.AutomaticBoosterL,
      Equipment.AutomaticBattleChipR,
      Equipment.AutomaticBattleChipL,
    ],
    maxCount: 1,
  },
  // Modification Module (Expert Archer)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Expert Archer)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Expert Archer 5",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect: "Ranged Attack +10%",
    equipmentLocation: [
      Equipment.AutomaticBoosterR,
      Equipment.AutomaticBoosterL,
      Equipment.AutomaticBattleChipR,
      Equipment.AutomaticBattleChipL,
    ],
    maxCount: 1,
  },
  // Modification Module (Vital)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Vital)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Modification Orb (Vital)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect:
      "MaxHP + 5%<br>If refine rate is 7 or higher, MaxHP + 500<br>If refine rate is 9 or higher, additional MaxHP + 750",
    equipmentLocation: [Equipment.AutomaticLegAtype, Equipment.AutomaticLegBtype],
    maxCount: 2,
  },
  // Modification Module (Mental)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Mental)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Modification Orb (Mental)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect:
      "MaxSP + 5%<br>If refine rate is 7 or higher, MaxSP + 100<br>If refine rate is 9 or higher, additional MaxSP + 150",
    equipmentLocation: [Equipment.AutomaticLegAtype, Equipment.AutomaticLegBtype],
    maxCount: 2,
  },
  // Modification Module (Heal)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Heal)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Modification Orb (Willpower)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect:
      "Increases heal effectiveness by 5%<br>If refine rate is 7 or higher, increases heal effectiveness by additional 5%<br>If refine rate is 9 or higher, increases heal effectiveness by additional 5%.",
    equipmentLocation: [Equipment.AutomaticLegAtype, Equipment.AutomaticLegBtype],
    maxCount: 2,
  },
  // Modification Module (Power)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Power)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Modification Orb (Power)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect:
      "Atk + 5%<br>If refine rate is 7 or higher, Atk + 25<br>If refine rate is 9 or higher, additional Atk + 25",
    equipmentLocation: [
      Equipment.AutomaticArmorAtype,
      Equipment.AutomaticArmorBtype,
    ],
    maxCount: 2,
  },
  // Modification Module (Magic)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Magic)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Modification Orb (Magic)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect:
      "Matk + 5%<br>If refine rate is 7 or higher, Matk + 25<br>If refine rate is 9 or higher, additional Matk + 25",
    equipmentLocation: [
      Equipment.AutomaticArmorAtype,
      Equipment.AutomaticArmorBtype,
    ],
    maxCount: 2,
  },
  // Modification Module (Shooter)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Shooter)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Modification Orb (Shooter)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect:
      "Increases long ranged physical damage by 3%<br>If refine rate is 7 or higher, increases long ranged physical damage by additional 2%<br>If refine rate is 9 or higher, increases long ranged physical damage by additional 2%",
    equipmentLocation: [
      Equipment.AutomaticArmorAtype,
      Equipment.AutomaticArmorBtype,
    ],
    maxCount: 2,
  },
  // Modification Module (Fast)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Fast)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Modification Orb (Fast)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect:
      "ASPD + 1<br>If refine rate is 7 or higher, increases attack speed (reduces delay after attack by 3%)<br>If refine rate is 9 or higher, increases attack speed (reduces delay after attack by additional 3%)",
    equipmentLocation: [
      Equipment.AutomaticEngineWingAtype,
      Equipment.AutomaticEngineWingBtype,
    ],
    maxCount: 2,
  },
  // Modification Module (Caster)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Caster)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Modification Orb (Caster)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect:
      "Reduces variable casting time by 5%<br>If refine rate is 7 or higher, reduces variable casting time by additional 3%<br>If refine rate is 9 or higher, reduces variable casting time by additional 3%",
    equipmentLocation: [
      Equipment.AutomaticEngineWingAtype,
      Equipment.AutomaticEngineWingBtype,
    ],
    maxCount: 2,
  },
  // Modification Module (Critical)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Modification Module (Critical)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Modification Orb (Critical)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect:
      "Cri + 10<br>If refine rate is 7 or higher, increases critical damage by 5%<br>If refine rate is 9 or higher, increases critical damage by additional 5%",
    equipmentLocation: [
      Equipment.AutomaticEngineWingAtype,
      Equipment.AutomaticEngineWingBtype,
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
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "Reduces delay after skill by 5%<br>If refine rate is 7 or higher, reduces delay after skill by additional 5%<br>If refine rate is 9 or higher, reduces delay after skill by additional 5%",
    equipmentLocation: [
      Equipment.AutomaticArmorAtype,
      Equipment.AutomaticArmorBtype,
    ],
    maxCount: 1,
  },
  // Modification Module (Fixed Casting)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Modification Module (Fixed Casting)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Modification Orb (Fixed Casting)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "Reduces fixed casting time by 0.3 second<br>If refine rate is 7 or higher, reduces fixed casting time by additional 0.2 second<br>If refine rate is 9 or higher, reduces fixed casting time by additional 0.2 second",
    equipmentLocation: [Equipment.AutomaticLegAtype, Equipment.AutomaticLegBtype],
    maxCount: 1,
  },
  // Modification Module (Above All)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Modification Module (Above All)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Modification Orb (Above All)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "Reduces physical and magical damage taken from all property enemies by 5%<br>If refine rate is 7 or higher, reduces physical and magical damage taken from all size enemies by 5%<br>If refine rate is 9 or higher, reduces physical and magical damage taken from all race enemies by 5% (excludes player)",
    equipmentLocation: [
      Equipment.AutomaticEngineWingAtype,
      Equipment.AutomaticEngineWingBtype,
    ],
    maxCount: 1,
  },
  // Modification Module (Drain Life)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Modification Module (Drain Life)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Modification Orb (Drain Life)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "Has a 2% chance to restore 2% of damage as HP when dealing physical damage",
    equipmentLocation: [
      Equipment.AutomaticBoosterR,
      Equipment.AutomaticBattleChipR,
    ],
    maxCount: 1,
  },
  // Modification Module (Drain Soul)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Modification Module (Drain Soul)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Modification Orb (Drain Soul)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "Has a 1% chance to restore 1% of damage as SP when dealing physical damage",
    equipmentLocation: [
      Equipment.AutomaticBoosterL,
      Equipment.AutomaticBattleChipL,
    ],
    maxCount: 1,
  },
  // MModification Module (Magic Healing)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Modification Module (Magic Healing)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Modification Orb (Magic Healing)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "Has a 2% chance to recover 400 HP per 0.5 second for 10 seconds when dealing magical damage",
    equipmentLocation: [
      Equipment.AutomaticBoosterR,
      Equipment.AutomaticBattleChipR,
    ],
    maxCount: 1,
  },
  // Modification Module (Drain Soul)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Modification Module (Magic Soul)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Modification Orb (Magic Soul)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "Has a 1% chance to recover 80 SP per 0.5 second for 10 seconds when dealing magical damage",
    equipmentLocation: [
      Equipment.AutomaticBoosterL,
      Equipment.AutomaticBattleChipL,
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
    modificationOrbIcon: MODIFICATION_ORB_LEGENDARY,
    effect:
      'Has a chance to gain "Everlasting Life" for 10 seconds when receiving physical or magical damage<br><br>[Everlasting Life]<br>Vit + 50, recover 400 HP per 0.5 second, drains 20 SP per second for 10 seconds',
    equipmentLocation: [Equipment.AutomaticLegAtype, Equipment.AutomaticLegBtype],
    maxCount: 1,
  },
  // Modification Module (Spell Buster)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Modification Module (Spell Buster)",
    modificationModuleIcon: MODIFICATION_MODULE_LEGENDARY,
    modificationOrb: "Modification Orb (Spell Buster)",
    modificationOrbIcon: MODIFICATION_ORB_LEGENDARY,
    effect:
      'Has a chance to gain "Magic Storm" for 10 seconds when dealing magical damage<br><br>[Magic Storm]<br>Int + 50, Matk + 15%, Atk - 15% for 10 seconds',
    equipmentLocation: [Equipment.AutomaticLegAtype, Equipment.AutomaticLegBtype],
    maxCount: 1,
  },
  // Modification Module (Firing Shot)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Modification Module (Firing Shot)",
    modificationModuleIcon: MODIFICATION_MODULE_LEGENDARY,
    modificationOrb: "Modification Orb (Firing Shot)",
    modificationOrbIcon: MODIFICATION_ORB_LEGENDARY,
    effect:
      'Has a chance to gain "Plunging Shooter" for 10 seconds when dealing physical damage<br><br>[Plunging Shooter]<br>Dex + 50, increases long ranged physical damage by 10%, drains 20 SP per second for 10 seconds',
    equipmentLocation: [Equipment.AutomaticLegAtype, Equipment.AutomaticLegBtype],
    maxCount: 1,
  },
  // Modification Module (Overpower)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Modification Module (Overpower)",
    modificationModuleIcon: MODIFICATION_MODULE_LEGENDARY,
    modificationOrb: "Modification Orb (Overpower)",
    modificationOrbIcon: MODIFICATION_ORB_LEGENDARY,
    effect:
      'Has a chance to gain "Raging Fight" for 10 seconds when dealing physical damage<br><br>[Raging Fight]<br>Str + 50, Atk + 15%, Matk - 15% for 10 seconds',
    equipmentLocation: [Equipment.AutomaticLegAtype, Equipment.AutomaticLegBtype],
    maxCount: 1,
  },
  // Modification Module (Fatal Flash)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Modification Module (Fatal Flash)",
    modificationModuleIcon: MODIFICATION_MODULE_LEGENDARY,
    modificationOrb: "Modification Orb (Fatal Flash)",
    modificationOrbIcon: MODIFICATION_ORB_LEGENDARY,
    effect:
      'Has a chance to gain "Deadly Lightspeed" for 10 seconds when dealing physical damage<br><br>[Deadly Lightspeed]<br>Agi + 50, increases critical damage by 10%, drains 300 HP per second for 10 seconds',
    equipmentLocation: [Equipment.AutomaticLegAtype, Equipment.AutomaticLegBtype],
    maxCount: 1,
  },
  // Modification Module (Lucky Strike)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Modification Module (Lucky Strike)",
    modificationModuleIcon: MODIFICATION_MODULE_LEGENDARY,
    modificationOrb: "Modification Orb (Lucky Strike)",
    modificationOrbIcon: MODIFICATION_ORB_LEGENDARY,
    effect:
      'Has a chance to gain "Good Fortune" for 10 seconds when dealing magical damage<br><br>[Good Fortune]<br>Luk + 50, increases all property magical damage by 10%, drains 300 HP per second for 10 seconds',
    equipmentLocation: [Equipment.AutomaticLegAtype, Equipment.AutomaticLegBtype],
    maxCount: 1,
  },
];
const tableEpicEquipmentEnchantments: EquipmentEnchantment[] = [
  // Automatic Modification Module (Draconic Breath)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Draconic Breath)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Draconic Breath)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Draconic Breath) effect.<br><br>Dragon Breath and Dragon Water Breath damage +15%.<br>[Refine >= 7] Additional Dragon Breath and Dragon Water Breath damage +3%.<br>[Refine >= 11] Additional Dragon Breath and Dragon Water Breath damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
];
const tableEquipmentEnchantments: {
  level: string;
  table: EquipmentEnchantment[];
}[] = [
    { level: "Normal Enchants", table: tableNormalEquipmentEnchantments },
    { level: "Rare Enchants", table: tableRareEquipmentEnchantments },
    { level: "Unique Enchants", table: tableUniqueEquipmentEnchantments },
    { level: "Legendary Enchants", table: tableLegendaryEquipmentEnchantments },
    { level: "Epic Enchants", table: tableEpicEquipmentEnchantments },
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
    case Equipment.AutomaticArmorAtype:
      return AutomaticArmorAtypeViewV1;
    case Equipment.AutomaticArmorBtype:
      return AutomaticArmorBtypeViewV1;
    case Equipment.AutomaticEngineWingAtype:
      return AutomaticEngineWingAtypeViewV1;
    case Equipment.AutomaticEngineWingBtype:
      return AutomaticEngineWingBtypeViewV1;
    case Equipment.AutomaticLegAtype:
      return AutomaticLegAtypeViewV1;
    case Equipment.AutomaticLegBtype:
      return AutomaticLegBtypeViewV1;
    case Equipment.AutomaticBoosterR:
      return AutomaticBoosterRViewV1;
    case Equipment.AutomaticBoosterL:
      return AutomaticBoosterLViewV1;
    case Equipment.AutomaticBattleChipR:
      return AutomaticBattleChipRViewV1;
    case Equipment.AutomaticBattleChipL:
      return AutomaticBattleChipLViewV1;
    default:
      break;
  }
}
</script>

<template>
  <main class="container mx-auto">
    <h1 class="text-4xl font-bold">Episode 17.2 Enchantment</h1>

    <h3 class="">SEO: EP 17.2, Weapon Enchantments, Equipment Enchantments</h3>

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

        <!-- #region Physical - Premium table -->
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
              <th class="c-table-th">3rd Enchant</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="c-table-td pl-6 align-top">
                <ul class="list-disc">
                  <li v-for="enchantment in tableWeaponPhysicalPremiumEnchantments[0]" :key="enchantment">
                    {{ enchantment }}
                  </li>
                </ul>
              </td>
              <td class="c-table-td pl-6 align-top">
                <ul class="list-disc">
                  <li v-for="enchantment in tableWeaponPhysicalPremiumEnchantments[1]" :key="enchantment">
                    {{ enchantment }}
                  </li>
                </ul>
              </td>
              <td class="c-table-td pl-6 align-top">
                <ul class="list-disc">
                  <li v-for="enchantment in tableWeaponPhysicalPremiumEnchantments[2]" :key="enchantment">
                    {{ enchantment }}
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- #endregion Physical - Premium table -->

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

        <!-- #region Magical - Premium table -->
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
              <th class="c-table-th">3rd Enchant</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="c-table-td pl-6 align-top">
                <ul class="list-disc">
                  <li v-for="enchantment in tableWeaponMagicalPremiumEnchantments[0]" :key="enchantment">
                    {{ enchantment }}
                  </li>
                </ul>
              </td>
              <td class="c-table-td pl-6 align-top">
                <ul class="list-disc">
                  <li v-for="enchantment in tableWeaponMagicalPremiumEnchantments[1]" :key="enchantment">
                    {{ enchantment }}
                  </li>
                </ul>
              </td>
              <td class="c-table-td pl-6 align-top">
                <ul class="list-disc">
                  <li v-for="enchantment in tableWeaponMagicalPremiumEnchantments[2]" :key="enchantment">
                    {{ enchantment }}
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- #endregion Magical - Premium table -->
      </div>
    </div>
    <!-- #endregion Weapon Enchantments card -->

    <!-- #region Equipments Enchantments card -->
    <div class="p-3">
      <div class="c-skill-card">
        <h3 class="text-xl font-bold">Automatic Equipment Enchantments</h3>

        <table class="c-table">
          <thead>
            <tr>
              <th class="c-table-th">Automatic Modification Module</th>
              <th class="c-table-th">Automatic Modification Orb</th>
              <th class="c-table-th">Effect / Description</th>
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
                  <picture>
                    <img :src="enchant.modificationOrbIcon" :alt="enchant.modificationOrb" class="inline" />
                  </picture>
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
