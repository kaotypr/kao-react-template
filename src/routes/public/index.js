import asyncComponent from 'components/hoc/async';

import Homepage from 'pages/home';

const Signin = asyncComponent(() => import('pages/signin'));
const Signup = asyncComponent(() => import('pages/signup'));

const defaultState = {
  layout: 'public',
};

const publicRoutes = [
  {
    exact: true,
    path: '/',
    key: 'public/homepage',
    component: Homepage,
    state: defaultState,
  },
  {
    exact: true,
    restricted: true,
    path: '/signin',
    key: 'public/signin',
    component: Signin,
    layout: defaultState,
  },
  {
    exact: true,
    restricted: true,
    path: '/signup',
    key: 'public/signup',
    component: Signup,
    state: defaultState,
  },
];

export default publicRoutes;
