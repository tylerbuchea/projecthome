import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from "../components/Table"
import parks from "../data-parks/parks.json"

export function IndexPage({ className }) {
  return (
    <div className={className}>
      <Layout>
        <SEO title="Home" />
        <Table data={parks} />
      </Layout>
    </div>
  )
}

export default styled(IndexPage)``
