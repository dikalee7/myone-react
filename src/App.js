import React, { createContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainRouter, BenfRouter } from 'router/index';

import Layout from 'components/layout/MyoneLayout';

//공통 $emitter, $mo(alert/confirm), $api를 위한 context
const CmnContext = createContext();
//$loading(로딩중 상태 표시)을 위한 context
const LoadingContext = createContext();
//$header(헤더정보-타이틀, 뒤로가기, 홈버튼 등 제어)를 위한 context
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
export default App;
