<template>
  <section>
    <h2>Введите свои статы</h2>
    <el-row>
      <el-col>
        <v-stats-input v-model="baseAttack" placeholder="Конечная атака" />
        <v-stats-input v-model="skillCoefficient" placeholder="Коэффициент урона навыка" />
        <v-stats-input v-model="criticalSkillCoefficient" placeholder="Коэффициент крита навыка" />
        <v-stats-input
          v-model="activeSkillCoefficient"
          placeholder="Коэффициент урона активного навыка"
          hint="Коэффициент урона активного навыка — это урон, который определён в конкретном активном навыке<br />
                Например, активный навык 'Паутина мира' имеет 5413% урона на первом уровне"
        />
      </el-col>
    </el-row>
    <h2>Результаты</h2>
    <el-row>
      <el-col>
        <v-stats-input v-model="result.skillDamage" placeholder="Урон с навыка" disabled />
        <v-stats-input v-model="result.criticalSkillDamage" placeholder="Урон с крита навыка" disabled />
        <v-stats-input v-model="result.activeSkillDamage" placeholder="Урон с активного навыка" disabled />
        <v-stats-input
          v-model="result.criticalActiveSkillDamage"
          placeholder="Урон с крита активного навыка"
          disabled
        />
      </el-col>
    </el-row>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import VStatsInput from '@/components/common/VStatsInput.vue'
import { formatNumber } from '@/utils/formatNumber'

const baseAttack = ref('739799999')
const skillCoefficient = ref('353.15')
const criticalSkillCoefficient = ref('183.7')
const activeSkillCoefficient = ref('0')

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
