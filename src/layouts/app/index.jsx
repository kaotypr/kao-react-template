import React from 'react';
import styled from 'styled-components';

const AppLayout = ({ children }) => (
  <LayoutWrapper>
    {children}
  </LayoutWrapper>
);

const LayoutWrapper = styled.div`
  position: fixed;
  min-height: 100vh;
  min-width: 100vw;
  background-color: yellow;
`;

export default AppLayout;
