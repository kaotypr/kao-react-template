import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { Trans } from 'react-i18next';

const Signup = () => (
  <>
    <Typography variant="h1">
      <Trans i18nKey="meta.public.page.signup.title" />
    </Typography>
    <Typography variant="subtitle1">
      <Trans i18nKey="meta.public.page.signup.description" />
    </Typography>
    <Link to="signin">
      <Trans i18nKey="meta.public.page.signin.title" />
    </Link>
    <Link to="/">
      <Trans i18nKey="meta.public.page.home.title" />
    </Link>
  </>
);

export default memo(Signup);
