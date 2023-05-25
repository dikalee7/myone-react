import PubService from '../domains/benf/views/PubService';
import { baseHeader } from './index';

const BenfRouter = () => {
  const router = [
    {
      path: '/pubService',
      element: (
        <PubService
          headerInfo={{
            ...baseHeader,
            title: '공공서비스',
          }}
        />
      ),
    },
  ];
  return { router };
};

export default BenfRouter;
