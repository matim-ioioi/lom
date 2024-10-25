import { calcSimpleStats } from '@/utils/stats/_helper'

export type CritRateStat = {
  equipment: string
  pal: string
  relic: string
  artifact: string
}

export function calcFinalCritRate(critRate: CritRateStat) {
  return calcSimpleStats(critRate)
}
