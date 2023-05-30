import React, { createContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainRouter, BenfRouter } from 'router/index';

import Layout from 'components/layout/MyoneLayout';

const EmtContext = createContext();
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
export { LoadingContext, EmtContext, HeaderContext };
export default React.memo(App);
