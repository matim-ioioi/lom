import { getCurrentInstance } from 'vue'

export function useScreen() {
  const app = getCurrentInstance()

  if (!app?.appContext.config.globalProperties.$screen) {
    throw new Error('Ошибка при вызове useScreen. Возможно, вызов произведён за контекстом')
  }

  return app.appContext.config.globalProperties.$screen
}
