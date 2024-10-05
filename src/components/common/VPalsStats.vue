<template>
  <v-container direction="vertical" :gap="32" divided>
    <div v-for="(stat, index) in palsStats" :key="`pal${index + 1}`">
      <p>{{ `Партнёр ${index + 1}${index === 5 ? " (только для классов 'царь зверей' и 'почтенный зверей')" : ''}` }}</p>

      <v-stats-input v-model="stat.attackCoefficient" placeholder="Коэффициент урона партнёра (конкретного), ед." />
      <v-stats-input v-model="stat.attackSpeed" placeholder="Коэффициент скорости атаки партнёра (конкретного), ед." />
    </div>

    <div>
      <el-row>
        <el-col :span="24">
          <el-button type="primary" style="width: 100%" @click="saveStats">Сохранить статы в браузере</el-button>
        </el-col>
      </el-row>
      <el-row style="margin-top: 16px">
        <el-col :span="24">
          <el-button style="width: 100%" @click="downloadStats">Экспортировать статы (json-файл)</el-button>
        </el-col>
      </el-row>
      <el-row style="margin-top: 16px">
        <el-col :span="24">
          <v-file-uploader trigger-text="Импортировать статы (json-файл)" @change="handleUploadedFile" />
        </el-col>
      </el-row>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import VContainer from '@/components/common/VContainer.vue'
import VFileUploader from '@/components/common/VFileUploader.vue'
import VStatsInput from '@/components/common/VStatsInput.vue'
import { usePalsStats } from '@/composable/usePalsStats'
import { downloadObjectAsJSON } from '@/utils/downloadObjectAsJSON'
import { readFileAsJSON } from '@/utils/readFileAsJSON'

const { key, palsStats, saveStats } = usePalsStats()

const downloadStats = () => {
  downloadObjectAsJSON(palsStats.value, key)
}

const handleUploadedFile = async (uploadedFile: File) => {
  const result = await readFileAsJSON<typeof palsStats.value>(uploadedFile)

  if (result) {
    palsStats.value = result
  }
}
</script>
