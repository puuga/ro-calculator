<script setup lang="ts">
import { consola } from 'consola'
import { getAnalytics, logEvent } from 'firebase/analytics'

import { RN_BUFF_COOLDOWN_COUNTER_TOOL, getHead } from '@/app/router.options'

//#region use...
useHead(getHead(RN_BUFF_COOLDOWN_COUNTER_TOOL))

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
  {
    id: 'sound_4',
    title: 'Sound 4 - Speech synthesiser',
    value: 'SPEECH_SYNTHESIZER'
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
    id: 'buff_500s',
    title: 'Cooldown 500 s (8:20 m)',
    value: 'buff_500s'
  },
  {
    id: 'buff_600s',
    title: 'Cooldown 600 s (10:00 m)',
    value: 'buff_600s'
  },
  {
    id: 'buff_900s',
    title: 'Cooldown 900 s (15:00 m)',
    value: 'buff_900s'
  },
  {
    id: 'buff_1800s',
    title: 'Cooldown 1800 s (30:00 m)',
    value: 'buff_1800s'
  },
]

const clockCooldown: Record<string, globalThis.Ref<boolean>> = {
  '30': ref(false),
  '60': ref(false),
  '90': ref(false),
  '120': ref(false),
  '180': ref(false),
  '300': ref(false),
  '500': ref(false),
  '600': ref(false),
  '900': ref(false),
  '1800': ref(false),
}

const clockCooldownInterval: Record<string, globalThis.Ref<string>> = {
  '30': ref(''),
  '60': ref(''),
  '90': ref(''),
  '120': ref(''),
  '180': ref(''),
  '300': ref(''),
  '500': ref(''),
  '600': ref(''),
  '900': ref(''),
  '1800': ref(''),
}

let clockCooldownCountdownInterval: Record<string, number | undefined> = {
  '30': undefined,
  '60': undefined,
  '90': undefined,
  '120': undefined,
  '180': undefined,
  '300': undefined,
  '500': undefined,
  '600': undefined,
  '900': undefined,
  '1800': undefined,
}
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
    consola.log('BuffCooldownCounterView onFormSubmit clockCooldown', 30)
    clockCooldown['30'].value = true
    clockCooldownCountdown(sound.value, 30)
  }
  if (_buffs.includes('buff_60s')) {
    consola.log('BuffCooldownCounterView onFormSubmit clockCooldown', 60)
    clockCooldown['60'].value = true
    clockCooldownCountdown(sound.value, 60)
  }
  if (_buffs.includes('buff_90s')) {
    consola.log('BuffCooldownCounterView onFormSubmit clockCooldown', 90)
    clockCooldown['90'].value = true
    clockCooldownCountdown(sound.value, 90)
  }
  if (_buffs.includes('buff_120s')) {
    consola.log('BuffCooldownCounterView onFormSubmit clockCooldown', 120)
    clockCooldown['120'].value = true
    clockCooldownCountdown(sound.value, 120)
  }
  if (_buffs.includes('buff_180s')) {
    consola.log('BuffCooldownCounterView onFormSubmit clockCooldown', 180)
    clockCooldown['180'].value = true
    clockCooldownCountdown(sound.value, 180)
  }
  if (_buffs.includes('buff_300s')) {
    consola.log('BuffCooldownCounterView onFormSubmit clockCooldown', 300)
    clockCooldown['300'].value = true
    clockCooldownCountdown(sound.value, 300)
  }
  if (_buffs.includes('buff_500s')) {
    consola.log('BuffCooldownCounterView onFormSubmit clockCooldown', 500)
    clockCooldown['500'].value = true
    clockCooldownCountdown(sound.value, 500)
  }
  if (_buffs.includes('buff_600s')) {
    consola.log('BuffCooldownCounterView onFormSubmit clockCooldown', 600)
    clockCooldown['600'].value = true
    clockCooldownCountdown(sound.value, 600)
  }
  if (_buffs.includes('buff_900s')) {
    consola.log('BuffCooldownCounterView onFormSubmit clockCooldown', 900)
    clockCooldown['900'].value = true
    clockCooldownCountdown(sound.value, 900)
  }
  if (_buffs.includes('buff_1800s')) {
    consola.log('BuffCooldownCounterView onFormSubmit clockCooldown', 1800)
    clockCooldown['1800'].value = true
    clockCooldownCountdown(sound.value, 1800)
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

  if (window.speechSynthesis && soundPath === 'SPEECH_SYNTHESIZER') {
    const synth = window.speechSynthesis
    const utterThis = new SpeechSynthesisUtterance('หมดเวลาแล้ว เธอคงต้องไป')
    utterThis.lang = 'th-TH'
    synth.speak(utterThis)
  } else {
    const audio = new Audio(soundPath)
    audio.play()
  }
}

function playSound(soundPath: string, value?: number) {
  consola.log('BuffCooldownCounterView playSound soundPath', soundPath)
  consola.log('BuffCooldownCounterView playSound value', value)
  if (soundPath === '') {
    return
  }

  if (window.speechSynthesis && soundPath === 'SPEECH_SYNTHESIZER') {
    const synth = window.speechSynthesis
    const utterThis = new SpeechSynthesisUtterance(`หมดเวลา ${value} วินาที`)
    utterThis.lang = 'th-TH'
    synth.speak(utterThis)
  } else {
    const audio = new Audio(soundPath)
    audio.play()
  }
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
  for (const key in clockCooldownCountdownInterval) {
    clearInterval(clockCooldownCountdownInterval[key])
    clockCooldownCountdownInterval[key] = undefined
  }
  for (const key in clockCooldown) {
    clockCooldown[key].value = false
  }
  for (const key in clockCooldownInterval) {
    clockCooldownInterval[key].value = ''
  }
}

function clockCooldownCountdown(soundPath: string, second: number) {
  clockCooldown[`${second}`].value = true
  let countdownSecond = second
  clockCooldownCountdownInterval[`${second}`] = window.setInterval(() => {
    countdownSecond--
    consola.log('BuffCooldownCounterView clockCooldownCountdown', countdownSecond)
    clockCooldownInterval[`${second}`].value = countdownSecond.toString()
    if (countdownSecond <= 0) {
      clearInterval(clockCooldownCountdownInterval[`${second}`])
      clockCooldown[`${second}`].value = false
      playSound(soundPath, second)
      if (notification.value) {
        fireNotification('Buff Cooldown', `${second}s Cooldown is ready`)
      }

      clockCooldownCountdown(soundPath, second)
    }
  }, 1000)
}
//#endregion methods
</script>

<template>
  <main class="container mx-auto">
    <h1 class="text-4xl font-bold">Cooldown Counter | RO-Calculator</h1>

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
                :value="option.value"
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
            <button type="submit" class="c-btn-primary w-full my-1">
              Start Selected
            </button>
            <button type="button" class="c-btn-secondary w-full my-1" @click="stopCountdown()">
              Stop All
            </button>
            <button type="reset" class="c-btn-secondary w-full my-1">
              Reset
            </button>
          </div>
          <!-- #endregion submit -->
        </form>
      </div>
      <!-- #endregion form -->

      <!-- #region clock cooldown -->
      <div class="w-6/12 c-card m-1">
        <div class="text-2xl">Cooldown Counter</div>
        <LazyBuffCooldownCounterClockTextViewV1 
          v-if="clockCooldown['30'].value"
          :badge-text="buffsOptions[0].title" 
          :counter-text="clockCooldownInterval['30'].value"
          :max="30"
          :value="+clockCooldownInterval['30'].value"
        />
        <LazyBuffCooldownCounterClockTextViewV1 
          v-if="clockCooldown['60'].value"
          :badge-text="buffsOptions[1].title" 
          :counter-text="clockCooldownInterval['60'].value"
          :max="60"
          :value="+clockCooldownInterval['60'].value"
        />
        <LazyBuffCooldownCounterClockTextViewV1 
          v-if="clockCooldown['90'].value"
          :badge-text="buffsOptions[2].title" 
          :counter-text="clockCooldownInterval['90'].value"
          :max="90"
          :value="+clockCooldownInterval['90'].value"
        />
        <LazyBuffCooldownCounterClockTextViewV1 
          v-if="clockCooldown['120'].value"
          :badge-text="buffsOptions[3].title" 
          :counter-text="clockCooldownInterval['120'].value"
          :max="120"
          :value="+clockCooldownInterval['120'].value"
        />
        <LazyBuffCooldownCounterClockTextViewV1 
          v-if="clockCooldown['180'].value"
          :badge-text="buffsOptions[4].title" 
          :counter-text="clockCooldownInterval['180'].value"
          :max="180"
          :value="+clockCooldownInterval['180'].value"
        />
        <LazyBuffCooldownCounterClockTextViewV1 
          v-if="clockCooldown['300'].value"
          :badge-text="buffsOptions[5].title" 
          :counter-text="clockCooldownInterval['300'].value"
          :max="300"
          :value="+clockCooldownInterval['300'].value"
        />
        <LazyBuffCooldownCounterClockTextViewV1 
          v-if="clockCooldown['500'].value"
          :badge-text="buffsOptions[6].title" 
          :counter-text="clockCooldownInterval['500'].value"
          :max="500"
          :value="+clockCooldownInterval['500'].value"
        />
        <LazyBuffCooldownCounterClockTextViewV1 
          v-if="clockCooldown['600'].value"
          :badge-text="buffsOptions[7].title" 
          :counter-text="clockCooldownInterval['600'].value"
          :max="600"
          :value="+clockCooldownInterval['600'].value"
        />
        <LazyBuffCooldownCounterClockTextViewV1 
          v-if="clockCooldown['900'].value"
          :badge-text="buffsOptions[8].title" 
          :counter-text="clockCooldownInterval['900'].value"
          :max="900"
          :value="+clockCooldownInterval['900'].value"
        />
        <LazyBuffCooldownCounterClockTextViewV1 
          v-if="clockCooldown['1800'].value"
          :badge-text="buffsOptions[9].title" 
          :counter-text="clockCooldownInterval['1800'].value"
          :max="1800"
          :value="+clockCooldownInterval['1800'].value"
        />
      </div>
      <!-- #region clock cooldown -->
    </div>
  </main>
</template>
