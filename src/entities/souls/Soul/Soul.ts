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
    let currentStat = initialStat
    let level = 1

    console.log(level, currentStat)

    while (currentStat < finalStat) {
      const normalizedLevel = ((level - 1) % maxLevel) + 1
      currentStat += levelMap[normalizedLevel]
      level++

      if (currentStat >= finalStat) {
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

      stat += levelMap[normalizedLevel]
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
