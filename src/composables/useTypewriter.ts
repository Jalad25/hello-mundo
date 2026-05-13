import { onUnmounted, ref } from 'vue'

interface Options {
  text: string
  typeSpeed?: number
  startDelay?: number
  onDone?: () => void
}

export function useTypewriter({ text, typeSpeed = 80, startDelay = 300, onDone }: Options) {
  const output = ref('')
  const done = ref(false)
  let startTimer: ReturnType<typeof setTimeout> | undefined
  let stepTimer: ReturnType<typeof setTimeout> | undefined

  const step = (i: number) => {
    if (i > text.length) {
      done.value = true
      onDone?.()
      return
    }
    output.value = text.slice(0, i)
    stepTimer = setTimeout(() => step(i + 1), typeSpeed)
  }

  const start = () => {
    output.value = ''
    done.value = false
    clearTimeout(startTimer)
    clearTimeout(stepTimer)
    startTimer = setTimeout(() => step(1), startDelay)
  }

  onUnmounted(() => {
    clearTimeout(startTimer)
    clearTimeout(stepTimer)
  })

  return { output, done, start }
}
