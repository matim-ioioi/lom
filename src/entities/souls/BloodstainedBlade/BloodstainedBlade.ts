import type { Stat } from '@/entities/stats/types'
import { Soul } from '@/entities/souls/Soul'

interface BloodstainedBladeStat extends Stat {
  globalAtk: number
  healingRate: number
}

export class BloodstainedBlade extends Soul {
  private _INITIAL_GLOBAL_ATK = 20.3
  private _INITIAL_HEALING_RATE = 10

  public static name = 'BloodstainedBlade'
  public static image = '/assets/souls/immortal/bloodstained-blade.png'

  constructor(level = 1) {
    super(level)
  }

  private _calculateGlobalAtkStepByLevel() {
    let stat = this._INITIAL_GLOBAL_ATK

    stat = this._calculateStepByLevel(stat, 2, this.level, {
      1: 1.8,
      2: 1.8,
      3: 1.9,
      4: 1.8,
      5: 1.9,
    })

    return stat
  }

  private _calculateHealingRateStepByLevel() {
    let stat = this._INITIAL_HEALING_RATE

    stat = this._calculateStepByLevel(stat, 2, this.level, {
      1: 0.55,
      2: 0.5,
      3: 0.5,
      4: 0.5,
      5: 0.5,
      6: 0.5,
      7: 0.5,
      8: 0.5,
      9: 0.5,
    })

    return stat
  }

  public get stats(): BloodstainedBladeStat {
    return {
      globalAtk: this._calculateGlobalAtkStepByLevel(),
      healingRate: this._calculateHealingRateStepByLevel(),
    }
  }
}
