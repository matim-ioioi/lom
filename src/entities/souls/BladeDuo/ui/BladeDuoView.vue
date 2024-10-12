<template>
  <div class="blade-duo-view">
    <img :src="BladeDuo.image" :alt="BladeDuo.name" width="100" height="100" />
    <div v-if="calculatedLevel" class="blade-duo-view__level">
      <span>lv. {{ calculatedLevel }}</span>
    </div>
    <div v-if="calculatedStats" class="blade-duo-view__stats">
      <span v-for="([statName, stat], index) in Object.entries(calculatedStats)" :key="`blade-duo-${stat}-${index}`"> {{ statName }} - {{ stat }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { BladeDuo } from '@/entities/souls/BladeDuo/BladeDuo'

const props = defineProps<{
  level?: number
  comboDmg?: number
  bossDmg?: number
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
  return new BladeDuo(calculatedLevel.value ?? 1).stats
})
</script>

<style scoped lang="scss">
.blade-duo-view {
  position: relative;

  &__level {
    color: #fff;
    text-shadow:
      2px 0 #000000,
      -2px 0 #000000,
      0 2px #000000,
      0 -2px #000000,
      1px 1px #000000,
      -1px -1px #000000,
      1px -1px #000000,
      -1px 1px #000000;
    left: 0;
    font-weight: bold;
    position: absolute;
    top: 0;
    transform: translate(calc(50px - 50%), calc(100px - 100%));
  }

  &__stats {
    color: #fff;
  }
}
</style>
