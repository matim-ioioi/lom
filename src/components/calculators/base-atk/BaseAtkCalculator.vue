<template>
  <section>
    <h2>Введите свои статы</h2>
    <el-row>
      <el-col>
        <el-input v-model="baseAttack" type="number" placeholder="Конечная атака, ед.">
          <template #prepend>Конечная атака, ед.</template>
        </el-input>
        <el-input v-model="baseAttackMultiplier" type="number" placeholder="Мультипликатор обычной атаки, %">
          <template #prepend>Мультипликатор обычной атаки, %</template>
        </el-input>
        <el-input v-model="critMultiplier" type="number" placeholder="Мультипликатор крита, %">
          <template #prepend>Мультипликатор крита, %</template>
        </el-input>
        <el-input v-model="comboMultiplier" type="number" placeholder="Мультипликатор комбоатаки, %">
          <template #prepend>Мультипликатор комбоатаки, %</template>
        </el-input>
        <el-input v-model="critRate" type="number" placeholder="Шанс крита, %">
          <template #prepend>Шанс крита, %</template>
        </el-input>
        <el-input v-model="comboRate" type="number" placeholder="Шанс комбоатаки, %">
          <template #prepend>Шанс комбоатаки, %</template>
        </el-input>
        <el-input v-model="attackSpeed" type="number" placeholder="Коэффициент скорости атаки, ед.">
          <template #prepend>Коэффициент скорости атаки, ед.</template>
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
        <el-input v-model="result.criticalComboDamage" type="text" placeholder="Урон с крита+комбоатаки" disabled>
          <template #prepend>Урон с крита+комбоатаки</template>
        </el-input>
        <el-input v-model="result.attackDPS" type="text" placeholder="Средний урон в секунду" disabled>
          <template #prepend>Средний урон в секунду (не арбалетчик)</template>
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
        <el-input
          v-model="result.attackDPSArrowgod"
          type="text"
          placeholder="Средний урон в секунду (арбалетчик БЕЗ пробуды)"
          disabled
        >
          <template #prepend>Средний урон в секунду (арбалетчик БЕЗ пробуды)</template>
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
        <el-input
          v-model="result.attackDPSArrowgodAwaked"
          type="text"
          placeholder="Средний урон в секунду (арбалетчик С пробудой)"
          disabled
        >
          <template #prepend>Средний урон в секунду (арбалетчик С пробудой)</template>
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
      </el-col>
    </el-row>
  </section>
</template>

<script setup lang="ts">
import { QuestionFilled } from '@element-plus/icons-vue'
import { computed, ref } from 'vue'
import { calculateDPS } from '@/utils/calculateDPS'
import { formatNumber } from '@/utils/formatNumber'

const baseAttack = ref(739799999)
const baseAttackMultiplier = ref(2899.06)
const critMultiplier = ref(4364.49)
const comboMultiplier = ref(21367.88)
const critRate = ref(50.3)
const comboRate = ref(93.47)
const attackSpeed = ref(3.96)

const result = computed(() => {
  const attackDamage = (baseAttack.value * baseAttackMultiplier.value) / 100
  const criticalDamage = (attackDamage * critMultiplier.value) / 100
  const comboDamage = (attackDamage * comboMultiplier.value) / 100

  const criticalComboDamage = (criticalDamage * comboMultiplier.value) / 100

  const attackDPS = calculateDPS({
    damage: attackDamage,
    critRate: critRate.value,
    critMultiplier: critMultiplier.value,
    comboRate: comboRate.value,
    comboMultiplier: comboMultiplier.value,
    attackSpeed: attackSpeed.value,
  })
  const attackDPSArrowgod = calculateDPS({
    damage: attackDamage,
    critRate: critRate.value,
    critMultiplier: critMultiplier.value,
    comboRate: comboRate.value,
    comboMultiplier: comboMultiplier.value,
    attackSpeed: attackSpeed.value,
    normalAtkCount: 2,
    comboAtkCount: 2,
  })
  const attackDPSArrowgodAwaked = calculateDPS({
    damage: attackDamage,
    critRate: critRate.value,
    critMultiplier: critMultiplier.value,
    comboRate: comboRate.value,
    comboMultiplier: comboMultiplier.value,
    attackSpeed: attackSpeed.value,
    normalAtkCount: 2,
    comboAtkCount: 3,
  })

  return {
    attackDamage: formatNumber(attackDamage),
    criticalDamage: formatNumber(criticalDamage),
    comboDamage: formatNumber(comboDamage),
    criticalComboDamage: formatNumber(criticalComboDamage),
    attackDPS: formatNumber(attackDPS),
    attackDPSArrowgod: formatNumber(attackDPSArrowgod),
    attackDPSArrowgodAwaked: formatNumber(attackDPSArrowgodAwaked),
  }
})
</script>

<style scoped lang="scss">
//
</style>
