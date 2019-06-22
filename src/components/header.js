import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

export function Header({ className, siteTitle }) {
  return (
    <header className={className}>
      <div className="container">
        <h1 className="title">
          <Link to="/" className="link">
            {siteTitle}
          </Link>
        </h1>
        <div className="links">
          <Link to="/parks" className="link" activeClassName="linkActive">
            Parks
          </Link>
          {/* <Link to="/beaches" className="link">
            Beaches
          </Link>
          <Link to="/neighborhoods" className="link">
            Neighborhoods
          </Link> */}
          <Link to="/schools" className="link" activeClassName="linkActive">
            Schools
          </Link>
          <Link to="/real-estate" className="link" activeClassName="linkActive">
            Real Estate
          </Link>
          <Link to="/playground" className="link" activeClassName="linkActive">
            Playground
          </Link>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default styled(Header)`
  background: rebeccapurple;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 2;
  width: 100%;

  .container {
    margin: 0 auto;
    max-width: 960;
    padding: 0px 40px;
    height: 50px;
    display: grid;
    grid-template-columns: 150px 1fr;
    align-items: center;
    justify-content: center;
  }

  .title {
    margin: 0;
    font-size: 1rem;
    border-bottom: 2px solid transparent;
  }

  .link {
    color: white;
    text-decoration: none;
    border-bottom: 2px solid transparent;
  }

  .linkActive {
    border-bottom: 2px solid white;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .links > .link {
    margin-right: 15px;
  }
`
