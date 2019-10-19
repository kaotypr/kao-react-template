import React from 'react';
import styled, { keyframes } from 'styled-components';

const DoubleBounce = ({ height, width }) => (
  <LiWrap height={height} width={width}>
    <BoundOne />
    <BounceTwo />
  </LiWrap>
);

const LiWrap = styled.li`
  height: ${props => props.height || '60px'};
  width: ${props => props.width || '60px'};
  right: 0;
  left: 0;
  z-index: 10;
  display: inline-block;
  position: relative;
`;

const SkBounce = keyframes`
  0%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
`;

const BoundOne = styled.div`
   width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: ${SkBounce} 2.0s infinite ease-in-out;
  animation: ${SkBounce} 2.0s infinite ease-in-out;
`;

const BounceTwo = styled.div`
   width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: ${SkBounce} 2.0s infinite ease-in-out;
  animation: ${SkBounce} 2.0s infinite ease-in-out;
  -webkit-animation-delay: -1.0s;
  animation-delay: -0.5s;
`;

export default DoubleBounce;
