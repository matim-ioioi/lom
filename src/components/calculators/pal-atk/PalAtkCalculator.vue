<template>
  <section>
    <h2>Введите свои статы</h2>
    <el-row>
      <el-col>
        <el-collapse v-model="statsCollapse">
          <el-collapse-item title="Общие статы" name="pal0">
            <el-input v-model="generalStats.baseAttack" type="number" placeholder="Конечная атака, ед.">
              <template #prepend>Конечная атака, ед.</template>
            </el-input>
            <el-input
              v-model="generalStats.palAttackMultiplier"
              type="number"
              placeholder="Мультипликатор урона партнёра (общий), %"
            >
              <template #prepend>Мультипликатор урона партнёра (общий), %</template>
            </el-input>
            <el-input
              v-model="generalStats.palCritMultiplier"
              type="number"
              placeholder="Мультипликатор крита партнёра (конкретного), %"
            >
              <template #prepend>Мультипликатор крита партнёра (конкретного), %</template>
            </el-input>
            <el-input
              v-model="generalStats.palComboMultiplier"
              type="number"
              placeholder="Мультипликатор комбоатаки партнёра (конкретного), %"
            >
              <template #prepend>Мультипликатор комбоатаки партнёра (конкретного), %</template>
            </el-input>
            <el-input
              v-model="generalStats.palCritRate"
              type="number"
              placeholder="Шанс крита партнёра (конкретного), %"
            >
              <template #prepend>Шанс крита партнёра (конкретного), %</template>
            </el-input>
            <el-input
              v-model="generalStats.palComboRate"
              type="number"
              placeholder="Шанс комбоатаки партнёра (конкретного), %"
            >
              <template #prepend>Шанс комбоатаки партнёра (конкретного), %</template>
            </el-input>
          </el-collapse-item>
          <el-collapse-item
            v-for="(stat, index) in palStats"
            :key="`pal${index + 1}`"
            :title="`Партнёр ${index + 1}${
              index === 5 ? ' (только для классов \'царь зверей\' и \'почтенный зверей\')' : ''
            }`"
            :name="`pal${index + 1}`"
          >
            <el-input
              v-model="stat.palAttackCoefficient"
              type="number"
              placeholder="Коэффициент урона партнёра (конкретного), ед."
            >
              <template #prepend>Коэффициент урона партнёра (конкретного), ед.</template>
            </el-input>

            <el-input
              v-model="stat.palAttackSpeed"
              type="number"
              placeholder="Коэффициент скорости атаки партнёра (конкретного), ед."
            >
              <template #prepend>Коэффициент скорости атаки партнёра (конкретного), ед.</template>
            </el-input>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
    <h2>Результаты</h2>
    <el-row>
      <el-col>
        <el-collapse v-model="resultsCollapse">
          <el-collapse-item title="Общие результаты" name="result0">
            <el-input v-model="generalResults.attackDPS" type="text" placeholder="Средний урон в секунду" disabled>
              <template #prepend>Средний урон в секунду</template>
              <template #append>
                <el-tooltip placement="top">
                  <template #content>
                    Это средний урон в секунду всех ваших партнёров вместе<br />
                    Средний урон в секунду рассчитывается с учётом всех мультипликаторов, которые на него влияют<br />
                    (урон атк, крит урон, комбо урон, криткомбо урон, крит шанс, комбо шанс, криткомбо шанс, ск. атаки)
                  </template>
                  <el-icon><question-filled /></el-icon>
                </el-tooltip>
              </template>
            </el-input>
          </el-collapse-item>
          <el-collapse-item
            v-for="(result, index) in results"
            :key="`pal${index + 1}`"
            :title="`Партнёр ${index + 1}${
              index === 5 ? ' (только для классов \'царь зверей\' и \'почтенный зверей\')' : ''
            }`"
            :name="`result${index + 1}`"
          >
            <el-input v-model="result.attackDamage" type="text" placeholder="Урон с обычной атаки партнёра" disabled>
              <template #prepend>Урон с обычной атаки партнёра</template>
            </el-input>
            <el-input v-model="result.criticalDamage" type="text" placeholder="Урон с крита партнёра" disabled>
              <template #prepend>Урон с крита партнёра</template>
            </el-input>
            <el-input v-model="result.comboDamage" type="text" placeholder="Урон с комбоатаки партнёра" disabled>
              <template #prepend>Урон с комбоатаки партнёра</template>
            </el-input>
            <el-input
              v-model="result.criticalComboDamage"
              type="text"
              placeholder="Урон с крита+комбоатаки партнёра"
              disabled
            >
              <template #prepend>Урон с крита+комбоатаки партнёра</template>
            </el-input>
            <el-input v-model="result.attackDPS" type="text" placeholder="Средний урон в секунду" disabled>
              <template #prepend>Средний урон в секунду</template>
              <template #append>
                <el-tooltip placement="top">
                  <template #content>
                    Средний урон в секунду рассчитывается с учётом всех мультипликаторов, которые на него влияют<br />
                    (урон атк, крит урон, комбо урон, криткомбо урон, крит шанс, комбо шанс, криткомбо шанс, ск. атаки)
                  </template>
                  <el-icon><question-filled /></el-icon>
                </el-tooltip>
              </template>
            </el-input>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
  </section>
</template>

<script setup lang="ts">
import { QuestionFilled } from '@element-plus/icons-vue'
import { computed, reactive } from 'vue'
import { calculateDPS } from '@/utils/calculateDPS'
import { deformatNumber } from '@/utils/deformatNumber'
import { formatNumber } from '@/utils/formatNumber'

type GeneralProperties = {
  baseAttack: number
  palAttackMultiplier: number
  palCritMultiplier: number
  palComboMultiplier: number
  palCritRate: number
  palComboRate: number
}

type PalProperties = {
  palAttackCoefficient: number
  palAttackSpeed: number
}

const statsCollapse = ['pal0']
const resultsCollapse = ['result0']

const generalStats = reactive<GeneralProperties>({
  baseAttack: 75675656,
  palAttackMultiplier: 100,
  palCritMultiplier: 100,
  palComboMultiplier: 200,
  palCritRate: 100,
  palComboRate: 100,
})

const palStats = reactive<PalProperties[]>([
  {
    palAttackCoefficient: 0,
    palAttackSpeed: 0,
  },
  {
    palAttackCoefficient: 0,
    palAttackSpeed: 0,
  },
  {
    palAttackCoefficient: 0,
    palAttackSpeed: 0,
  },
  {
    palAttackCoefficient: 0,
    palAttackSpeed: 0,
  },
  {
    palAttackCoefficient: 0,
    palAttackSpeed: 0,
  },
  {
    palAttackCoefficient: 0,
    palAttackSpeed: 0,
  },
])

const results = computed(() => {
  return palStats.map((pal) => {
    const attackDamage = ((generalStats.baseAttack * generalStats.palAttackMultiplier) / 100) * pal.palAttackCoefficient
    const criticalDamage = (attackDamage * generalStats.palCritMultiplier) / 100
    const comboDamage = (attackDamage * generalStats.palComboMultiplier) / 100

    const criticalComboDamage = (criticalDamage * generalStats.palComboMultiplier) / 100

    const attackDPS = calculateDPS({
      damage: attackDamage,
      critRate: generalStats.palCritRate,
      critMultiplier: generalStats.palCritMultiplier,
      comboRate: generalStats.palComboRate,
      comboMultiplier: generalStats.palComboMultiplier,
      attackSpeed: pal.palAttackSpeed,
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
    attackDPS,
  }
})
</script>

<style scoped lang="scss">
//
</style>
