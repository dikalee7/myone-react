import React, { createContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainRouter, BenfRouter } from 'router/index';

import Layout from 'components/layout/MyoneLayout';

const CmnContext = createContext();
const LoadingContext = createContext();
const HeaderContext = createContext();
function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [...MainRouter().router, ...BenfRouter().router],
    },
  ]);

  return <RouterProvider router={router} />;
}
export { LoadingContext, CmnContext, HeaderContext };
export default React.memo(App);
