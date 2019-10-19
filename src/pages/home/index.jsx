import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { Trans } from 'react-i18next';
import * as layoutType from 'constant/layout';

const Home = () => (
  <Wrapper>
    <Typography variant="h1">
      <Trans i18nKey="meta.public.page.home.title" />
    </Typography>
    <Link to="signin">
      <Typography variant="subtitle1">
        <Trans i18nKey="meta.public.page.signin.title" />
      </Typography>
    </Link>
    <Link to={{
      pathname: '404',
      state: { layout: layoutType.BLANK },
    }}
    >
      <Typography variant="subtitle1">
        <Trans i18nKey="meta.public.page.404.title" />
      </Typography>
    </Link>
    <Link to={{
      pathname: '500',
      state: { layout: layoutType.BLANK },
    }}
    >
      <Typography variant="subtitle1">
        <Trans i18nKey="meta.public.page.500.title" />
      </Typography>
    </Link>
  </Wrapper>
);

const Wrapper = styled.div`
`;

export default Home;
