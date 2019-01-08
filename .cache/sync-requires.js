const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-template-project-js": hot(preferDefault(require("/Users/lialee0/Documents/Projects/_experiments/portfolio/src/templates/template-project.js"))),
  "component---src-templates-template-tag-page-js": hot(preferDefault(require("/Users/lialee0/Documents/Projects/_experiments/portfolio/src/templates/template-tag-page.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/lialee0/Documents/Projects/_experiments/portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/lialee0/Documents/Projects/_experiments/portfolio/src/pages/404.js"))),
  "component---src-pages-excerpt-example-js": hot(preferDefault(require("/Users/lialee0/Documents/Projects/_experiments/portfolio/src/pages/excerpt-example.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/lialee0/Documents/Projects/_experiments/portfolio/src/pages/index.js"))),
  "component---src-pages-tags-js": hot(preferDefault(require("/Users/lialee0/Documents/Projects/_experiments/portfolio/src/pages/tags.js")))
}

