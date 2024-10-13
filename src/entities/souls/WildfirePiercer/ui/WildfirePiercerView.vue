<template>
  <soul-view :image="WildfirePiercer.image" :name="WildfirePiercer.RU_LANG_MAP.name" :level="calculatedLevel" :stats="calculatedStats" :extended="props.extended" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SoulView from '@/entities/souls/Soul/ui/SoulView.vue'
import { WildfirePiercer } from '@/entities/souls/WildfirePiercer/WildfirePiercer'

const props = defineProps<{
  level?: number
  basicAtkDmg?: number
  skillDmg?: number
  extended?: boolean
}>()

const calculatedLevel = computed(() => {
  if (props.level) {
    return props.level
  }

  if (props.basicAtkDmg) {
    return WildfirePiercer.getLevelByBasicAtkDmg(props.basicAtkDmg)
  }

  if (props.skillDmg) {
    return WildfirePiercer.getLevelBySkillDmg(props.skillDmg)
  }

  return null
})

const calculatedStats = computed(() => {
  if (!props.extended) {
    return null
  }

  return Object.entries(new WildfirePiercer(calculatedLevel.value ?? 1).stats).map(([key, value]) => ({
    name: WildfirePiercer.RU_LANG_MAP[key as keyof typeof WildfirePiercer.RU_LANG_MAP],
    value,
    unit: '%',
  }))
})
</script>
