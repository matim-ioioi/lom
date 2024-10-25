import { ElNotification } from 'element-plus'
import { computed, onMounted, reactive } from 'vue'

const DEFAULT_ADVANCED_HERO_STATS = {
  hp: {
    final: '0',
    stats: {
      total: {
        initial: '0',
        equipment: '0',
        adventure: '0',
        enchant: '0',
        avian: '0',
      },
      base: {
        pal: '0',
        skill: '0',
        tech: '0',
        relic: '0',
        mount: '0',
        artifact: '0',
        parking: '0',
        accessory: '0',
        ring: '0',
      },
      global: {
        mount: '0',
        soul: '0',
        awakeningSeal: '0',
        costume: '0',
        accessory: '0',
        ship: '0',
        enchant: '0',
      },
    },
  },
  atk: {
    final: '0',
    stats: {
      total: {
        initial: '0',
        equipment: '0',
        adventure: '0',
        enchant: '0',
        avian: '0',
      },
      base: {
        pal: '0',
        skill: '0',
        tech: '0',
        relic: '0',
        mount: '0',
        artifact: '0',
        parking: '0',
        accessory: '0',
        ring: '0',
      },
      global: {
        mount: '0',
        soul: '0',
        awakeningSeal: '0',
        costume: '0',
        accessory: '0',
        ship: '0',
        enchant: '0',
      },
    },
  },
  def: {
    final: '0',
    stats: {
      total: {
        initial: '0',
        equipment: '0',
        adventure: '0',
        enchant: '0',
        avian: '0',
      },
      base: {
        pal: '0',
        skill: '0',
        tech: '0',
        relic: '0',
        mount: '0',
        artifact: '0',
        parking: '0',
        accessory: '0',
        ring: '0',
      },
      global: {
        mount: '0',
        soul: '0',
        awakeningSeal: '0',
        costume: '0',
        accessory: '0',
        ship: '0',
        enchant: '0',
      },
    },
  },
  atkSpeed: {
    final: '0',
    stats: {
      total: {
        initial: '0',
        equipment: '0',
        accessory: '0',
      },
      base: {
        pal: '0',
        tech: '0',
      },
      global: {
        class: '0',
      },
    },
  },

  critRate: {
    final: '0',
    stats: {
      equipment: '0',
      pal: '0',
      relic: '0',
      artifact: '0',
    },
  },
  comboRate: {
    final: '0',
    stats: {
      equipment: '0',
      pal: '0',
      relic: '0',
      artifact: '0',
    },
  },
  counterRate: {
    final: '0',
    stats: {
      equipment: '0',
      pal: '0',
      relic: '0',
      artifact: '0',
    },
  },

  basicAtkMultiplier: {
    final: '0',
    stats: {
      total: {
        initial: '0',
      },
      base: {
        handbook: '0',
        mount: '0',
        soul: '0',
        awakeningSeal: '0',
        accessory: '0',
      },
      global: {
        mount: '0',
        artifact: '0',
        soul: '0',
        enchant: '0',
        ship: '0',
      },
    },
  },
  critMultiplier: {
    final: '0',
    stats: {
      total: {
        initial: '0',
        pal: '0',
      },
      base: {
        mount: '0',
        soul: '0',
        awakeningSeal: '0',
        enchant: '0',
        accessory: '0',
        avian: '0',
      },
      global: {
        enchant: '0',
      },
    },
  },
  comboMultiplier: {
    final: '0',
    stats: {
      total: {
        initial: '0',
      },
      base: {
        class: '0',
        pal: '0',
        handbook: '0',
        mount: '0',
        soul: '0',
        awakeningSeal: '0',
        enchant: '0',
        accessory: '0',
        avian: '0',
      },
      global: {
        statue: '0',
        artifact: '0',
        soul: '0',
        enchant: '0',
        accessory: '0',
        ship: '0',
        avian: '0',
      },
    },
  },
  counterMultiplier: {
    final: '0',
    stats: {
      total: {
        initial: '0',
      },
      base: {
        class: '0',
        pal: '0',
        handbook: '0',
        mount: '0',
        soul: '0',
        awakeningSeal: '0',
        enchant: '0',
        accessory: '0',
        avian: '0',
      },
      global: {
        statue: '0',
        artifact: '0',
        soul: '0',
        enchant: '0',
        accessory: '0',
        ship: '0',
        avian: '0',
      },
    },
  },

  skillMultiplier: {
    final: '0',
    stats: {
      total: {
        initial: '0',
        tech: '0',
        mount: '0',
        soul: '0',
        awakeningSeal: '0',
        accessory: '0',
        avian: '0',
      },
      base: {
        mount: '0',
      },
      global: {
        enchant: '0',
      },
    },
  },
  skillCritRate: {
    final: '0',
    stats: {
      equipment: '0',
      class: '0',
      pal: '0',
      relic: '0',
    },
  },
  skillCritMultiplier: {
    final: '0',
    stats: {
      initial: '0',
      soul: '0',
      enchant: '0',
      accessory: '0',
    },
  },

  palMultiplier: {
    final: '0',
    stats: {
      total: {
        initial: '0',
        pal: '0',
        tech: '0',
        mount: '0',
        soul: '0',
        awakeningSeal: '0',
        enchant: '0',
        accessory: '0',
        avian: '0',
      },
      base: {
        mount: '0',
      },
      global: {
        enchant: '0',
      },
    },
  },
  palCritRate: '0',
  palComboRate: '0',
  palCritMultiplier: '0',
  palComboMultiplier: '0',
}

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

const _heroStats = reactive<typeof DEFAULT_ADVANCED_HERO_STATS>({ ...DEFAULT_ADVANCED_HERO_STATS })

export function useHeroStats() {
  const heroStats = computed({
    get: () => _heroStats,
    set: (stats: typeof DEFAULT_ADVANCED_HERO_STATS) => {
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
      heroStats.value = JSON.parse(heroStatsFromLocalStorage) as typeof DEFAULT_ADVANCED_HERO_STATS
    }
  })

  return {
    key: LOCAL_STORAGE_KEY,
    heroStats,
    saveStats,
  }
}
