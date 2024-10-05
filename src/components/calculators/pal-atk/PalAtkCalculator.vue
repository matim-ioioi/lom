<template>
  <h2>Введите статы для рассчёта</h2>
  <v-container direction="vertical" :gap="32" divided>
    <div>
      <v-container direction="vertical" :gap="8">
        <div>
          <v-stats-input v-model="generalStats.baseAttack" placeholder="Конечная атака, ед." />
        </div>
        <div>
          <v-stats-input v-model="generalStats.palAttackMultiplier" placeholder="Мультипликатор урона партнёра (общий), %" />
          <v-stats-input v-model="generalStats.palCritMultiplier" placeholder="Мультипликатор крита партнёра (конкретного), %" />
          <v-stats-input v-model="generalStats.palComboMultiplier" placeholder="Мультипликатор комбоатаки партнёра (конкретного), %" />
        </div>
        <div>
          <v-stats-input v-model="generalStats.palCritRate" placeholder="Шанс крита партнёра (конкретного), %" />
          <v-stats-input v-model="generalStats.palComboRate" placeholder="Шанс комбоатаки партнёра (конкретного), %" />
        </div>
      </v-container>
    </div>

    <div v-for="(stat, index) in palStats" :key="`pal${index + 1}`">
      <p>{{ `Партнёр ${index + 1}${index === 5 ? " (только для классов 'царь зверей' и 'почтенный зверей')" : ''}` }}</p>

      <v-stats-input v-model="stat.palAttackCoefficient" placeholder="Коэффициент урона партнёра (конкретного), ед." />
      <v-stats-input v-model="stat.palAttackSpeed" placeholder="Коэффициент скорости атаки партнёра (конкретного), ед." />
    </div>
  </v-container>

  <h2>Результаты</h2>
  <v-container direction="vertical" :gap="32" divided>
    <div>
      <v-stats-input
        v-model="generalResults.attackDPS"
        placeholder="Средний урон в секунду"
        disabled
        hint="Это средний урон в секунду всех ваших партнёров вместе<br />
              Средний урон в секунду рассчитывается с учётом всех мультипликаторов, которые на него влияют<br />
              (урон атк, крит урон, комбо урон, криткомбо урон, крит шанс, комбо шанс, криткомбо шанс, ск. атаки)"
      />
    </div>
    <div v-for="(result, index) in results" :key="`pal${index + 1}`">
      <p>{{ `Партнёр ${index + 1}${index === 5 ? " (только для классов 'царь зверей' и 'почтенный зверей')" : ''}` }}</p>

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
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import VContainer from '@/components/common/VContainer.vue'
import VStatsInput from '@/components/common/VStatsInput.vue'
import { useHeroStats } from '@/composable/useHeroStats'
import { usePalsStats } from '@/composable/usePalsStats'
import { calculateDPS } from '@/utils/calculateDPS'
import { toAbbreviatedNumber } from '@/utils/toAbbreviatedNumber'

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

const { heroStats } = useHeroStats()
const { palsStats } = usePalsStats()

const generalStats = reactive<GeneralProperties>({
  baseAttack: heroStats.value.attack,
  palAttackMultiplier: heroStats.value.palMultiplier,
  palCritMultiplier: heroStats.value.palCritMultiplier,
  palComboMultiplier: heroStats.value.palComboMultiplier,
  palCritRate: heroStats.value.palCritRate,
  palComboRate: heroStats.value.palComboRate,
})

const palStats = reactive<PalProperties[]>([
  {
    palAttackCoefficient: palsStats.value[0].attackCoefficient,
    palAttackSpeed: palsStats.value[0].attackSpeed,
  },
  {
    palAttackCoefficient: palsStats.value[1].attackCoefficient,
    palAttackSpeed: palsStats.value[1].attackSpeed,
  },
  {
    palAttackCoefficient: palsStats.value[2].attackCoefficient,
    palAttackSpeed: palsStats.value[2].attackSpeed,
  },
  {
    palAttackCoefficient: palsStats.value[3].attackCoefficient,
    palAttackSpeed: palsStats.value[3].attackSpeed,
  },
  {
    palAttackCoefficient: palsStats.value[4].attackCoefficient,
    palAttackSpeed: palsStats.value[4].attackSpeed,
  },
  {
    palAttackCoefficient: palsStats.value[5].attackCoefficient,
    palAttackSpeed: palsStats.value[5].attackSpeed,
  },
])

const syncStats = () => {
  generalStats.baseAttack = heroStats.value.attack
  generalStats.palAttackMultiplier = heroStats.value.palMultiplier
  generalStats.palCritMultiplier = heroStats.value.palCritMultiplier
  generalStats.palComboMultiplier = heroStats.value.palComboMultiplier
  generalStats.palCritRate = heroStats.value.palCritRate
  generalStats.palComboRate = heroStats.value.palComboRate

  palsStats.value.forEach((stats, index) => {
    palStats[index].palAttackCoefficient = stats.attackCoefficient
    palStats[index].palAttackSpeed = stats.attackSpeed
  })
}

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
      attackDamage: toAbbreviatedNumber(attackDamage),
      criticalDamage: toAbbreviatedNumber(criticalDamage),
      comboDamage: toAbbreviatedNumber(comboDamage),
      criticalComboDamage: toAbbreviatedNumber(criticalComboDamage),
      attackDPS: toAbbreviatedNumber(attackDPS),
      _attackDPS: attackDPS,
    }
  })
})

const generalResults = computed(() => {
  const attackDPS = results.value.reduce((a, b) => a + b._attackDPS, 0)

  return {
    attackDPS: toAbbreviatedNumber(attackDPS),
  }
})

onMounted(() => {
  syncStats()
})
</script>
