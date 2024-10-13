<template>
  <soul-view :image="EyeOfTheAbyss.image" :name="EyeOfTheAbyss.RU_LANG_MAP.name" :level="calculatedLevel" :stats="calculatedStats" :extended="props.extended" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { EyeOfTheAbyss } from '@/entities/souls/EyeOfTheAbyss/EyeOfTheAbyss'
import SoulView from '@/entities/souls/Soul/ui/SoulView.vue'

const props = defineProps<{
  level?: number
  critDmgBonus?: number
  skillCritDmg?: number
  extended?: boolean
}>()

const calculatedLevel = computed(() => {
  if (props.level) {
    return props.level
  }

  if (props.critDmgBonus) {
    return EyeOfTheAbyss.getLevelByCritDmgBonus(props.critDmgBonus)
  }

  if (props.skillCritDmg) {
    return EyeOfTheAbyss.getLevelBySkillCritDmg(props.skillCritDmg)
  }

  return null
})

const calculatedStats = computed(() => {
  if (!props.extended) {
    return null
  }

  return Object.entries(new EyeOfTheAbyss(calculatedLevel.value ?? 1).stats).map(([key, value]) => ({
    name: EyeOfTheAbyss.RU_LANG_MAP[key as keyof typeof EyeOfTheAbyss.RU_LANG_MAP],
    value,
    unit: '%',
  }))
})
</script>
