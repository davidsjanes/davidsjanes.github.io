// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---cache-dev-404-page-js": preferDefault(require("/Users/davidjanes/Documents/davidsjanes.github.io/djanes-react/.cache/dev-404-page.js")),
  "page-component---src-pages-index-js": preferDefault(require("/Users/davidjanes/Documents/davidsjanes.github.io/djanes-react/src/pages/index.js"))
}

exports.json = {
  "dev-404-page.json": require("/Users/davidjanes/Documents/davidsjanes.github.io/djanes-react/.cache/json/dev-404-page.json"),
  "index.json": require("/Users/davidjanes/Documents/davidsjanes.github.io/djanes-react/.cache/json/index.json")
}

exports.layouts = {

}