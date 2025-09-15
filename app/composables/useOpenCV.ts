// Lightweight composable to await OpenCV.js from the Nuxt plugin
export async function useOpenCV() {
  const nuxtApp = useNuxtApp()
  const getCv = nuxtApp.$getCv as () => Promise<any>
  const cv = await getCv()
  return cv
}

export type MatchTemplateOptions = {
  method?: number // cv.TM_CCOEFF_NORMED by default
  mask?: any | null
}

export type MatchTemplateResult = {
  x: number
  y: number
  score: number
  width: number
  height: number
}

// Convert an HTMLImageElement/ImageBitmap/Canvas to cv.Mat (RGBA -> GRAY)
function toGrayMat(cv: any, src: CanvasImageSource): any {
  const canvas = document.createElement('canvas')
  const width = (src as any).width
  const height = (src as any).height
  if (!width || !height) throw new Error('Source has no width/height')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d', { willReadFrequently: true })!
  ctx.drawImage(src as any, 0, 0)
  const mat = cv.imread(canvas)
  const gray = new cv.Mat()
  cv.cvtColor(mat, gray, cv.COLOR_RGBA2GRAY)
  mat.delete()
  return gray
}

export async function matchTemplate(
  big: CanvasImageSource,
  small: CanvasImageSource,
  options: MatchTemplateOptions = {}
): Promise<MatchTemplateResult> {
  const cv = await useOpenCV()
  const method = options.method ?? cv.TM_CCOEFF_NORMED

  const bigGray = toGrayMat(cv, big)
  const smallGray = toGrayMat(cv, small)

  const resultCols = bigGray.cols - smallGray.cols + 1
  const resultRows = bigGray.rows - smallGray.rows + 1
  if (resultCols <= 0 || resultRows <= 0) {
    smallGray.delete(); bigGray.delete()
    throw new Error('Template larger than source image')
  }

  const result = new cv.Mat()
  cv.matchTemplate(bigGray, smallGray, result, method, options.mask ?? new cv.Mat())
  // Normalize result to [0,1] for consistency across methods
  cv.normalize(result, result, 0, 1, cv.NORM_MINMAX)

  const minMax = cv.minMaxLoc(result)
  const max = minMax.maxVal
  const maxLoc = minMax.maxLoc

  const out: MatchTemplateResult = {
    x: maxLoc.x,
    y: maxLoc.y,
    score: max,
    width: smallGray.cols,
    height: smallGray.rows,
  }

  result.delete()
  smallGray.delete()
  bigGray.delete()
  return out
}
