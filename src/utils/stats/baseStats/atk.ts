import { calcAdvancedStats } from '@/utils/stats/_helper'

export type AtkStat = {
  total: {
    initial: string
    equipment: string
    adventure: string
    enchant: string
    avian: string
  }
  base: {
    pal: string
    skill: string
    tech: string
    relic: string
    mount: string
    artifact: string
    parking: string
    accessory: string
    ring: string
  }
  global: {
    mount: string
    soul: string
    awakeningSeal: string
    costume: string
    accessory: string
    ship: string
    enchant: string
  }
}

export function calcFinalAtk(atk: AtkStat) {
  return calcAdvancedStats(atk)
}
