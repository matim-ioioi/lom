import type { App, ComputedRef } from 'vue'
import { computed, ref } from 'vue'

export type Screen = ComputedRef<{
  isXs: boolean
  isSm: boolean
  isMd: boolean
  isLg: boolean
  isXl: boolean
}>

export const screenVariablesPlugin = (app: App) => {
  if (!import.meta.env.SSR) {
    const innerWidth = ref(window.innerWidth)

    const screen = computed(() => {
      return {
        isXs: innerWidth.value < 768,
        isSm: innerWidth.value >= 768 && innerWidth.value < 992,
        isMd: innerWidth.value >= 992 && innerWidth.value < 1200,
        isLg: innerWidth.value >= 1200 && innerWidth.value < 1920,
        isXl: innerWidth.value >= 1920,
      }
    })

    window.addEventListener('DOMContentLoaded', () => {
      innerWidth.value = window.innerWidth
    })

    window.addEventListener('resize', () => {
      innerWidth.value = window.innerWidth
    })

    app.config.globalProperties.$screen = screen
  } else {
    app.config.globalProperties.$screen = computed(() => ({
      isXs: false,
      isSm: false,
      isMd: false,
      isLg: false,
      isXl: false,
    }))
  }
}
