import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { Trans } from 'react-i18next';

const Signin = () => (
  <>
    <Typography variant="h1">
      <Trans i18nKey="meta.public.page.signin.title" />
    </Typography>
    <Typography variant="subtitle1">
      <Trans i18nKey="meta.public.page.signin.description" />
    </Typography>
    <Link to="signup">
      <Trans i18nKey="meta.public.page.signup.title" />
    </Link>
    <Link to="/">
      <Trans i18nKey="meta.public.page.home.title" />
    </Link>
  </>
);

export default memo(Signin);
