import { calcAdvancedStats } from '@/utils/stats/_helper'

export type PalMultiplierStat = {
  total: {
    initial: string
    pal: string
    tech: string
    mount: string
    soul: string
    awakeningSeal: string
    enchant: string
    accessory: string
    avian: string
  }
  base: {
    mount: string
  }
  global: {
    enchant: string
  }
}

export function calcFinalPalMultiplier(palMultiplier: PalMultiplierStat) {
  return calcAdvancedStats(palMultiplier)
}
