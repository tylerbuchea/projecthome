import React from "react"
import styled from "styled-components"
import { startCase } from "lodash"

export function Table({
  className,
  data = [],
  labels = [],
  style,
  columns,
  maxHeight = "auto",
}) {
  const gridTemplateColumns =
    columns || "50px repeat(auto-fit, minmax(0px, 1fr))"

  const renderRow = (entry, index) => {
    const values = Object.values(entry)
    return (
      <div key={index} className="row" style={{ gridTemplateColumns }}>
        <div>{index + 1}</div>
        {values.map(value => (
          <div>{value}</div>
        ))}
      </div>
    )
  }

  const keys = Object.keys(data[0])
  return (
    <div className={className}>
      <div className="row row-header" style={{ gridTemplateColumns }}>
        <div>#</div>
        {keys.map((key, index) => (
          <div key={index}>{startCase(labels[index] || key)}</div>
        ))}
      </div>
      <div className="rows" style={{ maxHeight, ...style }}>
        {data.map(renderRow)}
      </div>
    </div>
  )
}

export default styled(Table)`
  position: relative;
  .rows {
    overflow: scroll;
    background: #f0f0f0;
    overflow: scroll;
  }
  .row {
    display: grid;
    padding: 2px 5px;
  }
  .row:nth-child(odd) {
    background: #e0e0e0;
  }
  .row-header {
    font-weight: bold;
    border-bottom: 1px solid #333;
    background: transparent !important;
  }
`
