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
const MODIFICATION_ORB_EPIC_01 = "/images/ic-172/ic-epic-orb-01.png";
const MODIFICATION_ORB_EPIC_02 = "/images/ic-172/ic-epic-orb-02.png";
const MODIFICATION_ORB_EPIC_03 = "/images/ic-172/ic-epic-orb-03.png";
const MODIFICATION_ORB_EPIC_04 = "/images/ic-172/ic-epic-orb-04.png";
const MODIFICATION_ORB_EPIC_05 = "/images/ic-172/ic-epic-orb-05.png";
const MODIFICATION_ORB_EPIC_06 = "/images/ic-172/ic-epic-orb-06.png";
const MODIFICATION_ORB_EPIC_07 = "/images/ic-172/ic-epic-orb-07.png";
const MODIFICATION_ORB_EPIC_08 = "/images/ic-172/ic-epic-orb-08.png";
const MODIFICATION_ORB_EPIC_09 = "/images/ic-172/ic-epic-orb-09.png";

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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (DEF) effect.\n\nDEF +150.\n\n[Refine >= 7]\nAdditional DEF +75.\n\n[Refine >= 11]\nAdditional DEF +75.",
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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (MDEF) effect.\n\nMDEF +15.\n\n[Refine >= 7]\nAdditional MDEF +7.\n\n[Refine >= 11]\nAdditional MDEF +7.",
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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Health) effect.\n\nMaxHP +5%.\nMaxHP +1,500.\n\n[Refine >= 7]\nAdditional MaxHP +2%.\n\n[Refine >= 11]\nAdditional MaxHP +3%.",
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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (SPR) effect.\n\nMaxSP +5%.\nMaxSP +300.\n\n[Refine >= 7]\nAdditional MaxSP +2%.\n\n[Refine >= 11]\nAdditional MaxSP +3%.",
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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Heal) effect.\n\nHealing Recovery +5%.\n\n[Refine >= 7]\nAdditional Healing Recovery +5%.\n\n[Refine >= 11]\nAdditional Healing Recovery +7%.",
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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (ATK) effect.\n\nATK +5%.\nATK +75.\n\n[Refine >= 7]\nAdditional Melee Physical damage +2%.\n\n[Refine >= 11]\nAdditional Melee Physical damage +3%.",
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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (MATK) effect.\n\nMATK +5%.\nMATK +75.\n\n[Refine >= 7]\nAdditional MATK +2%.\n\n[Refine >= 11]\nAdditional MATK +3%.",
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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Sharpshooter) effect.\n\nLong-ranged Physical damage +3%.\n\n[Refine >= 7]\nAdditional Long-ranged Physical damage +3%.\n\n[Refine >= 11]\nAdditional Long-ranged Physical damage +3%.",
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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Speed) effect.\n\nASPD +1.\n\n[Refine >= 7]\nAdditional ASPD +5%.\n\n[Refine >= 11]\nAdditional ASPD +5%.",
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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Caster) effect.\n\nVariable Cast Time -5%.\n\n[Refine >= 7]\nAdditional Variable Cast Time -5%.\n\n[Refine >= 11]\nAdditional Variable Cast Time -5%.",
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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Critical) effect.\n\nCRIT +10.\n\n[Refine >= 7]\nAdditional Critical damage +5%.\n\n[Refine >= 11]\nAdditional Critical damage +7%.",
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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Magical Force) effect.\n\nMATK +20.\nVariable Cast Time -10%.\nAll elemental Magic damage +2%.\n\n[Refine >= 7]\nAdditional All elemental Magic damage +1%.\n\n[Refine >= 11]\nAdditional All elemental Magic damage +2%.",
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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Attacker Force) effect.\n\nATK +20.\nMelee Physical damage +10%.\nPhysical damage +3% on enemies of all sizes.\n\n[Refine >= 7]\nAdditional Physical damage +1% on enemies of all sizes.\n\n[Refine >= 11]\nAdditional Physical damage +1% on enemies of all sizes.",
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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Ranged Force) effect.\n\nATK +20.\nLong-ranged Physical damage +10%.\nPhysical damage +3% on enemies of all sizes.\n\n[Refine >= 7]\nAdditional Physical damage +1% on enemies of all sizes.\n\n[Refine >= 11]\nAdditional Physical damage +1% on enemies of all sizes.",
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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Critical Force) effect.\n\nCRIT +5.\nCritical damage +10%.\nPhysical damage +3% on enemies of all sizes.\n\n[Refine >= 7]\nAdditional Physical damage +1% on enemies of all sizes.\n\n[Refine >= 11]\nAdditional Physical damage +1% on enemies of all sizes.",
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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Recovery Force) effect.\n\nMATK +20.\nVariable Cast Time -10%.\nHealing Recovery +5%.\n\n[Refine >= 7]\nAdditional Healing Recovery +5%.\n\n[Refine >= 11]\nAdditional Healing Recovery +5%.",
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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Post-skill Delay) effect.\n\nPost-skill delay -4%.\n\n[Refine >= 7]\nAdditional Post-skill delay -6%.\n\n[Refine >= 11]\nAdditional Post-skill delay -6%.",
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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Power Force) effect.\n\nATK +3%.\nMATK +3%.\n\n[Refine >= 7]\nAdditional ATK +3%. Additional MATK +3%.\n\n[Refine >= 11]\nAdditional ATK +4%. Additional MATK +4%.",
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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Mirror Counter) effect.\n\nIncoming reflected damage -2%.\n\n[Refine >= 7]\nAdditional Incoming reflected damage -2%.\n\n[Refine >= 11]\nAdditional Incoming reflected damage -3%.",
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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Above All) effect.\n\nPhysical/Magic damage -7% from Normal and Boss enemies.\n\n[Refine >= 7]\nAdditional Physical/Magic damage -7% from enemies of all sizes.\n\n[Refine >= 11]\nAdditional Physical/Magic damage -7% from monsters of all types (Players excluded).",
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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Powerful) effect.\n\nMelee/Long-ranged Physical damage +5%.\nAll elemental Magic damage +5%.\n\n[Refine >= 7]\nAdditional Melee/Long-ranged Physical damage +2%.\nAdditional All elemental Magic damage +2%.\n\n[Refine >= 11]\nAdditional Melee/Long-ranged Physical damage +3%.\nAdditional All elemental Magic damage +3%.",
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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Reflection Reject) effect.\n\nIncoming reflected damage -3%.\n\n[Refine >= 7]\nAdditional Incoming reflected damage -2%.\n\n[Refine >= 11]\nAdditional Incoming reflected damage -4%.",
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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Fixed Cast Time) effect.\n\nFixed Cast Time -0.1 sec.\n\n[Refine >= 7]\nAdditional Fixed Cast Time -0.2 sec.\n\n[Refine >= 11]\nAdditional Fixed Cast Time -0.5 sec.",
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
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Robust) effect.\n\nMaxHP +2000.\nMaxSP +300.\nMaxHP +5%.\nMaxSP +5%.\n\n[Refine >= 7]\nAdditional MaxHP +2%.\nAdditional MaxSP +2%.\n\n[Refine >= 11]\nAdditional MaxHP +3%.\nAdditional MaxSP +3%.",
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
    modificationOrbIcon: MODIFICATION_ORB_EPIC_01,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Draconic Breath) effect.\n\nDragon Breath and Dragon Water Breath damage +15%.\n\n[Refine >= 7]\nAdditional Dragon Breath and Dragon Water Breath damage +3%.\n\n[Refine >= 11]\nAdditional Dragon Breath and Dragon Water Breath damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Wave Break)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Wave Break)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Wave Break)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_01,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Wave Break) effect.\n\nSonic Wave and Ignition Break damage +15%.\n\n[Refine >= 7]\nAdditional Sonic Wave and Ignition Break damage +3%.\n\n[Refine >= 11]\nAdditional Sonic Wave damage +7%, Ignition Break cooldown -0.25 sec.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Hundred Spiral)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Hundred Spiral)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Hundred Spiral)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_01,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Hundred Spiral) effect.\n\nClashing Spiral and Hundred Spears damage +15%.\n\n[Refine >= 7]\nAdditional Clashing Spiral and Hundred Spears damage +3%.\n\n[Refine >= 11]\nAdditional Clashing Spiral damage +7% (Additional), Hundred Spears cooldown -0.25 sec.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Drive Press)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Drive Press)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Drive Press)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_01,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Drive Press) effect.\n\nEarth Drive and Shield Press damage +15%.\n\n[Refine >= 7]\nAdditional Earth Drive and Shield Press damage +3%.\n\n[Refine >= 11]\nAdditional Earth Drive and Shield Press damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Vanishing Cannon)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Vanishing Cannon)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Vanishing Cannon)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_01,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Vanishing Cannon) effect.\n\nVanishing Point and Cannon Spear damage +15%.\n\n[Refine >= 7]\nAdditional Vanishing Point and Cannon Spear damage +3%.\n\n[Refine >= 11]\nAdditional Vanishing Point and Cannon Spear damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Genesis Gloria)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Genesis Gloria)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Genesis Gloria)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_01,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Genesis Gloria) effect.\n\nGloria Domini and Genesis Ray damage +15%.\n\n[Refine >= 7]\nAdditional Gloria Domini and Genesis Ray damage +3%.\n\n[Refine >= 11]\nAdditional Gloria Domini and Genesis Ray damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Boost Cannon)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Boost Cannon)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Boost Cannon)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_02,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Boost Cannon) effect.\n\nKnuckle Boost and Arm Cannon damage +15%.\n\n[Refine >= 7]\nAdditional Knuckle Boost and Arm Cannon damage +3%.\n\n[Refine >= 11]\nAdditional Knuckle Boost and Arm Cannon damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Ice Flame)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Ice Flame)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Ice Flame)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_02,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Ice Flame) effect.\n\nIce Launcher and Flame Launcher damage +15%.\n\n[Refine >= 7]\nAdditional Ice Launcher and Flame Launcher damage +3%.\n\n[Refine >= 11]\nAdditional Ice Launcher and Flame Launcher damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Tornado Swing)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Tornado Swing)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Tornado Swing)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_02,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Tornado Swing) effect.\n\nAxe Tornado and Power Swing damage +15%.\n\n[Refine >= 7]\nAdditional Axe Tornado and Power Swing damage +3%.\n\n[Refine >= 11]\nAdditional Axe Tornado and Power Swing damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Cannon Tornado)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Cannon Tornado)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Cannon Tornado)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_02,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Cannon Tornado) effect.\n\nCart Tornado and Cart Cannon damage +15%.\n\n[Refine >= 7]\nAdditional Cart Tornado and Cart Cannon damage +3%.\n\n[Refine >= 11]\nAdditional Cart Tornado and Cart Cannon damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Crazy Mandragora)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Crazy Mandragora)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Crazy Mandragora)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_02,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Crazy Mandragora) effect.\n\nCrazy Vines damage +15%, Mandragora Howling cooldown -0.3 sec.\n\n[Refine >= 7]\nAdditional Crazy Vines damage +3%, Mandragora Howling cooldown -0.3 sec.\n\n[Refine >= 11]\nAdditional Crazy Vines damage +7%, Mandragora Howling cooldown -0.4 sec.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Acid Explosion)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Acid Explosion)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Acid Explosion)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_02,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Acid Explosion) effect.\n\nAcid Bomb and Spore Explosion damage +15%.\n\n[Refine >= 7]\nAdditional Acid Bomb and Spore Explosion damage +3%.\n\n[Refine >= 11]\nAdditional Acid Bomb and Spore Explosion damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Sonic Impact)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Sonic Impact)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Sonic Impact)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_03,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Sonic Impact) effect.\n\nSonic Blow and Cross Impact damage +15%.\n\n[Refine >= 7]\nAdditional Sonic Blow and Cross Impact damage +3%.\n\n[Refine >= 11]\nAdditional Sonic Blow and Cross Impact damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Cutter Slasher)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Cutter Slasher)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Cutter Slasher)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_03,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Cutter Slasher) effect.\n\nCross Ripper Slasher and Rolling Cutter damage +15%.\n\n[Refine >= 7]\nAdditional Cross Ripper Slasher and Rolling Cutter damage +3%.\n\n[Refine >= 11]\nAdditional Cross Ripper Slasher and Rolling Cutter damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Berserk Slash)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Berserk Slash)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Berserk Slash)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_03,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Berserk Slash) effect.\n\nSoul Destroyer and Counter Slash damage +15%.\n\n[Refine >= 7]\nAdditional Soul Destroyer and Counter Slash damage +3%.\n\n[Refine >= 11]\nAdditional Soul Destroyer and Counter Slash damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Fatal Raid)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Fatal Raid)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Fatal Raid)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_03,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Fatal Raid) effect.\n\nFatal Menace and Sightless Mind damage +15%.\n\n[Refine >= 7]\nAdditional Fatal Menace and Sightless Mind damage +3%.\n\n[Refine >= 11]\nAdditional Fatal Menace and Sightless Mind damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Shadow Spell)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Shadow Spell)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Shadow Spell)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_03,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Shadow Spell) effect.\n\nAll elemental Magic damage +15%.\n\n[Refine >= 7]\nAdditional All elemental Magic damage +3%.\n\n[Refine >= 11]\nAdditional All elemental Magic damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Angle Shot)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Angle Shot)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Angle Shot)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_03,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Angle Shot) effect.\n\nTriangle Shot damage +15%.\nLong-ranged Physical damage +10%.\n\n[Refine >= 7]\nAdditional Triangle Shot damage +3%.\n\n[Refine >= 11]\nAdditional Triangle Shot damage +7%.\nAdditional Long-ranged Physical damage +5%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Crimson Strain)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Crimson Strain)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Crimson Strain)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_04,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Crimson Strain) effect.\n\nCrimson Rock and Earth Strain damage +15%.\n\n[Refine >= 7]\nAdditional Crimson Rock and Earth Strain damage +3%.\n\n[Refine >= 11]\nAdditional Crimson Rock and Earth Strain damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Jack Lightning)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Jack Lightning)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Jack Lightning)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_04,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Jack Lightning) effect.\n\nJack Frost and Chain Lightning damage +15%.\n\n[Refine >= 7]\nAdditional Jack Frost and Chain Lightning damage +3%.\n\n[Refine >= 11]\nAdditional Jack Frost and Chain Lightning damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Comet Vortex)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Comet Vortex)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Comet Vortex)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_04,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Comet Vortex) effect.\n\nComet and Tetra Vortex damage +15%.\n\n[Refine >= 7]\nAdditional Comet and Tetra Vortex damage +3%.\n\n[Refine >= 11]\nAdditional Comet and Tetra Vortex damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Double Bolt)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Double Bolt)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Double Bolt)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_04,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Double Bolt) effect.\n\nFire/Cold/Lightning Bolt damage +15%.\n\n[Refine >= 7]\nAdditional Fire/Cold/Lightning Bolt damage +3%.\n\n[Refine >= 11]\nAdditional Fire/Cold/Lightning Bolt damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Warmer Wave)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Warmer Wave)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Warmer Wave)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_04,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Warmer Wave) effect.\n\nPsychic Wave damage +15%.\nWarmer cooldown -1 sec.\n\n[Refine >= 7]\nAdditional Psychic Wave damage +3%.\nAdditional Warmer cooldown -2 sec.\n\n[Refine >= 11]\nAdditional Psychic Wave damage +7%.\nAdditional Warmer cooldown -4 sec.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Diamond Grave)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Diamond Grave)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Diamond Grave)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_04,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Diamond Grave) effect.\n\nDiamond Dust and Earth Grave damage +15%.\n\n[Refine >= 7]\nAdditional Diamond Dust and Earth Grave damage +3%.\n\n[Refine >= 11]\nAdditional Diamond Dust and Earth Grave damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Magnusmus)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Magnusmus)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Magnusmus)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_05,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Magnusmus) effect.\n\nMagnus Exorcismus and Adoramus damage +15%.\n\n[Refine >= 7]\nAdditional Magnus Exorcismus and Adoramus damage +3%.\n\n[Refine >= 11]\nAdditional Magnus Exorcismus and Adoramus damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Holy Judex)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Holy Judex)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Holy Judex)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_05,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Holy Judex) effect.\n\nHoly Light and Judex damage +15%.\n\n[Refine >= 7]\nAdditional Holy Light and Judex damage +3%.\n\n[Refine >= 11]\nAdditional Holy Light and Judex damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Duplelica)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Duplelica)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Duplelica)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_05,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Duplelica) effect.\n\nDuple Light damage +15%.\nBasilica cooldown -2 sec.\n\n[Refine >= 7]\nAdditional Duple Light damage +3%.\nAdditional Basilica cooldown -3 sec.\n\n[Refine >= 11]\nAdditional Duple Light damage +7%.\nAdditional Basilica cooldown -5 sec.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Fallen Tiger)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Fallen Tiger)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Fallen Tiger)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_05,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Fallen Tiger) effect.\n\nTiger Cannon and Fallen Empire damage +15%.\n\n[Refine >= 7]\nAdditional Tiger Cannon and Fallen Empire damage +3%.\n\n[Refine >= 11]\nAdditional Tiger Cannon and Fallen Empire damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Rampage Arrow)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Rampage Arrow)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Rampage Arrow)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_05,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Rampage Arrow) effect.\n\nRampage Blast and Knuckle Arrow damage +15%.\n\n[Refine >= 7]\nAdditional Rampage Blast and Knuckle Arrow damage +3%.\n\n[Refine >= 11]\nAdditional Rampage Blast and Knuckle Arrow damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Raging Crush)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Raging Crush)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Raging Crush)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_05,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Raging Crush) effect.\n\nRaging Thrust and Chain Crush Combo damage +15%.\n\n[Refine >= 7]\nAdditional Raging Thrust and Chain Crush Combo damage +3%.\n\n[Refine >= 11]\nAdditional Raging Thrust and Chain Crush Combo damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Cluster)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Cluster)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Cluster)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_06,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Cluster) effect.\n\nBomb Cluster damage +15%.\n\n[Refine >= 7]\nAdditional Bomb Cluster damage +3%.\n\n[Refine >= 11]\nAdditional Bomb Cluster damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Breeze Shooting)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Breeze Shooting)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Breeze Shooting)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_06,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Breeze Shooting) effect.\n\nFocused Arrow Strike damage +15%.\nCritical damage +10%.\n[Refine >= 7]\nAdditional Focused Arrow Strike damage +3%.\n\n[Refine >= 11]\nAdditional Focused Arrow Strike damage +7%.\nAdditional Critical damage +5%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Aimed Storm)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Aimed Storm)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Aimed Storm)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_06,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Aimed Storm) effect.\n\nAimed Bolt and Arrow Storm damage +15%.\n\n[Refine >= 7]\nAdditional Aimed Bolt and Arrow Storm damage +3%.\n\n[Refine >= 11]\nAdditional Aimed Bolt and Arrow Storm damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Metallic Echo)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Metallic Echo)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Metallic Echo)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_06,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Metallic Echo) effect.\n\nMetallic Sound and Great Echo damage +15%.\n\n[Refine >= 7]\nAdditional Metallic Sound and Great Echo damage +3%.\n\n[Refine >= 11]\nAdditional Metallic Sound and Great Echo damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Reverberation)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Reverberation)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Reverberation)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_06,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Reverberation) effect.\n\nReverberation damage +15%.\n\n[Refine >= 7]\nAdditional Reverberation damage +3%.\n\n[Refine >= 11]\nAdditional Reverberation damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Vulcan Severe)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Vulcan Severe)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Vulcan Severe)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_06,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Vulcan Severe) effect.\n\nArrow Vulcan and Severe Rainstorm damage +15%.\n\n[Refine >= 7]\nAdditional Arrow Vulcan and Severe Rainstorm damage +3%.\n\n[Refine >= 11]\nAdditional Arrow Vulcan and Severe Rainstorm damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Blaze Explosion)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Blaze Explosion)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Blaze Explosion)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_07,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Blaze Explosion) effect.\n\nBlaze Kick and Solar Explosion damage +15%.\n\n[Refine >= 7]\nAdditional Blaze Kick and Solar Explosion damage +3%.\n\n[Refine >= 11]\nAdditional Blaze Kick and Solar Explosion damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Moon Kick)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Moon Kick)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Moon Kick)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_07,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Moon Kick) effect.\n\nNew Moon Kick and Full Moon Kick damage +15%.\n\n[Refine >= 7]\nAdditional New Moon Kick and Full Moon Kick damage +3%.\n\n[Refine >= 11]\nAdditional New Moon Kick and Full Moon Kick damage +7%.\nCritical damage +5%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Falling Flash)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Falling Flash)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Falling Flash)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_07,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Falling Flash) effect.\n\nFlash Kick and Falling Stars damage +15%.\n\n[Refine >= 7]\nAdditional Flash Kick and Falling Stars damage +3%.\n\n[Refine >= 11]\nAdditional Flash Kick and Falling Stars damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Eswoo)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Eswoo)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Eswoo)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_07,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Eswoo) effect.\n\nEsma and Eswoo damage +15%.\n\n[Refine >= 7]\nAdditional Esma and Eswoo damage +3%.\n\n[Refine >= 11]\nAdditional Esma and Eswoo damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Espa)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Espa)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Espa)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_07,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Espa) effect.\n\nEspa damage +15%.\n\n[Refine >= 7]\nAdditional Espa damage +3%.\n\n[Refine >= 11]\nAdditional Espa damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Curse Explosion)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Curse Explosion)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Curse Explosion)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_07,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Curse Explosion) effect.\n\nCurse Explosion damage +15%.\n\n[Refine >= 7]\nAdditional Curse Explosion damage +3%.\n\n[Refine >= 11]\nAdditional Curse Explosion damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Death Hammer Dance)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Death Hammer Dance)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Module (Death Hammer Dance)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_08,
    effect:
      "A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Death Hammer Dance) effect.\n\nDesperado, Fire Dance, God's Hammer damage +15%.\n\n[Refine >= 7]\nAdditional Desperado, Fire Dance, God's Hammer damage +3%.\n\n[Refine >= 11]\nAdditional Desperado, Fire Dance, God's Hammer damage +7%.",
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Fire Howling Tail)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Fire Howling Tail)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Fire Howling Tail)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_08,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Fire Howling Tail) effect.\n\nFire Rain, Howling Mine, Dragon Tail damage +15%.\n\n[Refine >= 7]\nAdditional Fire Rain, Howling Mine, Dragon Tail damage +3%.\n\n[Refine >= 11]\nAdditional Fire Rain, Howling Mine, Dragon Tail damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Storm Buster Trip)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Storm Buster Trip)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Storm Buster Trip)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_08,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Storm Buster Trip) effect.\n\nShattering Storm, Vanishing Buster, Round Trip damage +15%.\n\n[Refine >= 7]\nAdditional Shattering Storm, Vanishing Buster, Round Trip damage +3%.\n\n[Refine >= 11]\nAdditional Shattering Storm, Vanishing Buster, Round Trip damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Petal Spear Blade)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Petal Spear Blade)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Petal Spear Blade)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_08,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Petal Spear Blade) effect.\n\nFlaming Petals, Freezing Spear, Wind Blade damage +15%.\n\n[Refine >= 7]\nAdditional Flaming Petals, Freezing Spear, Wind Blade damage +3%.\n\n[Refine >= 11]\nAdditional Flaming Petals, Freezing Spear, Wind Blade damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Cross Slash)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Cross Slash)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Cross Slash)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_08,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Cross Slash) effect.\n\nCross Slash damage +15%.\n\n[Refine >= 7]\nAdditional Cross Slash damage +3%.\n\n[Refine >= 11]\nAdditional Cross Slash damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Dragon Draft Wind)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Dragon Draft Wind)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Dragon Draft Wind)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_08,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Dragon Draft Wind) effect.\n\nExploding Dragon, Snow Flake Draft, First Wind damage +15%.\n\n[Refine >= 7]\nAdditional Exploding Dragon, Snow Flake Draft, First Wind damage +3%.\n\n[Refine >= 11]\nAdditional Exploding Dragon, Snow Flake Draft, First Wind damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Power of Sea)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Power of Sea)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Power of Sea)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_09,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Power of Sea) effect.\n\nTuna Party, Tasty Shrimp Party cooldown -0.5 sec.\n\n[Refine >= 7]\nAdditional Tuna Party, Tasty Shrimp Party cooldown -1 sec.\n\n[Refine >= 11]\nAdditional Tuna Party, Tasty Shrimp Party cooldown -1.5 sec.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Power of Land)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Power of Land)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Power of Land)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_09,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Power of Land) effect.\n\nSilvervine Stem Spear and Catnip Meteor damage +15%.\n\n[Refine >= 7]\nAdditional Silvervine Stem Spear and Catnip Meteor damage +3%.\n\n[Refine >= 11]\nAdditional Silvervine Stem Spear and Catnip Meteor damage +7%.',
    equipmentLocation: [Equipment.AutomaticArmorAtype, Equipment.AutomaticArmorBtype],
    maxCount: 2,
  },
  // Automatic Modification Module (Power of Life)
  {
    level: ModuleLevel.Legendary,
    modificationModule: "Automatic Modification Module (Power of Life)",
    modificationModuleIcon: MODIFICATION_MODULE_EPIC,
    modificationOrb: "Automatic Modification Orb (Power of Life)",
    modificationOrbIcon: MODIFICATION_ORB_EPIC_09,
    effect:
      'A modification module that can be used on Automatic armor. Adds the Automatic Modification Orb (Power of Life) effect.\n\nPicky Peck and Lunatic Carrot Beat damage +15%.\n\n[Refine >= 7]\nAdditional Picky Peck and Lunatic Carrot Beat damage +3%.\n\n[Refine >= 11]\nAdditional Picky Peck and Lunatic Carrot Beat damage +7%.',
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
