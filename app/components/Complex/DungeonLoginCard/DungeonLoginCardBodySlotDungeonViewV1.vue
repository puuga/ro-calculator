
<script setup lang="ts">
// ComplexDungeonLoginCardBodySlotDungeonViewV1 LazyComplexDungeonLoginCardBodySlotDungeonViewV1
import { Timestamp } from 'firebase/firestore'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import { ClockIcon } from '@heroicons/vue/24/outline'

import { DungeonName } from '@/model/DungeonLog'

dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(isSameOrBefore)

//#region define...
defineProps<{
  dungeonName: string,
  dungeonNameEnum: DungeonName,
  dungeonDescription: string,
  characterDocId?: string,
  characterCheckinAt?: Timestamp,
  isApiWorking: boolean,
}>()

const emit = defineEmits(['checkinDungeon', 'checkinDungeonAt'])
//#endregion define...

//#region use...
const checkinAt = ref('')
//#endregion use...

// #region methods...
function onCheckinAtClick(dungeonNameEnum: DungeonName, characterDocId: string | undefined) {
  if (checkinAt.value === '') {
    return
  }
  const date = dayjs(checkinAt.value)
  if (!date.isValid()) {
    return
  }
  
  emit('checkinDungeonAt', dungeonNameEnum, characterDocId, checkinAt.value)
  checkinAt.value = ''
}

function formatDateWithTimestamp(date: Timestamp | undefined) {
  if (!date) {
    return ''
  }
  return dayjs(date.toDate()).tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm')
}

function formatDateWithDayjs(date: dayjs.Dayjs | undefined) {
  if (!date) {
    return ''
  }
  return date.format('YYYY-MM-DD HH:mm')
}

function getNextTime(dungeonName: DungeonName, lastDate: Timestamp | undefined) {
  if (!lastDate) {
    return undefined
  }
  
  switch (dungeonName) {
    case DungeonName.ConstellationTower:
      return dayjs(lastDate.toDate()).add(3, 'day').set('hour', 4).set('minute', 0).set('second', 0)
    case DungeonName.OldGlastHeimChallenge:
      return dayjs(lastDate.toDate()).add(3, 'day').set('hour', 4).set('minute', 0).set('second', 0)
    case DungeonName.SunkenTower:
      return dayjs(lastDate.toDate()).add(3, 'day').set('hour', 4).set('minute', 0).set('second', 0)
    case DungeonName.GeffenNightArena:
      return dayjs(lastDate.toDate()).add(3, 'day').set('hour', 4).set('minute', 0).set('second', 0)
    default:
      return undefined
  }
}

function formatDateAsFromNowOrToNow(date: dayjs.Dayjs | undefined) {
  if (!date) {
    return ''
  }

  if (dayjs().isSameOrBefore(dayjs(date))) {
    return `in ${dayjs(date).toNow(true)}`
  } else {
    return `${dayjs(date).fromNow(true)} ago`
  }
}
// #endregion methods...
</script>

<template>
  <div>
    <!-- #region SlotDungeon body -->
    <div class="flex flex-col  bg-gray-200 p-3 rounded-t-md">
      <!-- #region dungeon info -->
      <div class="">
        <div class="font-bold text-xl">
          {{ dungeonName }}
        </div>

        <div>{{ dungeonDescription }}</div>

        <div v-if="characterCheckinAt">
          Last time: {{ formatDateWithTimestamp(characterCheckinAt) }}
        </div>
        <div v-if="characterCheckinAt">
          Next time: {{ formatDateWithDayjs(getNextTime(dungeonNameEnum, characterCheckinAt)) }}
          <span class="font-bold">
            ({{ formatDateAsFromNowOrToNow(getNextTime(dungeonNameEnum, characterCheckinAt)) }})
          </span>
        </div>
      </div>
      <!-- #endregion dungeon info -->
    </div>
    <!-- #endregion SlotDungeon body -->

    <!-- #region SlotDungeon footer -->
    <div class="flex flex-col  bg-gray-300 p-3 rounded-b-md">
      <!-- #region checkin -->
      <div class="flex flex-row gap-3">
        <div class="basis-1/2 flex flex-col gap-1">
          <label for="checkinAt" class="text-sm font-medium text-gray-700">Check In At</label>
          <input 
            id="checkinAt"
            type="datetime-local"
            class="w-full p-1 rounded bg-white border border-gray-300"
            v-model="checkinAt"
          />
          <button 
            type="button"
            class="flex gap-1 justify-center bg-white border border-blue-500 hover:bg-blue-700 disabled:border-blue-200 disabled:text-gray-500 py-1 rounded cursor-pointer disabled:cursor-not-allowed w-full"
            :disabled="isApiWorking || checkinAt === ''"
            @click="onCheckinAtClick(dungeonNameEnum, characterDocId)"
          >
            <ClockIcon class="h-5 w-5" aria-hidden="true" /> Check In At
          </button>
        </div>

        <div class="basis-1/2 order-2 content-center">
          <button 
            type="button"
            class="flex gap-1 justify-center bg-blue-500 hover:bg-blue-700 text-white py-1 rounded cursor-pointer w-full"
            :disabled="isApiWorking"
            @click="$emit('checkinDungeon', dungeonNameEnum, characterDocId)"
          >
            <ClockIcon class="h-5 w-5" aria-hidden="true" /> Check In Now
          </button>
        </div>
      </div>
      <!-- #endregion checkin -->
    </div>
    <!-- #endregion SlotDungeon footer -->
  </div>
</template>