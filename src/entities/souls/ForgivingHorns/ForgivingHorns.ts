import type { Stat } from '@/entities/stats/types'
import { Soul } from '@/entities/souls/Soul'

interface ForgivingHornsStat extends Stat {
  globalDef: number
  bossDmgRes: number
}

export class ForgivingHorns extends Soul {
  private _INITIAL_GLOBAL_DEF = 20.3
  private _INITIAL_BOSS_DMG_RES = 3.55

  public static name = 'ForgivingHorns'
  public static image = '/assets/souls/immortal/forgiving-horns.png'

  constructor(level = 1) {
    super(level)
  }

  private _calculateGlobalDefStepByLevel() {
    let stat = this._INITIAL_GLOBAL_DEF

    stat = this._calculateStepByLevel(stat, 2, this.level, {
      1: 1.8,
      2: 1.8,
      3: 1.9,
      4: 1.8,
      5: 1.9,
    })

    return stat
  }

  private _calculateBossDmgResStepByLevel() {
    let stat = this._INITIAL_BOSS_DMG_RES

    stat = this._calculateStepByLevel(stat, 2, this.level, {
      1: 0.3,
      2: 0.3,
      3: 0.35,
      4: 0.3,
      5: 0.3,
      6: 0.35,
      7: 0.3,
      8: 0.3,
      9: 0.35,
      10: 0.3,
      11: 0.3,
      12: 0.35,
      13: 0.3,
      14: 0.35,
      15: 0.3,
      16: 0.3,
      17: 0.35,
      18: 0.3,
      19: 0.3,
      20: 0.35,
      21: 0.3,
      22: 0.35,
    })

    return stat
  }

  public get stats(): ForgivingHornsStat {
    return {
      globalDef: this._calculateGlobalDefStepByLevel(),
      bossDmgRes: this._calculateBossDmgResStepByLevel(),
    }
  }
}
