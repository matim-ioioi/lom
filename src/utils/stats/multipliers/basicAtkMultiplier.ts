import { calcAdvancedStats } from '@/utils/stats/_helper'

export type BasicAtkMultiplierStat = {
  total: {
    initial: string
  }
  base: {
    handbook: string
    mount: string
    soul: string
    awakeningSeal: string
    accessory: string
  }
  global: {
    mount: string
    artifact: string
    soul: string
    enchant: string
    ship: string
  }
}

export function calcFinalBasicAtkMultiplier(basicAtkMultiplier: BasicAtkMultiplierStat) {
  return calcAdvancedStats(basicAtkMultiplier)
}
