import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import Colleges from '../Pages/Colleges';
import Admission from '../Pages/Admission';
import MyCollege from '../Pages/MyCollege';
import ErrorPage from '../Pages/ErrorPage';

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
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/colleges',
        element: <Colleges />,
      },
      {
        path: '/admission',
        element: <Admission />, // Placeholder for Admission page
      },
      {
        path: '/my-college',
        element: <MyCollege />, // Placeholder for MyCollege page
      },
      {
        path: '*',
        element: <ErrorPage />, // Placeholder for ErrorPage component
      },
    ],
  },
]);

export default router;
