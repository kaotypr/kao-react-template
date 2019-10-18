import React from 'react';
import styled from 'styled-components';

import PublicLayout from 'layouts/public';

const Home = () => (
  <PublicLayout>
    <Wrapper>
      <h1>Home Page</h1>
    </Wrapper>
  </PublicLayout>
);

const Wrapper = styled.div`
  background: green;
`;

export default Home;
