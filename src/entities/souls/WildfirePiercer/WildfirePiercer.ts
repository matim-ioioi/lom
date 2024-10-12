import type { Stat } from '@/entities/stats/types'
import { Soul } from '@/entities/souls/Soul'

interface WildfirePiercerStat extends Stat {
  basicAtkDmg: number
  skillDmg: number
}

export class WildfirePiercer extends Soul {
  private _INITIAL_BASIC_ATL_DMG = 20.3
  private _INITIAL_SKILL_DMG = 15.05

  public static name = 'WildfirePiercer'
  public static image = '/assets/souls/immortal/wildfire-piercer.png'

  constructor(level = 1) {
    super(level)
  }

  private _calculateBasicAtkDmgStepByLevel() {
    let stat = this._INITIAL_BASIC_ATL_DMG

    stat = this._calculateStepByLevel(stat, 2, this.level, {
      1: 12.3,
      2: 12.2,
      3: 12.3,
      4: 12.3,
      5: 12.3,
      6: 12.2,
      7: 12.3,
      8: 12.3,
      9: 12.3,
      10: 12.2,
      11: 12.3,
    })

    return stat
  }

  private _calculateSkillDmgStepByLevel() {
    let stat = this._INITIAL_SKILL_DMG

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

  public get stats(): WildfirePiercerStat {
    return {
      basicAtkDmg: this._calculateBasicAtkDmgStepByLevel(),
      skillDmg: this._calculateSkillDmgStepByLevel(),
    }
  }
}
