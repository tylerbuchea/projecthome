import React from "react"
import { get, uniqBy } from "lodash"

import Chart from "./Chart"
import medianPriceUS from "../data/fred/fred"
import medianPriceHonlulu from "../data/zillow/hi-honolulu"
import medianPricePortland from "../data/zillow/or-portland"

const priceByYearUS = uniqBy(
  medianPriceUS.map(x => ({ ...x, date: x.date.split("-")[0] })).reverse(),
  "date"
).reverse()

const priceByYearCityPortland = uniqBy(
  medianPricePortland.map(x => ({ ...x, date: x.date.split("-")[0] })).reverse(),
  "date"
).reverse()

const priceByYearCityHonlulu = uniqBy(
  medianPriceHonlulu.map(x => ({ ...x, date: x.date.split("-")[0] })).reverse(),
  "date"
).reverse()

const data = priceByYearUS.map(x => ({
  ...x,
  nationalPrice: x.price,
  portlandPrice: get(priceByYearCityPortland.find(y => y.date === x.date), "price") || 0,
  honluluPrice: get(priceByYearCityHonlulu.find(y => y.date === x.date), "price") || 0,
}))

export default function ChartWithNation() {
  const start = data[0].date.split("-")[0]
  const end = data[data.length - 1].date.split("-")[0]
  const xKey = "date"
  const yKeys = ["nationalPrice", "portlandPrice", "honluluPrice"]

  return (
    <div>
      <h3>
        Median House Price (US) {start} - {end}
      </h3>
      <Chart data={data} xKey={xKey} yKeys={yKeys} />
    </div>
  )
}
