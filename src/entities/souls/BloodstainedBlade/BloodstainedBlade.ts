import type { Stat } from '@/entities/stats/types'
import { Soul } from '@/entities/souls/Soul/Soul'

interface BloodstainedBladeStat extends Stat {
  globalAtk: number
  healingRate: number
}

export class BloodstainedBlade extends Soul {
  public static RU_LANG_MAP = {
    name: 'Кровавый клинок',
    globalAtk: 'Глобальная атака',
    healingRate: 'Коэф. лечения',
  }

  public static INITIAL_GLOBAL_ATK = 20.3
  public static INITIAL_HEALING_RATE = 10

  public static GLOBAL_ATK_MAP = {
    1: 1.8,
    2: 1.8,
    3: 1.9,
    4: 1.8,
    5: 1.9,
  }
  public static HEALING_RATE_MAP = {
    1: 0.55,
    2: 0.5,
    3: 0.5,
    4: 0.5,
    5: 0.5,
    6: 0.5,
    7: 0.5,
    8: 0.5,
    9: 0.5,
  }

  public static name = 'BloodstainedBlade'
  public static image = '/assets/souls/immortal/bloodstained-blade.png'

  constructor(level = 1) {
    super(level)
  }

  private _calculateGlobalAtkStepByLevel() {
    return this._calculateStepByLevel(BloodstainedBlade.INITIAL_GLOBAL_ATK, 2, this.level, BloodstainedBlade.GLOBAL_ATK_MAP)
  }
  private _calculateHealingRateStepByLevel() {
    return this._calculateStepByLevel(BloodstainedBlade.INITIAL_HEALING_RATE, 2, this.level, BloodstainedBlade.HEALING_RATE_MAP)
  }

  public static getLevelByGlobalAtk(finalStat: number) {
    return Soul._calculateLevelByStat(finalStat, BloodstainedBlade.INITIAL_GLOBAL_ATK, BloodstainedBlade.GLOBAL_ATK_MAP)
  }
  public static getLevelByHealingRate(finalStat: number) {
    return Soul._calculateLevelByStat(finalStat, BloodstainedBlade.INITIAL_HEALING_RATE, BloodstainedBlade.HEALING_RATE_MAP)
  }

  public get stats(): BloodstainedBladeStat {
    return {
      globalAtk: +this._calculateGlobalAtkStepByLevel().toFixed(2),
      healingRate: +this._calculateHealingRateStepByLevel().toFixed(2),
    }
  }
}
