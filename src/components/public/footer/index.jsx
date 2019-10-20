import React from 'react';
import styled from 'styled-components';
import { Trans } from 'react-i18next';

const PublicFooter = () => (
  <FooterWrapper>
    <Trans i18nKey="meta.public.component.footer.default" />
  </FooterWrapper>
);

const FooterWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 7rem;
  background-color: #eee;
  box-sizing: border-box;
`;

export default PublicFooter;
