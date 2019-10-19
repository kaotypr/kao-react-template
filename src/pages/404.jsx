import React from 'react';
import { Typography } from '@material-ui/core';
import { Trans } from 'react-i18next';

const Notfound = () => (
  <>
    <Typography variant="h2">
      <Trans i18nKey="public.page.404.title" />
    </Typography>
    <Typography variant="subtitle2">
      <Trans i18nKey="public.page.404.description" />
    </Typography>
  </>
);

export default Notfound;
