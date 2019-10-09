import React from 'react';
import styled, { css } from 'styled-components';
import { Search } from 'styled-icons/fa-solid/Search';
import { Algolia } from 'styled-icons/fa-brands/Algolia';
import { media } from '../../utils/media';
export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`;

export const SearchIcon = styled(Search)`
  width: 1em;
  pointer-events: none;
`;

export const Input = styled.input`
  border-radius: ${props => props.theme.smallBorderRadius};
  font-size: 1em;
  outline: none;
  transition: ${props => props.theme.shortTrans};
  width: 200px;
  background: ${props => props.theme.veryLightGray};
  margin-left: -1.6em;
  padding-left: 2.6em;
  + ${SearchIcon} {
    margin: 0.3em;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  max-height: 80vh;
  overflow: scroll;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  width: 50vw;
  @media ${media.phone} {
    width: 95vw;
    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }
  }
  padding: 0.7em 1em 0.4em;
  background: white;
  border-radius: ${props => props.theme.smallBorderRadius};
  > * + * {
    padding-top: 1em !important;
    border-top: 2px solid ${props => props.theme.darkGray};
  }
  li + li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid ${props => props.theme.lightGray};
  }
  * {
    margin-top: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  mark {
    color: ${props => props.theme.lightBlue};
    background: ${props => props.theme.darkBlue};
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    h3 {
      background: ${props => props.theme.gray};
      padding: 0.1em 0.4em;
      border-radius: ${props => props.theme.smallBorderRadius};
    }
  }
  h3 {
    margin: 0 0 0.5em;
  }
  h4 {
    margin-bottom: 0.3em;
  }
`;

export const PoweredBy = () => (
  <span css="font-size: 0.6em; text-align: end; padding: 0;">
    Powered by{` `}
    <a href="https://algolia.com">
      <Algolia size="1em" /> Algolia
    </a>
  </span>
);
