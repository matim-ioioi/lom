<template>
  <section>
    <h2>Введите статы для рассчёта</h2>
    <el-row>
      <el-col>
        <el-collapse v-model="statsCollapse">
          <el-collapse-item title="Общие статы" name="pal0">
            <v-stats-input v-model="generalStats.baseAttack" placeholder="Конечная атака, ед." />
            <v-stats-input v-model="generalStats.palAttackMultiplier" placeholder="Мультипликатор урона партнёра (общий), %" />
            <v-stats-input v-model="generalStats.palCritMultiplier" placeholder="Мультипликатор крита партнёра (конкретного), %" />
            <v-stats-input v-model="generalStats.palComboMultiplier" placeholder="Мультипликатор комбоатаки партнёра (конкретного), %" />
            <v-stats-input v-model="generalStats.palCritRate" placeholder="Шанс крита партнёра (конкретного), %" />
            <v-stats-input v-model="generalStats.palComboRate" placeholder="Шанс комбоатаки партнёра (конкретного), %" />
          </el-collapse-item>
          <el-collapse-item v-for="(stat, index) in palStats" :key="`pal${index + 1}`" :title="`Партнёр ${index + 1}${index === 5 ? ' (только для классов \'царь зверей\' и \'почтенный зверей\')' : ''}`" :name="`pal${index + 1}`">
            <v-stats-input v-model="stat.palAttackCoefficient" placeholder="Коэффициент урона партнёра (конкретного), ед." />
            <v-stats-input v-model="stat.palAttackSpeed" placeholder="Коэффициент скорости атаки партнёра (конкретного), ед." />
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
    <h2>Результаты</h2>
    <el-row>
      <el-col>
        <el-collapse v-model="resultsCollapse">
          <el-collapse-item title="Общие результаты" name="result0">
            <v-stats-input
              v-model="generalResults.attackDPS"
              placeholder="Средний урон в секунду"
              disabled
              hint="Это средний урон в секунду всех ваших партнёров вместе<br />
                    Средний урон в секунду рассчитывается с учётом всех мультипликаторов, которые на него влияют<br />
                    (урон атк, крит урон, комбо урон, криткомбо урон, крит шанс, комбо шанс, криткомбо шанс, ск. атаки)"
            />
          </el-collapse-item>
          <el-collapse-item v-for="(result, index) in results" :key="`pal${index + 1}`" :title="`Партнёр ${index + 1}${index === 5 ? ' (только для классов \'царь зверей\' и \'почтенный зверей\')' : ''}`" :name="`result${index + 1}`">
            <v-stats-input v-model="result.attackDamage" placeholder="Урон с обычной атаки партнёра" disabled />
            <v-stats-input v-model="result.criticalDamage" placeholder="Урон с крита партнёра" disabled />
            <v-stats-input v-model="result.comboDamage" placeholder="Урон с комбоатаки партнёра" disabled />
            <v-stats-input v-model="result.criticalComboDamage" placeholder="Урон с крита+комбоатаки партнёра" disabled />
            <v-stats-input
              v-model="result.attackDPS"
              placeholder="Средний урон в секунду"
              disabled
              hint="Средний урон в секунду рассчитывается с учётом всех мультипликаторов, которые на него влияют<br />
                    (урон атк, крит урон, комбо урон, криткомбо урон, крит шанс, комбо шанс, криткомбо шанс, ск. атаки)"
            />
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
  </section>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import VStatsInput from '@/components/common/VStatsInput.vue'
import { calculateDPS } from '@/utils/calculateDPS'
import { deformatNumber } from '@/utils/deformatNumber'
import { formatNumber } from '@/utils/formatNumber'

type GeneralProperties = {
  baseAttack: string
  palAttackMultiplier: string
  palCritMultiplier: string
  palComboMultiplier: string
  palCritRate: string
  palComboRate: string
}

type PalProperties = {
  palAttackCoefficient: string
  palAttackSpeed: string
}

const statsCollapse = ref(['pal0'])
const resultsCollapse = ref(['result0'])

const generalStats = reactive<GeneralProperties>({
  baseAttack: '75675656',
  palAttackMultiplier: '100',
  palCritMultiplier: '100',
  palComboMultiplier: '200',
  palCritRate: '100',
  palComboRate: '100',
})

const palStats = reactive<PalProperties[]>([
  {
    palAttackCoefficient: '0',
    palAttackSpeed: '0',
  },
  {
    palAttackCoefficient: '0',
    palAttackSpeed: '0',
  },
  {
    palAttackCoefficient: '0',
    palAttackSpeed: '0',
  },
  {
    palAttackCoefficient: '0',
    palAttackSpeed: '0',
  },
  {
    palAttackCoefficient: '0',
    palAttackSpeed: '0',
  },
  {
    palAttackCoefficient: '0',
    palAttackSpeed: '0',
  },
])

const results = computed(() => {
  return palStats.map((pal) => {
    const attackDamage = ((+generalStats.baseAttack * +generalStats.palAttackMultiplier) / 100) * +pal.palAttackCoefficient
    const criticalDamage = (attackDamage * +generalStats.palCritMultiplier) / 100
    const comboDamage = (attackDamage * +generalStats.palComboMultiplier) / 100

    const criticalComboDamage = (criticalDamage * +generalStats.palComboMultiplier) / 100

    const attackDPS = calculateDPS({
      damage: attackDamage,
      critRate: +generalStats.palCritRate,
      critMultiplier: +generalStats.palCritMultiplier,
      comboRate: +generalStats.palComboRate,
      comboMultiplier: +generalStats.palComboMultiplier,
      attackSpeed: +pal.palAttackSpeed,
    })

    return {
      attackDamage: formatNumber(attackDamage),
      criticalDamage: formatNumber(criticalDamage),
      comboDamage: formatNumber(comboDamage),
      criticalComboDamage: formatNumber(criticalComboDamage),
      attackDPS: formatNumber(attackDPS),
    }
  })
})

const generalResults = computed(() => {
  const attackDPS = results.value.reduce((a, b) => a + deformatNumber(b.attackDPS), 0)

  return {
    attackDPS: formatNumber(attackDPS),
  }
})
</script>
