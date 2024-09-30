<template>
  <section>
    <h2>Введите свои статы</h2>
    <el-row>
      <el-col>
        <el-input v-model="baseAttack" type="number" placeholder="Конечная атака">
          <template #prepend>Конечная атака</template>
        </el-input>
        <el-input v-model="baseAttackCoefficient" type="number" placeholder="Коэффициент обычной атаки">
          <template #prepend>Коэффициент обычной атаки</template>
        </el-input>
        <el-input v-model="criticalCoefficient" type="number" placeholder="Коэффициент крита">
          <template #prepend>Коэффициент крита</template>
        </el-input>
        <el-input v-model="comboCoefficient" type="number" placeholder="Коэффициент комбоатаки">
          <template #prepend>Коэффициент комбоатаки</template>
        </el-input>
        <el-input v-model="counterattackCoefficient" type="number" placeholder="Коэффициент контратаки">
          <template #prepend>Коэффициент контратаки</template>
        </el-input>
      </el-col>
    </el-row>
    <h2>Результаты</h2>
    <el-row>
      <el-col>
        <el-input v-model="result.attackDamage" type="text" placeholder="Урон с обычной атаки" disabled>
          <template #prepend>Урон с обычной атаки</template>
        </el-input>
        <el-input v-model="result.criticalDamage" type="text" placeholder="Урон с крита" disabled>
          <template #prepend>Урон с крита</template>
        </el-input>
        <el-input v-model="result.comboDamage" type="text" placeholder="Урон с комбоатаки" disabled>
          <template #prepend>Урон с комбоатаки</template>
        </el-input>
        <el-input v-model="result.counterattackDamage" type="text" placeholder="Урон с контратаки" disabled>
          <template #prepend>Урон с контратаки</template>
        </el-input>
        <el-input v-model="result.criticalComboDamage" type="text" placeholder="Урон с крита+комбоатаки" disabled>
          <template #prepend>Урон с крита+комбоатаки</template>
        </el-input>
        <el-input v-model="result.criticalCounterattackDamage" type="text" placeholder="Урон с крита+контратаки" disabled>
          <template #prepend>Урон с крита+контратаки</template>
        </el-input>
      </el-col>
    </el-row>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { formatNumber } from '@/utils/formatNumber'

const baseAttack = ref(739799999)
const baseAttackCoefficient = ref(2899.06)
const criticalCoefficient = ref(4364.49)
const comboCoefficient = ref(21367.88)
const counterattackCoefficient = ref(1585.49)

const result = computed(() => {
  const attackDamage = (baseAttack.value * baseAttackCoefficient.value) / 100
  const criticalDamage = (attackDamage * criticalCoefficient.value) / 100
  const comboDamage = (attackDamage * comboCoefficient.value) / 100
  const counterattackDamage = (attackDamage * counterattackCoefficient.value) / 100

  const criticalComboDamage = (criticalDamage * comboCoefficient.value) / 100
  const criticalCounterattackDamage = (criticalDamage * counterattackCoefficient.value) / 100

  return {
    attackDamage: formatNumber(attackDamage),
    criticalDamage: formatNumber(criticalDamage),
    comboDamage: formatNumber(comboDamage),
    counterattackDamage: formatNumber(counterattackDamage),
    criticalComboDamage: formatNumber(criticalComboDamage),
    criticalCounterattackDamage: formatNumber(criticalCounterattackDamage),
  }
})
</script>

<style scoped lang="scss">
//
</style>
