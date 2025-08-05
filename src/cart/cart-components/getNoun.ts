export const getNoun = (
  quantity: number,
  one: string,
  some: string,
  many: string
) => {
  const num10 = quantity % 10
  const num100 = quantity % 100
  if (num10 === 1 && num100 !== 11) {
    return one
  }
  if (num10 >= 2 && num10 <= 4 && (num100 < 10 || num100 >= 20)) {
    return some
  }
  return many
}
