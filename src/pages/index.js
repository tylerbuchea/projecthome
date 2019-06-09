import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ChartWithNation from "../components/ChartWithNation"
import SchoolsTop from "../components/SchoolsTop"
// import ChartCity from "../components/ChartCity"

export function IndexPage({ className }) {
  return (
    <div className={className}>
      <Layout>
        <SEO title="Home" />
        <iframe
          title="Google MyMap"
          src="https://www.google.com/maps/d/embed?mid=140gPqk_yTmdIMQdBkTsRDZSbWMDh6RS7"
          className="myMap"
        />
        <ChartWithNation />
        <SchoolsTop />
        {/* <ChartCity /> */}
      </Layout>
    </div>
  )
}

export default styled(IndexPage)`
  .myMap {
    width: 100%;
    height: 480px;
  }
`
