import React from 'react';
import styled from 'styled-components';

import DoubleBounce from 'components/loader/doubleBounce';

const Loader = () => (
  <Wrapper>
    <DoubleBounce />
  </Wrapper>
);

export default Loader;

const Wrapper = styled.div`
  position: fixed;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
`;
