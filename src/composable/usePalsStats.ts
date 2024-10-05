import { ElNotification } from 'element-plus'
import { computed, onMounted, reactive } from 'vue'

const DEFAULT_PAL_STATS = {
  attackCoefficient: '0',
  attackSpeed: '0',
}

const LOCAL_STORAGE_KEY = 'palsStats'

const _palsStats = reactive<(typeof DEFAULT_PAL_STATS)[]>([{ ...DEFAULT_PAL_STATS }, { ...DEFAULT_PAL_STATS }, { ...DEFAULT_PAL_STATS }, { ...DEFAULT_PAL_STATS }, { ...DEFAULT_PAL_STATS }, { ...DEFAULT_PAL_STATS }])

export function usePalsStats() {
  const palsStats = computed({
    get: () => _palsStats,
    set: (stats: (typeof DEFAULT_PAL_STATS)[]) => {
      Object.assign(_palsStats, stats)
    },
  })

  const saveStats = () => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(_palsStats))

      ElNotification({ title: `Статы ${LOCAL_STORAGE_KEY} успешно сохранены в браузере!`, type: 'success' })
    } catch (e: unknown) {
      ElNotification({ title: 'Произошла ошибка!', type: 'error' })

      console.error(`Ошибка при сохранении статов ${LOCAL_STORAGE_KEY} в localStorage`, e)
    }
  }

  onMounted(() => {
    const palsStatsFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (palsStatsFromLocalStorage) {
      palsStats.value = JSON.parse(palsStatsFromLocalStorage) as (typeof DEFAULT_PAL_STATS)[]
    }
  })

  return {
    key: LOCAL_STORAGE_KEY,
    palsStats,
    saveStats,
  }
}
