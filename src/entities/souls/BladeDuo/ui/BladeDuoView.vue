<template>
  <soul-view :image="BladeDuo.image" :name="BladeDuo.RU_LANG_MAP.name" :level="calculatedLevel" :stats="calculatedStats" :extended="props.extended" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { BladeDuo } from '@/entities/souls/BladeDuo/BladeDuo'
import SoulView from '@/entities/souls/Soul/ui/SoulView.vue'

const props = defineProps<{
  level?: number
  comboDmg?: number
  bossDmg?: number
  extended?: boolean
}>()

const calculatedLevel = computed(() => {
  if (props.level) {
    return props.level
  }

  if (props.comboDmg) {
    return BladeDuo.getLevelByComboDmg(props.comboDmg)
  }

  if (props.bossDmg) {
    return BladeDuo.getLevelByBossDmg(props.bossDmg)
  }

  return null
})

const calculatedStats = computed(() => {
  if (!props.extended) {
    return null
  }

  return Object.entries(new BladeDuo(calculatedLevel.value ?? 1).stats).map(([key, value]) => ({
    name: BladeDuo.RU_LANG_MAP[key as keyof typeof BladeDuo.RU_LANG_MAP],
    value,
    unit: '%',
  }))
})
</script>
