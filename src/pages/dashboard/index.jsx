import React from 'react';
import styled from 'styled-components';

import AppLayout from 'layouts/app';

const Dashboard = () => (
  <AppLayout>
    <Wrapper>
      <h1>Dashboard</h1>
    </Wrapper>
  </AppLayout>
);

const Wrapper = styled.div`
  background-color: blue;
`;

export default Dashboard;
