import type { Stat } from '@/entities/stats/types'

export abstract class Soul {
  public _level: number

  public static name: string
  public static image: string

  protected constructor(level: number) {
    this._level = level
  }

  protected static _calculateLevelByStat(finalStat: number, initialStat: number, levelMap: Record<number, number>): number {
    const maxLevel = Number(Object.keys(levelMap).at(-1))
    let currentStat = +initialStat.toFixed(2)
    let level = 1

    while (currentStat < +finalStat.toFixed(2)) {
      const normalizedLevel = ((level - 1) % maxLevel) + 1
      currentStat = +(currentStat + levelMap[normalizedLevel]).toFixed(2)
      level++

      if (currentStat >= +finalStat.toFixed(2)) {
        return level
      }
    }

    return level
  }

  protected _calculateStepByLevel(initialStat: number, startIndex: number, endIndex: number, levelMap: Record<number, number>) {
    const maxLevel = Number(Object.keys(levelMap).at(-1))
    let stat = initialStat

    for (let level = startIndex; level <= endIndex; level++) {
      const normalizedLevel = ((level - 1) % maxLevel) + 1

      stat = +(stat + levelMap[normalizedLevel]).toFixed(2)
    }

    return stat
  }

  public get level() {
    return this._level
  }
  public set level(level: number) {
    this._level = level
  }

  abstract get stats(): Stat
}
