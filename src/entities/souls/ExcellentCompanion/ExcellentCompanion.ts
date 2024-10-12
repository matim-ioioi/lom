import type { Stat } from '@/entities/stats/types'
import { Soul } from '@/entities/souls/Soul'

interface ExcellentCompanionStat extends Stat {
  counterDmg: number
  palDmg: number
}

export class ExcellentCompanion extends Soul {
  private _INITIAL_COUNTER_DMG = 337.5
  private _INITIAL_PAL_DMG = 45.15

  public static name = 'ExcellentCompanion'
  public static image = '/assets/souls/immortal/excellent-companion.png'

  constructor(level = 1) {
    super(level)
  }

  private _calculateCounterDmgStepByLevel() {
    let stat = this._INITIAL_COUNTER_DMG

    const levelMap = {
      1: 30.7,
      2: 30.7,
      3: 30.7,
      4: 30.7,
      5: 30.7,
      6: 30.7,
      7: 30.7,
      8: 30.7,
      9: 30.7,
      10: 30.5,
      11: 30.7,
      12: 30.7,
      13: 30.7,
      14: 30.6,
      15: 30.7,
      16: 30.7,
      17: 30.7,
      18: 30.7,
      19: 30.7,
      20: 30.6,
      21: 30.7,
      22: 30.7,
      23: 30.7,
      24: 30.7,
      25: 30.6,
    }

    stat = this._calculateStepByLevel(stat, 2, 14, levelMap)

    stat = this._calculateStepByLevel(stat, 15, this.level, levelMap)

    return stat
  }

  private _calculatePalDmgStepByLevel() {
    let stat = this._INITIAL_PAL_DMG

    stat = this._calculateStepByLevel(stat, 2, this.level, {
      1: 4,
      2: 4,
      3: 4.2,
      4: 4,
      5: 4.25,
      6: 4,
      7: 4,
      8: 4.2,
      9: 4,
      10: 4.2,
      11: 4,
      12: 4,
      13: 4.25,
      14: 4,
      15: 4.2,
      16: 4,
      17: 4,
      18: 4.25,
      19: 4,
      20: 4.2,
      21: 4,
      22: 4.25,
    })

    return stat
  }

  public get stats(): ExcellentCompanionStat {
    return {
      counterDmg: this._calculateCounterDmgStepByLevel(),
      palDmg: this._calculatePalDmgStepByLevel(),
    }
  }
}
