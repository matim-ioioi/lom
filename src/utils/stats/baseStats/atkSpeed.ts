import { calcAdvancedStats } from '@/utils/stats/_helper'

export type AtkSpeedStat = {
  total: {
    initial: string
    equipment: string
    accessory: string
  }
  base: {
    pal: string
    tech: string
  }
  global: {
    class: string
  }
}

export function calcFinalAtkSpeed(atkSpeed: AtkSpeedStat) {
  return calcAdvancedStats(atkSpeed)
}
