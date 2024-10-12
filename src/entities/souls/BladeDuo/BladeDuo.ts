import type { Stat } from '@/entities/stats/types'
import { Soul } from '@/entities/souls/Soul'

interface BladeDuoStat extends Stat {
  comboDmg: number
  bossDmg: number
}

export class BladeDuo extends Soul {
  public static INITIAL_COMBO_DMG = 337.5
  public static INITIAL_BOSS_DMG = 30.1

  public static COMBO_DMG_STAT_TITLE_MAP = {
    comboDmg: 'Урон комбоатак',
    bossDmg: 'Урон боссам',
  }
  public static COMBO_DMG_LEVEL_MAP = {
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
  public static BOSS_DMG_LEVEL_MAP = {
    1: 2.65,
    2: 2.7,
    3: 2.8,
    4: 2.65,
    5: 2.85,
    6: 2.65,
    7: 2.65,
    8: 2.85,
    9: 2.65,
    10: 2.8,
    11: 2.65,
    12: 2.7,
    13: 2.8,
    14: 2.65,
    15: 2.85,
    16: 2.65,
    17: 2.65,
    18: 2.85,
    19: 2.65,
    20: 2.8,
    21: 2.7,
    22: 2.8,
  }

  public static name = 'BladeDuo'
  public static image = '/assets/souls/immortal/blade-duo.png'

  constructor(level = 1) {
    super(level)
  }

  public static getLevelByComboDmg(finalStat: number) {
    return Soul._calculateLevelByStat(finalStat, BladeDuo.INITIAL_COMBO_DMG, BladeDuo.COMBO_DMG_LEVEL_MAP)
  }
  public static getLevelByBossDmg(finalStat: number) {
    return Soul._calculateLevelByStat(finalStat, BladeDuo.INITIAL_BOSS_DMG, BladeDuo.BOSS_DMG_LEVEL_MAP)
  }

  private _calculateComboDmgStepByLevel() {
    let stat = BladeDuo.INITIAL_COMBO_DMG

    stat = this._calculateStepByLevel(stat, 2, 14, BladeDuo.COMBO_DMG_LEVEL_MAP)

    stat = this._calculateStepByLevel(stat, 15, this.level, BladeDuo.COMBO_DMG_LEVEL_MAP)

    return stat
  }
  private _calculateBossDmgStepByLevel() {
    let stat = BladeDuo.INITIAL_BOSS_DMG

    stat = this._calculateStepByLevel(stat, 2, this.level, BladeDuo.BOSS_DMG_LEVEL_MAP)

    return stat
  }

  public get stats(): BladeDuoStat {
    return {
      comboDmg: this._calculateComboDmgStepByLevel(),
      bossDmg: this._calculateBossDmgStepByLevel(),
    }
  }
}
