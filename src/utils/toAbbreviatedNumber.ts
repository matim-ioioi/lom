export function toAbbreviatedNumber(num: number) {
  const suffixes = ['', 'K', 'M', 'T', 'Q', 'P', 'E']
  let tier = 0

  while (num >= 1000 && tier < suffixes.length - 1) {
    num /= 1000
    tier++
  }

  return +num.toFixed(3) + suffixes[tier]
}
