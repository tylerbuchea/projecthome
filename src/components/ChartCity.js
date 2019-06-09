import React from "react"

import Chart from "./Chart"
import dataPortland from "../data-real-estate/zillow/or-portland"
import dataHonlulu from "../data-real-estate/zillow/hi-honolulu"

export default function ChartCity() {
  const renderCity = (data, title) => {
    const start = data[0].date.split("-")[0]
    const end = data[data.length - 1].date.split("-")[0]
    return (
      <div>
        <h2>
          Median House Price ({title}) {start} - {end}
        </h2>
        <Chart data={data} xKey="date" yKeys={["price"]} />
      </div>
    )
  }

  return (
    <div>
      {renderCity(dataPortland, "Portland")}
      {renderCity(dataHonlulu, "Honlulu")}
    </div>
  )
}
