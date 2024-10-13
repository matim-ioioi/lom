import type { Stat } from '@/entities/stats/types'
import { Soul } from '@/entities/souls/Soul/Soul'

interface ForgivingHornsStat extends Stat {
  globalDef: number
  bossDmgRes: number
}

export class ForgivingHorns extends Soul {
  public static RU_LANG_MAP = {
    name: 'Рог прощения',
    globalDef: 'Глобальная защита',
    bossDmgRes: 'СУ боссам',
  }

  public static INITIAL_GLOBAL_DEF = 20.3
  public static INITIAL_BOSS_DMG_RES = 3.55

  public static GLOBAL_DEF_LEVEL_MAP = {
    1: 1.8,
    2: 1.8,
    3: 1.9,
    4: 1.8,
    5: 1.9,
  }
  public static BOSS_DMG_RES_LEVEL_MAP = {
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
  }

  public static name = 'ForgivingHorns'
  public static image = '/assets/souls/immortal/forgiving-horns.png'

  constructor(level = 1) {
    super(level)
  }

  private _calculateGlobalDefStepByLevel() {
    return this._calculateStepByLevel(ForgivingHorns.INITIAL_GLOBAL_DEF, 2, this.level, ForgivingHorns.GLOBAL_DEF_LEVEL_MAP)
  }
  private _calculateBossDmgResStepByLevel() {
    return this._calculateStepByLevel(ForgivingHorns.INITIAL_BOSS_DMG_RES, 2, this.level, ForgivingHorns.BOSS_DMG_RES_LEVEL_MAP)
  }

  public static getLevelByGlobalDef(finalStat: number) {
    return Soul._calculateLevelByStat(finalStat, ForgivingHorns.INITIAL_GLOBAL_DEF, ForgivingHorns.GLOBAL_DEF_LEVEL_MAP)
  }
  public static getLevelByBossDmgRes(finalStat: number) {
    return Soul._calculateLevelByStat(finalStat, ForgivingHorns.INITIAL_BOSS_DMG_RES, ForgivingHorns.BOSS_DMG_RES_LEVEL_MAP)
  }

  public get stats(): ForgivingHornsStat {
    return {
      globalDef: +this._calculateGlobalDefStepByLevel().toFixed(2),
      bossDmgRes: +this._calculateBossDmgResStepByLevel().toFixed(2),
    }
  }
}
