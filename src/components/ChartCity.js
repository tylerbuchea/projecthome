import React from "react"

import Chart from "./Chart"
import dataPortland from "../data/zillow/or-portland"
import dataHonlulu from "../data/zillow/hi-honolulu"

export default function ChartCity() {
  const start = data[0].date.split("-")[0]
  const end = data[data.length - 1].date.split("-")[0]

  return (
    <div>
      <h3>
        Median House Price (Portland) {start} - {end}
      </h3>
      <Chart data={dataPortland} xKey="date" yKeys={["price"]} />
      <h3>
        Median House Price (Honlulu) {start} - {end}
      </h3>
      <Chart data={dataHonlulu} xKey="date" yKeys={["price"]} />
    </div>
  )
}
