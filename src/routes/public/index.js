import Homepage from 'pages/home';
import Signin from 'pages/signin';
import Signup from 'pages/signup';

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
