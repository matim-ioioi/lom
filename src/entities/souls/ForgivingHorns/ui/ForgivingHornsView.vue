<template>
  <soul-view :image="ForgivingHorns.image" :name="ForgivingHorns.RU_LANG_MAP.name" :level="calculatedLevel" :stats="calculatedStats" :extended="props.extended" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ForgivingHorns } from '@/entities/souls/ForgivingHorns/ForgivingHorns'
import SoulView from '@/entities/souls/Soul/ui/SoulView.vue'

const props = defineProps<{
  level?: number
  globalDef?: number
  bossDmgRes?: number
  extended?: boolean
}>()

const calculatedLevel = computed(() => {
  if (props.level) {
    return props.level
  }

  if (props.globalDef) {
    return ForgivingHorns.getLevelByGlobalDef(props.globalDef)
  }

  if (props.bossDmgRes) {
    return ForgivingHorns.getLevelByBossDmgRes(props.bossDmgRes)
  }

  return null
})

const calculatedStats = computed(() => {
  if (!props.extended) {
    return null
  }

  return Object.entries(new ForgivingHorns(calculatedLevel.value ?? 1).stats).map(([key, value]) => ({
    name: ForgivingHorns.RU_LANG_MAP[key as keyof typeof ForgivingHorns.RU_LANG_MAP],
    value,
    unit: '%',
  }))
})
</script>
