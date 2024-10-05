export function fromAbbreviatedNumber(str: string): number {
  const suffixes: { [key: string]: number } = {
    K: 1_000,
    M: 1_000_000,
    T: 1_000_000_000,
    Q: 1_000_000_000_000,
    P: 1_000_000_000_000_000,
    E: 1_000_000_000_000_000_000,
  }

  const suffix = str.slice(-1) // Берем последний символ, который может быть суффиксом
  const numberPart = parseFloat(str) // Извлекаем числовую часть

  if (suffixes[suffix]) {
    // Если последний символ — это суффикс (K, M, T и т.д.), умножаем число на соответствующий множитель
    return numberPart * suffixes[suffix]
  }

  return numberPart // Если суффикса нет, просто возвращаем число
}
