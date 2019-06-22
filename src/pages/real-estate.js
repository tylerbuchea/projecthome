import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ChartWithNation from "../components/ChartWithNation"
// import ChartCity from "../components/ChartCity"

export function IndexPage({ className }) {
  return (
    <div className={className}>
      <Layout>
        <SEO title="Home" />
        <ChartWithNation />
        {/* <ChartCity /> */}
      </Layout>
    </div>
  )
}

export default styled(IndexPage)``
