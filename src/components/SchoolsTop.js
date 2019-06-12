import React from "react"
import styled from "styled-components"

import bestSchools from "../data-schools/bestSchools.js"
import bestSchoolDistrict from "../data-schools/bestSchoolDistrict.js"

export function SchoolsTop({ className }) {
  const renderSchool = (school, index) => {
    const { name, district, score } = school
    return (
      <div key={index} className="school">
        <div>{index + 1}</div>
        <div>{score}</div>
        <div>{name}</div>
        <div>{district}</div>
      </div>
    )
  }
  return (
    <div className={className}>
      <h2>Best Schools</h2>

      <div>
        <strong>Oahu is comprised of four school districts:</strong>
        <ul>
          <li>Central (CEN)</li>
          <li>Honolulu (HON)</li>
          <li>Leeward (LEE)</li>
          <li>Windward (WIN)</li>
        </ul>
      </div>

      <h3>Elementary School</h3>
      <div className="school school-header">
        <div>Place</div>
        <div>Score</div>
        <div>Name</div>
        <div>District</div>
      </div>
      <div className="schoolList">
        {bestSchools.elementary.map(renderSchool)}
      </div>
      <br />

      <h3>Middle School</h3>
      <div className="school school-header">
        <div>Place</div>
        <div>Score</div>
        <div>Name</div>
        <div>District</div>
      </div>
      <div className="schoolList">{bestSchools.middle.map(renderSchool)}</div>
      <br />

      <h3>High School</h3>
      <div className="school school-header">
        <div>Place</div>
        <div>Score</div>
        <div>Name</div>
        <div>District</div>
      </div>
      <div className="schoolList">{bestSchools.high.map(renderSchool)}</div>
      <br />

      <h3>School District</h3>
      <p>Best average score across all grades</p>
      <div className="school school-header">
        <div>Place</div>
        <div>Score</div>
        <div>Name</div>
        <div>District</div>
      </div>
      <div className="schoolList">{bestSchoolDistrict.map(renderSchool)}</div>
    </div>
  )
}

export default styled(SchoolsTop)`
  .schoolList {
    max-height: 200px;
    overflow: scroll;
    background: #f0f0f0;
  }
  .school {
    display: grid;
    grid-template-columns: 80px 80px 1fr 1fr;
    padding: 2px 5px;
  }
  .school:nth-child(odd) {
    background: #e0e0e0;
  }
  .school-header {
    font-weight: bold;
    border-bottom: 1px solid #333;
  }
`
