<script setup lang="ts">
// ComplexDungeonLoginCardViewV1 LazyComplexDungeonLoginCardViewV1
import { Timestamp } from 'firebase/firestore'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import { TrashIcon } from '@heroicons/vue/24/outline'

import { type Character, DungeonName } from '@/model/DungeonLog'

dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(isSameOrBefore)

//#region define...
defineProps<{
  character: Character,
  isApiWorking: boolean,
}>()

const emit = defineEmits(['deleteCharacter', 'checkinDungeon', 'checkinDungeonAt'])
//#endregion define...

//#region use...
//#endregion use...

// #region methods...
function checkinDungeonAt(dungeonNameEnum: DungeonName, characterDocId: string | undefined, checkinAt: string) {
  emit('checkinDungeonAt', dungeonNameEnum, characterDocId, checkinAt)
}
// #endregion methods...
</script>

<template>
  <div class="ring rounded-md p-3 shadow-md">
    <!-- #region card header -->
    <div class="flex flex-row justify-between gap-3">
      <h3 class="text-xl">{{ character.name }}</h3>
      <button 
        type="button"
        class="flex gap-1 bg-red-500 text-white p-3 rounded cursor-pointer float-right"
        :disabled="isApiWorking"
        @click="$emit('deleteCharacter', character.docId)"
      >
        <TrashIcon class="h-5 w-5" aria-hidden="true"/> Remove this character
      </button>
    </div>
    <!-- #region card header -->

    <!-- #region card body -->
    <div class="flex flex-col gap-3">
      <div>Dungeon Logs</div>

      
      <!-- #region ConstellationTower -->
      <LazyComplexDungeonLoginCardBodySlotDungeonViewV1
        :dungeonName="'Constellation Tower - Betelguese (cooldown 3 days)'"
        :dungeonNameEnum="DungeonName.ConstellationTower"
        :dungeonDescription="'Quest: ผลกระทบจากการเข้าไปในหอคอย'"
        :characterDocId="character.docId"
        :characterCheckinAt="character.checkin_constellation_tower_at"
        :isApiWorking="isApiWorking"
        @checkinDungeon="$emit('checkinDungeon', DungeonName.ConstellationTower, character.docId)"
        @checkinDungeonAt="checkinDungeonAt"
      />
      <!-- #endregion ConstellationTower -->

      <!-- #region OldGlastHeimChallenge -->
      <LazyComplexDungeonLoginCardBodySlotDungeonViewV1
        :dungeonName="'Old Glast Heim Challenge - OGHC (cooldown 3 days)'"
        :dungeonNameEnum="DungeonName.OldGlastHeimChallenge"
        :dungeonDescription="'Quest: -'"
        :characterDocId="character.docId"
        :characterCheckinAt="character.checkin_old_glast_heim_challenge_at"
        :isApiWorking="isApiWorking"
        @checkinDungeon="$emit('checkinDungeon', DungeonName.OldGlastHeimChallenge, character.docId)"
        @checkinDungeonAt="checkinDungeonAt"
      />
      <!-- #endregion OldGlastHeimChallenge -->

      <!-- #region SunkenTower -->
      <LazyComplexDungeonLoginCardBodySlotDungeonViewV1
        :dungeonName="'Sunken Tower - น้ำแตก (cooldown 3 days)'"
        :dungeonNameEnum="DungeonName.SunkenTower"
        :dungeonDescription="'Quest: เวลารบายน้ำ'"
        :characterDocId="character.docId"
        :characterCheckinAt="character.checkin_sunken_tower_at"
        :isApiWorking="isApiWorking"
        @checkinDungeon="$emit('checkinDungeon', DungeonName.SunkenTower, character.docId)"
        @checkinDungeonAt="checkinDungeonAt"
      />
      <!-- #endregion SunkenTower -->

      <!-- #region GeffenNightArena -->
      <LazyComplexDungeonLoginCardBodySlotDungeonViewV1
        :dungeonName="'Geffen Night Arena (cooldown 3 days)'"
        :dungeonNameEnum="DungeonName.GeffenNightArena"
        :dungeonDescription="'Quest: [Waiting] วันนี้ไม่มีการแข่งขัน'"
        :characterDocId="character.docId"
        :characterCheckinAt="character.checkin_geffen_night_arena_at"
        :isApiWorking="isApiWorking"
        @checkinDungeon="$emit('checkinDungeon', DungeonName.GeffenNightArena, character.docId)"
        @checkinDungeonAt="checkinDungeonAt"
      />
      <!-- #endregion GeffenNightArena -->
      
    </div>
    <!-- #endregion card body -->
  </div>
</template>