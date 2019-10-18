import React, { memo, useState } from 'react';
import styled from 'styled-components';

const PublicLayout = ({ children }) => {
  const [black, setBlack] = useState(true);
  const handleChangeColor = () => {
    setBlack(!black);
  };
  return (
    <LayoutWrapper>
      <HeadNav isblack={black}>POLOS</HeadNav>
      {children}
      <button type="button" onClick={handleChangeColor}>Change head color</button>
    </LayoutWrapper>
  );
};

const HeadNav = styled.div`
  position: fixed;
  top: 0;
  min-width: 100vw;
  height: 3.5rem;
  max-height: 3.5rem;
  color: ${props => (props.isblack ? 'white' : 'black')}};
  background-color: ${props => (props.isblack ? 'black' : 'white')}};
`;

const LayoutWrapper = styled.div`
  position: fixed;
  min-height: 100vh;
  min-width: 100vw;
  background-color: red;
`;

export default memo(PublicLayout);
