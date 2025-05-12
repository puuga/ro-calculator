
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
  return dayjs(date.toDate()).tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss')
}

function formatDateWithDayjs(date: dayjs.Dayjs | undefined) {
  if (!date) {
    return ''
  }
  return date.format('YYYY-MM-DD HH:mm:ss')
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
  <!-- #region SlotDungeon -->
  <div class="flex flex-row gap-1 bg-gray-200 p-3 rounded-md">
    <div class="basis-3/4">
      <div class="font-bold">
        {{ dungeonName }}
      </div>

      <div>{{ dungeonDescription }}</div>

      <div v-if="characterCheckinAt">
        Last time: {{ formatDateWithTimestamp(characterCheckinAt) }}
      </div>
      <div v-if="characterCheckinAt">
        Next time: {{ formatDateWithDayjs(getNextTime(dungeonNameEnum, characterCheckinAt)) }}
        ({{ formatDateAsFromNowOrToNow(getNextTime(dungeonNameEnum, characterCheckinAt)) }})
      </div>
    </div>

    <div class="basis-1/3 flex flex-col gap-5">
      <div>
        <button 
          type="button"
          class="flex gap-1 justify-center bg-blue-500 text-white py-1 rounded cursor-pointer w-full"
          :disabled="isApiWorking"
          @click="$emit('checkinDungeon', dungeonNameEnum, characterDocId)"
        >
          <ClockIcon class="h-5 w-5" aria-hidden="true" /> Check In
        </button>
      </div>

      <div class="flex flex-col gap-1">
        <label for="checkinAt" class="text-sm font-medium text-gray-700">Check In At</label>
        <input 
          id="checkinAt"
          type="datetime-local"
          class="w-full p-1 rounded bg-white border border-gray-300"
          v-model="checkinAt"
        />
        <button 
          type="button"
          class="flex gap-1 justify-center bg-white border border-blue-500 disabled:border-blue-200 disabled:text-gray-500 py-1 rounded cursor-pointer disabled:cursor-not-allowed w-full"
          :disabled="isApiWorking || checkinAt === ''"
          @click="onCheckinAtClick(dungeonNameEnum, characterDocId)"
        >
          <ClockIcon class="h-5 w-5" aria-hidden="true" /> Check In At
        </button>
      </div>
    </div>

    <div class="flex flex-row justify-between items-center">
      
      
    </div>

    
  </div>
  <!-- #endregion SlotDungeon -->
</template>