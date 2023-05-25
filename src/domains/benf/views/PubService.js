import React, { useEffect } from 'react';
import WithBase from 'components/layout/WithBase';
const PubService = ({ baseInit }) => {
  useEffect(() => {
    baseInit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>PubService</div>;
};

export default WithBase(PubService, 'PubService');
