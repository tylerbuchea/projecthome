const fs = require("fs")
const request = require("request")
const combine = require("stream-combiner")
const transforms = require("./transforms")

/**
 * Run from project root:
 * yarn update
 * yarn update --remote
 */

const useRemoteInput =
  process.argv && process.argv[2] && process.argv[2] === "--remote"

const datasets = [
  {
    streams: [
      useRemoteInput
        ? request.get(
            "https://fred.stlouisfed.org/graph/fredgraph.csv?bgcolor=%23e1e9f0&chart_type=line&drp=0&fo=open%20sans&graph_bgcolor=%23ffffff&height=450&mode=fred&recession_bars=on&txtcolor=%23444444&ts=12&tts=12&width=1168&nt=0&thu=0&trc=0&show_legend=yes&show_axis_titles=yes&show_tooltip=yes&id=MSPUS&scale=left&cosd=1963-01-01&coed=2019-01-01&line_color=%234572a7&link_values=false&line_style=solid&mark_type=none&mw=3&lw=2&ost=-99999&oet=99999&mma=0&fml=a&fq=Quarterly&fam=avg&fgst=lin&fgsnd=2009-06-01&line_index=1&transformation=lin&vintage_date=2019-05-17&revision_date=2019-05-17&nd=1963-01-01"
          )
        : fs.createReadStream("./src/data/fred.csv"),
      transforms.csv(),
      transforms.fred(),
    ],
    onFinish: resolve => resolve("SUCCESS: /fred"),
  },
  {
    streams: [
      useRemoteInput
        ? request.get(
            "http://files.zillowstatic.com/research/public/City/City_Zhvi_AllHomes.csv"
          )
        : fs.createReadStream("./src/data/zillow.csv"),
      transforms.csv(),
      transforms.zillow(),
    ],
    onFinish: resolve => resolve("SUCCESS: /zillow"),
  },
]

main()
  .then(console.log)
  .catch(console.error)

async function main() {
  const promises = datasets.map(dataset =>
    promiseStream(dataset.streams, dataset.onFinish)
  )
  const paths = await Promise.all(promises)
  return paths
}

function promiseStream(streams, onFinish) {
  const promise = new Promise((resolve, reject) => {
    const lastStream = streams[streams.length - 1]
    lastStream
      .on("finish", () => onFinish(resolve, streams))
      .on("error", reject)
  })
  combine(streams)
  return promise
}
