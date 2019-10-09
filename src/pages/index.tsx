import React, { createRef } from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { Article } from '../components/Article';
import { Layout } from '../components/Layout';
import PageProps from '../models/PageProps';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import { media } from '../utils/media';
import Search from '../components/Search';

const Homepage = styled.main`
  display: flex;
  flex-direction: column;
`;

const GridRow: any = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props: any) => (props.background ? `url(/assets/bg.jpg) no-repeat` : null)};
  background-position: 30%;
  background-size: cover;
  padding: 4rem 4rem;
  color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  h1 {
    color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  }
  @media ${media.tablet} {
    padding: 4rem 3rem;
    align-items: flex-start;
  }
  @media ${media.phone} {
    padding: 3rem 1.5rem;
    align-items: flex-start;
  }
`;

const ArticleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h2 {
    text-align: center;
  }
`;

export default function IndexPage(props: PageProps) {
  const focusRef = createRef<HTMLHeadingElement>();
  const { data } = props;
  const { edges, totalCount } = data.allMarkdownRemark;
  return (
    <Layout homepage>
      <Helmet title={`Homepage | ${config.siteTitle}`} />
      <Homepage>
        <GridRow background={true}>
          <h1>Hi, We are Whiskey Nerds!</h1>
          <p>A group of sophisticated nerds share their tasting notes on a weekly whiskey choice.</p>
        </GridRow>
        <GridRow>
          <ArticleContainer>
            <h2 ref={focusRef}>Latest Whiskeys</h2>
            <Search focusRef={focusRef} />
            {edges.map(post => (
              <Article
                title={post.node.frontmatter.title}
                date={post.node.frontmatter.date}
                excerpt={post.node.excerpt}
                timeToRead={post.node.timeToRead}
                slug={post.node.fields.slug}
                category={post.node.frontmatter.category}
                key={post.node.fields.slug}
                tags={post.node.frontmatter.tags}
              />
            ))}
          </ArticleContainer>
          <p className={'textRight'}>
            <Link to={'/blog'}>All articles ({totalCount})</Link>
          </p>
        </GridRow>
      </Homepage>
    </Layout>
  );
}

export const IndexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 10) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
            tags
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`;
