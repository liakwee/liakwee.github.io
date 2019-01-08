import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { scale } from "../utils/typography";
import Header from '../components/Header';
// import styles from "../styles"
// import tw from 'tailwind.macro';
// import styled from 'styled-components';
import '../styles/index.css';
import "typeface-space-mono"
import "typeface-spectral"

import "prismjs/themes/prism-solarizedlight.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

class Layout extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                author
                homepage
              }
            }
          }
        `}
        render={data => {
          const { author, homepage } = data.site.siteMetadata
          return (
            <div>
              <Header />
              {this.props.children}
              <footer>
                powered by
                {` `}
                <a target="_blank" rel="noopener noreferrer" href={homepage}>
                  {author}
                </a>
              </footer>
            </div>
          )
        }}
      />
    )
  }
}

export default Layout
