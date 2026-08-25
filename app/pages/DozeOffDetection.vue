<script setup lang="ts">
import { RN_DOZE_OFF_DETECTION, getHead } from '@/router.options'


//#region use...
useHead(getHead(RN_DOZE_OFF_DETECTION))
//#endregion use...


//#region data...
const dozeDetectionThresholdMs = 1_800
const alertBeepIntervalMs = 1_000

const videoElement = ref<HTMLVideoElement | null>(null)
const isRunning = ref(false)
const isLoading = ref(false)
const errorMessage = ref('')
const faceVisible = ref(false)
const eyesClosed = ref(false)
const closedForMs = ref(0)
const lastSampleAt = ref(0)
const animationFrame = ref<number | null>(null)
const mediaStream = ref<MediaStream | null>(null)
const faceLandmarker = ref<{ detectForVideo: (video: HTMLVideoElement, timestamp: number) => { faceLandmarks?: Array<Array<{ x: number, y: number }>> } } | null>(null)
const audioContext = ref<AudioContext | null>(null)
const alertPlayed = ref(false)
const alertInterval = ref<number | null>(null)
//#endregion data...


//#region computed...
const dozeDetected = computed(() => closedForMs.value >= dozeDetectionThresholdMs)
const statusText = computed(() => {
  if (dozeDetected.value) return 'Wake-up alert'
  if (!isRunning.value) return 'Camera paused'
  if (!faceVisible.value) return 'Looking for a face'
  if (eyesClosed.value) return 'Eyes closed'
  return 'Eyes open'
})
//#endregion computed...


//#region hooks...
onBeforeUnmount(stopDetection)
//#endregion hooks...


//#region methods...
function eyeOpenness(landmarks: Array<{ x: number, y: number }>, points: number[]) {
  const distance = (first: number, second: number) => Math.hypot(landmarks[first]!.x - landmarks[second]!.x, landmarks[first]!.y - landmarks[second]!.y)
  return (distance(points[1]!, points[5]!) + distance(points[2]!, points[4]!)) / (2 * distance(points[0]!, points[3]!))
}

function playAlertBeep() {
  if (!audioContext.value) return
  const oscillator = audioContext.value.createOscillator()
  const gain = audioContext.value.createGain()
  const startAt = audioContext.value.currentTime

  oscillator.type = 'sine'
  oscillator.frequency.setValueAtTime(880, startAt)
  gain.gain.setValueAtTime(0.0001, startAt)
  gain.gain.exponentialRampToValueAtTime(0.25, startAt + 0.01)
  gain.gain.exponentialRampToValueAtTime(0.0001, startAt + 0.25)
  oscillator.connect(gain)
  gain.connect(audioContext.value.destination)
  oscillator.start(startAt)
  oscillator.stop(startAt + 0.25)
}

function stopAlertBeep() {
  if (alertInterval.value !== null) window.clearInterval(alertInterval.value)
  alertInterval.value = null
  alertPlayed.value = false
}

function sampleFace() {
  if (!videoElement.value || !faceLandmarker.value || !isRunning.value) return
  const now = performance.now()
  const result = faceLandmarker.value.detectForVideo(videoElement.value, now)
  const landmarks = result.faceLandmarks?.[0]
  faceVisible.value = Boolean(landmarks)

  if (landmarks) {
    const openness = (eyeOpenness(landmarks, [33, 160, 158, 133, 153, 144]) + eyeOpenness(landmarks, [362, 385, 387, 263, 373, 380])) / 2
    eyesClosed.value = openness < 0.19
    const elapsed = lastSampleAt.value ? now - lastSampleAt.value : 0
    closedForMs.value = eyesClosed.value ? closedForMs.value + elapsed : 0
    if (closedForMs.value >= dozeDetectionThresholdMs && !alertPlayed.value) {
      alertPlayed.value = true
      playAlertBeep()
      alertInterval.value = window.setInterval(playAlertBeep, alertBeepIntervalMs)
    } else if (!eyesClosed.value && alertPlayed.value) {
      stopAlertBeep()
    }
  } else {
    eyesClosed.value = false
    closedForMs.value = 0
    stopAlertBeep()
  }

  lastSampleAt.value = now
  animationFrame.value = requestAnimationFrame(sampleFace)
}

async function startDetection() {
  if (isRunning.value) return
  isLoading.value = true
  errorMessage.value = ''

  try {
    audioContext.value ??= new AudioContext()
    await audioContext.value.resume()
    const { FaceLandmarker, FilesetResolver } = await import('@mediapipe/tasks-vision')
    const vision = await FilesetResolver.forVisionTasks('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm')
    faceLandmarker.value = markRaw(await FaceLandmarker.createFromOptions(vision, {
      baseOptions: { modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task' },
      runningMode: 'VIDEO',
      numFaces: 1,
    }))
    mediaStream.value = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false })
    if (!videoElement.value) return
    videoElement.value.srcObject = mediaStream.value
    await videoElement.value.play()
    isRunning.value = true
    lastSampleAt.value = performance.now()
    animationFrame.value = requestAnimationFrame(sampleFace)
  } catch (error) {
    errorMessage.value = error instanceof DOMException && error.name === 'NotAllowedError'
      ? 'Camera access was denied. Allow camera access and try again.'
      : 'Unable to start the camera. Check that this page is served over HTTPS.'
    stopDetection()
  } finally {
    isLoading.value = false
  }
}

function stopDetection() {
  if (animationFrame.value !== null) cancelAnimationFrame(animationFrame.value)
  mediaStream.value?.getTracks().forEach(track => track.stop())
  if (videoElement.value) videoElement.value.srcObject = null
  animationFrame.value = null
  mediaStream.value = null
  isRunning.value = false
  faceVisible.value = false
  eyesClosed.value = false
  closedForMs.value = 0
  stopAlertBeep()
  audioContext.value?.close()
  audioContext.value = null
}
//#endregion methods...
</script>


<template>
  <main
    class="mx-auto min-h-screen max-w-5xl px-4 py-8 sm:px-6 lg:px-8"
  >
    <div class="mb-8 max-w-2xl">
      <p
        class="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-300"
      >
        Focus monitor
      </p>
      <h1 class="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
        Doze Off Detection
      </h1>
      <p class="mt-3 text-slate-600 dark:text-slate-300">
        Keep your eyes on the screen. The camera stays in your browser and raises an alert when your eyes remain closed.
      </p>
    </div>

    <section
      class="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.6fr)]"
    >
      <div class="overflow-hidden rounded-2xl bg-slate-950 shadow-xl">
        <div class="relative aspect-video">
          <video
            ref="videoElement"
            class="h-full w-full object-cover"
            autoplay
            muted
            playsinline
          ></video>
          <div
            v-if="!isRunning"
            class="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 px-6 text-center text-white"
          >
            <p class="text-lg font-semibold">
              Camera is ready
            </p>
            <p class="mt-1 text-sm text-slate-300">
              Start monitoring to begin eye-state detection.
            </p>
          </div>
          <div
            v-if="dozeDetected"
            class="absolute inset-x-4 top-4 rounded-lg bg-rose-500 px-4 py-3 text-center font-bold text-white shadow-lg"
          >
            Wake up and take a short break.
          </div>
        </div>
        <div class="flex items-center justify-between gap-4 px-4 py-4 text-white">
          <div class="flex items-center gap-2 text-sm">
            <span
              class="h-2.5 w-2.5 rounded-full"
              :class="isRunning ? 'bg-emerald-400' : 'bg-slate-500'"
            ></span>
            {{ statusText }}
          </div>
          <button
            v-if="!isRunning"
            type="button"
            class="c-btn-primary"
            :disabled="isLoading"
            @click="startDetection"
          >
            {{ isLoading ? 'Starting...' : 'Start monitoring' }}
          </button>
          <button
            v-else
            type="button"
            class="c-btn-secondary"
            @click="stopDetection"
          >
            Stop
          </button>
        </div>
      </div>

      <aside class="c-card flex flex-col justify-between gap-8">
        <div>
          <p class="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Live signal
          </p>
          <div class="mt-4 flex items-end gap-2">
            <span class="text-6xl font-bold tabular-nums text-slate-900 dark:text-white">
              {{ (closedForMs / 1000).toFixed(1) }}
            </span>
            <span class="mb-2 text-slate-500">
              seconds closed
            </span>
          </div>
          <div class="mt-5 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
            <div
              class="h-full rounded-full transition-all"
              :class="dozeDetected ? 'bg-rose-500' : 'bg-indigo-500'"
              :style="{ width: `${Math.min(closedForMs / 18, 100)}%` }"
            ></div>
          </div>
        </div>
        <p
          v-if="errorMessage"
          class="rounded-lg bg-rose-50 p-3 text-sm text-rose-700 dark:bg-rose-950 dark:text-rose-200"
        >
          {{ errorMessage }}
        </p>
        <p
          v-else
          class="text-sm leading-6 text-slate-600 dark:text-slate-300"
        >
          A wake-up alert appears after {{ dozeDetectionThresholdMs / 1000 }} seconds of sustained eye closure. Good lighting and a forward-facing camera improve accuracy.
        </p>
      </aside>
    </section>
  </main>
</template>