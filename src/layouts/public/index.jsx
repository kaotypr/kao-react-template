import React, { memo } from 'react';
import styled from 'styled-components';

import TopNavigation from 'components/public/nav/top';
import PublicFooter from 'components/public/footer';

const PublicLayout = ({ children }) => (
  <LayoutWrapper>
    <TopNavigation />
    <ContentWrapper>
      {children}
    </ContentWrapper>
    <PublicFooter />
  </LayoutWrapper>
);

const ContentWrapper = styled.div`
  position: relative;
  top: 3rem;
`;

const LayoutWrapper = styled.div`
  position: fixed;
  min-height: 100vh;
  min-width: 100vw;
`;

export default memo(PublicLayout);
