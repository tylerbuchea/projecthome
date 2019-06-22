import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

export function MarkdownPageTemplate({ data, className }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className={className}>
      <Layout>
        <SEO title={frontmatter.title} />
        <div
          className="page-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

export default styled(MarkdownPageTemplate)``
