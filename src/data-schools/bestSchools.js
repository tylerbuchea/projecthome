import schools from "./all"
import _ from "lodash"

const oahuDistricts = ["CEN", "HON", "WIN", "LEE"]

const oahuOnly = school => oahuDistricts.includes(school.District)
const pickData = school => ({
  score: Math.round(school["Final Score"]),
  name: school.School,
  district: school.District,
})

const high = _.orderBy(schools.high.filter(oahuOnly), "Final Score", "desc")
  .map(pickData)
  .slice(0, 5)
const middle = _.orderBy(schools.middle.filter(oahuOnly), "Final Score", "desc")
  .map(pickData)
  .slice(0, 5)
const elementary = _.orderBy(
  schools.elementary.filter(oahuOnly),
  "Final Score",
  "desc"
).map(pickData)

export default {
  high,
  middle,
  elementary,
}
