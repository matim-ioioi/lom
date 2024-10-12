import type { Stat } from '@/entities/stats/types'
import { Soul } from '@/entities/souls/Soul'

interface ImmortalSpiritStat extends Stat {
  globalHP: number
  regenBonusHP: number
}

export class ImmortalSpirit extends Soul {
  private _INITIAL_GLOBAL_HP = 20.3
  private _INITIAL_REGEN_BONUS_HP = 15.05

  public static name = 'ImmortalSpirit'
  public static image = '/assets/souls/immortal/immortal-spirit.png'

  constructor(level = 1) {
    super(level)
  }

  private _calculateGlobalHPStepByLevel() {
    let stat = this._INITIAL_GLOBAL_HP

    stat = this._calculateStepByLevel(stat, 2, this.level, {
      1: 1.8,
      2: 1.8,
      3: 1.9,
      4: 1.8,
      5: 1.9,
    })

    return stat
  }

  private _calculateRegenBonusHPStepByLevel() {
    let stat = this._INITIAL_REGEN_BONUS_HP

    stat = this._calculateStepByLevel(stat, 2, this.level, {
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
    })

    return stat
  }

  public get stats(): ImmortalSpiritStat {
    return {
      globalHP: this._calculateGlobalHPStepByLevel(),
      regenBonusHP: this._calculateGlobalHPStepByLevel(),
    }
  }
}
