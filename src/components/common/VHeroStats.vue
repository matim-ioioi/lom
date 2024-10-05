<template>
  <v-container direction="vertical" :gap="32" divided>
    <div>
      <!-- base stats -->
      <v-container direction="vertical" :gap="8">
        <div>
          <v-stats-input v-model="heroStats.hp" placeholder="Конечное здоровье, ед." />
          <v-stats-input v-model="heroStats.attack" placeholder="Конечная атака, ед." />
        </div>
        <div>
          <v-stats-input v-model="heroStats.defense" placeholder="Конечная защита, ед." />
          <v-stats-input v-model="heroStats.attackSpeed" placeholder="Скорость атаки, ед." />
        </div>
      </v-container>
      <!-- base stats -->
    </div>

    <div>
      <!-- attack -->
      <v-stats-input v-model="heroStats.critRate" placeholder="Шанс крита, %" />
      <v-stats-input v-model="heroStats.comboRate" placeholder="Шанс комбо, %" />
      <v-stats-input v-model="heroStats.counterRate" placeholder="Шанс контратаки, %" />

      <v-stats-input v-model="heroStats.baseAttackMultiplier" placeholder="Коэф. обычной атаки, %" />
      <v-stats-input v-model="heroStats.critMultiplier" placeholder="Коэф. крита, %" />
      <v-stats-input v-model="heroStats.comboMultiplier" placeholder="Коэф. комбо, %" />
      <v-stats-input v-model="heroStats.counterMultiplier" placeholder="Коэф. контратаки, %" />

      <v-stats-input v-model="heroStats.baseAttackResistance" placeholder="СУ обычной атаки, %" />
      <v-stats-input v-model="heroStats.critResistance" placeholder="СУ крита, %" />
      <v-stats-input v-model="heroStats.comboResistance" placeholder="СУ комбо, %" />
      <v-stats-input v-model="heroStats.counterResistance" placeholder="СУ контратаки, %" />
      <v-stats-input v-model="heroStats.damageResistance" placeholder="СУ, %" hint="Пока что значение этого атрибута может меняться только в бою с помощью скиллов, маунтов, крыльев и т.д." />

      <v-stats-input v-model="heroStats.comboIgnoreRate" placeholder="Шанс игнорирования комбо, %" hint="Пока что значение этого атрибута может меняться только в бою с помощью скиллов, маунтов, крыльев и т.д." />
      <v-stats-input v-model="heroStats.counterIgnoreRate" placeholder="Шанс игнорирования контратаки, %" hint="Пока что значение этого атрибута может меняться только в бою с помощью скиллов, маунтов, крыльев и т.д." />
      <!-- attack -->
    </div>

    <div>
      <!-- skill -->
      <v-stats-input v-model="heroStats.skillCritRate" placeholder="Шанс крита навыков, %" />

      <v-stats-input v-model="heroStats.skillMultiplier" placeholder="Коэф. навыков, %" />
      <v-stats-input v-model="heroStats.skillCritMultiplier" placeholder="Коэф. крита навыков, %" />

      <v-stats-input v-model="heroStats.skillResistance" placeholder="СУ навыков, %" />
      <!-- skill -->
    </div>

    <div>
      <!-- control -->
      <v-stats-input v-model="heroStats.stunRate" placeholder="Шанс оглушения, %" />
      <v-stats-input v-model="heroStats.evasionRate" placeholder="Шанс уклонения, %" />
      <v-stats-input v-model="heroStats.launchRate" placeholder="Шанс подбрасывания, %" />
      <v-stats-input v-model="heroStats.regenRate" placeholder="Шанс восстановления, %" />

      <v-stats-input v-model="heroStats.stunIgnoreRate" placeholder="Шанс игнорирования оглушения, %" />
      <v-stats-input v-model="heroStats.evasionIgnoreRate" placeholder="Шанс игнорирования уклонения, %" />
      <v-stats-input v-model="heroStats.launchIgnoreRate" placeholder="Шанс игнорирования подбрасывания, %" />
      <!-- control -->
    </div>

    <div>
      <!-- boss -->
      <v-stats-input v-model="heroStats.bossMultiplier" placeholder="Коэф. урона боссу, %" />

      <v-stats-input v-model="heroStats.bossResistance" placeholder="СУ урона босса, %" />
      <!-- boss -->
    </div>

    <div>
      <!-- pal -->
      <v-stats-input v-model="heroStats.palCritRate" placeholder="Шанс крита партнёра, %" hint="Чтобы посмотреть, нажмите просмотр любого из питомцев, там есть 'Крит'" />
      <v-stats-input v-model="heroStats.palComboRate" placeholder="Шанс комбо партнёра, %" hint="Чтобы посмотреть, нажмите просмотр любого из питомцев, там есть 'Комбо'" />

      <v-stats-input v-model="heroStats.palMultiplier" placeholder="Коэф. урона всех партнёров, %" />
      <v-stats-input v-model="heroStats.palCritMultiplier" placeholder="Коэф. крита всех партнёров, %" hint="Чтобы посмотреть, нажмите просмотр любого из питомцев, там есть 'Крит. урон'" />
      <v-stats-input v-model="heroStats.palComboMultiplier" placeholder="Коэф. комбо всех партнёров, %" hint="Чтобы посмотреть, нажмите просмотр любого из питомцев, там есть 'Коэффициент комбо'" />

      <v-stats-input v-model="heroStats.palResistance" placeholder="СУ урону партнёров, %" />
      <!-- pal -->
    </div>

    <div>
      <!-- heal -->
      <v-stats-input v-model="heroStats.healRate" placeholder="Шанс лечения, %" hint="На самом деле это вампиризм (т.е. шанс и коэф. считаются относительно атак)" />
      <v-stats-input v-model="heroStats.healMultiplier" placeholder="Коэф. лечения, %" hint="На самом деле это вампиризм (т.е. шанс и коэф. считаются относительно атак)" />
      <!-- heal -->
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
import { useHeroStats } from '@/composable/useHeroStats'
import { downloadObjectAsJSON } from '@/utils/downloadObjectAsJSON'
import { readFileAsJSON } from '@/utils/readFileAsJSON'

const { key, heroStats, saveStats } = useHeroStats()

const downloadStats = () => {
  downloadObjectAsJSON(heroStats.value, key)
}

const handleUploadedFile = async (uploadedFile: File) => {
  const result = await readFileAsJSON<typeof heroStats.value>(uploadedFile)

  if (result) {
    heroStats.value = result
  }
}
</script>
