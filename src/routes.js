import { Navigate } from 'react-router-dom';
import Home from 'src/pages/Home';
import Dashboard from 'src/pages/Dashboard';
import Accounts from 'src/pages/Accounts';
import Profile from 'src/pages/Profile';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import AuthenticatedLayout from 'src/components/layout/Authenticated/Layout';
import UnauthenticatedLayout from 'src/components/layout/Unauthenticated/Layout';

const routes = (isLoggedIn) => [
  {
    path: '/app',
    element: isLoggedIn ? <AuthenticatedLayout /> : <Navigate to="/login" />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'profile', element: <Profile /> },
      { path: 'accounts', element: <Accounts /> },
      { path: '*', element: <NotFound /> }
    ]
  },
  {
    path: '/',
    element: <UnauthenticatedLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
