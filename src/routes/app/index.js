import Dashboard from 'pages/dashboard';

const defaultState = {
  layout: 'app',
};

const privateRoutes = [
  {
    exact: true,
    path: '/dashboard',
    key: 'private_dashboard',
    component: Dashboard,
    state: defaultState,
  },
];

export default privateRoutes;
