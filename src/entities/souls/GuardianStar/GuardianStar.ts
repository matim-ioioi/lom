import type { Stat } from '@/entities/stats/types'
import { Soul } from '@/entities/souls/Soul'

interface GuardianStarStat extends Stat {
  critResBonus: number
  palCritRate: number
  palCritDmg: number
}

export class GuardianStar extends Soul {
  private _INITIAL_CRIT_RES_BONUS = 168.8
  private _INITIAL_PAL_CRIT_RATE = 10
  private _INITIAL_PAL_CRIT_DMG = 120.4

  public static name = 'GuardianStar'
  public static image = '/assets/souls/immortal/guardian-star.png'

  constructor(level = 1) {
    super(level)
  }

  private _calculateCritResBonusStepByLevel() {
    let stat = this._INITIAL_CRIT_RES_BONUS

    stat = this._calculateStepByLevel(stat, 2, this.level, {
      1: 15.3,
      2: 15.3,
      3: 15.4,
      4: 15.3,
      5: 15.4,
    })

    return stat
  }

  private _calculatePalCritRateStepByLevel() {
    let stat = this._INITIAL_PAL_CRIT_RATE

    stat = this._calculateStepByLevel(stat, 2, this.level, {
      1: 10,
    })

    return stat
  }

  private _calculatePalCritDmgStepByLevel() {
    let stat = this._INITIAL_PAL_CRIT_DMG

    stat = this._calculateStepByLevel(stat, 2, this.level, {
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
    })

    return stat
  }

  public get stats(): GuardianStarStat {
    return {
      critResBonus: this._calculateCritResBonusStepByLevel(),
      palCritRate: this._calculatePalCritRateStepByLevel(),
      palCritDmg: this._calculatePalCritDmgStepByLevel(),
    }
  }
}
