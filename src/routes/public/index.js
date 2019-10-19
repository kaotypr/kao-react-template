import asyncComponent from 'components/hoc/async';
import * as layoutType from 'constant/layout';
import Homepage from 'pages/home';
import Notfound from 'pages/404';
import ServerError from 'pages/500';

const Signin = asyncComponent(() => import('pages/signin'));
const Signup = asyncComponent(() => import('pages/signup'));

const location = {
  state: {
    layout: layoutType.PUBLIC,
  },
};

const publicRoutes = [
  {
    exact: true,
    path: '/',
    key: 'public/homepage',
    component: Homepage,
    location,
  },
  {
    exact: true,
    restricted: true,
    path: '/signin',
    key: 'public/signin',
    component: Signin,
    location,
  },
  {
    exact: true,
    restricted: true,
    path: '/signup',
    key: 'public/signup',
    component: Signup,
    location,
  },
  {
    exact: true,
    path: '/500',
    key: '/public/500',
    location: {
      state: {
        layout: layoutType.BLANK,
      },
    },
    component: ServerError,
  },
  {
    path: '*',
    location: {
      state: {
        layout: layoutType.BLANK,
      },
    },
    key: '/public/404',
    component: Notfound,
  },
];

export default publicRoutes;
