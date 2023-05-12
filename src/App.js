
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Layout from './components/layout/MyoneLayout';
import MainRouter from './router/MainRouter';
function App() { 
  console.log(MainRouter().router);
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        ...MainRouter().router,
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
