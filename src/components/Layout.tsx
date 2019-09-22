import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../../config/Theme';
import { media } from '../utils/media';
import split from 'lodash/split';
import './layout.scss';
import SiteConfig from '../../config/SiteConfig';
import LogoIcon from './logo-icon';

const GlobalStyle = createGlobalStyle`
  ::selection {
    color: ${theme.colors.bg};
    background: ${theme.colors.primary};
  }
  body {
    background: ${theme.colors.bg};
    color: ${theme.colors.grey.default};
    @media ${media.phone} {
      font-size: 14px;
    }
  }
  a {
    color: ${theme.colors.grey.dark};
    text-decoration: none;
    transition: all ${theme.transitions.normal};
  }
  a:hover {
    color: ${theme.colors.primary};
  }
  h1, h2, h3, h4 {
    color: ${theme.colors.grey.dark};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.colors.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.colors.grey.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
  .textRight {
    text-align:right;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0;
  span {
    font-size: 0.75rem;
  }
`;

const Nav = styled.nav`
  position: absolute;
  top: 1em;
  left: 1em;
  z-index: 1;
  a {
    display: flex;
  }
`;

const Logo = styled(LogoIcon)`
  width: 100px;
  vertical-align: middle;
  ${(props: { light?: boolean }) => (props.light ? 'fill: white;' : undefined)}
`;

const SiteName = styled.h3`
  display: none;
  ${(props: { light?: boolean }) => (props.light ? 'color: white;' : undefined)}
  @media ${media.desktop} {
    display: block;
  }
`;

export function Layout(props: { children: React.ReactNode; homepage?: boolean }) {
  const { children, homepage } = props;

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            buildTime(formatString: "DD.MM.YYYY")
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Nav>
              <Link to="/">
                <SiteName light={homepage}>{SiteConfig.siteTitle}</SiteName>
                <Logo light={homepage} />
              </Link>
            </Nav>
            <GlobalStyle />
            {children}
            <Footer>
              &copy; {split(data.site.buildTime, '.')[2]} by Madole. All rights reserved. <br />
              <a href="https://github.com/madole">GitHub Repository</a> <br />
              <span>Last build: {data.site.buildTime}</span>
            </Footer>
          </React.Fragment>
        </ThemeProvider>
      )}
    />
  );
}
