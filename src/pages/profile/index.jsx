import React from 'react';
import styled from 'styled-components';
import { Trans } from 'react-i18next';

const Dashboard = () => (
  <Wrapper>
    <Trans i18nKey="meta.app.page.profile.title" />
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 1rem;
`;

export default Dashboard;
