<template>
  <soul-view :image="ImmortalSpirit.image" :name="ImmortalSpirit.RU_LANG_MAP.name" :level="calculatedLevel" :stats="calculatedStats" :extended="props.extended" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ImmortalSpirit } from '@/entities/souls/ImmortalSpirit/ImmortalSpirit'
import SoulView from '@/entities/souls/Soul/ui/SoulView.vue'

const props = defineProps<{
  level?: number
  globalHP?: number
  regenBonusHP?: number
  extended?: boolean
}>()

const calculatedLevel = computed(() => {
  if (props.level) {
    return props.level
  }

  if (props.globalHP) {
    return ImmortalSpirit.getLevelByGlobalHP(props.globalHP)
  }

  if (props.regenBonusHP) {
    return ImmortalSpirit.getLevelByRegenBonusHP(props.regenBonusHP)
  }

  return null
})

const calculatedStats = computed(() => {
  if (!props.extended) {
    return null
  }

  return Object.entries(new ImmortalSpirit(calculatedLevel.value ?? 1).stats).map(([key, value]) => ({
    name: ImmortalSpirit.RU_LANG_MAP[key as keyof typeof ImmortalSpirit.RU_LANG_MAP],
    value,
    unit: '%',
  }))
})
</script>
