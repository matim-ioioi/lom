import type { Stat } from '@/entities/stats/types'
import { Soul } from '@/entities/souls/Soul'

interface EyeOfTheAbyssStat extends Stat {
  critDmgBonus: number
  skillCritDmg: number
}

export class EyeOfTheAbyss extends Soul {
  private _INITIAL_CRIT_DMG_BONUS = 168.8
  private _INITIAL_SKILL_CRIT_DMG = 20.05

  public static name = 'EyeOfTheAbyss'
  public static image = '/assets/souls/immortal/eye-of-the-abyss.png'

  constructor(level = 1) {
    super(level)
  }

  private _calculateCritDmgBonusStepByLevel() {
    let stat = this._INITIAL_CRIT_DMG_BONUS

    stat = this._calculateStepByLevel(stat, 2, this.level, {
      1: 15.3,
      2: 15.3,
      3: 15.4,
      4: 15.3,
      5: 15.4,
    })

    return stat
  }

  private _calculateSkillCritDmgStepByLevel() {
    let stat = this._INITIAL_SKILL_CRIT_DMG

    stat = this._calculateStepByLevel(stat, 2, this.level, {
      1: 1.8,
      2: 1.8,
      3: 1.85,
      4: 1.8,
      5: 1.85,
      6: 1.8,
      7: 1.75,
      8: 1.9,
      9: 1.75,
      10: 1.9,
      11: 1.75,
      12: 1.8,
      13: 1.9,
      14: 1.75,
      15: 1.9,
      16: 1.75,
      17: 1.8,
      18: 1.85,
      19: 1.8,
      20: 1.85,
      21: 1.8,
      22: 1.85,
    })

    return stat
  }

  public get stats(): EyeOfTheAbyssStat {
    return {
      critDmgBonus: this._calculateCritDmgBonusStepByLevel(),
      skillCritDmg: this._calculateSkillCritDmgStepByLevel(),
    }
  }
}
