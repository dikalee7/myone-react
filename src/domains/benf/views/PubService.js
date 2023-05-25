import React, { useEffect, useState } from 'react';
import WithBase from 'components/layout/WithBase';
import { pubApiCall } from 'api/index';
import benfCmn from 'domains/benf/composables/benfCmn';
const PubService = ({ baseInit }) => {
  const { pubApi } = benfCmn();

  const [resData, setResData] = useState({});

  useEffect(() => {
    baseInit();
    fnGetServiceList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(resData);
  }, [resData]);

  const fnGetServiceList = async () => {
    const response = await pubApiCall(pubApi.list.uri, {
      page: 1,
      perPage: 10,
    });

    setResData(response);
  };

  return (
    <div>
      <pre>{JSON.stringify(resData, null, 2)}</pre>
    </div>
  );
};

export default WithBase(PubService, 'PubService');
