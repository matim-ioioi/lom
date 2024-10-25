import { calcSimpleStats } from '@/utils/stats/_helper'

export type SkillCritRateStat = {
  equipment: string
  class: string
  pal: string
  relic: string
}

export function calcFinalSkillCritRate(skillCritRate: SkillCritRateStat) {
  return calcSimpleStats(skillCritRate)
}
