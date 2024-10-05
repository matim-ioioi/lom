import { ElNotification } from 'element-plus'
import { computed, onMounted, reactive } from 'vue'

const DEFAULT_HERO_STATS = {
  // <!-- base stats -->
  hp: '0',
  attack: '0',
  defense: '0',
  attackSpeed: '0',
  // <!-- base stats -->

  // <!-- attack -->
  critRate: '0',
  comboRate: '0',
  counterRate: '0',

  baseAttackMultiplier: '0',
  critMultiplier: '0',
  comboMultiplier: '0',
  counterMultiplier: '0',

  baseAttackResistance: '0',
  critResistance: '0',
  comboResistance: '0',
  counterResistance: '0',
  damageResistance: '0',

  comboIgnoreRate: '0',
  counterIgnoreRate: '0',
  // <!-- attack -->

  // <!-- skill -->
  skillCritRate: '0',

  skillMultiplier: '0',
  skillCritMultiplier: '0',

  skillResistance: '0',
  // <!-- skill -->

  // <!-- control -->
  stunRate: '0',
  evasionRate: '0',
  regenRate: '0',
  launchRate: '0',

  stunIgnoreRate: '0',
  evasionIgnoreRate: '0',
  launchIgnoreRate: '0',
  // <!-- control -->

  // <!-- boss -->
  bossMultiplier: '0',

  bossResistance: '0',
  // <!-- boss -->

  // <!-- pal -->
  palCritRate: '0',
  palComboRate: '0',

  palMultiplier: '0',
  palCritMultiplier: '0',
  palComboMultiplier: '0',

  palResistance: '0',
  // <!-- pal -->

  // <!-- heal -->
  healRate: '0',
  healMultiplier: '0',
  // <!-- heal -->
}

const LOCAL_STORAGE_KEY = 'heroStats'

const _heroStats = reactive<typeof DEFAULT_HERO_STATS>({ ...DEFAULT_HERO_STATS })

export function useHeroStats() {
  const heroStats = computed({
    get: () => _heroStats,
    set: (stats: typeof DEFAULT_HERO_STATS) => {
      Object.assign(_heroStats, stats)
    },
  })

  const saveStats = () => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(_heroStats))

      ElNotification({ title: `Статы ${LOCAL_STORAGE_KEY} успешно сохранены в браузере!`, type: 'success' })
    } catch (e: unknown) {
      ElNotification({ title: 'Произошла ошибка!', type: 'error' })

      console.error(`Ошибка при сохранении статов ${LOCAL_STORAGE_KEY} в localStorage`, e)
    }
  }

  onMounted(() => {
    const heroStatsFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (heroStatsFromLocalStorage) {
      heroStats.value = JSON.parse(heroStatsFromLocalStorage) as typeof DEFAULT_HERO_STATS
    }
  })

  return {
    key: LOCAL_STORAGE_KEY,
    heroStats,
    saveStats,
  }
}
