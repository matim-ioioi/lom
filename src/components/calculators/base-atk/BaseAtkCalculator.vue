<template>
  <section>
    <h2>Введите статы для рассчёта</h2>
    <el-row>
      <el-col>
        <v-stats-input v-model="baseAttack" placeholder="Конечная атака, ед." />
        <v-stats-input v-model="baseAttackMultiplier" placeholder="Мультипликатор обычной атаки, %" />
        <v-stats-input v-model="critMultiplier" placeholder="Мультипликатор крита, %" />
        <v-stats-input v-model="comboMultiplier" placeholder="Мультипликатор комбоатаки, %" />
        <v-stats-input v-model="critRate" placeholder="Шанс крита, %" />
        <v-stats-input v-model="comboRate" placeholder="Шанс комбоатаки, %" />
        <v-stats-input v-model="attackSpeed" placeholder="Скорость атаки, ед." />
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
import { computed, onMounted, ref } from 'vue'
import VStatsInput from '@/components/common/VStatsInput.vue'
import { useHeroStats } from '@/composable/useHeroStats'
import { calculateDPS } from '@/utils/calculateDPS'
import { toAbbreviatedNumber } from '@/utils/toAbbreviatedNumber'

const { heroStats } = useHeroStats()

const baseAttack = ref(heroStats.value.attack)
const baseAttackMultiplier = ref(heroStats.value.baseAttackMultiplier)
const critMultiplier = ref(heroStats.value.critMultiplier)
const comboMultiplier = ref(heroStats.value.comboMultiplier)
const critRate = ref(heroStats.value.critRate)
const comboRate = ref(heroStats.value.comboRate)
const attackSpeed = ref(heroStats.value.attackSpeed)

const syncStats = () => {
  baseAttack.value = heroStats.value.attack
  baseAttackMultiplier.value = heroStats.value.baseAttackMultiplier
  critMultiplier.value = heroStats.value.critMultiplier
  comboMultiplier.value = heroStats.value.comboMultiplier
  critRate.value = heroStats.value.critRate
  comboRate.value = heroStats.value.comboRate
  attackSpeed.value = heroStats.value.attackSpeed
}

const result = computed(() => {
  const attackDamage = (+baseAttack.value * +baseAttackMultiplier.value) / 100
  const criticalDamage = (attackDamage * +critMultiplier.value) / 100
  const comboDamage = (attackDamage * +comboMultiplier.value) / 100

  const criticalComboDamage = (criticalDamage * +comboMultiplier.value) / 100

  const attackDPS = calculateDPS({
    damage: attackDamage,
    critRate: +critRate.value,
    critMultiplier: +critMultiplier.value,
    comboRate: +comboRate.value,
    comboMultiplier: +comboMultiplier.value,
    attackSpeed: +attackSpeed.value,
  })
  const attackDPSArrowgod = calculateDPS({
    damage: attackDamage,
    critRate: +critRate.value,
    critMultiplier: +critMultiplier.value,
    comboRate: +comboRate.value,
    comboMultiplier: +comboMultiplier.value,
    attackSpeed: +attackSpeed.value,
    additionalNormalAttack: 2,
    additionalComboAttack: 2,
  })
  const attackDPSArrowgodAwaked = calculateDPS({
    damage: attackDamage,
    critRate: +critRate.value,
    critMultiplier: +critMultiplier.value,
    comboRate: +comboRate.value,
    comboMultiplier: +comboMultiplier.value,
    attackSpeed: +attackSpeed.value,
    additionalNormalAttack: 2,
    additionalComboAttack: 3,
  })

  return {
    attackDamage: toAbbreviatedNumber(attackDamage),
    criticalDamage: toAbbreviatedNumber(criticalDamage),
    comboDamage: toAbbreviatedNumber(comboDamage),
    criticalComboDamage: toAbbreviatedNumber(criticalComboDamage),
    attackDPS: toAbbreviatedNumber(attackDPS),
    attackDPSArrowgod: toAbbreviatedNumber(attackDPSArrowgod),
    attackDPSArrowgodAwaked: toAbbreviatedNumber(attackDPSArrowgodAwaked),
  }
})

onMounted(() => {
  syncStats()
})
</script>
