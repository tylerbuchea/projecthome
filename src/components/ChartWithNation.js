import React from "react"

import Chart from "./Chart"
import medianPriceUS from "../data-real-estate/fred/fred"
import medianPriceHonlulu from "../data-real-estate/zillow/hi-honolulu"
import medianPricePortland from "../data-real-estate/zillow/or-portland"
import { getPriceByYear, combinePricesByDate } from "../data-real-estate/utils"

const priceByYearUS = getPriceByYear(medianPriceUS)
const priceByYearCityPortland = getPriceByYear(medianPricePortland)
const priceByYearCityHonlulu = getPriceByYear(medianPriceHonlulu)

const data = combinePricesByDate({
  nationalPrice: priceByYearUS,
  portlandPrice: priceByYearCityPortland,
  honluluPrice: priceByYearCityHonlulu,
})

export default function ChartWithNation() {
  const startYear = data[0].date.split("-")[0]
  const endYear = data[data.length - 1].date.split("-")[0]
  const xKey = "date"
  const yKeys = ["nationalPrice", "portlandPrice", "honluluPrice"]

  return (
    <div>
      <h2>
        Median House Price (US) {startYear} - {endYear}
      </h2>
      <Chart data={data} xKey={xKey} yKeys={yKeys} />
    </div>
  )
}
