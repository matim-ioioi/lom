<template>
  <soul-view :image="GuardianStar.image" :name="GuardianStar.RU_LANG_MAP.name" :level="calculatedLevel" :stats="calculatedStats" :extended="props.extended" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { GuardianStar } from '@/entities/souls/GuardianStar/GuardianStar'
import SoulView from '@/entities/souls/Soul/ui/SoulView.vue'

const props = defineProps<{
  level?: number
  critResBonus?: number
  palCritRate?: number
  palCritDmg?: number
  extended?: boolean
}>()

const calculatedLevel = computed(() => {
  if (props.level) {
    return props.level
  }

  if (props.critResBonus) {
    return GuardianStar.getLevelByCritResBonus(props.critResBonus)
  }

  if (props.palCritRate) {
    return GuardianStar.getLevelByPalCritRate(props.palCritRate)
  }

  if (props.palCritDmg) {
    return GuardianStar.getLevelByPalCritDmg(props.palCritDmg)
  }

  return null
})

const calculatedStats = computed(() => {
  if (!props.extended) {
    return null
  }

  return Object.entries(new GuardianStar(calculatedLevel.value ?? 1).stats).map(([key, value]) => ({
    name: GuardianStar.RU_LANG_MAP[key as keyof typeof GuardianStar.RU_LANG_MAP],
    value,
    unit: '%',
  }))
})
</script>
