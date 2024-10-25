import { calcAdvancedStats } from '@/utils/stats/_helper'

export type CritMultiplierStat = {
  total: {
    initial: string
    pal: string
  }
  base: {
    mount: string
    soul: string
    awakeningSeal: string
    enchant: string
    accessory: string
    avian: string
  }
  global: {
    enchant: string
  }
}

export function calcFinalCritMultiplier(critMultiplier: CritMultiplierStat) {
  return calcAdvancedStats(critMultiplier)
}
