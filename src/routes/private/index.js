import Dashboard from 'pages/dashboard';

const privateRoutes = [
  {
    exact: true,
    path: '/dashboard',
    key: 'private_dashboard',
    component: Dashboard,
  },
];

export default privateRoutes;
