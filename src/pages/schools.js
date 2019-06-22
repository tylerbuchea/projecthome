import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SchoolsTop from "../components/SchoolsTop"

export function IndexPage({ className }) {
  return (
    <div className={className}>
      <Layout>
        <SEO title="Home" />
        <SchoolsTop />
      </Layout>
    </div>
  )
}

export default styled(IndexPage)``
