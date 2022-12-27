<script setup lang="ts">
import consola from 'consola'

useHead({
  title: 'Cooldown Counter | RO-Calculator',
  meta: [
    { name: 'description', content: 'Cooldown Counter' }
  ],
})

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
    title: 'Buff 30s',
    value: 'buff_30s'
  },
  {
    id: 'buff_60s',
    title: 'Buff 60s (1 m)',
    value: 'buff_60s'
  },
  {
    id: 'buff_90s',
    title: 'Buff 90s (1:30 m)',
    value: 'buff_90s'
  },
  {
    id: 'buff_120s',
    title: 'Buff 120s (2 m)',
    value: 'buff_120s'
  },
  {
    id: 'buff_180s',
    title: 'Buff 180s (3 m)',
    value: 'buff_180s'
  },
  {
    id: 'buff_300s',
    title: 'Buff 300s (5 m)',
    value: 'buff_300s'
  },
  {
    id: 'buff_6000s',
    title: 'Buff 6000s (10 m)',
    value: 'buff_6000s'
  },
]

const clockCooldown30s = ref(false)
const clockCooldown60s = ref(false)
const clockCooldown90s = ref(false)
const clockCooldown120s = ref(false)
const clockCooldown180s = ref(false)
const clockCooldown300s = ref(false)
const clockCooldown6000s = ref(false)

const clockCooldown30sInterval = ref('')
const clockCooldown60sInterval = ref('')
const clockCooldown90sInterval = ref('')
const clockCooldown120sInterval = ref('')
const clockCooldown180sInterval = ref('')
const clockCooldown300sInterval = ref('')
const clockCooldown6000sInterval = ref('')

let clockCooldown30sCountdownInterval: any
let clockCooldown60sCountdownInterval: any
let clockCooldown90sCountdownInterval: any
let clockCooldown120sCountdownInterval: any
let clockCooldown180sCountdownInterval: any
let clockCooldown300sCountdownInterval: any
let clockCooldown6000sCountdownInterval: any


function onFormSubmit(event: Event) {
  event.preventDefault()

  consola.log('BuffCooldownCounterView onFormSubmit')
  consola.log('BuffCooldownCounterView onFormSubmit sound', sound.value)
  consola.log('BuffCooldownCounterView onFormSubmit buffs', buffs.value)

  if ((buffs.value as string[]).includes('buff_30s')) {
    clockCooldown30s.value = true
    consola.log('BuffCooldownCounterView clockCooldown30s')
    clockCooldown30sCountdown(sound.value)
  }
  if ((buffs.value as string[]).includes('buff_60s')) {
    clockCooldown60s.value = true
    consola.log('BuffCooldownCounterView clockCooldown60s')
    clockCooldown60sCountdown(sound.value)
  }
  if ((buffs.value as string[]).includes('buff_90s')) {
    clockCooldown90s.value = true
    consola.log('BuffCooldownCounterView clockCooldown90s')
    clockCooldown90sCountdown(sound.value)
  }
  if ((buffs.value as string[]).includes('buff_120s')) {
    clockCooldown120s.value = true
    consola.log('BuffCooldownCounterView clockCooldown120s')
    clockCooldown120sCountdown(sound.value)
  }
  if ((buffs.value as string[]).includes('buff_180s')) {
    clockCooldown180s.value = true
    consola.log('BuffCooldownCounterView clockCooldown180s')
    clockCooldown180sCountdown(sound.value)
  }
  if ((buffs.value as string[]).includes('buff_300s')) {
    clockCooldown300s.value = true
    consola.log('BuffCooldownCounterView clockCooldown300s')
    clockCooldown300sCountdown(sound.value)
  }
  if ((buffs.value as string[]).includes('buff_6000s')) {
    clockCooldown6000s.value = true
    consola.log('BuffCooldownCounterView clockCooldown6000s')
    clockCooldown6000sCountdown(sound.value)
  }
}

function previewSound(soundPath: string) {
  consola.log('BuffCooldownCounterView previewSound', soundPath)
  const audio = new Audio(soundPath)
  audio.play()
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

  clearInterval(clockCooldown6000sCountdownInterval)
  clockCooldown6000s.value = false
  clockCooldown6000sInterval.value = ''
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
      const audio = new Audio(soundPath)
      audio.play()

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
      const audio = new Audio(soundPath)
      audio.play()

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
      const audio = new Audio(soundPath)
      audio.play()

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
      const audio = new Audio(soundPath)
      audio.play()

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
      const audio = new Audio(soundPath)
      audio.play()

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
      const audio = new Audio(soundPath)
      audio.play()

      clockCooldown300sCountdown(soundPath)
    }
  }, 1000)
}
function clockCooldown6000sCountdown(soundPath: string) {
  clockCooldown6000s.value = true
  let seconds = 6000
  clockCooldown6000sCountdownInterval = setInterval(() => {
    seconds--
    consola.log('BuffCooldownCounterView clockCooldown6000sCountdown', seconds)
    clockCooldown6000sInterval.value = seconds.toString()
    if (seconds <= 0) {
      clearInterval(clockCooldown6000sCountdownInterval)
      clockCooldown6000s.value = false
      const audio = new Audio(soundPath)
      audio.play()

      clockCooldown6000sCountdown(soundPath)
    }
  }, 1000)
}
</script>

<template>
  <main class="container mx-auto">
    <h1 class="text-4xl font-bold">BuffCooldownCounterView</h1>

    <div>SEO: Cooldown Counter</div>

    <div class="flex">
      <!-- #region form -->
      <div>
        <form @submit="onFormSubmit">
          <!-- #region input sound -->
          <div>
            <div class="text-xl">Sound</div>
            <div v-for="option in soundOptions" :key="option.id" class="my-1">
              <button type="button" @click="previewSound(option.value)" class="c-btn-primary">Preview Sound</button>
              <input type="radio" v-model="sound" :id="option.id" name="soundInput" :value="soundOptions[0].value"
                class="mx-2" required />
              <label :for="option.id">{{ option.title }}</label>
            </div>
          </div>
          <!-- #endregion input sound -->

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
            <button type="submit" class="c-btn-primary">Start</button>
            <button type="button" class="c-btn-primary mx-1" @click="stopCountdown()">Stop</button>
            <button type="reset" class="c-btn-primary">Reset</button>
          </div>
          <!-- #endregion submit -->
        </form>
      </div>
      <!-- #endregion form -->

      <!-- #region clock cooldown -->
      <div class="grow">
        <div class="">Cooldown</div>
        <div v-if="clockCooldown30s">buff_30s: {{ clockCooldown30sInterval }}</div>
        <div v-if="clockCooldown60s">buff_60s: {{ clockCooldown60sInterval }}</div>
        <div v-if="clockCooldown90s">buff_90s: {{ clockCooldown90sInterval }}</div>
        <div v-if="clockCooldown120s">buff_120s: {{ clockCooldown120sInterval }}</div>
        <div v-if="clockCooldown180s">buff_180s: {{ clockCooldown180sInterval }}</div>
        <div v-if="clockCooldown300s">buff_300s: {{ clockCooldown300sInterval }}</div>
        <div v-if="clockCooldown6000s">buff_6000s: {{ clockCooldown6000sInterval }}</div>
      </div>
      <!-- #region clock cooldown -->
    </div>
  </main>
</template>
