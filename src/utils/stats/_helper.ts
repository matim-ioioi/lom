import { fromAbbreviatedNumber } from '@/utils/fromAbbreviatedNumber'

export type SimpleStats = Record<string, string>
export function calcSimpleStats(stats: SimpleStats) {
  return Object.values(stats).reduce((acc, curr) => acc + fromAbbreviatedNumber(curr), 0)
}

export type AdvancedStats = Record<'total' | 'base' | 'global', SimpleStats>
export function calcAdvancedStats(stats: AdvancedStats) {
  const total = Object.values(stats.total).reduce((acc, curr) => acc + fromAbbreviatedNumber(curr), 0)
  const base = Object.values(stats.base).reduce((acc, curr) => +acc + fromAbbreviatedNumber(curr), 100)
  const global = Object.values(stats.global).reduce((acc, curr) => +acc + fromAbbreviatedNumber(curr), 100)

  return ((total * base) / 100) * (global / 100)
}
