import React from 'react';
import styled from 'styled-components';
import { Trans } from 'react-i18next';

const NavigationTop = () => (
  <NavigationWrapper>
    <Trans i18nKey="navigation.public.default" />
  </NavigationWrapper>
);

const NavigationWrapper = styled.div`
  position: fixed;
  top: 0;
  min-width: 100vw;
  height: 3rem;
  max-height: 3rem;
  background-color: #eee;
`;

export default NavigationTop;
