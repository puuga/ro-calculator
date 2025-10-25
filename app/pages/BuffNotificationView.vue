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
//#endregion refs


//#region vue lifecycle
onMounted(() => {
  consola.log('BuffNotificationView onMounted')
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

  const track = (videoElem.value.srcObject as MediaStream).getVideoTracks()[0]

  if (!track) {
    consola.error('BuffNotificationView track is null')
    return
  }
  // @ts-ignore
  const mediaProcessor = new MediaStreamTrackProcessor({ track: track })

  const reader = mediaProcessor.readable.getReader()

  while (true) {
    const result = await reader.read()
    if (result.done) {
      consola.log('BuffNotificationView reader done')
      break
    }
    const videoFrame = result.value
    // Process the video frame.
    consola.log('BuffNotificationView videoFrame:', videoFrame)

    // Draw to canvas
    if (screenshotElem.value) {
      screenshotElem.value.width = videoFrame.displayWidth
      screenshotElem.value.height = videoFrame.displayHeight
      const ctx = screenshotElem.value.getContext('2d')
      if (ctx) {
        ctx.drawImage(videoFrame, 0, 0, videoFrame.displayWidth, videoFrame.displayHeight)
      }
    }

    videoFrame.close()
    await sleep(1000) // 1 fps
  }
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
        <canvas id="screenshot" ref="screenshot" alt="" class="max-w-full"></canvas>
      </div>
    </div>
    <!-- #endregion content -->

    <!-- #region reference -->
    <div class="c-card my-3">
      Reference
      <div>
        Def icon
        <div>
          <img id="iconDef" ref="iconDefElem" src="/images/buff-notification/icon-def-v2.jpg" class="" alt="">
        </div>
      </div>
      <div>Matched</div>
      <div class="grid grid-cols-4 gap-3 my-3">
        <div>
          <img id="match01" ref="match01" src="/images/buff-notification/match-01.jpg" class="max-w-full" alt="">
        </div>
        <div>
          <img id="match02" ref="match02" src="/images/buff-notification/match-02.jpg" class="max-w-full" alt="">
        </div>
        <div>
          <img id="match03" ref="match03" src="/images/buff-notification/match-03.jpg" class="max-w-full" alt="">
        </div>
        <div>
          <img id="match04" ref="match04" src="/images/buff-notification/match-04.jpg" class="max-w-full" alt="">
        </div>
      </div>
      <div>Not Matched</div>
      <div class="grid grid-cols-4 gap-3 my-3">
        <div>
          <img id="notMatch01" ref="notMatch01" src="/images/buff-notification/not-match-01.jpg" class="max-w-full" alt="">
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
    <!-- #endregion reference -->
  </main>
</template>
