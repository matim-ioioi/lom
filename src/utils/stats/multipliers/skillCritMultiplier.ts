import { calcSimpleStats } from '@/utils/stats/_helper'

export type SkillCritMultiplierStat = {
  initial: string
  soul: string
  enchant: string
  accessory: string
}

export function calcFinalSkillCritMultiplier(skillCritMultiplier: SkillCritMultiplierStat) {
  return calcSimpleStats(skillCritMultiplier)
}
