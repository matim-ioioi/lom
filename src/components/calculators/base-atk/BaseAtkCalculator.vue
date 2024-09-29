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
        <el-input v-model="criticalCoefficient" type="number" placeholder="Крит урон">
          <template #prepend>Крит урон</template>
        </el-input>
        <el-input v-model="comboCoefficient" type="number" placeholder="Коэффициент комбо">
          <template #prepend>Коэффициент комбо</template>
        </el-input>
        <el-input v-model="counterattackCoefficient" type="number" placeholder="Коэффициент контратаки">
          <template #prepend>Коэффициент контратаки</template>
        </el-input>
      </el-col>
    </el-row>
    <h2>Результаты</h2>
    <el-row>
      <el-col>
        <el-input v-model="result.attackDamage" type="text" placeholder="Обычная атака" disabled>
          <template #prepend>Обычная атака</template>
        </el-input>
        <el-input v-model="result.criticalDamage" type="text" placeholder="Крит" disabled>
          <template #prepend>Крит</template>
        </el-input>
        <el-input v-model="result.comboDamage" type="text" placeholder="Комбо" disabled>
          <template #prepend>Комбо</template>
        </el-input>
        <el-input v-model="result.counterattackDamage" type="text" placeholder="Контра" disabled>
          <template #prepend>Контра</template>
        </el-input>
        <el-input v-model="result.criticalComboDamage" type="text" placeholder="Крит+комбо" disabled>
          <template #prepend>Крит+комбо</template>
        </el-input>
        <el-input v-model="result.criticalCounterattackDamage" type="text" placeholder="Крит+контра" disabled>
          <template #prepend>Крит+контра</template>
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
