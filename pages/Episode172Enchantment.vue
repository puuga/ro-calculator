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
  // Automatic Modification Module (DEF)
  {
    level: ModuleLevel.Normal,
    modificationModule: "Automatic Modification Module (DEF)",
    modificationModuleIcon: MODIFICATION_MODULE_NORMAL,
    modificationOrb: "Automatic Modification Orb (DEF)",
    modificationOrbIcon: MODIFICATION_ORB_NORMAL,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (DEF) effect.\n\nDEF +150.\n[Refine >= 7] Additional DEF +75.\n[Refine >= 11] Additional DEF +75.",
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
  // Automatic Modification Module (MDEF)
  {
    level: ModuleLevel.Normal,
    modificationModule: "Automatic Modification Module (MDEF)",
    modificationModuleIcon: MODIFICATION_MODULE_NORMAL,
    modificationOrb: "Automatic Modification Orb (MDEF)",
    modificationOrbIcon: MODIFICATION_ORB_NORMAL,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (MDEF) effect.\n\nMDEF +15.\n[Refine >= 7] Additional MDEF +7.\n[Refine >= 11] Additional MDEF +7.",
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
  // Automatic Modification Module (VIT)
  {
    level: ModuleLevel.Normal,
    modificationModule: "Automatic Modification Module (VIT)",
    modificationModuleIcon: MODIFICATION_MODULE_NORMAL,
    modificationOrb: "Automatic Modification Orb (VIT)",
    modificationOrbIcon: MODIFICATION_ORB_NORMAL,
    effect: "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (VIT) effect.\n\nVIT +3.\nMaxHP +1%.",
    equipmentLocation: [
      Equipment.AutomaticBoosterR,
      Equipment.AutomaticBoosterL,
      Equipment.AutomaticBattleChipR,
      Equipment.AutomaticBattleChipL,
    ],
    maxCount: 3,
  },
  // Automatic Modification Module (LUK)
  {
    level: ModuleLevel.Normal,
    modificationModule: "Automatic Modification Module (LUK)",
    modificationModuleIcon: MODIFICATION_MODULE_NORMAL,
    modificationOrb: "Automatic Modification Orb (LUK)",
    modificationOrbIcon: MODIFICATION_ORB_NORMAL,
    effect: "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (LUK) effect.\n\nLUK +3.\nCritical damage +1%.",
    equipmentLocation: [
      Equipment.AutomaticBoosterR,
      Equipment.AutomaticBoosterL,
      Equipment.AutomaticBattleChipR,
      Equipment.AutomaticBattleChipL,
    ],
    maxCount: 3,
  },
  // Automatic Modification Module (STR)
  {
    level: ModuleLevel.Normal,
    modificationModule: "Automatic Modification Module (STR)",
    modificationModuleIcon: MODIFICATION_MODULE_NORMAL,
    modificationOrb: "Automatic Modification Orb (STR)",
    modificationOrbIcon: MODIFICATION_ORB_NORMAL,
    effect: "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (STR) effect.\n\nSTR +3.\nATK +2%.",
    equipmentLocation: [
      Equipment.AutomaticBoosterR,
      Equipment.AutomaticBattleChipR,
    ],
    maxCount: 3,
  },
  // Automatic Modification Module (AGI)
  {
    level: ModuleLevel.Normal,
    modificationModule: "Automatic Modification Module (AGI)",
    modificationModuleIcon: MODIFICATION_MODULE_NORMAL,
    modificationOrb: "utomatic Modification Orb (AGI)",
    modificationOrbIcon: MODIFICATION_ORB_NORMAL,
    effect: "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (AGI) effect.\n\nAGI +3.\nIncreased ASPD (ASPD +2%).",
    equipmentLocation: [
      Equipment.AutomaticBoosterR,
      Equipment.AutomaticBattleChipR,
    ],
    maxCount: 3,
  },
  // Automatic Modification Module (INT)
  {
    level: ModuleLevel.Normal,
    modificationModule: "Automatic Modification Module (INT)",
    modificationModuleIcon: MODIFICATION_MODULE_NORMAL,
    modificationOrb: "Automatic Modification Orb (INT)",
    modificationOrbIcon: MODIFICATION_ORB_NORMAL,
    effect: "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (INT) effect.\n\nINT +3.\nMATK +2%.",
    equipmentLocation: [
      Equipment.AutomaticBoosterL,
      Equipment.AutomaticBattleChipL,
    ],
    maxCount: 3,
  },
  // Automatic Modification Module (DEX)
  {
    level: ModuleLevel.Normal,
    modificationModule: "Automatic Modification Module (DEX)",
    modificationModuleIcon: MODIFICATION_MODULE_NORMAL,
    modificationOrb: "Automatic Modification Orb (DEX)",
    modificationOrbIcon: MODIFICATION_ORB_NORMAL,
    effect: "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (DEX) effect.\n\nDEX +3.\nLong-ranged Physical damage +2%.",
    equipmentLocation: [
      Equipment.AutomaticBoosterL,
      Equipment.AutomaticBattleChipL,
    ],
    maxCount: 3,
  },
];
const tableRareEquipmentEnchantments: EquipmentEnchantment[] = [
  // Automatic Modification Module (HP recovery)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Automatic Modification Module (HP recovery)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Automatic Modification Orb (HP Recovery)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect: "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (HP Recovery) effect.\n\nNatural HP Recovery +30%.",
    equipmentLocation: [
      Equipment.AutomaticBoosterR,
      Equipment.AutomaticBattleChipR,
    ],
    maxCount: 2,
  },
  // Automatic Modification Module (SP recovery)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Automatic Modification Module (SP recovery)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Automatic Modification Orb (SP recovery)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect: "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (SP Recovery) effect.\n\nNatural SP Recovery +30%.",
    equipmentLocation: [
      Equipment.AutomaticBoosterL,
      Equipment.AutomaticBattleChipL,
    ],
    maxCount: 2,
  },
  // Automatic Modification Module (Spell)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Automatic Modification Module (Spell)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Automatic Modification Orb (Spell)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect: "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Spell) effect.\n\nMATK +20.\nVariable Cast Time -10%.",
    equipmentLocation: [
      Equipment.AutomaticBoosterR,
      Equipment.AutomaticBoosterL,
      Equipment.AutomaticBattleChipR,
      Equipment.AutomaticBattleChipL,
    ],
    maxCount: 1,
  },
  // Automatic Modification Module (ASPD)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Automatic Modification Module (ASPD)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Automatic Modification Orb (ASPD)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect: "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (ASPD) effect.\n\nATK +20.\nIncreased ASPD (Post-attack delay -10%).",
    equipmentLocation: [
      Equipment.AutomaticBoosterR,
      Equipment.AutomaticBoosterL,
      Equipment.AutomaticBattleChipR,
      Equipment.AutomaticBattleChipL,
    ],
    maxCount: 1,
  },
  // Automatic Modification Module (Fatal)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Automatic Modification Module (Fatal)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Automatic Modification Orb (Fatal)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect: "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Fatal) effect.\n\nCRIT +10.\nCritical damage +10%.",
    equipmentLocation: [
      Equipment.AutomaticBoosterR,
      Equipment.AutomaticBoosterL,
      Equipment.AutomaticBattleChipR,
      Equipment.AutomaticBattleChipL,
    ],
    maxCount: 1,
  },
  // Automatic Modification Module (Expert Archer)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Automatic Modification Module (Expert Archer)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Automatic Modification Orb (Expert Archer)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect: "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Expert Archer) effect.\n\nHIT +10.\nLong-ranged Physical damage +10%.",
    equipmentLocation: [
      Equipment.AutomaticBoosterR,
      Equipment.AutomaticBoosterL,
      Equipment.AutomaticBattleChipR,
      Equipment.AutomaticBattleChipL,
    ],
    maxCount: 1,
  },
  // Automatic Modification Module (Health)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Automatic Modification Module (Health)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Automatic Modification Orb (Health)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Health) effect.\n\nMaxHP +5%.\nMaxHP +1,500.\n[Refine >= 7] Additional MaxHP +2%.\n[Refine >= 11] Additional MaxHP +3%.",
    equipmentLocation: [Equipment.AutomaticLegAtype, Equipment.AutomaticLegBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (SPR)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Automatic Modification Module (SPR)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Automatic Modification Orb (SPR)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (SPR) effect.\n\nMaxSP +5%.\nMaxSP +300.\n[Refine >= 7] Additional MaxSP +2%.\n[Refine >= 11] Additional MaxSP +3%.",
    equipmentLocation: [Equipment.AutomaticLegAtype, Equipment.AutomaticLegBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Heal)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Automatic Modification Module (Heal)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Automatic Modification Module (Heal)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Heal) effect.\n\nHealing Recovery +5%.\n[Refine >= 7] Additional Healing Recovery +5%.\n[Refine >= 11] Additional Healing Recovery +7%.",
    equipmentLocation: [Equipment.AutomaticLegAtype, Equipment.AutomaticLegBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (ATK)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Automatic Modification Module (ATK)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Automatic Modification Orb (ATK)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (ATK) effect.\n\nATK +5%.\nATK +75.\n[Refine >= 7] Additional Melee Physical damage +2%.\n[Refine >= 11] Additional Melee Physical damage +3%.",
    equipmentLocation: [
      Equipment.AutomaticArmorAtype,
      Equipment.AutomaticArmorBtype,
    ],
    maxCount: 2,
  },
  // Automatic Modification Module (MATK)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Automatic Modification Module (MATK)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Automatic Modification Orb (MATK)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (MATK) effect.\n\nMATK +5%.\nMATK +75.\n[Refine >= 7] Additional MATK +2%.\n[Refine >= 11] Additional MATK +3%.",
    equipmentLocation: [
      Equipment.AutomaticArmorAtype,
      Equipment.AutomaticArmorBtype,
    ],
    maxCount: 2,
  },
  // Automatic Modification Module (Sharpshooter)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Automatic Modification Module (Sharpshooter)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Automatic Modification Orb (Sharpshooter)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Sharpshooter) effect.\n\nLong-ranged Physical damage +3%.\n[Refine >= 7] Additional Long-ranged Physical damage +3%.\n[Refine >= 11] Additional Long-ranged Physical damage +3%.",
    equipmentLocation: [
      Equipment.AutomaticArmorAtype,
      Equipment.AutomaticArmorBtype,
    ],
    maxCount: 2,
  },
  // Automatic Modification Module (Speed)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Automatic Modification Module (Speed)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Automatic Modification Orb (Speed)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Speed) effect.\n\nASPD +1.\n[Refine >= 7] Additional ASPD +5%.\n[Refine >= 11] Additional ASPD +5%.",
    equipmentLocation: [
      Equipment.AutomaticEngineWingAtype,
      Equipment.AutomaticEngineWingBtype,
    ],
    maxCount: 2,
  },
  // Automatic Modification Module (Caster)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Automatic Modification Module (Caster)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Automatic Modification Orb (Caster)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Caster) effect.\n\nVariable Cast Time -5%.\n[Refine >= 7] Additional Variable Cast Time -5%.\n[Refine >= 11] Additional Variable Cast Time -5%.",
    equipmentLocation: [
      Equipment.AutomaticEngineWingAtype,
      Equipment.AutomaticEngineWingBtype,
    ],
    maxCount: 2,
  },
  // Automatic Modification Module (Critical)
  {
    level: ModuleLevel.Rare,
    modificationModule: "Automatic Modification Module (Critical)",
    modificationModuleIcon: MODIFICATION_MODULE_RARE,
    modificationOrb: "Automatic Modification Orb (Critical)",
    modificationOrbIcon: MODIFICATION_ORB_RARE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Critical) effect.\n\nCRIT +10.\n[Refine >= 7] Additional Critical damage +5%.\n[Refine >= 11] Additional Critical damage +7%.",
    equipmentLocation: [
      Equipment.AutomaticEngineWingAtype,
      Equipment.AutomaticEngineWingBtype,
    ],
    maxCount: 2,
  },
];
const tableUniqueEquipmentEnchantments: EquipmentEnchantment[] = [
  // Automatic Modification Module (Magical Force)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Automatic Modification Module (Magical Force)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Automatic Modification Orb (Magical Force)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Magical Force) effect.\n\nMATK +20.\nVariable Cast Time -10%.\nAll elemental Magic damage +2%.\n[Refine >= 7] Additional All elemental Magic damage +1%.\n[Refine >= 11] Additional All elemental Magic damage +2%.",
    equipmentLocation: [
      Equipment.AutomaticArmorAtype,
      Equipment.AutomaticArmorBtype,
    ],
    maxCount: 1,
  },
  // Automatic Modification Module (Attacker Force)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Automatic Modification Module (Attacker Force)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Automatic Modification Orb (Attacker Force)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Attacker Force) effect.\n\nATK +20.\nMelee Physical damage +10%.\nPhysical damage +3% on enemies of all sizes.\n[Refine >= 7] Additional Physical damage +1% on enemies of all sizes.\n[Refine >= 11] Additional Physical damage +1% on enemies of all sizes.",
    equipmentLocation: [
      Equipment.AutomaticArmorAtype,
      Equipment.AutomaticArmorBtype,
    ],
    maxCount: 1,
  },
  // Automatic Modification Module (Ranged Force)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Automatic Modification Module (Ranged Force)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "	Automatic Modification Orb (Ranged Force)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Ranged Force) effect.\n\nATK +20.\nLong-ranged Physical damage +10%.\nPhysical damage +3% on enemies of all sizes.\n[Refine >= 7] Additional Physical damage +1% on enemies of all sizes.\n[Refine >= 11] Additional Physical damage +1% on enemies of all sizes.",
    equipmentLocation: [
      Equipment.AutomaticArmorAtype,
      Equipment.AutomaticArmorBtype,
    ],
    maxCount: 1,
  },
  // Automatic Modification Module (Critical Force)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Automatic Modification Module (Critical Force)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "	Automatic Modification Orb (Critical Force)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Critical Force) effect.\n\nCRIT +5.\nCritical damage +10%.\nPhysical damage +3% on enemies of all sizes.\n[Refine >= 7] Additional Physical damage +1% on enemies of all sizes.\n[Refine >= 11] Additional Physical damage +1% on enemies of all sizes.",
    equipmentLocation: [
      Equipment.AutomaticArmorAtype,
      Equipment.AutomaticArmorBtype,
    ],
    maxCount: 1,
  },
  // Automatic Modification Module (Recovery Force)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Automatic Modification Module (Recovery Force)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "	Automatic Modification Orb (Recovery Force)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Recovery Force) effect.\n\nMATK +20.\nVariable Cast Time -10%.\nHealing Recovery +5%.\n[Refine >= 7] Additional Healing Recovery +5%.\n[Refine >= 11] Additional Healing Recovery +5%.",
    equipmentLocation: [
      Equipment.AutomaticArmorAtype,
      Equipment.AutomaticArmorBtype,
    ],
    maxCount: 1,
  },
  // Automatic Modification Module (Post-skill Delay)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Automatic Modification Module (Post-skill Delay)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Automatic Modification Orb (Post-skill Delay)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Post-skill Delay) effect.\n\nPost-skill delay -4%.\n[Refine >= 7] Additional Post-skill delay -6%.\n[Refine >= 11] Additional Post-skill delay -6%.",
    equipmentLocation: [
      Equipment.AutomaticArmorAtype,
      Equipment.AutomaticArmorBtype,
    ],
    maxCount: 1,
  },
  // Automatic Modification Module (Power Force)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Automatic Modification Module (Power Force)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Automatic Modification Orb (Power Force)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Power Force) effect.\n\nATK +3%.\nMATK +3%.\n[Refine >= 7] Additional ATK +3%. Additional MATK +3%.\n[Refine >= 11] Additional ATK +4%. Additional MATK +4%.",
    equipmentLocation: [
      Equipment.AutomaticArmorAtype,
      Equipment.AutomaticArmorBtype,
    ],
    maxCount: 1,
  },
  // Automatic Modification Module (Mirror Counter)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Automatic Modification Module (Mirror Counter)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Automatic Modification Orb (Mirror Counter)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Mirror Counter) effect.\n\nIncoming reflected damage -2%.\n[Refine >= 7] Additional Incoming reflected damage -2%.\n[Refine >= 11] Additional Incoming reflected damage -3%.",
    equipmentLocation: [
      Equipment.AutomaticArmorAtype,
      Equipment.AutomaticArmorBtype,
    ],
    maxCount: 1,
  },
  // Automatic Modification Module (Above All)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Automatic Modification Module (Above All)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Automatic Modification Orb (Above All)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Above All) effect.\n\nPhysical/Magic damage -7% from Normal and Boss enemies.\n[Refine >= 7] Additional Physical/Magic damage -7% from enemies of all sizes.\n[Refine >= 11] Additional Physical/Magic damage -7% from monsters of all types (Players excluded).",
    equipmentLocation: [
      Equipment.AutomaticEngineWingAtype,
      Equipment.AutomaticEngineWingBtype,
    ],
    maxCount: 1,
  },
  // Automatic Modification Module (Powerful)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Automatic Modification Module (Powerful)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Automatic Modification Orb (Powerful)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Powerful) effect.\n\nMelee/Long-ranged Physical damage +5%.\nAll elemental Magic damage +5%.\n[Refine >= 7]\nAdditional Melee/Long-ranged Physical damage +2%.\nAdditional All elemental Magic damage +2%.\n[Refine >= 11]\nAdditional Melee/Long-ranged Physical damage +3%.\nAdditional All elemental Magic damage +3%.",
    equipmentLocation: [
      Equipment.AutomaticEngineWingAtype,
      Equipment.AutomaticEngineWingBtype,
    ],
    maxCount: 1,
  },
  // Automatic Modification Module (Reflection Reject)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Automatic Modification Module (Reflection Reject)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Automatic Modification Orb (Reflection Reject)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Reflection Reject) effect.\n\nIncoming reflected damage -3%.\n[Refine >= 7]\nAdditional Incoming reflected damage -2%.\n[Refine >= 11]\nAdditional Incoming reflected damage -4%.",
    equipmentLocation: [
      Equipment.AutomaticEngineWingAtype,
      Equipment.AutomaticEngineWingBtype,
    ],
    maxCount: 1,
  },
  // Automatic Modification Module (Fixed Cast Time)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Automatic Modification Module (Fixed Cast Time)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Automatic Modification Orb (Fixed Cast Time)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Fixed Cast Time) effect.\n\nFixed Cast Time -0.1 sec.\n[Refine >= 7]\nAdditional Fixed Cast Time -0.2 sec.\n[Refine >= 11]\nAdditional Fixed Cast Time -0.5 sec.",
    equipmentLocation: [Equipment.AutomaticLegAtype, Equipment.AutomaticLegBtype],
    maxCount: 1,
  },
  // Automatic Modification Module (Robust)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Automatic Modification Module (Robust)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Automatic Modification Orb (Robust)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Robust) effect.\n\nMaxHP +2000.\nMaxSP +300.\nMaxHP +5%.\nMaxSP +5%.\n[Refine >= 7]\nAdditional MaxHP +2%.\nAdditional MaxSP +2%.\n[Refine >= 11]\nAdditional MaxHP +3%.\nAdditional MaxSP +3%.",
    equipmentLocation: [Equipment.AutomaticLegAtype, Equipment.AutomaticLegBtype],
    maxCount: 1,
  },
  // Automatic Modification Module (Drain Life)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Automatic Modification Module (Drain Life)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Automatic Modification Orb (Drain Life)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Drain Life) effect.\n\nWhen physically attacking, create a 2% chance of restoring HP by 3% of inflicted damage.",
    equipmentLocation: [
      Equipment.AutomaticBoosterR,
      Equipment.AutomaticBattleChipR,
    ],
    maxCount: 1,
  },
  // MAutomatic Modification Module (Magic Healing)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Automatic Modification Module (Magic Healing)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Automatic Modification Orb (Magic Healing)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Magic Healing) effect.\n\nWhen dealing magic damage, create a 2% chance of restoring 500 HP every 0.4 seconds 23 times.",
    equipmentLocation: [
      Equipment.AutomaticBoosterR,
      Equipment.AutomaticBattleChipR,
    ],
    maxCount: 1,
  },
  // Automatic Modification Module (Drain Soul)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Automatic Modification Module (Drain Soul)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Automatic Modification Orb (Drain Soul)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Drain Soul) effect.\n\nWhen physically attacking, create a 1% chance of restoring SP by 2% of inflicted damage.",
    equipmentLocation: [
      Equipment.AutomaticBoosterL,
      Equipment.AutomaticBattleChipL,
    ],
    maxCount: 1,
  },
  // Automatic Modification Module (Magic Soul)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Automatic Modification Module (Magic Soul)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Automatic Modification Orb (Magic Soul)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Magic Soul) effect.\n\nWhen dealing magic damage, create a 1% chance of restoring 120 SP every 0.4 seconds 23 times.",
    equipmentLocation: [
      Equipment.AutomaticBoosterL,
      Equipment.AutomaticBattleChipL,
    ],
    maxCount: 1,
  },
  // Automatic Modification Module (All-Force)
  {
    level: ModuleLevel.Unique,
    modificationModule: "Automatic Modification Module (All-Force)",
    modificationModuleIcon: MODIFICATION_MODULE_UNIQUE,
    modificationOrb: "Automatic Modification Orb (All-Force)",
    modificationOrbIcon: MODIFICATION_ORB_UNIQUE,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (All-Force) effect.\n\nMelee Physical damage +5%.\nLong-ranged Physical damage +5%.\nAll elemental Magic damage +5%.",
    equipmentLocation: [
      Equipment.AutomaticBoosterR,
      Equipment.AutomaticBoosterL,
      Equipment.AutomaticBattleChipR,
      Equipment.AutomaticBattleChipL,
    ],
    maxCount: 1,
  },
];
const tableLegendaryEquipmentEnchantments: EquipmentEnchantment[] = [
  // Automatic Modification Module (Unlimited Vital)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Unlimited Vital)",
    modificationModuleIcon: MODIFICATION_MODULE_LEGENDARY,
    modificationOrb: "Automatic Modification Orb (Unlimited Vital)",
    modificationOrbIcon: MODIFICATION_ORB_LEGENDARY,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Unlimited Vitality) effect.\n\nIncoming Physical/Magic damage creates a 5% chance of casting Enhanced Undying Stamina for 10 seconds.\n\nEnhanced Undying Stamina:\nVIT +50 for 10 sec.\nHP +800 every 0.4 sec. 23 times.',
    equipmentLocation: [Equipment.AutomaticLegAtype, Equipment.AutomaticLegBtype],
    maxCount: 1,
  },
  // Automatic Modification Module (Spell Buster)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Spell Buster)",
    modificationModuleIcon: MODIFICATION_MODULE_LEGENDARY,
    modificationOrb: "Automatic Modification Orb (Spell Buster)",
    modificationOrbIcon: MODIFICATION_ORB_LEGENDARY,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Spell Buster) effect.\n\nWhen dealing magic damage, create a 3% chance of casting Enhanced Mana Storm for 10 seconds.\n\nEnhanced Mana Storm:\nINT +50.\nMATK +25% for 10 sec.',
    equipmentLocation: [Equipment.AutomaticLegAtype, Equipment.AutomaticLegBtype],
    maxCount: 1,
  },
  // Automatic Modification Module (Fierce Shooter)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Fierce Shooter)",
    modificationModuleIcon: MODIFICATION_MODULE_LEGENDARY,
    modificationOrb: "Automatic Modification Orb (Fierce Shooter)",
    modificationOrbIcon: MODIFICATION_ORB_LEGENDARY,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Fierce Shooter) effect.\n\nWhen physically attacking, create a 3% chance of casting Enhanced Shooter Under Fire for 10 seconds.\n\nEnhanced Shooter Under Fire:\nDEX +50.\nLong-ranged Physical damage +15% for 10 sec.',
    equipmentLocation: [Equipment.AutomaticLegAtype, Equipment.AutomaticLegBtype],
    maxCount: 1,
  },
  // Automatic Modification Module (Overpower)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Overpower)",
    modificationModuleIcon: MODIFICATION_MODULE_LEGENDARY,
    modificationOrb: "Automatic Modification Orb (Overpower)",
    modificationOrbIcon: MODIFICATION_ORB_LEGENDARY,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Overpower) effect.\n\nWhen physically attacking, create a 3% chance of casting Enhanced Boiling Fighting Spirit for 10 seconds.\n\nEnhanced Boiling Fighting Spirit:\nSTR +50.\nATK +15%.\nMelee Physical damage +10% for 10 sec.',
    equipmentLocation: [Equipment.AutomaticLegAtype, Equipment.AutomaticLegBtype],
    maxCount: 1,
  },
  // Automatic Modification Module (Fatal Flash)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Fatal Flash)",
    modificationModuleIcon: MODIFICATION_MODULE_LEGENDARY,
    modificationOrb: "Automatic Modification Orb (Fatal Flash)",
    modificationOrbIcon: MODIFICATION_ORB_LEGENDARY,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Fatal Flash) effect.\n\nWhen physically attacking, create a 3% chance of casting Enhanced Lethal Speed Maniac for 10 seconds.\n\nEnhanced Lethal Speed Maniac:\nAGI +50.\nCritical Damage +15% for 10 sec.',
    equipmentLocation: [Equipment.AutomaticLegAtype, Equipment.AutomaticLegBtype],
    maxCount: 1,
  },
  // Automatic Modification Module (Lucky Strike)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Lucky Strike)",
    modificationModuleIcon: MODIFICATION_MODULE_LEGENDARY,
    modificationOrb: "Automatic Modification Orb (Lucky Strike)",
    modificationOrbIcon: MODIFICATION_ORB_LEGENDARY,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Lucky Strike) effect.\n\nWhen dealing magic damage, create a 3% chance of casting Enhanced Windfall for 10 seconds.\n\nEnhanced Windfall:\nLUK +50.\nAll elemental Magic damage +15% for 10 sec.',
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
  return text.replace(/<br>/g, "<br>").replaceAll("\n", "<br>");
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
              <th class="c-table-th">Automatic Automatic Modification Module</th>
              <th class="c-table-th">Automatic Automatic Modification Orb</th>
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
