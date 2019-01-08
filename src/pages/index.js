import React from 'react';
import { Link, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import Layout from '../layouts';
import presets from '../utils/presets';
import { rhythm, scale } from '../utils/typography';

import Cards from '../components/Cards';
import Hero from '../components/Hero';

const H1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  font-weight: 800;
  margin-bottom: ${rhythm(2)};
`

class Index extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    console.log('posts: ', posts);
    return (
      <Layout location={this.props.location}>
        <Hero />
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {
              posts.map(post => (
                <Cards key={post.node.fields.slug} cover={post.node.frontmatter.cover} title={post.node.frontmatter.title} link={post.node.fields.slug} tags={post.node.frontmatter.tags} />
              ))
            }
          </div>
        </div>
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true }, example: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
            cover
          }
        }
      }
    }
  }
`;
