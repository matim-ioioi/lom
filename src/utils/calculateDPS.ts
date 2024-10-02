type Stats = {
  damage: number
  critRate: number // вероятность критической атаки (в диапазоне от 0 до 1)
  critMultiplier: number
  comboRate: number // вероятность комбоатаки (в диапазоне от 0 до 1)
  comboMultiplier: number
  attackSpeed: number // количество атак в секунду
  normalAtkCount?: number // количество обычных атак за один удар (вызывают крит и комбо)
  comboAtkCount?: number // количество дополнительных атак при комбо (не вызывают крит и комбо)
}

export function calculateDPS(stats: Stats): number {
  const {
    damage,
    critRate,
    critMultiplier,
    comboRate,
    comboMultiplier,
    attackSpeed,
    normalAtkCount = 1,
    comboAtkCount = 1,
  } = stats

  // Перевод шансов в коэффициенты в диапазоне от 0 до 1
  const critMultiplierCoefficient = critMultiplier / 100
  const comboMultiplierCoefficient = comboMultiplier / 100
  const critRateCoefficient = Math.min(critRate / 100, 1)
  const comboRateCoefficient = Math.min(comboRate / 100, 1)

  // Вероятности различных типов атак
  const normalAtkChance = (1 - comboRateCoefficient) * (1 - critRateCoefficient)
  const critAtkChance = (1 - comboRateCoefficient) * critRateCoefficient
  const comboAtkChance = comboRateCoefficient * (1 - critRateCoefficient)
  const comboCritAtkChance = comboRateCoefficient * critRateCoefficient

  // Урон за обычную атаку
  const baseDamage = damage

  // Урон за критическую атаку
  const critDamage = baseDamage * critMultiplierCoefficient

  // Урон за комбоатаку
  const comboDamage = baseDamage * comboMultiplierCoefficient
  // Урон за доп. атаки от комбоатак (арбалетчик)
  const comboAdditionalDamage = baseDamage * comboAtkCount

  // Урон за комбоатаку с критом
  const comboCritDamage = baseDamage * comboMultiplierCoefficient * critMultiplierCoefficient

  // Средний урон за одну атаку с учетом вероятностей
  const avgAtkDamage =
    normalAtkChance * baseDamage +
    critAtkChance * critDamage +
    comboAtkChance * (comboDamage + comboAdditionalDamage) +
    comboCritAtkChance * (comboCritDamage + comboAdditionalDamage)

  // Количество обычных атак за секунду
  const totalAttacksPerSecond = normalAtkCount * attackSpeed

  // Итоговый DPS
  const dps = avgAtkDamage * totalAttacksPerSecond

  return dps
}
