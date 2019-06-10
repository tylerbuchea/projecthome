import schools from "./all"
import _ from "lodash"
import districts from "./districts"

const nonOahuDistricts = ["HAW", "CHAR", "MAUI", "MAU", "KAU"]

const scoreByDistrict = schools.all.reduce((acc, curr, index) => {
  if (!acc[curr.District]) acc[curr.District] = []
  acc[curr.District].push(curr["Final Score"])
  return acc
}, {})

const averageDistrictScore = Object.entries(scoreByDistrict).map(
  ([district, scores]) => {
    const sumOfScores = scores.reduce((a, b) => a + b, 0)
    const averageScore = Math.round(sumOfScores / scores.length)
    return { score: averageScore, district }
  }
)

const orderedList = _.orderBy(averageDistrictScore, "rank", "desc")
  .filter(x => !nonOahuDistricts.includes(x.district))
  .map(x => ({
    ...x,
    name: districts[x.district],
    district: `${districts[x.district]} (${x.district})`,
  }))

export default orderedList
