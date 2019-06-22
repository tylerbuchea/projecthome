import React from "react"
import styled from "styled-components"

import Table from "../components/Table"
import bestSchools from "../data-schools/bestSchools.js"
import bestSchoolDistrict from "../data-schools/bestSchoolDistrict.js"

export function SchoolsTop({ className }) {
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
      <div className="schoolList">
        <Table
          data={bestSchools.elementary}
          columns="50px 100px 1fr 1fr"
          maxHeight={200}
        />
      </div>
      <br />

      <h3>Middle School</h3>
      <div className="schoolList">
        <Table
          data={bestSchools.middle}
          columns="50px 100px 1fr 1fr"
          maxHeight={200}
        />
      </div>
      <br />

      <h3>High School</h3>
      <div className="schoolList">
        <Table
          data={bestSchools.high}
          columns="50px 100px 1fr 1fr"
          maxHeight={200}
        />
      </div>
      <br />

      <h3>School District</h3>
      <p>Best average score across all grades</p>
      <div className="schoolList">
        <Table
          data={bestSchoolDistrict}
          columns="50px 100px 1fr 1fr"
          maxHeight={200}
        />
      </div>
    </div>
  )
}

export default styled(SchoolsTop)``
