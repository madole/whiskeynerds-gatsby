import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { Subline } from './Subline';
import { media } from '../utils/media';

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  width: 60vw;
  @media ${media.phone} {
    margin-top: 0;
  }
`;

const Title = styled.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
  @media ${media.phone} {
    font-size: 1.5em;
  }
`;

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const TagList = styled.div`
  display: flex;
  justify-content: flex-start;
  @media ${media.phone} {
    flex-direction: column;
  }
`;

const Tag = styled(Link)`
  background-color: ${props => props.theme.colors.primary};
  display: inline;
  padding: 0 1em;
  text-transform: uppercase;
  font-weight: 600;
  &:not(:first-of-type) {
    margin-left: 1em;
  }
  border-radius: 0.25rem;
  &:hover {
    color: black;
    opacity: 0.8;
  }
  @media ${media.phone} {
    && {
      margin-left: 0;
      text-align: center;
    }
    &:not(:first-of-type) {
      margin-top: 1em;
    }
  }
`;

const Hr = styled.hr`
  margin-top: 2em;
`;

interface Props {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  timeToRead: number;
  category: string;
  tags: string[];
}

export class Article extends React.PureComponent<Props> {
  public render() {
    const { title, date, excerpt, slug, timeToRead, category, tags = [] } = this.props;

    return (
      <Post>
        <Title>
          <Link to={`/blog/${slug}`}>{title}</Link>
        </Title>
        <Subline>
          {date} &mdash; {timeToRead} Min Read &mdash; In
          <Link to={`/categories/${kebabCase(category)}`}> {category}</Link>
        </Subline>
        <Excerpt>{excerpt}</Excerpt>
        <TagList>
          {Array.isArray(tags) &&
            tags.map(tag => (
              <Tag key={tag} to={`/tags/${kebabCase(tag)}`}>
                {tag}
              </Tag>
            ))}
        </TagList>
        <Hr />
      </Post>
    );
  }
}
