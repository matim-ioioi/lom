export function calculateDPS(
  damage: number, // Урон с обычной атаки
  critMultiplier: number, // Коэффициент критической атаки (%)
  comboMultiplier: number, // Коэффициент комбоатаки (%)
  critChance: number, // Шанс критической атаки (%)
  comboChance: number, // Шанс комбоатаки (%)
  attackSpeed: number // Скорость атаки (атак в секунду)
): number {
  // Преобразование процентов в коэффициенты
  const critMultiplierCoefficient = critMultiplier / 100
  const comboMultiplierCoefficient = comboMultiplier / 100
  const critChanceCoefficient = critChance / 100
  const comboChanceCoefficient = comboChance / 100

  // Вероятности различных типов атак
  const normalAtkChance = (1 - critChanceCoefficient) * (1 - comboChanceCoefficient)
  const critAtkChance = critChanceCoefficient * (1 - comboChanceCoefficient)
  const comboAtkChance = (1 - critChanceCoefficient) * comboChanceCoefficient
  const critComboAtkChance = critChanceCoefficient * comboChanceCoefficient

  // Средний урон за атаку
  const averageDamagePerHit =
    damage *
    (normalAtkChance +
      critAtkChance * critMultiplierCoefficient +
      comboAtkChance * comboMultiplierCoefficient +
      critComboAtkChance * critMultiplierCoefficient * comboMultiplierCoefficient)

  // Средний урон в секунду
  const dps = attackSpeed * averageDamagePerHit

  return dps
}
