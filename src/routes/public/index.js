import asyncComponent from 'components/hoc/async';

import Homepage from 'pages/home';
import Notfound from 'pages/404';
import ServerError from 'pages/500';

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
  {
    exact: true,
    path: '/404',
    key: '/public/404',
    component: Notfound,
    state: defaultState,
  },
  {
    exact: true,
    path: '/500',
    key: '/public/500',
    component: ServerError,
    state: defaultState,
  },
];

export default publicRoutes;
