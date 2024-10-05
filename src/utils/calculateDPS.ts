interface CharacterAttributes {
  damage: number
  critMultiplier: number
  comboMultiplier: number
  critRate: number
  comboRate: number
  attackSpeed: number
  additionalComboAttack?: number
  additionalNormalAttack?: number
}

export function calculateDPS({ damage, critMultiplier, comboMultiplier, critRate, comboRate, attackSpeed, additionalComboAttack = 1, additionalNormalAttack = 0 }: CharacterAttributes): number {
  // Перевод шансов в коэффициенты
  const critMultiplierCoefficient = critMultiplier / 100
  const comboMultiplierCoefficient = comboMultiplier / 100
  const critRateCoefficient = Math.min(critRate / 100, 1)
  const comboRateCoefficient = Math.min(comboRate / 100, 1)

  // Шанс обычной атаки без крита
  const normalRate = (1 - comboRateCoefficient) * (1 - critRateCoefficient)
  // Шанс обычной атаки с критом
  const normalCritRate = (1 - comboRateCoefficient) * critRateCoefficient
  // Шанс комбоатаки без крита
  const comboRateNonCrit = comboRateCoefficient * (1 - critRateCoefficient)
  // Шансы комбоатаки с критом
  const comboCritRate = comboRateCoefficient * critRateCoefficient

  // Урон от обычной атаки без крита
  const normalDamage = damage
  // Урон от обычной атаки с критом
  const normalCritDamage = damage * critMultiplierCoefficient
  // Урон от комбоатаки без крита
  const comboDamage = damage * comboMultiplierCoefficient
  // Урон от комбоатаки с критом
  const comboCritDamage = comboDamage * critMultiplierCoefficient

  // Дополнительные атаки от обычных атак
  const additionalNormalDamage = additionalNormalAttack * (damage * (1 - critRateCoefficient) + normalCritDamage * critRateCoefficient)
  // Дополнительные атаки от комбоатак
  const additionalComboDamage = additionalComboAttack * (damage * (1 - critRateCoefficient) + normalCritDamage * critRateCoefficient)

  // Средний урон от одной атаки, учитывая все виды атак
  const averageDamagePerAttack = normalRate * (normalDamage + additionalNormalDamage) + normalCritRate * (normalCritDamage + additionalNormalDamage) + comboRateNonCrit * (comboDamage + additionalComboDamage) + comboCritRate * (comboCritDamage + additionalComboDamage)

  // Учитываем скорость атаки для вычисления урона в секунду
  const dps = averageDamagePerAttack * attackSpeed

  return dps
}
