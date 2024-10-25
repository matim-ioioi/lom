import { calcAdvancedStats } from '@/utils/stats/_helper'

export type CounterMultiplierStat = {
  total: {
    initial: string
  }
  base: {
    class: string
    pal: string
    handbook: string
    mount: string
    soul: string
    awakeningSeal: string
    enchant: string
    accessory: string
    avian: string
  }
  global: {
    statue: string
    artifact: string
    soul: string
    enchant: string
    accessory: string
    ship: string
    avian: string
  }
}

export function calcFinalCounterMultiplier(counterMultiplier: CounterMultiplierStat) {
  return calcAdvancedStats(counterMultiplier)
}
