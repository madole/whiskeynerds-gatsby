import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/media';

const HeaderWrapper = styled.header`
  position: relative;
  background-color: #eeeeee;
  background-image: url("data:image/svg+xml,%3Csvg width='64' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.07' id='svg_1' d='m15,21c0,-0.6 0.4,-1 1,-1s1,0.4 1,1l0,6c0,0.6 -0.4,1 -1,1s-1,-0.4 -1,-1l0,-6zm1,-3c0.6,0 1,-0.4 1,-1l0,-4.5c0,-0.6 -0.4,-1 -1,-1s-1,0.4 -1,1l0,4.5c0,0.6 0.4,1 1,1zm-3.8,-11.8c-0.5,-0.1 -1,0.2 -1.2,0.8c-0.1,0.5 0.2,1.1 0.7,1.2c4.6,1.1 12.2,1.8 20.3,1.8c7.4,0 14.4,-0.6 19,-1.5l0,41.1c0,0.8 -0.5,1.5 -1.2,1.8c-2.4,1 -7.9,2.5 -17.8,2.5s-15.4,-1.6 -17.8,-2.5c-0.7,-0.3 -1.2,-1 -1.2,-1.8l0,-15.6c0.4,-1.1 7.2,-3 19,-3c7.3,0 12.6,0.7 15.8,1.6c0.6,0.2 1.2,-0.3 1.2,-1l0,0c0,-0.4 -0.3,-0.8 -0.7,-1c-6,-1.6 -15.7,-1.6 -16.3,-1.6c-0.9,0 -21,0.1 -21,5l0,15.6c0,1.7 1,3.1 2.5,3.7c2.5,1 8.3,2.7 18.5,2.7s16,-1.7 18.5,-2.7c1.5,-0.6 2.5,-2.1 2.5,-3.7l0,-42.4c0,-0.3 -0.1,-0.6 -0.4,-0.8c-0.2,-0.2 -0.6,-0.3 -0.9,-0.2c-4.3,1.1 -11.7,1.8 -19.7,1.8c-8,0 -15.4,-0.7 -19.8,-1.8zm19.8,51.8c-9.3,0 -17.2,-2 -19.6,-2.9c-0.5,-0.2 -1.1,0 -1.3,0.6c-0.2,0.5 0,1.1 0.6,1.3c2,0.8 10,3.1 20.4,3.1c0.6,0 1,-0.4 1,-1s-0.5,-1.1 -1.1,-1.1zm-20,-29c0.6,0 1,-0.4 1,-1l0,-17c0,-0.6 -0.4,-1 -1,-1s-1,0.4 -1,1l0,17c0,0.6 0.4,1 1,1zm37,7.1c-0.1,-0.5 -0.7,-0.8 -1.2,-0.7c-3.7,1 -9.6,1.6 -15.7,1.6s-12.1,-0.6 -15.7,-1.6c-0.5,-0.1 -1.1,0.2 -1.2,0.7c-0.1,0.5 0.2,1.1 0.7,1.2c3.9,1 9.8,1.6 16.3,1.6s12.4,-0.6 16.3,-1.6c0.3,-0.1 0.6,-0.6 0.5,-1.2zm8,-31.1l0,53c0,4.7 -16.4,6 -25,6s-25,-1.3 -25,-6l0,-53c0,-1.2 0.9,-2.7 7.9,-3.8c4.6,-0.8 10.6,-1.2 17.1,-1.2s12.5,0.4 17.1,1.2c7,1.1 7.9,2.6 7.9,3.8zm-2,0.1c-0.7,-1.1 -8.3,-3.1 -23,-3.1s-22.3,2 -23,3.1l0,52.9c0,1.2 7.8,4 23,4s23,-2.8 23,-4l0,-52.9zm-7,5.9c-0.6,0 -1,0.4 -1,1l0,8c0,0.6 0.4,1 1,1s1,-0.4 1,-1l0,-8c0,-0.6 -0.4,-1 -1,-1z' class='glass'/%3E%3C/svg%3E");
  background-size: 70px;
  background-repeat: space;
  padding: 8rem 2rem 10rem;
  text-align: center;
  ::after {
    background: transparent url(/assets/mask.svg) no-repeat bottom left;
    background-size: 101%;
    bottom: -2px;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
  }
  @media ${media.tablet} {
    padding: 4rem 2rem 6rem;
  }
  @media ${media.phone} {
    padding: 1rem 0.5rem 2rem;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 999;
  a {
    color: black;
    &:hover {
      opacity: 0.85;
      color: white;
    }
  }
`;

export function Header(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <HeaderWrapper>
      <Content>{children}</Content>
    </HeaderWrapper>
  );
}
