<script setup lang="ts">
import { consola } from 'consola'
import { getAnalytics, logEvent } from 'firebase/analytics'


import { RN_REFINE_SIMULATOR, getHead } from '@/router.options'

// #region data
const soundRefineSuccess = '/sounds/ro-blacksmith-refine-success.mp3'
const soundRefineFail = '/sounds/ro-blacksmith-refine-failed.mp3'

enum Ore {
  Normal = 'Normal',
  Cash = 'Cash',
}

enum equipmentType {
  Weapon = 'Weapon',
  Armor = 'Armor',
}

const refineRates = [
  // #region armor lv1 normal notEvent
  { level: 1, refine: 1, rate: 1, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 2, rate: 1, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 3, rate: 1, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 4, rate: 1, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 5, rate: 0.6, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 6, rate: 0.4, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor},
  { level: 1, refine: 7, rate: 0.4, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 8, rate: 0.2, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 9, rate: 0.2, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 10, rate: 0.09, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 11, rate: 0.08, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 12, rate: 0.08, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 13, rate: 0.08, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 14, rate: 0.08, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 15, rate: 0.07, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 16, rate: 0.07, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 17, rate: 0.07, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 18, rate: 0.07, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 19, rate: 0.05, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 20, rate: 0.05, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  // #endregion armor lv1 normal notEvent

  // #region armor lv2 normal notEvent
  { level: 2, refine: 1, rate: 1, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 2, rate: 1, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 3, rate: 1, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 4, rate: 0.8, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 5, rate: 0.8, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 6, rate: 0.6, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 7, rate: 0.6, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 8, rate: 0.4, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 9, rate: 0.4, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 10, rate: 0.18, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 11, rate: 0.16, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 12, rate: 0.16, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 13, rate: 0.16, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 14, rate: 0.16, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 15, rate: 0.14, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 16, rate: 0.14, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 17, rate: 0.14, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 18, rate: 0.14, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 19, rate: 0.10, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 20, rate: 0.10, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  // #endregion armor lv2 normal notEvent

  // #region armor lv1 normal event
  { level: 1, refine: 1, rate: 1, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 2, rate: 1, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 3, rate: 1, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 4, rate: 1, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 5, rate: 0.6, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 6, rate: 0.4, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor},
  { level: 1, refine: 7, rate: 0.4, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 8, rate: 0.2, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 9, rate: 0.2, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 10, rate: 0.09, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 11, rate: 0.2, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 12, rate: 0.2, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 13, rate: 0.16, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 14, rate: 0.16, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 15, rate: 0.15, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 16, rate: 0.15, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 17, rate: 0.14, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 18, rate: 0.14, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 19, rate: 0.1, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 1, refine: 20, rate: 0.1, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  // #endregion armor lv1 normal event

  // #region armor lv2 normal event
  { level: 2, refine: 1, rate: 1, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 2, rate: 1, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 3, rate: 1, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 4, rate: 0.8, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 5, rate: 0.8, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 6, rate: 0.6, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 7, rate: 0.6, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 8, rate: 0.4, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 9, rate: 0.4, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 10, rate: 0.18, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 11, rate: 0.16, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 12, rate: 0.16, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 13, rate: 0.16, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 14, rate: 0.14, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 15, rate: 0.14, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 16, rate: 0.14, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 17, rate: 0.14, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 18, rate: 0.14, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 19, rate: 0.1, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  { level: 2, refine: 20, rate: 0.1, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Armor },
  // #endregion armor lv2 normal event

  // #region armor lv1 cash notEvent
  { level: 1, refine: 1, rate: 1, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 2, rate: 1, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 3, rate: 1, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 4, rate: 1, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 5, rate: 0.9, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 6, rate: 0.7, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor},
  { level: 1, refine: 7, rate: 0.7, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 8, rate: 0.4, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 9, rate: 0.4, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 10, rate: 0.2, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 11, rate: 0.08, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 12, rate: 0.08, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 13, rate: 0.08, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 14, rate: 0.08, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 15, rate: 0.07, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 16, rate: 0.07, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 17, rate: 0.07, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 18, rate: 0.07, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 19, rate: 0.05, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 20, rate: 0.05, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  // #endregion armor lv1 cash notEvent

  // #region armor lv2 cash notEvent
  { level: 2, refine: 1, rate: 1, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 2, rate: 1, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 3, rate: 1, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 4, rate: 0.9, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 5, rate: 0.7, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 6, rate: 0.6, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 7, rate: 0.6, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 8, rate: 0.4, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 9, rate: 0.4, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 10, rate: 0.2, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 11, rate: 0.15, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 12, rate: 0.15, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 13, rate: 0.15, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 14, rate: 0.15, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 15, rate: 0.10, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 16, rate: 0.10, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 17, rate: 0.10, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 18, rate: 0.10, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 19, rate: 0.07, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 20, rate: 0.07, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  // #endregion armor lv2 cash notEvent

  // #region armor lv1 cash event
  { level: 1, refine: 1, rate: 1, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 2, rate: 1, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 3, rate: 1, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 4, rate: 1, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 5, rate: 0.95, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 6, rate: 0.8, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor},
  { level: 1, refine: 7, rate: 0.8, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 8, rate: 0.6, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 9, rate: 0.5, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 10, rate: 0.35, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 11, rate: 0.2, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 12, rate: 0.2, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 13, rate: 0.16, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 14, rate: 0.16, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 15, rate: 0.15, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 16, rate: 0.15, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 17, rate: 0.14, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 18, rate: 0.14, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 19, rate: 0.1, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 1, refine: 20, rate: 0.1, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  // #endregion armor lv1 cash event

  // #region armor lv2 cash event
  { level: 2, refine: 1, rate: 1, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 2, rate: 1, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 3, rate: 1, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 4, rate: 0.95, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 5, rate: 0.85, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 6, rate: 0.70, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 7, rate: 0.65, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 8, rate: 0.55, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 9, rate: 0.45, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 10, rate: 0.25, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 11, rate: 0.20, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 12, rate: 0.20, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 13, rate: 0.20, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 14, rate: 0.20, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 15, rate: 0.15, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 16, rate: 0.15, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 17, rate: 0.15, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 18, rate: 0.15, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 19, rate: 0.10, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  { level: 2, refine: 20, rate: 0.10, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Armor },
  // #endregion armor lv2 cash event

  // #region weapon lv4 normal notEvent
  { level: 4, refine: 1, rate: 1, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 2, rate: 1, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 3, rate: 1, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 4, rate: 1, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 5, rate: 0.6, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 6, rate: 0.4, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon},
  { level: 4, refine: 7, rate: 0.4, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 8, rate: 0.2, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 9, rate: 0.2, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 10, rate: 0.09, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 11, rate: 0.08, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 12, rate: 0.08, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 13, rate: 0.08, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 14, rate: 0.08, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 15, rate: 0.07, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 16, rate: 0.07, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 17, rate: 0.07, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 18, rate: 0.07, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 19, rate: 0.05, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 20, rate: 0.05, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  // #endregion weapon lv4 normal notEvent

  // #region weapon lv5 normal notEvent
  { level: 5, refine: 1, rate: 1, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 2, rate: 1, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 3, rate: 1, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 4, rate: 0.6, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 5, rate: 0.6, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 6, rate: 0.4, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 7, rate: 0.4, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 8, rate: 0.2, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 9, rate: 0.2, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 10, rate: 0.09, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 11, rate: 0.08, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 12, rate: 0.08, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 13, rate: 0.08, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 14, rate: 0.08, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 15, rate: 0.07, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 16, rate: 0.07, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 17, rate: 0.07, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 18, rate: 0.07, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 19, rate: 0.05, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 20, rate: 0.05, isEvent: false, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  // #endregion weapon lv5 normal notEvent

  // #region weapon lv4 normal event
  { level: 4, refine: 1, rate: 1, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 2, rate: 1, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 3, rate: 1, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 4, rate: 1, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 5, rate: 0.6, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 6, rate: 0.4, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon},
  { level: 4, refine: 7, rate: 0.4, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 8, rate: 0.2, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 9, rate: 0.2, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 10, rate: 0.09, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 11, rate: 0.2, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 12, rate: 0.2, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 13, rate: 0.16, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 14, rate: 0.16, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 15, rate: 0.15, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 16, rate: 0.15, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 17, rate: 0.14, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 18, rate: 0.14, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 19, rate: 0.1, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 20, rate: 0.1, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  // #endregion weapon lv4 normal event

  // #region weapon lv5 normal event
  { level: 5, refine: 1, rate: 1, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 2, rate: 1, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 3, rate: 1, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 4, rate: 0.8, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 5, rate: 0.8, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 6, rate: 0.6, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 7, rate: 0.6, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 8, rate: 0.4, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 9, rate: 0.4, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 10, rate: 0.18, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 11, rate: 0.16, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 12, rate: 0.16, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 13, rate: 0.16, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 14, rate: 0.16, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 15, rate: 0.14, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 16, rate: 0.14, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 17, rate: 0.14, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 18, rate: 0.14, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 19, rate: 0.1, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 20, rate: 0.1, isEvent: true, typeOfOre: Ore.Normal, equipmentType: equipmentType.Weapon },
  // #endregion weapon lv5 normal event

  // #region weapon lv4 cash notEvent
  { level: 4, refine: 1, rate: 1, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 2, rate: 1, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 3, rate: 1, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 4, rate: 1, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 5, rate: 0.9, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 6, rate: 0.7, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 7, rate: 0.7, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 8, rate: 0.4, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 9, rate: 0.4, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 10, rate: 0.2, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 11, rate: 0.08, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 12, rate: 0.08, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 13, rate: 0.08, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 14, rate: 0.08, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 15, rate: 0.07, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 16, rate: 0.07, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 17, rate: 0.07, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 18, rate: 0.07, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 19, rate: 0.05, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 20, rate: 0.05, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  // #endregion weapon lv4 cash notEvent

  // #region weapon lv5 cash notEvent
  { level: 5, refine: 1, rate: 1, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 2, rate: 1, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 3, rate: 1, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 4, rate: 0.9, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 5, rate: 0.7, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 6, rate: 0.6, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 7, rate: 0.6, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 8, rate: 0.4, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 9, rate: 0.4, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 10, rate: 0.2, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 11, rate: 0.15, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 12, rate: 0.15, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 13, rate: 0.15, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 14, rate: 0.15, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 15, rate: 0.10, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 16, rate: 0.10, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 17, rate: 0.10, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 18, rate: 0.10, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 19, rate: 0.07, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 20, rate: 0.07, isEvent: false, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  // #endregion weapon lv5 cash notEvent

  // #region weapon lv4 cash event
  { level: 4, refine: 1, rate: 1, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 2, rate: 1, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 3, rate: 1, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 4, rate: 1, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 5, rate: 0.95, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 6, rate: 0.8, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 7, rate: 0.8, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 8, rate: 0.6, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 9, rate: 0.5, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 10, rate: 0.35, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 11, rate: 0.2, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 12, rate: 0.2, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 13, rate: 0.16, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 14, rate: 0.16, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 15, rate: 0.15, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 16, rate: 0.15, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 17, rate: 0.14, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 18, rate: 0.14, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 19, rate: 0.10, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 4, refine: 20, rate: 0.10, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  // #endregion weapon lv4 cash event

  // #region weapon lv5 cash event
  { level: 5, refine: 1, rate: 1, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 2, rate: 1, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 3, rate: 1, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 4, rate: 0.95, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 5, rate: 0.85, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 6, rate: 0.70, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 7, rate: 0.65, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 8, rate: 0.55, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 9, rate: 0.45, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 10, rate: 0.25, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 11, rate: 0.20, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 12, rate: 0.20, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 13, rate: 0.20, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 14, rate: 0.20, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 15, rate: 0.15, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 16, rate: 0.15, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 17, rate: 0.15, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 18, rate: 0.15, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 19, rate: 0.10, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  { level: 5, refine: 20, rate: 0.10, isEvent: true, typeOfOre: Ore.Cash, equipmentType: equipmentType.Weapon },
  // #endregion weapon lv5 cash event
]


const equipmentOptions = [
  { label: 'select equipment', value: null },
  { label: 'Armor Lv1', value: { level: 1, equipmentType: equipmentType.Armor } },
  { label: 'Armor Lv2', value: { level: 2, equipmentType: equipmentType.Armor } },
  { label: 'Weapon Lv4', value: { level: 4, equipmentType: equipmentType.Weapon } },
  { label: 'Weapon Lv5', value: { level: 5, equipmentType: equipmentType.Weapon } },
]
const selectedEquipment = ref(equipmentOptions[0].value)

const oreOptions = [
  { label: 'Select Ore', value: null },
  { label: 'Normal Ore', value: Ore.Normal },
  { label: 'Cash Ore', value: Ore.Cash },
]
const selectedOre = ref<Ore | null>(oreOptions[0].value)

const eventOptions = [
  { label: 'Select Event', value: null },
  { label: 'Not Event', value: false },
  { label: 'Event', value: true },
] 
const selectedEvent = ref<boolean | null>(eventOptions[0].value)

const isUseBlacksmithBlessing = ref<boolean>(false)

const refineLog = ref('')
const currentRefine = ref(0)
// #endregion data


// #region computed
// #endregion computed


// #region methods
function getRefineRates(level: number, isEvent: boolean, typeOfOre: Ore, equipmentType: equipmentType) {
  return refineRates.filter(rate => rate.level === level 
    && rate.isEvent === isEvent
    && rate.typeOfOre === typeOfOre
    && rate.equipmentType === equipmentType  
  )
}

function refine() {
  consola.log('RefineSimulatorView refine')
  consola.log('RefineSimulatorView refine selectedEquipment.value.equipmentType', selectedEquipment.value?.equipmentType)
  consola.log('RefineSimulatorView refine selectedEquipment.value.level', selectedEquipment.value?.level)
  consola.log('RefineSimulatorView refine selectedEvent.value', selectedEvent.value)
  consola.log('RefineSimulatorView refine selectedOre.value', selectedOre.value)


  if (selectedEquipment.value === null || selectedEvent.value === null || selectedOre.value === null) {
    refineLog.value = 'Please select option.'
    return
  }

  const rates = getRefineRates(selectedEquipment.value.level, selectedEvent.value, selectedOre.value, selectedEquipment.value.equipmentType)
  if (rates.length === 0) {
    refineLog.value = 'No refine rates found for the selected equipment and event type.'
    return
  }

  const rate = rates[currentRefine.value]
  if (!rate) {
    refineLog.value = 'Invalid refine level.'
    return
  }

  const successRate = rate.rate
  const randomValue = Math.random()
  const isSuccess = randomValue < successRate

  refineLog.value += `Refine from Level [${currentRefine.value}] to Level [${currentRefine.value + 1}] at ${Math.trunc(successRate * 100)}% success rate.\n`
  refineLog.value += `Random = ${randomValue}\n`

  if (isSuccess) {
    refineLog.value += `Refine successful!\n`
    currentRefine.value += 1
    refineLog.value += `You got Level ${currentRefine.value}.\n`

    const audio = new Audio(soundRefineSuccess)
    audio.play()
  } else {
    refineLog.value += `Refine failed!\n`
    if (isUseBlacksmithBlessing.value === true) {
      refineLog.value += 'Using Blacksmith Blessing to keep the current level.\n'
    } else if (selectedEquipment.value.equipmentType === equipmentType.Armor 
      && selectedEquipment.value.level === 1
      && selectedOre.value === Ore.Normal
    ) {
      currentRefine.value = -1
    } else if (selectedEquipment.value.equipmentType === equipmentType.Armor
      && selectedEquipment.value.level === 1
      && selectedOre.value === Ore.Cash
    ) {
      currentRefine.value = Math.max(0, currentRefine.value - 1)
    } else if (selectedEquipment.value.equipmentType === equipmentType.Armor 
      && selectedEquipment.value.level === 2
      && selectedOre.value === Ore.Normal
    ) {
      currentRefine.value = Math.max(0, currentRefine.value - 3)
    } else if (selectedEquipment.value.equipmentType === equipmentType.Armor
      && selectedEquipment.value.level === 2
      && selectedOre.value === Ore.Cash
    ) {
      currentRefine.value = Math.max(0, currentRefine.value - 1)
    } else if (selectedEquipment.value.equipmentType === equipmentType.Weapon 
      && selectedEquipment.value.level === 4
      && selectedOre.value === Ore.Normal
    ) {
      currentRefine.value = -1
    } else if (selectedEquipment.value.equipmentType === equipmentType.Weapon
      && selectedEquipment.value.level === 4
      && selectedOre.value === Ore.Cash
    ) {
      currentRefine.value = Math.max(0, currentRefine.value - 1)
    } else if (selectedEquipment.value.equipmentType === equipmentType.Weapon 
      && selectedEquipment.value.level === 5
      && selectedOre.value === Ore.Normal
    ) {
      currentRefine.value = Math.max(0, currentRefine.value - 3)
    } else if (selectedEquipment.value.equipmentType === equipmentType.Weapon
      && selectedEquipment.value.level === 5
      && selectedOre.value === Ore.Cash
    ) {
      currentRefine.value = Math.max(0, currentRefine.value - 1)
    }

    if (currentRefine.value < 0) {
      refineLog.value += `Equipment destroyed.\n`
    } else {
      refineLog.value += `You got Level ${currentRefine.value}.\n`
    }

    const audio = new Audio(soundRefineFail)
    audio.play()
  }

  refineLog.value += `\n`
  const textarea = document.getElementById('refineLog')
  if (textarea) {
    nextTick(() => {
      textarea.scrollTop = textarea.scrollHeight
    })
  }
  
}

function reset() {
  currentRefine.value = 0
  refineLog.value = ''
  isUseBlacksmithBlessing.value = false
  selectedEquipment.value = equipmentOptions[0].value
  selectedOre.value = oreOptions[0].value
  selectedEvent.value = eventOptions[0].value
}

function canRefine() {
  return currentRefine.value >= 0 
    && selectedEquipment.value !== null 
    && selectedOre.value !== null
    && selectedEvent.value !== null 
}
// #endregion methods
</script>


<template>
  <main class="container mx-auto px-3 md:px-0">
    <h1 class="text-4xl font-bold">Refine Simulator | RO-Calculator</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
      <!-- #region simalator -->
      <div class="flex flex-col gap-4">
        <h2 class="text-4xl font-semibold">Simalator</h2>

        <div class="flex flex-col gap-4">
          <div class="grid grid-cols-2 gap-4">
            <!-- #region Equipment -->
            <div class="ring-1 ring-gray-200 p-4 rounded-md shadow-sm bg-white dark:bg-gray-800">
              <label for="equipment" class="block font-medium text-gray-700 dark:text-gray-300">Equipment</label>
              <select 
                id="equipment" 
                v-model="selectedEquipment" 
                class="my-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-400 dark:text-white"
              >
                <option v-for="option in equipmentOptions" :key="option.label" :value="option.value">{{ option.label }}</option>
              </select>
            </div>
            <!-- #endregion Equipment -->

            <!-- #region Ore -->
            <div class="ring-1 ring-gray-200 p-4 rounded-md shadow-sm bg-white dark:bg-gray-800">
              <div>Ore</div>
              <div>
                <input type="radio" id="useNormalOre" v-model="selectedOre" :value="Ore.Normal" class="mr-2">
                <label for="useNormalOre" class="font-medium text-gray-700 dark:text-gray-300">Use Normal Ore</label>
              </div>
              <div>
                <input type="radio" id="useCashOre" v-model="selectedOre" :value="Ore.Cash" class="mr-2">
                <label for="useCashOre" class="font-medium text-gray-700 dark:text-gray-300">Use Cash Ore</label>
              </div>
            </div>
            <!-- #endregion Ore -->

            <!-- #region Event / Not Event -->
            <div class="ring-1 ring-gray-200 p-4 rounded-md shadow-sm bg-white dark:bg-gray-800">
              <div>Event / Not Event</div>
              <div>
                <input type="radio" id="inEvent" v-model="selectedEvent" :value="true" class="mr-2">
                <label for="inEvent" class="font-medium text-gray-700 dark:text-gray-300">In Event</label>
              </div>
              <div>
                <input type="radio" id="notInEvent" v-model="selectedEvent" :value="false" class="mr-2">
                <label for="notInEvent" class="font-medium text-gray-700 dark:text-gray-300">Not In Event</label>
              </div>
            </div>
            <!-- #endregion Event / Not Event -->

            <!-- #region Blacksmith Blessing -->
            <div class="ring-1 ring-gray-200 p-4 rounded-md shadow-sm bg-white dark:bg-gray-800">
              <div>Blacksmith Blessing</div>
              <div>
                <input type="radio" id="useBlacksmithBlessing" v-model="isUseBlacksmithBlessing" :value="true" class="mr-2">
                <label for="useBlacksmithBlessing" class="font-medium text-gray-700 dark:text-gray-300">Use Blacksmith Blessing</label>
              </div>
              <div>
                <input type="radio" id="noBlacksmithBlessing" v-model="isUseBlacksmithBlessing" :value="false" class="mr-2">
                <label for="noBlacksmithBlessing" class="font-medium text-gray-700 dark:text-gray-300">No Blacksmith Blessing</label>
              </div>
            </div>
            <!-- #endregion Blacksmith Blessing -->
          </div>

          <div class="ring-1 ring-gray-200 p-4 rounded-md shadow-sm bg-white dark:bg-gray-800 text-3xl">
            Current Refine Level: {{ currentRefine }}
          </div>

          <div class="flex justify-between">
            <button
              type="button"
              @click="refine"
              class="px-4 py-2 bg-indigo-600 disabled:bg-indigo-200 text-white rounded-md shadow-sm hover:bg-indigo-700 disabled:hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              :disabled="!canRefine()"
            >
              Refine
            </button>

            <button 
              type="button"
              @click="reset"
              class="ml-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Reset
            </button>
          </div>
        </div>

        <div>
          <textarea
            id="refineLog"
            v-model="refineLog"
            class="w-full h-64 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800 dark:text-white"
            placeholder="Refine log will appear here..."
            readonly
          ></textarea>
        </div>
      </div>
      <!-- #endregion simalator -->

      <!-- #region refine infomation -->
      <div class="">
        <h2 class="text-4xl font-semibold">Refine Infomation</h2>

        <div v-if="selectedEquipment">
          <table class="table-auto border-collapse w-full">
            <thead>
              <tr>
                <th class="border border-gray-300 bg-gray-50 dark:bg-gray-700">
                  Refine
                </th>
                <th class="border border-gray-300 bg-gray-100 dark:bg-gray-600">
                  Normal Ore<br>Not Event
                </th>
                <th class="border border-gray-300 bg-gray-100 dark:bg-gray-600">
                  Normal Ore<br>Event
                </th>
                <th class="border border-gray-300 bg-gray-200 dark:bg-gray-700">
                  Cash Ore<br>Not Event
                </th>
                <th class="border border-gray-300 bg-gray-200 dark:bg-gray-700">
                  Cash Ore<br>Event
                </th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="i in 20">
                <td class="border border-gray-300 bg-gray-50 dark:bg-gray-600 text-center">{{ i }}</td>
                <td class="border border-gray-300 bg-gray-100 dark:bg-gray-500 text-center">
                  {{ Math.trunc(getRefineRates(selectedEquipment.level, false, Ore.Normal, selectedEquipment.equipmentType)[i-1].rate * 100) }}%
                </td>
                <td class="border border-gray-300 bg-gray-100 dark:bg-gray-500 text-center">
                  {{ Math.trunc(getRefineRates(selectedEquipment.level, true, Ore.Normal, selectedEquipment.equipmentType)[i-1].rate * 100) }}%
                </td>
                <td class="border border-gray-300 bg-gray-200 dark:bg-gray-500 text-center">
                  {{ Math.trunc(getRefineRates(selectedEquipment.level, false, Ore.Cash, selectedEquipment.equipmentType)[i-1].rate * 100) }}%
                </td>
                <td class="border border-gray-300 bg-gray-200 dark:bg-gray-500 text-center">
                  {{ Math.trunc(getRefineRates(selectedEquipment.level, true, Ore.Cash, selectedEquipment.equipmentType)[i-1].rate * 100) }}%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- #endregion refine infomation -->
    </div>

    

  </main>
</template>