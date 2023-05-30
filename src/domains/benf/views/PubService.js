import React, { useEffect, useState, useRef } from 'react';
import WithBase from 'components/layout/WithBase';

import benfCmn from 'domains/benf/composables/benfCmn';
import ListGroup from 'react-bootstrap/ListGroup';
import PubServiceDetail from './PubServiceDetail';
const PubService = ({ baseInit, $mo, $api }) => {
  const childComponentRef = useRef();

  useEffect(() => {
    baseInit();
    fnGetServiceList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { pubApiCall } = $api;

  const { pubApi } = benfCmn();

  const [resData, setResData] = useState({});

  const fnGetServiceList = async () => {
    const response = await pubApiCall(pubApi.list.uri, {
      page: 1,
      perPage: 10,
    });

    setResData(response);
  };

  const fnServiceDetail = async (svc) => {
    const response = await pubApiCall(pubApi.detail.uri, {
      'cond[SVC_ID::EQ]': svc.서비스ID,
    });
    if (!response.data)
      $mo.alert({
        title: '[알림]',
        message: '응답데이트가 존재하지 않습니다.',
      });

    childComponentRef.current.handleOpen({ data: response.data });
  };

  return (
    <div>
      <ListGroup variant='flush'>
        {resData.data &&
          resData.data.map((svc, idx) => (
            <ListGroup.Item
              key={idx}
              className='d-flex justify-content-between align-items-start'
              action
              onClick={fnServiceDetail.bind(this, svc)}
            >
              <div className='ms-2 me-auto'>
                <div className='fw-bold'>{svc.서비스명}</div>
                {/* Cras justo odio */}
                {svc.서비스목적}
              </div>
            </ListGroup.Item>
          ))}
      </ListGroup>
      <PubServiceDetail ref={childComponentRef} full={true} />
    </div>
  );
};

export default WithBase(PubService, 'PubService');
