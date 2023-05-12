import Main from '../domains/main/views/Main';

const MainRouter = () => {
  const router = [
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/main',
      element: <Main />,
    },
  ];
  return { router };
}

export default MainRouter