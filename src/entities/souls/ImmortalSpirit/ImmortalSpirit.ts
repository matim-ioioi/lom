import type { Stat } from '@/entities/stats/types'
import { Soul } from '@/entities/souls/Soul/Soul'

interface ImmortalSpiritStat extends Stat {
  globalHP: number
  regenBonusHP: number
}

export class ImmortalSpirit extends Soul {
  public static RU_LANG_MAP = {
    name: 'Душа бессмертия',
    globalHP: 'Глобальное здоровье',
    regenBonusHP: 'Бонус восстановления ОЗ',
  }

  public static INITIAL_GLOBAL_HP = 20.3
  public static INITIAL_REGEN_BONUS_HP = 15.05

  public static GLOBAL_HP_LEVEL_MAP = {
    1: 1.8,
    2: 1.8,
    3: 1.9,
    4: 1.8,
    5: 1.9,
  }
  public static REGEN_BONUS_HP_LEVEL_MAP = {
    1: 1.35,
    2: 1.35,
    3: 1.4,
    4: 1.3,
    5: 1.45,
    6: 1.3,
    7: 1.35,
    8: 1.4,
    9: 1.35,
    10: 1.4,
    11: 1.3,
    12: 1.35,
    13: 1.4,
    14: 1.35,
    15: 1.4,
    16: 1.35,
    17: 1.3,
    18: 1.45,
    19: 1.3,
    20: 1.4,
    21: 1.35,
    22: 1.4,
  }

  public static name = 'ImmortalSpirit'
  public static image = '/assets/souls/immortal/immortal-spirit.png'

  constructor(level = 1) {
    super(level)
  }

  private _calculateGlobalHPStepByLevel() {
    return this._calculateStepByLevel(ImmortalSpirit.INITIAL_GLOBAL_HP, 2, this.level, ImmortalSpirit.GLOBAL_HP_LEVEL_MAP)
  }
  private _calculateRegenBonusHPStepByLevel() {
    return this._calculateStepByLevel(ImmortalSpirit.INITIAL_REGEN_BONUS_HP, 2, this.level, ImmortalSpirit.REGEN_BONUS_HP_LEVEL_MAP)
  }

  public static getLevelByGlobalHP(finalStat: number) {
    return Soul._calculateLevelByStat(finalStat, ImmortalSpirit.INITIAL_GLOBAL_HP, ImmortalSpirit.GLOBAL_HP_LEVEL_MAP)
  }
  public static getLevelByRegenBonusHP(finalStat: number) {
    return Soul._calculateLevelByStat(finalStat, ImmortalSpirit.INITIAL_REGEN_BONUS_HP, ImmortalSpirit.REGEN_BONUS_HP_LEVEL_MAP)
  }

  public get stats(): ImmortalSpiritStat {
    return {
      globalHP: +this._calculateGlobalHPStepByLevel().toFixed(2),
      regenBonusHP: +this._calculateRegenBonusHPStepByLevel().toFixed(2),
    }
  }
}
