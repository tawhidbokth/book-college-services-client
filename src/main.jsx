import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router.jsx';
import AouthProvider from './Provider/AouthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AouthProvider>
    <RouterProvider router={router} />
    </AouthProvider>
  </StrictMode>
);
