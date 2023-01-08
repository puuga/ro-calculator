<script setup lang="ts">
import consola from 'consola'
import { getAnalytics, logEvent } from 'firebase/analytics'

import { RN_BUFF_COOLDOWN_COUNTER_TOOL, findRouteByName } from '@/app/router.options'

//#region use...
const route = findRouteByName(RN_BUFF_COOLDOWN_COUNTER_TOOL)
const _title = route?.title || 'Cooldown Counter | RO-Calculator'
const _description = route?.description || 'Cooldown Counter Tool'
useHead({
  title: _title,
  meta: [
    { hid: 'description', name: 'description', content: _description },
    { hid: 'og:description', name: 'og:description', content: _description },
  ],
})

const { $firebaseApp } = useNuxtApp()
//#endregion use...

//#region refs
const notification = ref(false)

const sound = ref('')
const soundOptions = [
  {
    id: 'sound_1',
    title: 'Sound 1',
    value: '/sounds/mixkit-double-beep-tone-alert-2868.wav'
  },
  {
    id: 'sound_2',
    title: 'Sound 2',
    value: '/sounds/mixkit-sci-fi-confirmation-914.wav'
  },
  {
    id: 'sound_3',
    title: 'Sound 3',
    value: '/sounds/mixkit-software-interface-start-2574.wav'
  },
]

const buffs = ref([])
const buffsOptions = [
  {
    id: 'buff_30s',
    title: 'Cooldown 30 s (0:30 m)',
    value: 'buff_30s'
  },
  {
    id: 'buff_60s',
    title: 'Cooldown 60 s (1:00 m)',
    value: 'buff_60s'
  },
  {
    id: 'buff_90s',
    title: 'Cooldown 90 s (1:30 m)',
    value: 'buff_90s'
  },
  {
    id: 'buff_120s',
    title: 'Cooldown 120 s (2:00 m)',
    value: 'buff_120s'
  },
  {
    id: 'buff_180s',
    title: 'Cooldown 180 s (3:00 m)',
    value: 'buff_180s'
  },
  {
    id: 'buff_300s',
    title: 'Cooldown 300 s (5:00 m)',
    value: 'buff_300s'
  },
  {
    id: 'buff_600s',
    title: 'Cooldown 600 s (10:00 m)',
    value: 'buff_600s'
  },
]

const clockCooldown30s = ref(false)
const clockCooldown60s = ref(false)
const clockCooldown90s = ref(false)
const clockCooldown120s = ref(false)
const clockCooldown180s = ref(false)
const clockCooldown300s = ref(false)
const clockCooldown600s = ref(false)

const clockCooldown30sInterval = ref('')
const clockCooldown60sInterval = ref('')
const clockCooldown90sInterval = ref('')
const clockCooldown120sInterval = ref('')
const clockCooldown180sInterval = ref('')
const clockCooldown300sInterval = ref('')
const clockCooldown600sInterval = ref('')

let clockCooldown30sCountdownInterval: any
let clockCooldown60sCountdownInterval: any
let clockCooldown90sCountdownInterval: any
let clockCooldown120sCountdownInterval: any
let clockCooldown180sCountdownInterval: any
let clockCooldown300sCountdownInterval: any
let clockCooldown600sCountdownInterval: any
//#endregion refs

//#region methods
function onFormSubmit(event: Event) {
  event.preventDefault()

  consola.log('BuffCooldownCounterView onFormSubmit')
  consola.log('BuffCooldownCounterView onFormSubmit sound', sound.value)
  consola.log('BuffCooldownCounterView onFormSubmit notification', notification.value)
  consola.log('BuffCooldownCounterView onFormSubmit buffs', buffs.value)

  const _buffs = buffs.value as string[]
  if (_buffs.includes('buff_30s')) {
    clockCooldown30s.value = true
    consola.log('BuffCooldownCounterView clockCooldown30s')
    clockCooldown30sCountdown(sound.value)
  }
  if (_buffs.includes('buff_60s')) {
    clockCooldown60s.value = true
    consola.log('BuffCooldownCounterView clockCooldown60s')
    clockCooldown60sCountdown(sound.value)
  }
  if (_buffs.includes('buff_90s')) {
    clockCooldown90s.value = true
    consola.log('BuffCooldownCounterView clockCooldown90s')
    clockCooldown90sCountdown(sound.value)
  }
  if (_buffs.includes('buff_120s')) {
    clockCooldown120s.value = true
    consola.log('BuffCooldownCounterView clockCooldown120s')
    clockCooldown120sCountdown(sound.value)
  }
  if (_buffs.includes('buff_180s')) {
    clockCooldown180s.value = true
    consola.log('BuffCooldownCounterView clockCooldown180s')
    clockCooldown180sCountdown(sound.value)
  }
  if (_buffs.includes('buff_300s')) {
    clockCooldown300s.value = true
    consola.log('BuffCooldownCounterView clockCooldown300s')
    clockCooldown300sCountdown(sound.value)
  }
  if (_buffs.includes('buff_600s')) {
    clockCooldown600s.value = true
    consola.log('BuffCooldownCounterView clockCooldown600s')
    clockCooldown600sCountdown(sound.value)
  }

  const analytics = getAnalytics($firebaseApp())
  logEvent(analytics, "CooldownCounter", {
    buffs: _buffs,
    notification: notification.value,
    sound: sound.value
  });
}

function onTestNotificationClicked() {
  consola.log('BuffCooldownCounterView onTestNotificationClicked')
  fireNotification('Test Notification', 'This is a test notification')
}

function previewSound(soundPath: string) {
  consola.log('BuffCooldownCounterView previewSound', soundPath)
  const audio = new Audio(soundPath)
  audio.play()
}

function playSound(soundPath: string) {
  consola.log('BuffCooldownCounterView playSound', soundPath)
  if (soundPath === '') {
    return
  }

  const audio = new Audio(soundPath)
  audio.play()
}

function fireNotification(title: string, message: string) {
  consola.log('BuffCooldownCounterView fireNotification title', title)
  consola.log('BuffCooldownCounterView fireNotification message', message)
  if (!('Notification' in window)) {
    consola.error('BuffCooldownCounterView fireNotification', 'This browser does not support desktop notification')
    alert('This browser does not support desktop notification')
  } else if (Notification.permission === 'granted') {
    consola.log('BuffCooldownCounterView fireNotification granted')
    const notification = new Notification(title, { body: message })
    // …
  } else if (Notification.permission !== 'denied') {
    consola.log('BuffCooldownCounterView fireNotification denied')
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        const notification = new Notification(title, { body: message })
        // …
      }
    });
  }
}

function stopCountdown() {
  consola.log('BuffCooldownCounterView stopCountdown')
  clearInterval(clockCooldown30sCountdownInterval)
  clockCooldown30s.value = false
  clockCooldown30sInterval.value = ''

  clearInterval(clockCooldown60sCountdownInterval)
  clockCooldown60s.value = false
  clockCooldown60sInterval.value = ''

  clearInterval(clockCooldown90sCountdownInterval)
  clockCooldown90s.value = false
  clockCooldown90sInterval.value = ''

  clearInterval(clockCooldown120sCountdownInterval)
  clockCooldown120s.value = false
  clockCooldown120sInterval.value = ''

  clearInterval(clockCooldown180sCountdownInterval)
  clockCooldown180s.value = false
  clockCooldown180sInterval.value = ''

  clearInterval(clockCooldown300sCountdownInterval)
  clockCooldown300s.value = false
  clockCooldown300sInterval.value = ''

  clearInterval(clockCooldown600sCountdownInterval)
  clockCooldown600s.value = false
  clockCooldown600sInterval.value = ''
}

function clockCooldown30sCountdown(soundPath: string) {
  clockCooldown30s.value = true
  let seconds = 30
  clockCooldown30sCountdownInterval = setInterval(() => {
    seconds--
    consola.log('BuffCooldownCounterView clockCooldown30sCountdown', seconds)
    clockCooldown30sInterval.value = seconds.toString()
    if (seconds <= 0) {
      clearInterval(clockCooldown30sCountdownInterval)
      clockCooldown30s.value = false
      playSound(soundPath)
      if (notification.value) {
        fireNotification('Buff Cooldown', '30s Cooldown is ready')
      }

      clockCooldown30sCountdown(soundPath)
    }
  }, 1000)
}
function clockCooldown60sCountdown(soundPath: string) {
  clockCooldown60s.value = true
  let seconds = 60
  clockCooldown60sCountdownInterval = setInterval(() => {
    seconds--
    consola.log('BuffCooldownCounterView clockCooldown60sCountdown', seconds)
    clockCooldown60sInterval.value = seconds.toString()
    if (seconds <= 0) {
      clearInterval(clockCooldown60sCountdownInterval)
      clockCooldown60s.value = false
      playSound(soundPath)

      clockCooldown60sCountdown(soundPath)
    }
  }, 1000)
}
function clockCooldown90sCountdown(soundPath: string) {
  clockCooldown90s.value = true
  let seconds = 90
  clockCooldown90sCountdownInterval = setInterval(() => {
    seconds--
    consola.log('BuffCooldownCounterView clockCooldown90sCountdown', seconds)
    clockCooldown90sInterval.value = seconds.toString()
    if (seconds <= 0) {
      clearInterval(clockCooldown90sCountdownInterval)
      clockCooldown90s.value = false
      playSound(soundPath)

      clockCooldown90sCountdown(soundPath)
    }
  }, 1000)
}
function clockCooldown120sCountdown(soundPath: string) {
  clockCooldown120s.value = true
  let seconds = 120
  clockCooldown120sCountdownInterval = setInterval(() => {
    seconds--
    consola.log('BuffCooldownCounterView clockCooldown120sCountdown', seconds)
    clockCooldown120sInterval.value = seconds.toString()
    if (seconds <= 0) {
      clearInterval(clockCooldown120sCountdownInterval)
      clockCooldown120s.value = false
      playSound(soundPath)

      clockCooldown120sCountdown(soundPath)
    }
  }, 1000)
}
function clockCooldown180sCountdown(soundPath: string) {
  clockCooldown180s.value = true
  let seconds = 180
  clockCooldown180sCountdownInterval = setInterval(() => {
    seconds--
    consola.log('BuffCooldownCounterView clockCooldown180sCountdown', seconds)
    clockCooldown180sInterval.value = seconds.toString()
    if (seconds <= 0) {
      clearInterval(clockCooldown180sCountdownInterval)
      clockCooldown180s.value = false
      playSound(soundPath)

      clockCooldown180sCountdown(soundPath)
    }
  }, 1000)
}
function clockCooldown300sCountdown(soundPath: string) {
  clockCooldown300s.value = true
  let seconds = 300
  clockCooldown300sCountdownInterval = setInterval(() => {
    seconds--
    consola.log('BuffCooldownCounterView clockCooldown300sCountdown', seconds)
    clockCooldown300sInterval.value = seconds.toString()
    if (seconds <= 0) {
      clearInterval(clockCooldown300sCountdownInterval)
      clockCooldown300s.value = false
      playSound(soundPath)

      clockCooldown300sCountdown(soundPath)
    }
  }, 1000)
}
function clockCooldown600sCountdown(soundPath: string) {
  clockCooldown600s.value = true
  let seconds = 600
  clockCooldown600sCountdownInterval = setInterval(() => {
    seconds--
    consola.log('BuffCooldownCounterView clockCooldown600sCountdown', seconds)
    clockCooldown600sInterval.value = seconds.toString()
    if (seconds <= 0) {
      clearInterval(clockCooldown600sCountdownInterval)
      clockCooldown600s.value = false
      playSound(soundPath)

      clockCooldown600sCountdown(soundPath)
    }
  }, 1000)
}
//#endregion methods
</script>

<template>
  <main class="container mx-auto">
    <h1 class="text-4xl font-bold">{{ _title }}</h1>

    <div>SEO: Cooldown Counter</div>

    <div class="flex">
      <!-- #region form -->
      <div class="w-6/12 c-card m-1">
        <div class="text-2xl">Config</div>
        <form @submit="onFormSubmit">
          <!-- #region input sound -->
          <div>
            <div class="text-xl">Sound</div>
            <div v-for="option in soundOptions" :key="option.id" class="my-1">
              <button 
                type="button" 
                class="c-btn-primary"
                @click="previewSound(option.value)" 
              >
                ▶️
              </button>
              <input 
                type="radio" 
                v-model="sound" 
                :id="option.id" 
                :value="soundOptions[0].value"
                name="soundInput" 
                class="mx-2" 
              />
              <label :for="option.id">{{ option.title }}</label>
            </div>
          </div>
          <!-- #endregion input sound -->

          <!-- #region input notification -->
          <div>
            <div class="text-xl">Notification</div>
            <div class="my-1">
              <button 
                type="button" 
                class="c-btn-primary"
                @click="onTestNotificationClicked()" 
              >
                ▶️
              </button>
              <input 
                type="checkbox" 
                v-model="notification"
                :true-value="true"
                :false-value="false"
                id="checkbox-notification"
                name="checkbox-notification" 
                class="mx-2"  
              />
              <label for="checkbox-notification">Use native notification</label>
              <div class="text-slate-500">Please note that, if system is set to do not disturb, you will not see notification</div>
            </div>
          </div>
          <!-- #endregion input notification -->

          <!-- #region input buff -->
          <div>
            <div class="text-xl">Buff</div>
            <div v-for="buff in buffsOptions" :key="buff.id" class="my-1">
              <input
                type="checkbox"
                v-model="buffs"
                :id="buff.id"
                :value="buff.value"
                name="buffInput"
                class="mx-2"
              />
              <label :for="buff.id">{{ buff.title }}</label>
            </div>
          </div>

          <!-- #region submit -->
          <div>
            <button type="submit" class="c-btn-primary w-full my-1">Start</button>
            <button type="button" class="c-btn-secondary w-full my-1" @click="stopCountdown()">Stop</button>
            <button type="reset" class="c-btn-secondary w-full my-1">Reset</button>
          </div>
          <!-- #endregion submit -->
        </form>
      </div>
      <!-- #endregion form -->

      <!-- #region clock cooldown -->
      <div class="w-6/12 c-card m-1">
        <div class="text-2xl">Cooldown Counter</div>
        <LazyBuffCooldownCounterClockTextViewV1 
          v-if="clockCooldown30s"
          :badge-text="buffsOptions[0].title" 
          :counter-text="clockCooldown30sInterval"
        />
        <LazyBuffCooldownCounterClockTextViewV1 
          v-if="clockCooldown60s"
          :badge-text="buffsOptions[1].title" 
          :counter-text="clockCooldown60sInterval"
        />
        <LazyBuffCooldownCounterClockTextViewV1 
          v-if="clockCooldown90s"
          :badge-text="buffsOptions[2].title" 
          :counter-text="clockCooldown90sInterval"
        />
        <LazyBuffCooldownCounterClockTextViewV1 
          v-if="clockCooldown120s"
          :badge-text="buffsOptions[3].title" 
          :counter-text="clockCooldown120sInterval"
        />
        <LazyBuffCooldownCounterClockTextViewV1 
          v-if="clockCooldown180s"
          :badge-text="buffsOptions[4].title" 
          :counter-text="clockCooldown180sInterval"
        />
        <LazyBuffCooldownCounterClockTextViewV1 
          v-if="clockCooldown300s"
          :badge-text="buffsOptions[5].title" 
          :counter-text="clockCooldown300sInterval"
        />
        <LazyBuffCooldownCounterClockTextViewV1 
          v-if="clockCooldown600s"
          :badge-text="buffsOptions[6].title" 
          :counter-text="clockCooldown600sInterval"
        />
      </div>
      <!-- #region clock cooldown -->
    </div>
  </main>
</template>
