const csv = require("csvtojson")
const { Transform } = require("stream")
const fs = require("fs").promises
const { kebabCase } = require("lodash")

module.exports = {
  csv: () => csv(),
  toArray: () => {
    const transform = new Transform({
      writableObjectMode: true,
      transform: (chunk, encoding, next) => {
        let data = JSON.parse(chunk.toString())
        data += ",\n"
        next(null, data)
      },
      flush(cb) {
        this.push("\n]")
        cb()
      },
    })

    transform.on("finish", () => {
      fs.writeFile(
        `./src/data/fred/fred.json`,
        JSON.stringify(chartData, null, 2)
      )
    })

    return transform
  },
  fred: () => {
    const chartData = []

    const transform = new Transform({
      writableObjectMode: true,
      transform: (chunk, encoding, next) => {
        const data = JSON.parse(chunk.toString())
        const { MSPUS, DATE } = data
        chartData.push({ date: DATE, price: Number(MSPUS) })
        next(null, chunk)
      },
    })

    transform.on("finish", () => {
      fs.writeFile(
        `./src/data/fred/fred.json`,
        JSON.stringify(chartData, null, 2)
      )
    })

    return transform
  },
  zillow: () => {
    const transform = new Transform({
      writableObjectMode: true,
      transform: (chunk, encoding, next) => {
        const data = JSON.parse(chunk.toString())
        const {
          RegionID,
          RegionName,
          State,
          Metro,
          CountyName,
          SizeRank,
          ...dates
        } = data

        const chartData = Object.entries(dates).map(([date, price]) => ({
          date,
          price: Number(price),
        }))

        const fileName = kebabCase(State + "-" + RegionName)
        fs.writeFile(
          `./src/data/zillow/${fileName}.json`,
          JSON.stringify(chartData, null, 2)
        ).then(() => next(null, chunk))
      },
    })

    return transform
  },
}
