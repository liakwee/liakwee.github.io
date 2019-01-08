---
title: "Using Excerpts"
date: "2017-11-14"
draft: false
author: Jay Gatsby
cover: "http://liakwee.github.io/img/portfolio/pphg/pp-thumb.png"
tags:
  - remark
  - excerpts
slider:
  - "https://picsum.photos/800/600?image=0"
  - "https://picsum.photos/800/600?image=1"
  - "https://picsum.photos/800/600?image=2"
  - "https://picsum.photos/800/600?image=3"
  - "https://picsum.photos/800/600?image=4"
  - "https://picsum.photos/800/600?image=5"
---

`gatsby-transformer-remark` allows you to get an excerpt from a markdown post. By default, it will prune the first 140 characters, but you can optionally specify a `pruneLength` in the graphql query.

```graphql
{
  allMarkdownRemark {
    edges {
      node {
        excerpt(pruneLength: 280)
      }
    }
  }
}
```

You can also manually mark in your markdown where to stop excerpting—similar to Jekyll. `gatsby-transformer-remark` uses [gray-matter](https://github.com/jonschlinkert/gray-matter) to parse markdown frontmatter, so you can specify an `excerpt_separator`, as well as any of the other options mentioned [here](https://github.com/jonschlinkert/gray-matter#options), in the `gatsby-config.js` file.

```json
{
  "resolve": `gatsby-transformer-remark`,
  "options": {
    "excerpt_separator": `<!-- end -->`
  }
}
```

Any file that does not have the given `excerpt_separator` will fall back to the default pruning method.

You can see the results [here](/excerpt-example)
