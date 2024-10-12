import type { Screen } from '@/.vitepress/plugins/screenVariables'

declare module 'vue' {
  interface ComponentCustomProperties {
    $screen: Screen
  }
}

export {}
