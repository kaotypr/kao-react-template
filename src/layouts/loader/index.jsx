import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import { APP_NAME } from 'config';
import DoubleBounce from 'components/loader/doubleBounce';

const Loader = () => (
  <Wrapper>
    <Head variant="h2">{APP_NAME}</Head>
    <DoubleBounce width="80px" height="80px" />
  </Wrapper>
);

export default Loader;

const Head = styled(Typography)`
  color: #bec0c5;
  margin: 50px !important;
`;

const Wrapper = styled.div`
  text-align: center;
  position: fixed;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #2c3e50;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
