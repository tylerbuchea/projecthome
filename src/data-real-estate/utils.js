import { get, uniqBy } from "lodash"

export const getPriceByYear = data => {
  const priceByYear = uniqBy(
    data.map(x => ({ ...x, date: x.date.split("-")[0] })).reverse(),
    "date"
  ).reverse()
  return priceByYear
}

export const combinePricesByDate = prices => {
  const [first, ...others] = Object.entries(prices)
  const firstName = first[0]
  const firstPrices = first[1]

  const pricesByDate = firstPrices.map(firstItem => {
    const matchingDates = others.reduce((accumulator, other) => {
      const otherName = other[0]
      const otherPrices = other[1]
      const match =
        get(otherPrices.find(y => y.date === firstItem.date), "price") || 0
      accumulator[otherName] = match
      return accumulator
    }, {})
    // console.log(matchingDates)
    const entry = {
      date: firstItem.date,
      [firstName]: firstItem.price,
      ...matchingDates,
    }
    // console.log(entry)
    return entry
  })

  return pricesByDate
}
