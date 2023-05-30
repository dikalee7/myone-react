import Main from '../domains/main/views/Main';
import { baseHeader } from './index';

const MainRouter = () => {
  const router = [
    {
      path: '/',
      element: (
        <Main
          headerInfo={{
            ...baseHeader,
            title: 'MY ONE',
            hideBack: true,
            hideHome: true,
          }}
        />
      ),
    },
    {
      path: '/*',
      element: (
        <Main
          headerInfo={{
            ...baseHeader,
            title: 'MY ONE',
            hideBack: true,
            hideHome: true,
          }}
        />
      ),
    },
  ];
  return { router };
};

export default MainRouter;
