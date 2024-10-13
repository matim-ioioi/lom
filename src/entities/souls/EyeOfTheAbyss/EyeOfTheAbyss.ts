import type { Stat } from '@/entities/stats/types'
import { Soul } from '@/entities/souls/Soul/Soul'

interface EyeOfTheAbyssStat extends Stat {
  critDmgBonus: number
  skillCritDmg: number
}

export class EyeOfTheAbyss extends Soul {
  public static RU_LANG_MAP = {
    name: 'Око бездны',
    critDmgBonus: 'Бонус крит урона',
    skillCritDmg: 'Крит урон навыка',
  }

  public static INITIAL_CRIT_DMG_BONUS = 168.8
  public static INITIAL_SKILL_CRIT_DMG = 20.05

  public static CRIT_DMG_BONUS_LEVEL_MAP = {
    1: 15.3,
    2: 15.3,
    3: 15.4,
    4: 15.3,
    5: 15.4,
  }
  public static SKILL_CRIT_DMG_LEVEL_MAP = {
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
  }

  public static name = 'EyeOfTheAbyss'
  public static image = '/assets/souls/immortal/eye-of-the-abyss.png'

  constructor(level = 1) {
    super(level)
  }

  private _calculateCritDmgBonusStepByLevel() {
    return this._calculateStepByLevel(EyeOfTheAbyss.INITIAL_CRIT_DMG_BONUS, 2, this.level, EyeOfTheAbyss.CRIT_DMG_BONUS_LEVEL_MAP)
  }
  private _calculateSkillCritDmgStepByLevel() {
    return this._calculateStepByLevel(EyeOfTheAbyss.INITIAL_SKILL_CRIT_DMG, 2, this.level, EyeOfTheAbyss.SKILL_CRIT_DMG_LEVEL_MAP)
  }

  public static getLevelByCritDmgBonus(finalStat: number) {
    return Soul._calculateLevelByStat(finalStat, EyeOfTheAbyss.INITIAL_CRIT_DMG_BONUS, EyeOfTheAbyss.CRIT_DMG_BONUS_LEVEL_MAP)
  }
  public static getLevelBySkillCritDmg(finalStat: number) {
    return Soul._calculateLevelByStat(finalStat, EyeOfTheAbyss.INITIAL_SKILL_CRIT_DMG, EyeOfTheAbyss.SKILL_CRIT_DMG_LEVEL_MAP)
  }

  public get stats(): EyeOfTheAbyssStat {
    return {
      critDmgBonus: +this._calculateCritDmgBonusStepByLevel().toFixed(2),
      skillCritDmg: +this._calculateSkillCritDmgStepByLevel().toFixed(2),
    }
  }
}
