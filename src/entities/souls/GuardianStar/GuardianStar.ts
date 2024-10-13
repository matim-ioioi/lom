import type { Stat } from '@/entities/stats/types'
import { Soul } from '@/entities/souls/Soul/Soul'

interface GuardianStarStat extends Stat {
  critResBonus: number
  palCritRate: number
  palCritDmg: number
}

export class GuardianStar extends Soul {
  public static RU_LANG_MAP = {
    name: 'Звезда охранника',
    critResBonus: 'Бонус антикрита',
    palCritRate: 'Шанс крита партнёра',
    palCritDmg: 'Крит урон партнёра',
  }

  public static INITIAL_CRIT_RES_BONUS = 168.8
  public static INITIAL_PAL_CRIT_RATE = 10
  public static INITIAL_PAL_CRIT_DMG = 120.4

  public static CRIT_RES_LEVEL_MAP = {
    1: 15.3,
    2: 15.3,
    3: 15.4,
    4: 15.3,
    5: 15.4,
  }
  public static PAL_CRIT_RATE_LEVEL_MAP = {
    1: 10,
  }
  public static PAL_CRIT_DMG_LEVEL_MAP = {
    1: 10.6,
    2: 10.8,
    3: 11.2,
    4: 10.6,
    5: 11.4,
    6: 10.6,
    7: 10.6,
    8: 11.4,
    9: 10.6,
    10: 11.2,
    11: 10.6,
    12: 10.8,
    13: 11.2,
    14: 10.6,
    15: 11.4,
    16: 10.6,
    17: 10.6,
    18: 11.4,
    19: 10.6,
    20: 11.2,
    21: 10.8,
    22: 11.2,
  }

  public static name = 'GuardianStar'
  public static image = '/assets/souls/immortal/guardian-star.png'

  constructor(level = 1) {
    super(level)
  }

  private _calculateCritResBonusStepByLevel() {
    return this._calculateStepByLevel(GuardianStar.INITIAL_CRIT_RES_BONUS, 2, this.level, GuardianStar.CRIT_RES_LEVEL_MAP)
  }
  private _calculatePalCritRateStepByLevel() {
    return this._calculateStepByLevel(GuardianStar.INITIAL_PAL_CRIT_RATE, 2, this.level, GuardianStar.PAL_CRIT_RATE_LEVEL_MAP)
  }
  private _calculatePalCritDmgStepByLevel() {
    return this._calculateStepByLevel(GuardianStar.INITIAL_PAL_CRIT_DMG, 2, this.level, GuardianStar.PAL_CRIT_DMG_LEVEL_MAP)
  }

  public static getLevelByCritResBonus(finalStat: number) {
    return Soul._calculateLevelByStat(finalStat, GuardianStar.INITIAL_CRIT_RES_BONUS, GuardianStar.CRIT_RES_LEVEL_MAP)
  }
  public static getLevelByPalCritRate(finalStat: number) {
    return Soul._calculateLevelByStat(finalStat, GuardianStar.INITIAL_PAL_CRIT_RATE, GuardianStar.PAL_CRIT_RATE_LEVEL_MAP)
  }
  public static getLevelByPalCritDmg(finalStat: number) {
    return Soul._calculateLevelByStat(finalStat, GuardianStar.INITIAL_PAL_CRIT_DMG, GuardianStar.PAL_CRIT_DMG_LEVEL_MAP)
  }

  public get stats(): GuardianStarStat {
    return {
      critResBonus: +this._calculateCritResBonusStepByLevel().toFixed(2),
      palCritRate: +this._calculatePalCritRateStepByLevel().toFixed(2),
      palCritDmg: +this._calculatePalCritDmgStepByLevel().toFixed(2),
    }
  }
}
