export const deformatNumber = (value: string) => {
  return +value.replace(/[\,\s]/, '')
}
