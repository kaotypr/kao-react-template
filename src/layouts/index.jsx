import React from 'react';

import * as Type from 'constants/layout';

import AppLayout from './app';
import PublicLayout from './public';
import Loader from './loader';
import Blank from './blank';

const LayoutProvider = ({ layout, children }) => {
  switch (layout) {
    case Type.APP:
      return (<AppLayout>{children}</AppLayout>);
    case Type.PUBLIC:
      return (<PublicLayout>{children}</PublicLayout>);
    case Type.BLANK:
      return (<Blank>{children}</Blank>);
    default:
      return (<Loader />);
  }
};

export default LayoutProvider;
