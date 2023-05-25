import React, { createContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainRouter, BenfRouter } from 'router/index';

import Layout from 'components/layout/MyoneLayout';

export const AppContext = createContext();
function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [...MainRouter().router, ...BenfRouter().router],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default React.memo(App);
