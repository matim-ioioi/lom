import { calcSimpleStats } from '@/utils/stats/_helper'

export type CounterRateStat = {
  equipment: string
  pal: string
  relic: string
  artifact: string
}

export function calcFinalCounterRate(counterRate: CounterRateStat) {
  return calcSimpleStats(counterRate)
}
