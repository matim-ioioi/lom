<template>
  <section>
    <h2>Введите статы для рассчёта</h2>
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
        <v-stats-input v-model="result.criticalActiveSkillDamage" placeholder="Урон с крита активного навыка" disabled />
      </el-col>
    </el-row>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import VStatsInput from '@/components/common/VStatsInput.vue'
import { useHeroStats } from '@/composable/useHeroStats'
import { fromAbbreviatedNumber } from '@/utils/fromAbbreviatedNumber'
import { toAbbreviatedNumber } from '@/utils/toAbbreviatedNumber'

const { heroStats } = useHeroStats()

const baseAttack = ref(heroStats.value.attack)
const skillCoefficient = ref(heroStats.value.skillMultiplier)
const criticalSkillCoefficient = ref(heroStats.value.skillCritMultiplier)
const activeSkillCoefficient = ref('0')

const syncStats = () => {
  baseAttack.value = heroStats.value.attack
  skillCoefficient.value = heroStats.value.skillMultiplier
  criticalSkillCoefficient.value = heroStats.value.skillCritMultiplier
}

const result = computed(() => {
  const skillDamage = (+fromAbbreviatedNumber(baseAttack.value) * +fromAbbreviatedNumber(skillCoefficient.value)) / 100
  const criticalSkillDamage = (skillDamage * +fromAbbreviatedNumber(criticalSkillCoefficient.value)) / 100
  const activeSkillDamage = (skillDamage * +fromAbbreviatedNumber(activeSkillCoefficient.value)) / 100
  const criticalActiveSkillDamage = (activeSkillDamage * +fromAbbreviatedNumber(criticalSkillCoefficient.value)) / 100

  return {
    skillDamage: toAbbreviatedNumber(skillDamage),
    criticalSkillDamage: toAbbreviatedNumber(criticalSkillDamage),
    activeSkillDamage: toAbbreviatedNumber(activeSkillDamage),
    criticalActiveSkillDamage: toAbbreviatedNumber(criticalActiveSkillDamage),
  }
})

onMounted(() => {
  syncStats()
})
</script>
