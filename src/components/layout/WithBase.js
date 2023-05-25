import React, { useEffect, useContext } from 'react';
import { AppContext } from 'App';
function WithBase(InputComponent, _componentName) {
  return function OutputComponent(props) {
    const { $loading, $header } = useContext(AppContext);
    const setLoading = $loading[1];
    const setHeader = $header[1];

    useEffect(() => {
      if (!props.headerInfo || !props.headerInfo.continueLoading) {
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const baseInit = () => {
      //1. 페이지 적용 중 loading 처리
      if (!props.headerInfo || props.headerInfo.isLoading) setLoading(true);

      //2. header 설정
      if (props.headerInfo) setHeader(props.headerInfo);
    };

    return <InputComponent {...props} baseInit={baseInit} />;
  };
}

export default WithBase;
