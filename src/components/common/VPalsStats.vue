<template>
  <v-container direction="vertical" :gap="32" divided>
    <div v-for="(stat, index) in palsStats" :key="`pal${index + 1}`" :title="``">
      <p>{{ `Партнёр ${index + 1}${index === 5 ? " (только для классов 'царь зверей' и 'почтенный зверей')" : ''}` }}</p>

      <v-stats-input v-model="stat.attackCoefficient" placeholder="Коэффициент урона партнёра (конкретного), ед." />
      <v-stats-input v-model="stat.attackSpeed" placeholder="Коэффициент скорости атаки партнёра (конкретного), ед." />
    </div>

    <div>
      <el-button @click="downloadStats">Экспортировать статы (json-файл)</el-button>
      <el-button @click="saveStats">Сохранить статы в браузере</el-button>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import VContainer from '@/components/common/VContainer.vue'
import VStatsInput from '@/components/common/VStatsInput.vue'
import { usePalsStats } from '@/composable/usePalsStats'
import { downloadObjectAsJSON } from '@/utils/downloadObjectAsJSON'

const { key, palsStats, saveStats } = usePalsStats()

const downloadStats = () => {
  downloadObjectAsJSON(palsStats.value, key)
}
</script>
