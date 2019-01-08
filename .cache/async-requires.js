// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-template-project-js": () => import("/Users/lialee0/Documents/Projects/_experiments/portfolio/src/templates/template-project.js" /* webpackChunkName: "component---src-templates-template-project-js" */),
  "component---src-templates-template-tag-page-js": () => import("/Users/lialee0/Documents/Projects/_experiments/portfolio/src/templates/template-tag-page.js" /* webpackChunkName: "component---src-templates-template-tag-page-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/lialee0/Documents/Projects/_experiments/portfolio/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/lialee0/Documents/Projects/_experiments/portfolio/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-excerpt-example-js": () => import("/Users/lialee0/Documents/Projects/_experiments/portfolio/src/pages/excerpt-example.js" /* webpackChunkName: "component---src-pages-excerpt-example-js" */),
  "component---src-pages-index-js": () => import("/Users/lialee0/Documents/Projects/_experiments/portfolio/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-tags-js": () => import("/Users/lialee0/Documents/Projects/_experiments/portfolio/src/pages/tags.js" /* webpackChunkName: "component---src-pages-tags-js" */)
}

exports.data = () => import("/Users/lialee0/Documents/Projects/_experiments/portfolio/.cache/data.json")

