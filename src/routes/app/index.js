import asyncComponent from 'components/hoc/async';
import * as layoutType from 'constant/layout';
import Dashboard from 'pages/dashboard';

const Profile = asyncComponent(() => import('pages/profile'));

const location = {
  state: {
    layout: layoutType.APP,
  },
};

const privateRoutes = [
  {
    exact: true,
    path: '/dashboard',
    key: 'private/dashboard',
    component: Dashboard,
    location,
  },
  {
    exact: true,
    path: '/profile',
    key: 'private/profile',
    component: Profile,
    location,
  },
];

export default privateRoutes;
