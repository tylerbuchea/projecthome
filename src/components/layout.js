/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

export default function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <main style={{ position: "relative", paddingTop: 90 }}>
              <iframe
                title="Google MyMap"
                src="https://www.google.com/maps/d/embed?mid=140gPqk_yTmdIMQdBkTsRDZSbWMDh6RS7"
                className="myMap"
                style={{
                  width: "100%",
                  height: 480,
                }}
              />
              {children}
            </main>
            <footer>© {new Date().getFullYear()} Tyler Buchea</footer>
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
