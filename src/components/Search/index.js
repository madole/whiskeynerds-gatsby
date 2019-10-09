import React, { useState, useEffect, createRef } from 'react';
import { InstantSearch, Index, Hits, connectStateResults } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import { Root, HitsWrapper, PoweredBy } from './styles';
import Input from './Input';
import * as hitComps from './hitComps';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Results = connectStateResults(({ searchState: state, searchResults: res, children }) =>
  res && res.nbHits > 0 ? children : `No results for '${state.query}'`,
);

const Stats = connectStateResults(({ searchResults: res }) => res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`);

const useClickOutside = (ref, handler, events) => {
  const clickEvents = events || [`mousedown`, `touchstart`];
  const detectClickOutside = event => ref.current && !ref.current.contains(event.target) && handler();
  useEffect(() => {
    for (const event of clickEvents) {
      document.addEventListener(event, detectClickOutside);
    }
    return () => {
      for (const event of clickEvents) {
        document.removeEventListener(event, detectClickOutside);
      }
    };
  });
};

const searchIndices = [{ name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` }];

export default function Search({ collapse, hitsAsGrid }) {
  const ref = createRef();
  const [query, setQuery] = useState('');
  const [focus, setFocus] = useState(false);
  const searchClient = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY);
  useClickOutside(ref, () => setFocus(false));

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={searchIndices[0].name}
      onSearchStateChange={({ query: searchQuery }) => setQuery(searchQuery)}
      root={{ Root, props: { ref } }}
    >
      <Container>
        <Input onFocus={() => setFocus(true)} {...{ collapse, focus }} />

        <HitsWrapper show={query.length > 0 && focus}>
          {searchIndices.map(({ name, title, hitComp }) => (
            <Index key={name} indexName={name}>
              <header>
                <h3>{title}</h3>
                <Stats />
              </header>
              <Results>
                <Hits hitComponent={hitComps[hitComp](() => setFocus(false))} />
              </Results>
            </Index>
          ))}
          <PoweredBy />
        </HitsWrapper>
      </Container>
    </InstantSearch>
  );
}
