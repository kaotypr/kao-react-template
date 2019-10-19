import React from 'react';
import styled from 'styled-components';
import { Trans } from 'react-i18next';

const PublicFooter = () => (
  <FooterWrapper>
    <Trans i18nKey="meta.public.component.footer.default" />
  </FooterWrapper>
);

const FooterWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 7rem;
  bottom: 0;
  background-color: #eee;
`;

export default PublicFooter;
