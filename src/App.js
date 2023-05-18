import { createContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from 'components/layout/MyoneLayout';
import MainRouter from 'router/MainRouter';
import useEmitter from 'composables/utils/emitter';
import useMo from 'composables/utils/mo';

export const AppContext = createContext();
function App() {
  const $emitter = useEmitter();
  const $mo = useMo($emitter);
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [...MainRouter().router],
    },
  ]);

  return (
    <AppContext.Provider value={{ $emitter, $mo }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
