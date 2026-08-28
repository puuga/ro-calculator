<script setup lang="ts">
import { consola } from 'consola'
import { getAnalytics, logEvent } from 'firebase/analytics'

import { RN_BUFF_NOTIFICATION, getHead } from '@/router.options'


//#region use...
useHead(getHead(RN_BUFF_NOTIFICATION))

//#endregion use...


//#region refs
const videoElem = useTemplateRef('video')
const logElem = useTemplateRef('log')
const screenshotElem = useTemplateRef('screenshot')
const iconDefElem = useTemplateRef('iconDefElem')
const match01Elem = useTemplateRef('match01')
const match02Elem = useTemplateRef('match02')
const match03Elem = useTemplateRef('match03')
const match04Elem = useTemplateRef('match04')
const notMatch01Elem = useTemplateRef('notMatch01')

const buffStatus = ref('Not running')
const buffMatchScore = ref<number | undefined>()
const referenceScores = ref<Record<string, number | undefined>>({})
let engineInterval: ReturnType<typeof setInterval> | undefined
let previousDefActive: boolean | undefined

const DEF_ICON_SIZE = 32
const DEF_SEARCH_WIDTH = 620
const DEF_SEARCH_HEIGHT = 180
const DEF_MATCH_THRESHOLD = 0.18
//#endregion refs


//#region vue lifecycle
onMounted(() => {
  consola.log('BuffNotificationView onMounted')
})

onBeforeUnmount(() => {
  stopEngine()
})
//#endregion vue lifecycle


//#region methods
async function selectGameWindowAndStartEngine() {
  consola.log('BuffNotificationView selectGameWindowAndStartEngine')

  const analytics = getAnalytics(useNuxtApp().$firebaseApp())
  logEvent(analytics, 'select_game_window_and_start_engine')

  await startCapture()
  await startEngine()
}

async function stopEngine() {
  consola.log('BuffNotificationView stopEngine')

  const analytics = getAnalytics(useNuxtApp().$firebaseApp())
  logEvent(analytics, 'stop_engine')

  stopDetection()
  stopCapture()
}

async function startCapture() {
  if (!videoElem.value) {
    consola.error('BuffNotificationView videoElem is null')
    return
  }

  try {
    const displayMediaOptions = {
      video: {
        displaySurface: "window",
      },
      audio: false,
    }
    videoElem.value.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions)
    await videoElem.value.play()
    const stream = videoElem.value.srcObject as MediaStream
    stream.getVideoTracks()[0]?.addEventListener('ended', stopEngine)
    dumpOptionsInfo()
  } catch (err) {
    consola.error('BuffNotificationView startCapture error:', err)
  }
}

function stopCapture() {
  if (!videoElem.value) {
    consola.error('BuffNotificationView videoElem is null')
    return
  }

  if (!videoElem.value.srcObject) {
    consola.warn('BuffNotificationView videoElem.srcObject is null')
    return
  }

  const tracks = (videoElem.value.srcObject as MediaStream).getTracks()

  tracks.forEach((track) => track.stop())
  videoElem.value.srcObject = null
}

function stopDetection() {
  if (engineInterval) {
    clearInterval(engineInterval)
    engineInterval = undefined
  }
  buffStatus.value = 'Not running'
  buffMatchScore.value = undefined
  previousDefActive = undefined
}

function dumpOptionsInfo() {
  if (!videoElem.value) {
    consola.error('BuffNotificationView videoElem is null')
    return
  }

  const videoTracks = (videoElem.value.srcObject as MediaStream).getVideoTracks();

  if (!videoTracks || videoTracks.length === 0) {
    consola.error('BuffNotificationView videoTrack is null')
    return
  }

  for (const track of videoTracks) {
    consola.log("Track settings:");
    consola.log(JSON.stringify(track.getSettings(), null, 2));
    consola.log("Track constraints:");
    consola.log(JSON.stringify(track.getConstraints(), null, 2));
  }

  
}

async function startEngine() {
  consola.log('BuffNotificationView startEngine')

  if (!videoElem.value) {
    consola.error('BuffNotificationView videoElem is null')
    return
  }
  if (!videoElem.value.srcObject) {
    consola.error('BuffNotificationView videoElem.srcObject is null')
    return
  }

  stopDetection()
  buffStatus.value = 'Watching'
  await inspectCurrentFrame()
  engineInterval = setInterval(inspectCurrentFrame, 1000)
}

async function inspectCurrentFrame() {
  const video = videoElem.value
  const screenshot = screenshotElem.value
  const icon = iconDefElem.value

  if (!video || !screenshot || !icon || video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
    return
  }

  screenshot.width = video.videoWidth
  screenshot.height = video.videoHeight
  const context = screenshot.getContext('2d', { willReadFrequently: true })
  if (!context || screenshot.width === 0 || screenshot.height === 0) {
    return
  }

  context.drawImage(video, 0, 0, screenshot.width, screenshot.height)
  const result = findTemplate(screenshot, icon)
  buffMatchScore.value = result.score

  if (result.active !== previousDefActive) {
    previousDefActive = result.active
    buffStatus.value = result.active ? 'DEF active' : 'DEF ended'
    consola.log('BuffNotificationView DEF status:', buffStatus.value, 'score:', result.score)
  }
}

function findTemplate(source: HTMLCanvasElement, template: HTMLImageElement) {
  const width = Math.min(DEF_SEARCH_WIDTH, source.width - DEF_ICON_SIZE)
  const height = Math.min(DEF_SEARCH_HEIGHT, source.height - DEF_ICON_SIZE)
  if (width <= 0 || height <= 0 || !template.complete || template.naturalWidth === 0) {
    return { active: false, score: undefined }
  }

  const sourceContext = source.getContext('2d', { willReadFrequently: true })
  const templateCanvas = document.createElement('canvas')
  templateCanvas.width = DEF_ICON_SIZE
  templateCanvas.height = DEF_ICON_SIZE
  const templateContext = templateCanvas.getContext('2d', { willReadFrequently: true })
  if (!sourceContext || !templateContext) {
    return { active: false, score: undefined }
  }

  templateContext.drawImage(template, 0, 0, DEF_ICON_SIZE, DEF_ICON_SIZE)
  const sourcePixels = sourceContext.getImageData(0, 0, width + DEF_ICON_SIZE, height + DEF_ICON_SIZE).data
  const templatePixels = templateContext.getImageData(0, 0, DEF_ICON_SIZE, DEF_ICON_SIZE).data
  let bestScore = Number.POSITIVE_INFINITY

  // Search the buff HUD only. Sampling every other pixel keeps 1 FPS detection inexpensive.
  for (let y = 0; y <= height; y += 2) {
    for (let x = 0; x <= width; x += 2) {
      let difference = 0
      for (let templateY = 0; templateY < DEF_ICON_SIZE; templateY += 2) {
        for (let templateX = 0; templateX < DEF_ICON_SIZE; templateX += 2) {
          const sourceIndex = ((y + templateY) * (width + DEF_ICON_SIZE) + x + templateX) * 4
          const templateIndex = (templateY * DEF_ICON_SIZE + templateX) * 4
          difference += Math.abs(sourcePixels[sourceIndex]! - templatePixels[templateIndex]!)
          difference += Math.abs(sourcePixels[sourceIndex + 1]! - templatePixels[templateIndex + 1]!)
          difference += Math.abs(sourcePixels[sourceIndex + 2]! - templatePixels[templateIndex + 2]!)
        }
      }
      bestScore = Math.min(bestScore, difference / (16 * 16 * 3 * 255))
    }
  }

  return { active: bestScore <= DEF_MATCH_THRESHOLD, score: Number(bestScore.toFixed(3)) }
}

function getImageDataBuffer(imgElement: HTMLImageElement) {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = imgElement.naturalWidth
  canvas.height = imgElement.naturalHeight

  if (!ctx) {
    return null
  }
  ctx.drawImage(imgElement, 0, 0)

  // imageData.data is a Uint8ClampedArray representing RGBA values
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  consola.log('BuffNotificationView imageData:', imageData)
  return imageData
}

async function inspectReferenceImages() {
  if (!iconDefElem.value) {
    return
  }

  const references = [
    ['match01', match01Elem.value],
    ['match02', match02Elem.value],
    ['match03', match03Elem.value],
    ['match04', match04Elem.value],
    ['notMatch01', notMatch01Elem.value],
  ] as const

  await Promise.all(references.map(async ([id, image]) => {
    if (!image) {
      return
    }
    await waitForImage(image)
    const canvas = document.createElement('canvas')
    canvas.width = image.naturalWidth
    canvas.height = image.naturalHeight
    const context = canvas.getContext('2d')
    if (!context) {
      return
    }
    context.drawImage(image, 0, 0)
    referenceScores.value[id] = findTemplate(canvas, iconDefElem.value!).score
  }))
}

async function runReferenceTest() {
  referenceScores.value = {}
  await inspectReferenceImages()
}

function isReferenceMatch(id: string) {
  const score = referenceScores.value[id]
  return score !== undefined && score <= DEF_MATCH_THRESHOLD
}

function waitForImage(image: HTMLImageElement) {
  if (image.complete) {
    return Promise.resolve()
  }
  return new Promise<void>((resolve) => {
    image.addEventListener('load', () => resolve(), { once: true })
    image.addEventListener('error', () => resolve(), { once: true })
  })
}
//#endregion methods
</script>



<template>
  <main class="container mx-auto">
    <h1 class="text-4xl font-bold">Buff Notification | RO-Calculator [Beta]</h1>

    <div>SEO: Buff Notification</div>

    <!-- #region control -->
    <div class="c-card my-3">
      Control
      <div class="flex gap-3">
        <button class="c-btn-primary" @click="selectGameWindowAndStartEngine">
          Select Game Window and Start Engine
        </button>
        <button class="c-btn-secondary" @click="stopEngine">
          Stop Engine
        </button>
      </div>
      <div class="mt-3">
        DEF status: <strong>{{ buffStatus }}</strong>
        <span v-if="buffMatchScore !== undefined"> (match score: {{ buffMatchScore }})</span>
      </div>
    </div>
    <!-- #endregion control -->

    <!-- #region content -->
    <div class="c-card grid grid-cols-2 gap-3 my-3">
      <div>
        <div>Video Stream</div>
        <video id="video" ref="video" autoplay></video>
      </div>
      <div>
        Log:
        <pre id="log" ref="log"></pre>
        Preview Screenshot (Every 1 second):
        <canvas id="screenshot" ref="screenshot" class="max-w-full"></canvas>
      </div>
    </div>
    <!-- #endregion content -->

    <!-- #region reference -->
    <div class="c-card my-3">
      Reference
      <div class="my-3">
        <button class="c-btn-primary" @click="runReferenceTest">
          Run Reference Test
        </button>
      </div>
      <div>
        Def icon
        <div>
          <img id="iconDef" ref="iconDefElem" src="/images/buff-notification/icon-def-v2.jpg" class="" alt="DEF buff icon">
        </div>
      </div>
      <div>Matched</div>
      <div class="grid grid-cols-4 gap-3 my-3">
        <div>
          <img id="match01" ref="match01" src="/images/buff-notification/match-01.jpg" class="max-w-full" :class="{ 'ring-4 ring-green-500': isReferenceMatch('match01') }" alt="">
          <div>Score: {{ referenceScores.match01 ?? 'Testing...' }}</div>
        </div>
        <div>
          <img id="match02" ref="match02" src="/images/buff-notification/match-02.jpg" class="max-w-full" :class="{ 'ring-4 ring-green-500': isReferenceMatch('match02') }" alt="">
          <div>Score: {{ referenceScores.match02 ?? 'Testing...' }}</div>
        </div>
        <div>
          <img id="match03" ref="match03" src="/images/buff-notification/match-03.jpg" class="max-w-full" :class="{ 'ring-4 ring-green-500': isReferenceMatch('match03') }" alt="">
          <div>Score: {{ referenceScores.match03 ?? 'Testing...' }}</div>
        </div>
        <div>
          <img id="match04" ref="match04" src="/images/buff-notification/match-04.jpg" class="max-w-full" :class="{ 'ring-4 ring-green-500': isReferenceMatch('match04') }" alt="">
          <div>Score: {{ referenceScores.match04 ?? 'Testing...' }}</div>
        </div>
      </div>
      <div>Not Matched</div>
      <div class="grid grid-cols-4 gap-3 my-3">
        <div>
          <img id="notMatch01" ref="notMatch01" src="/images/buff-notification/not-match-01.jpg" class="max-w-full" :class="{ 'ring-4 ring-green-500': isReferenceMatch('notMatch01') }" alt="">
          <div>Score: {{ referenceScores.notMatch01 ?? 'Testing...' }}</div>
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
    <!-- #endregion reference -->
  </main>
</template>
