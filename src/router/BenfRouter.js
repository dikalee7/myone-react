import PubService from '../domains/benf/views/PubService';

const BenfRouter = () => {
  const router = [
    {
      path: '/pubService',
      element: <PubService />,
    },
  ];
  return { router };
};

export default BenfRouter;
