import React from 'react';
import { Typography } from '@material-ui/core';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

const Notfound = () => (
  <>
    <Typography variant="h2">
      <Trans i18nKey="meta.public.page.404.title" />
    </Typography>
    <Typography variant="subtitle2">
      <Trans i18nKey="meta.public.page.404.description" />
    </Typography>
    <Link to="/">
      <Trans i18nKey="meta.public.page.home.title" />
    </Link>
  </>
);

export default Notfound;
