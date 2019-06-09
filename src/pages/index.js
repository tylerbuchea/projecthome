import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ChartWithNation from "../components/ChartWithNation"
import ChartCity from "../components/ChartCity"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <ChartWithNation />
      <ChartCity />
    </Layout>
  )
}
