---
title: "A Default, 140 Character Excerpt"
draft: false
example: true
author: Daisy Buchanan
slider:
  - "https://picsum.photos/800/600?image=0"
  - "https://picsum.photos/800/600?image=1"
  - "https://picsum.photos/800/600?image=2"
  - "https://picsum.photos/800/600?image=3"
  - "https://picsum.photos/800/600?image=4"
  - "https://picsum.photos/800/600?image=5"
---

This example uses the default pruning method.

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
