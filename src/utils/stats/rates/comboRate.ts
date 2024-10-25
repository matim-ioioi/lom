import { calcSimpleStats } from '@/utils/stats/_helper'

export type ComboRateStat = {
  equipment: string
  pal: string
  relic: string
  artifact: string
}

export function calcFinalComboRate(comboRate: ComboRateStat) {
  return calcSimpleStats(comboRate)
}
