import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import Register from '../Auth/Register';
import Login from '../Auth/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path:'/register',
        element: <Register />,
      },
      {
        path:'/login',
        element: <Login/>
      }
    ],
  },
]);

export default router;
