<template>
  <soul-view :image="ExcellentCompanion.image" :name="ExcellentCompanion.RU_LANG_MAP.name" :level="calculatedLevel" :stats="calculatedStats" :extended="props.extended" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ExcellentCompanion } from '@/entities/souls/ExcellentCompanion/ExcellentCompanion'
import SoulView from '@/entities/souls/Soul/ui/SoulView.vue'

const props = defineProps<{
  level?: number
  counterDmg?: number
  palDmg?: number
  extended?: boolean
}>()

const calculatedLevel = computed(() => {
  if (props.level) {
    return props.level
  }

  if (props.counterDmg) {
    return ExcellentCompanion.getLevelByCounterDmg(props.counterDmg)
  }

  if (props.palDmg) {
    return ExcellentCompanion.getLevelByPalDmg(props.palDmg)
  }

  return null
})

const calculatedStats = computed(() => {
  if (!props.extended) {
    return null
  }

  return Object.entries(new ExcellentCompanion(calculatedLevel.value ?? 1).stats).map(([key, value]) => ({
    name: ExcellentCompanion.RU_LANG_MAP[key as keyof typeof ExcellentCompanion.RU_LANG_MAP],
    value,
    unit: '%',
  }))
})
</script>
