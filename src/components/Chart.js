import React from "react"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"

import ChartTooltip from "./ChartTooltip"
import colors from "../data-real-estate/colors"

export default function Chart(props) {
  const { data, xKey, yKeys } = props

  const renderTooltip = ({ payload }) => {
    return <ChartTooltip payload={payload} xKey={xKey} yKeys={yKeys} />
  }

  return (
    <LineChart
      data={data}
      height={400}
      margin={{ left: 30, top: 30, bottom: 30 }}
      width={800}
    >
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey={xKey} />
      <YAxis />
      <Tooltip content={renderTooltip} />
      {yKeys.map((dataKey, index) => (
        <Line
          key={index}
          type="monotone"
          dataKey={dataKey}
          stroke={colors[index]}
          dot={false}
        />
      ))}
    </LineChart>
  )
}
