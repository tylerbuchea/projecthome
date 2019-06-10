import schools from "./all"
import _ from "lodash"
import districts from "./districts"

const oahuDistricts = ["CEN", "HON", "WIN", "LEE"]

const oahuOnly = school => oahuDistricts.includes(school.District)

const pickData = school => ({
  score: Math.round(school["Final Score"]),
  name: school.School,
  district: school.District,
})

const expandDistrict = school => ({
  ...school,
  district: `${districts[school.district]} (${school.district})`,
})

const high = _.orderBy(schools.high.filter(oahuOnly), "Final Score", "desc")
  .map(pickData)
  .map(expandDistrict)

const middle = _.orderBy(schools.middle.filter(oahuOnly), "Final Score", "desc")
  .map(pickData)
  .map(expandDistrict)

const elementary = _.orderBy(
  schools.elementary.filter(oahuOnly),
  "Final Score",
  "desc"
)
  .map(pickData)
  .map(expandDistrict)

export default {
  high,
  middle,
  elementary,
}
