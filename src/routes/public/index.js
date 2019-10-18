import Homepage from 'pages/home';
import Signin from 'pages/signin';

const publicRoutes = [
  {
    exact: true,
    path: '/',
    key: 'public_homepage',
    component: Homepage,
  },
  {
    exact: true,
    restricted: true,
    path: '/signin',
    key: 'public_login',
    component: Signin,
  },
];

export default publicRoutes;
