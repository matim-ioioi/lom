import type { Stat } from '@/entities/stats/types'
import { Soul } from '@/entities/souls/Soul/Soul'

interface WildfirePiercerStat extends Stat {
  basicAtkDmg: number
  skillDmg: number
}

export class WildfirePiercer extends Soul {
  public static RU_LANG_MAP = {
    name: 'Пламенный шип-лезвие',
    basicAtkDmg: 'Урон обычной атаки',
    skillDmg: 'Урон навыка',
  }

  public static INITIAL_BASIC_ATL_DMG = 20.3
  public static INITIAL_SKILL_DMG = 15.05

  public static BASIC_ATK_DMG_LEVEL_MAP = {
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
  }
  public static SKILL_DMG_LEVEL_MAP = {
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
  }

  public static name = 'WildfirePiercer'
  public static image = '/assets/souls/immortal/wildfire-piercer.png'

  constructor(level = 1) {
    super(level)
  }

  private _calculateBasicAtkDmgStepByLevel() {
    return this._calculateStepByLevel(WildfirePiercer.INITIAL_BASIC_ATL_DMG, 2, this.level, WildfirePiercer.BASIC_ATK_DMG_LEVEL_MAP)
  }
  private _calculateSkillDmgStepByLevel() {
    return this._calculateStepByLevel(WildfirePiercer.INITIAL_SKILL_DMG, 2, this.level, WildfirePiercer.SKILL_DMG_LEVEL_MAP)
  }

  public static getLevelByBasicAtkDmg(finalStat: number) {
    return Soul._calculateLevelByStat(finalStat, WildfirePiercer.INITIAL_BASIC_ATL_DMG, WildfirePiercer.BASIC_ATK_DMG_LEVEL_MAP)
  }
  public static getLevelBySkillDmg(finalStat: number) {
    return Soul._calculateLevelByStat(finalStat, WildfirePiercer.INITIAL_SKILL_DMG, WildfirePiercer.SKILL_DMG_LEVEL_MAP)
  }

  public get stats(): WildfirePiercerStat {
    return {
      basicAtkDmg: +this._calculateBasicAtkDmgStepByLevel().toFixed(2),
      skillDmg: +this._calculateSkillDmgStepByLevel().toFixed(2),
    }
  }
}
