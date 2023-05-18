import { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from 'components/layout/MyoneLayout';
import MainRouter from 'router/MainRouter';
import BenfRouter from 'router/BenfRouter';
import useEmitter from 'composables/utils/emitter';
import useMo from 'composables/utils/mo';

export const AppContext = createContext();
function App() {
  const $emitter = useEmitter();
  const $mo = useMo($emitter);
  const $loading = useState(false);
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [...MainRouter().router, ...BenfRouter().router],
    },
  ]);

  return (
    <AppContext.Provider value={{ $emitter, $mo, $loading }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
