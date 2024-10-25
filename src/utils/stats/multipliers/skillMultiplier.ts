import { calcAdvancedStats } from '@/utils/stats/_helper'

export type SkillMultiplierStat = {
  total: {
    initial: string
    tech: string
    mount: string
    soul: string
    awakeningSeal: string
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

export function calcFinalSkillMultiplier(skillMultiplier: SkillMultiplierStat) {
  return calcAdvancedStats(skillMultiplier)
}
