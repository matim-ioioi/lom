<template>
  <section>
    <h2>Введите свои статы</h2>
    <el-row>
      <el-col>
        <v-stats-input v-model="baseAttack" placeholder="Конечная атака, ед." />
        <v-stats-input v-model="baseAttackMultiplier" placeholder="Конечная атака, ед." />
        <v-stats-input v-model="critMultiplier" placeholder="Мультипликатор обычной атаки, %" />
        <v-stats-input v-model="comboMultiplier" placeholder="Мультипликатор крита, %" />
        <v-stats-input v-model="critRate" placeholder="Мультипликатор комбоатаки, %" />
        <v-stats-input v-model="comboRate" placeholder="Шанс крита, %" />
        <v-stats-input v-model="attackSpeed" placeholder="Шанс комбоатаки, %" />
      </el-col>
    </el-row>
    <h2>Результаты</h2>
    <el-row>
      <el-col>
        <v-stats-input v-model="result.attackDamage" placeholder="Урон с обычной атаки" disabled />
        <v-stats-input v-model="result.criticalDamage" placeholder="Урон с крита" disabled />
        <v-stats-input v-model="result.comboDamage" placeholder="Урон с комбоатаки" disabled />
        <v-stats-input v-model="result.criticalComboDamage" placeholder="Урон с крита+комбоатаки" disabled />
        <v-stats-input
          v-model="result.attackDPS"
          placeholder="Средний урон в секунду (не арбалетчик)"
          disabled
          hint="Средний урон в секунду рассчитывается с учётом всех мультипликаторов, которые на него влияют<br />
                (урон атк, крит урон, комбо урон, криткомбо урон, крит шанс, комбо шанс, криткомбо шанс, ск. атаки)"
        />
        <v-stats-input
          v-model="result.attackDPSArrowgod"
          placeholder="Средний урон в секунду (арбалетчик БЕЗ пробуды)"
          disabled
          hint="Средний урон в секунду рассчитывается с учётом всех мультипликаторов, которые на него влияют<br />
                (урон атк, крит урон, комбо урон, криткомбо урон, крит шанс, комбо шанс, криткомбо шанс, ск. атаки)"
        />
        <v-stats-input
          v-model="result.attackDPSArrowgodAwaked"
          placeholder="Средний урон в секунду (арбалетчик С пробудой)"
          disabled
          hint="Средний урон в секунду рассчитывается с учётом всех мультипликаторов, которые на него влияют<br />
                (урон атк, крит урон, комбо урон, криткомбо урон, крит шанс, комбо шанс, криткомбо шанс, ск. атаки)"
        />
      </el-col>
    </el-row>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import VStatsInput from '@/components/common/VStatsInput.vue'
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
