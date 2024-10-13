<template>
  <soul-view :image="BloodstainedBlade.image" :name="BloodstainedBlade.RU_LANG_MAP.name" :level="calculatedLevel" :stats="calculatedStats" :extended="props.extended" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { BloodstainedBlade } from '@/entities/souls/BloodstainedBlade/BloodstainedBlade'
import SoulView from '@/entities/souls/Soul/ui/SoulView.vue'

const props = defineProps<{
  level?: number
  globalAtk?: number
  healingRate?: number
  extended?: boolean
}>()

const calculatedLevel = computed(() => {
  if (props.level) {
    return props.level
  }

  if (props.globalAtk) {
    return BloodstainedBlade.getLevelByGlobalAtk(props.globalAtk)
  }

  if (props.healingRate) {
    return BloodstainedBlade.getLevelByHealingRate(props.healingRate)
  }

  return null
})

const calculatedStats = computed(() => {
  if (!props.extended) {
    return null
  }

  return Object.entries(new BloodstainedBlade(calculatedLevel.value ?? 1).stats).map(([key, value]) => ({
    name: BloodstainedBlade.RU_LANG_MAP[key as keyof typeof BloodstainedBlade.RU_LANG_MAP],
    value,
    unit: '%',
  }))
})
</script>
