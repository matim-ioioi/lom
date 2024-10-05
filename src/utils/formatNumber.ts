export const formatNumber = (value: number, options: Intl.NumberFormatOptions = { maximumFractionDigits: 0 }, locale = 'ru-RU') => {
  return value.toLocaleString(locale, options)
}
