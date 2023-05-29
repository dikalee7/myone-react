import React, { useEffect, useState, useContext, useRef } from 'react';
import WithBase from 'components/layout/WithBase';
import { pubApiCall } from 'api/index';
import benfCmn from 'domains/benf/composables/benfCmn';
import ListGroup from 'react-bootstrap/ListGroup';
import { AppContext } from 'App';
import PubServiceDetail from './PubServiceDetail';
const PubService = ({ baseInit }) => {
  const childComponentRef = useRef();

  useEffect(() => {
    baseInit();
    fnGetServiceList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { $mo } = useContext(AppContext);

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
    // const detail = JSON.stringify(response.data, null, 2);
    // $mo.alert({
    //   title: '[임시]상세 구현 필요',
    //   message: `<pre>${detail}</pre>`,
    // });
    // alert(JSON.stringify(svc, null, 2));
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
      {/* <pre>{JSON.stringify(resData, null, 2)}</pre> */}
      <PubServiceDetail ref={childComponentRef} full={true} />
    </div>
  );
};

export default WithBase(PubService, 'PubService');
