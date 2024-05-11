<script setup lang="ts">
import { consola } from 'consola'
import { getAnalytics, logEvent } from 'firebase/analytics'

import { RN_BUFF_COOLDOWN_COUNTER_TOOL, getHead } from '@/app/router.options'

//#region use...
useHead(getHead(RN_BUFF_COOLDOWN_COUNTER_TOOL))

const { $firebaseApp } = useNuxtApp()
//#endregion use...

// https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API
let synth: SpeechSynthesis | undefined = undefined

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
    title: 'Sound 4 - Speech synthesiser TH',
    value: 'SPEECH_SYNTHESIZER_TH'
  },
  {
    id: 'sound_5',
    title: 'Sound 5 - Speech synthesiser EN',
    value: 'SPEECH_SYNTHESIZER_EN'
  },
]

const buffs = ref([])
const buffsOptions = [
  {
    id: 'buff_30s',
    title: 'Cooldown 30 s (0:30 m)',
    value: 'buff_30s',
    max: 30,
  },
  {
    id: 'buff_60s',
    title: 'Cooldown 60 s (1:00 m)',
    value: 'buff_60s',
    max: 60,
  },
  {
    id: 'buff_90s',
    title: 'Cooldown 90 s (1:30 m)',
    value: 'buff_90s',
    max: 90,
  },
  {
    id: 'buff_120s',
    title: 'Cooldown 120 s (2:00 m)',
    value: 'buff_120s',
    max: 120,
  },
  {
    id: 'buff_180s',
    title: 'Cooldown 180 s (3:00 m)',
    value: 'buff_180s',
    max: 180,
  },
  {
    id: 'buff_300s',
    title: 'Cooldown 300 s (5:00 m)',
    value: 'buff_300s',
    max: 300,
  },
  {
    id: 'buff_500s',
    title: 'Cooldown 500 s (8:20 m)',
    value: 'buff_500s',
    max: 500,
  },
  {
    id: 'buff_600s',
    title: 'Cooldown 600 s (10:00 m)',
    value: 'buff_600s',
    max: 600,
  },
  {
    id: 'buff_900s',
    title: 'Cooldown 900 s (15:00 m)',
    value: 'buff_900s',
    max: 900,
  },
  {
    id: 'buff_1200s',
    title: 'Cooldown 1200 s (20:00 m)',
    value: 'buff_1200s',
    max: 1200,
  },
  {
    id: 'buff_1800s',
    title: 'Cooldown 1800 s (30:00 m)',
    value: 'buff_1800s',
    max: 1800,
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
  '1200': ref(false),
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
  '1200': ref(''),
  '1800': ref(''),
}

const clockCooldownCountdownInterval: Record<string, number | undefined> = {
  '30': undefined,
  '60': undefined,
  '90': undefined,
  '120': undefined,
  '180': undefined,
  '300': undefined,
  '500': undefined,
  '600': undefined,
  '900': undefined,
  '1200': undefined,
  '1800': undefined,
}
//#endregion refs

//#region vue lifecycle
onMounted(() => {
  consola.log('BuffCooldownCounterView onMounted')
  
  synth = window.speechSynthesis
})
//#endregion vue lifecycle

//#region methods
function onFormSubmit(event: Event) {
  event.preventDefault()

  consola.log('BuffCooldownCounterView onFormSubmit')
  consola.log('BuffCooldownCounterView onFormSubmit sound', sound.value)
  consola.log('BuffCooldownCounterView onFormSubmit notification', notification.value)
  consola.log('BuffCooldownCounterView onFormSubmit buffs', buffs.value)

  const _buffs = buffs.value as string[]
  for (const buff of _buffs) { // buff_30s, buff_60s
    const buffsOption = buffsOptions.find((option) => option.value === buff)
    if (buffsOption) {
      consola.log('BuffCooldownCounterView onFormSubmit clockCooldown', buffsOption.max)
      clockCooldown[`${buffsOption.max}`].value = true
      clockCooldownCountdown(sound.value, buffsOption.max)
    }
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

  if (window.speechSynthesis 
    && synth 
    && ['SPEECH_SYNTHESIZER_TH', 'SPEECH_SYNTHESIZER_EN'].includes(soundPath)
  ) {
    const utterThis = new SpeechSynthesisUtterance()
    if (soundPath === 'SPEECH_SYNTHESIZER_EN') {
      utterThis.text = 'Time is up, you have to go'
      utterThis.lang = 'en-US'
    } else if (soundPath === 'SPEECH_SYNTHESIZER_TH') {
      utterThis.text = 'หมดเวลาแล้ว เธอคงต้องไป'
      utterThis.lang = 'th-TH'
    }

    utterThis.onerror = (event) => {
      consola.error('BuffCooldownCounterView previewSound onerror', event)
    }
    utterThis.onstart = (event) => {
      consola.log('BuffCooldownCounterView previewSound onstart', event)
    }
    utterThis.onend = (event) => {
      consola.log('BuffCooldownCounterView previewSound onend', event)
    }

    synth.speak(utterThis)
  } else {
    const audio = new Audio(soundOptions[0].value)
    audio.play()
  }
}

function playSound(soundPath: string, value?: number) {
  consola.log('BuffCooldownCounterView playSound soundPath', soundPath)
  consola.log('BuffCooldownCounterView playSound value', value)
  if (soundPath === '') {
    return
  }

  if (window.speechSynthesis 
    && synth 
    && ['SPEECH_SYNTHESIZER_TH', 'SPEECH_SYNTHESIZER_EN'].includes(soundPath)
  ) {
    const synth = window.speechSynthesis
    const utterThis = new SpeechSynthesisUtterance()
    utterThis.lang = 'th-TH'
    if (soundPath === 'SPEECH_SYNTHESIZER_EN') {
      utterThis.text = `${value} seconds end`
      utterThis.lang = 'en-US'
    } else if (soundPath === 'SPEECH_SYNTHESIZER_TH') {
      utterThis.text = `หมดเวลา ${value} วินาที`
      utterThis.lang = 'th-TH'
    }

    synth.speak(utterThis)
  } else {
    const audio = new Audio(soundOptions[0].value)
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
        <template v-for="(cooldown, key, index) in clockCooldown">
          <LazyBuffCooldownCounterClockTextViewV1 
            v-if="clockCooldown[key].value"
            :badge-text="buffsOptions[index].title" 
            :counter-text="clockCooldownInterval[key].value"
            :max="buffsOptions[index].max"
            :value="+clockCooldownInterval[key].value"
          />
        </template>
      </div>
      <!-- #region clock cooldown -->
    </div>
  </main>
</template>
