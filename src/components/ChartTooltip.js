import React from "react"
import styled from "styled-components"
import { startCase } from "lodash"

export function ChartTooltip(props) {
  if (props.children) {
    return <div className={props.className}>{props.children}</div>
  }

  const { payload, xKey, yKeys } = props
  if (!payload || !payload.length) return null
  const xValue = payload[0].payload[xKey]

  return (
    <div className={props.className}>
      <div className="xKey">{startCase(xKey)}</div>
      <div className="xValue">{xValue}</div>
      {payload.map((data, index) => (
        <div key={index} className="y">
          <div className="yKey">{startCase(yKeys[index])}</div>
          <div className="yValue">{data.payload[yKeys[index]]}</div>
        </div>
      ))}
    </div>
  )
}

export default styled(ChartTooltip)`
  background: white;
  width: 150px;
  padding: 10px;
  border: 1px solid #aaa;

  .xKey {
    color: #aaa;
    font-size: 12px;
  }
  .yKey {
    color: #aaa;
    font-size: 12px;
  }
  .yValue {
  }
`
