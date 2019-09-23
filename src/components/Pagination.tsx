import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '../utils/media';
import theme from '../../config/Theme';
import curriedDarken from 'polished/lib/color/darken';

export const PaginationContainer = styled.div`
  text-align: center;
  margin: 2rem;
`;

export const PaginationContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 2.5rem;
  border-radius: 3.5rem;
  background-color: #eee;

  @media ${media.phone} {
    padding: 0 1rem;
    .pagination-numbers {
      display: none;
    }
  }

  .pagination {
    display: block;
    float: left;
    transition: 400ms ease;
    color: ${theme.colors.grey.light};
    letter-spacing: 0.1em;
    padding: 1rem;
    white-space: nowrap;

    &:hover,
    &.current {
      background-color: ${curriedDarken(0.2, theme.colors.primary)};
      color: ${theme.colors.white};
    }

    &.prev {
      margin-left: -1.5rem;
    }

    &.next {
      margin-right: -1.5rem;
    }

    &.prev:hover,
    &.next:hover {
      background-color: transparent;
      color: ${curriedDarken(0.2, theme.colors.primary)};
    }

    @media ${media.tablet} {
      padding: 0 1.4rem;
      display: none;

      &:nth-of-type(2) {
        position: relative;
        padding-right: 5rem;

        &::after {
          content: '...';
          position: absolute;
          top: 0;
          left: 4.5rem;
        }
      }

      &:nth-child(-n + 3),
      &:nth-last-child(-n + 3) {
        display: block;
      }

      &:nth-last-child(-n + 4) {
        padding-right: 1.4rem;

        &::after {
          content: none;
        }
      }
    }
  }
`;

const PaginationNumber = styled(Link)`
  display: inline-block;
  border-radius: 0.2em;
  width: 2em;
  height: 2em;
  line-height: 2em;
  color: ${theme.colors.grey.light};
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.grey.dark};
  }
  @media ${media.phone} {
    display: none;
  }
  @media ${media.tablet} {
    display: none;
  }
`;

interface Props {
  currentPage: number;
  totalPages: number;
  url: string;
}

export function Pagination(props: Props) {
  const { currentPage, totalPages, url } = props;
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;
  const prevPage = currentPage - 1 === 1 ? `/${url}/` : `/${url}/${(currentPage - 1).toString()}`;
  const nextPage = `/${url}/${(currentPage + 1).toString()}`;

  return totalPages > 1 ? (
    <PaginationContainer>
      <PaginationContent>
        {!isFirst ? (
          <Link className="prev pagination" to={prevPage} rel="prev">
            ← Prev
          </Link>
        ) : (
          <Link className="prev pagination" to="/" rel="prev">
            Home
          </Link>
        )}
        {Array.from({ length: totalPages }, (_, i) => (
          <PaginationNumber key={`pagination-number${i + 1}`} to={`/${url}/${i === 0 ? '' : i + 1}`}>
            {i + 1}
          </PaginationNumber>
        ))}
        {!isLast && (
          <Link className="next pagination" to={nextPage} rel="next">
            Next →
          </Link>
        )}
      </PaginationContent>
    </PaginationContainer>
  ) : null;
}
