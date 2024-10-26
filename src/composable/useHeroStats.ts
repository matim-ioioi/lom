import { ElNotification } from 'element-plus'
import { onMounted, reactive, watch } from 'vue'
import { calcFinalAtk } from '@/utils/stats/baseStats/atk'
import { calcFinalAtkSpeed } from '@/utils/stats/baseStats/atkSpeed'
import { calcFinalDef } from '@/utils/stats/baseStats/def'
import { calcFinalHP } from '@/utils/stats/baseStats/hp'
import { calcFinalBasicAtkMultiplier } from '@/utils/stats/multipliers/basicAtkMultiplier'
import { calcFinalComboMultiplier } from '@/utils/stats/multipliers/comboMultiplier'
import { calcFinalCounterMultiplier } from '@/utils/stats/multipliers/counterMultiplier'
import { calcFinalCritMultiplier } from '@/utils/stats/multipliers/critMultiplier'
import { calcFinalPalMultiplier } from '@/utils/stats/multipliers/palMultiplier'
import { calcFinalSkillCritMultiplier } from '@/utils/stats/multipliers/skillCritMultiplier'
import { calcFinalSkillMultiplier } from '@/utils/stats/multipliers/skillMultiplier'
import { calcFinalComboRate } from '@/utils/stats/rates/comboRate'
import { calcFinalCounterRate } from '@/utils/stats/rates/counterRate'
import { calcFinalCritRate } from '@/utils/stats/rates/critRate'
import { calcFinalSkillCritRate } from '@/utils/stats/rates/skillCritRate'
import { toAbbreviatedNumber } from '@/utils/toAbbreviatedNumber'

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

const LOCAL_STORAGE_KEY = 'advancedHeroStats'

const heroStats = reactive<typeof DEFAULT_ADVANCED_HERO_STATS>({ ...DEFAULT_ADVANCED_HERO_STATS })

export function useHeroStats() {
  watch(
    [
      () => heroStats.hp.stats,
      () => heroStats.atk.stats,
      () => heroStats.def.stats,
      () => heroStats.atkSpeed.stats,
      () => heroStats.critRate.stats,
      () => heroStats.comboRate.stats,
      () => heroStats.counterRate.stats,
      () => heroStats.basicAtkMultiplier.stats,
      () => heroStats.critMultiplier.stats,
      () => heroStats.comboMultiplier.stats,
      () => heroStats.counterMultiplier.stats,
      () => heroStats.skillMultiplier.stats,
      () => heroStats.skillCritRate.stats,
      () => heroStats.skillCritMultiplier.stats,
      () => heroStats.palMultiplier.stats,
    ],
    ([hp, atk, def, atkSpeed, critRate, comboRate, counterRate, basicAtkMultiplier, critMultiplier, comboMultiplier, counterMultiplier, skillMultiplier, skillCritRate, skillCritMultiplier, palMultiplier]) => {
      heroStats.hp.final = toAbbreviatedNumber(calcFinalHP(hp))
      heroStats.atk.final = toAbbreviatedNumber(calcFinalAtk(atk))
      heroStats.def.final = toAbbreviatedNumber(calcFinalDef(def))
      heroStats.atkSpeed.final = toAbbreviatedNumber(calcFinalAtkSpeed(atkSpeed))
      heroStats.critRate.final = toAbbreviatedNumber(calcFinalCritRate(critRate))
      heroStats.comboRate.final = toAbbreviatedNumber(calcFinalComboRate(comboRate))
      heroStats.counterRate.final = toAbbreviatedNumber(calcFinalCounterRate(counterRate))
      heroStats.basicAtkMultiplier.final = toAbbreviatedNumber(calcFinalBasicAtkMultiplier(basicAtkMultiplier))
      heroStats.critMultiplier.final = toAbbreviatedNumber(calcFinalCritMultiplier(critMultiplier))
      heroStats.comboMultiplier.final = toAbbreviatedNumber(calcFinalComboMultiplier(comboMultiplier))
      heroStats.counterMultiplier.final = toAbbreviatedNumber(calcFinalCounterMultiplier(counterMultiplier))
      heroStats.skillMultiplier.final = toAbbreviatedNumber(calcFinalSkillMultiplier(skillMultiplier))
      heroStats.skillCritRate.final = toAbbreviatedNumber(calcFinalSkillCritRate(skillCritRate))
      heroStats.skillCritMultiplier.final = toAbbreviatedNumber(calcFinalSkillCritMultiplier(skillCritMultiplier))
      heroStats.palMultiplier.final = toAbbreviatedNumber(calcFinalPalMultiplier(palMultiplier))
    },
    { deep: true }
  )

  const saveStats = () => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(heroStats))

      ElNotification({ title: `Статы ${LOCAL_STORAGE_KEY} успешно сохранены в браузере!`, type: 'success' })
    } catch (e: unknown) {
      ElNotification({ title: 'Произошла ошибка!', type: 'error' })

      console.error(`Ошибка при сохранении статов ${LOCAL_STORAGE_KEY} в localStorage`, e)
    }
  }

  onMounted(() => {
    const heroStatsFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (heroStatsFromLocalStorage) {
      Object.assign(heroStats, JSON.parse(heroStatsFromLocalStorage) as typeof DEFAULT_ADVANCED_HERO_STATS)
    }
  })

  return {
    key: LOCAL_STORAGE_KEY,
    heroStats,
    saveStats,
  }
}
