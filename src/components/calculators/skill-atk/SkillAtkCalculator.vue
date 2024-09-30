<template>
  <section>
    <h2>Введите свои статы</h2>
    <el-row>
      <el-col>
        <el-input v-model="baseAttack" type="number" placeholder="Конечная атака">
          <template #prepend>Конечная атака</template>
        </el-input>
        <el-input v-model="skillCoefficient" type="number" placeholder="Коэффициент урона навыка">
          <template #prepend>Коэффициент урона навыка</template>
        </el-input>
        <el-input v-model="criticalSkillCoefficient" type="number" placeholder="Коэффициент крита навыка">
          <template #prepend>Коэффициент крита навыка</template>
        </el-input>
        <el-input v-model="activeSkillCoefficient" type="number" placeholder="Коэффициент урона активного навыка">
          <template #prepend>Коэффициент урона активного навыка</template>
          <template #append>
            <el-tooltip placement="top">
              <template #content>
                Коэффициент урона активного навыка — это урон, который определён в конкретном активном навыке<br />
                Например, активный навык "Паутина мира" имеет 5413% урона на первом уровне
              </template>
              <el-icon><question-filled /></el-icon>
            </el-tooltip>
          </template>
        </el-input>
      </el-col>
    </el-row>
    <h2>Результаты</h2>
    <el-row>
      <el-col>
        <el-input v-model="result.skillDamage" type="text" placeholder="Урон с навыка" disabled>
          <template #prepend>Урон с навыка</template>
        </el-input>
        <el-input v-model="result.criticalSkillDamage" type="text" placeholder="Урон с крита навыка" disabled>
          <template #prepend>Урон с крита навыка</template>
        </el-input>
        <el-input v-model="result.activeSkillDamage" type="text" placeholder="Урон с активного навыка" disabled>
          <template #prepend>Урон с активного навыка</template>
        </el-input>
        <el-input
          v-model="result.criticalActiveSkillDamage"
          type="text"
          placeholder="Урон с крита активного навыка"
          disabled
        >
          <template #prepend>Урон с крита активного навыка</template>
        </el-input>
      </el-col>
    </el-row>
  </section>
</template>

<script setup lang="ts">
import { QuestionFilled } from '@element-plus/icons-vue'
import { computed, ref } from 'vue'
import { formatNumber } from '@/utils/formatNumber'

const baseAttack = ref(739799999)
const skillCoefficient = ref(353.15)
const criticalSkillCoefficient = ref(183.7)
const activeSkillCoefficient = ref(0)

const result = computed(() => {
  const skillDamage = (baseAttack.value * skillCoefficient.value) / 100
  const criticalSkillDamage = (skillDamage * criticalSkillCoefficient.value) / 100
  const activeSkillDamage = (skillDamage * activeSkillCoefficient.value) / 100
  const criticalActiveSkillDamage = (activeSkillDamage * criticalSkillCoefficient.value) / 100

  return {
    skillDamage: formatNumber(skillDamage),
    criticalSkillDamage: formatNumber(criticalSkillDamage),
    activeSkillDamage: formatNumber(activeSkillDamage),
    criticalActiveSkillDamage: formatNumber(criticalActiveSkillDamage),
  }
})
</script>

<style scoped lang="scss">
//
</style>
