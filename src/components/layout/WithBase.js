/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useMemo } from 'react';
import { LoadingContext, HeaderContext, CmnContext } from 'App';

function WithBase(InputComponent, _componentName) {
  const OutputComponent = (props) => {
    const { $loading } = useContext(LoadingContext);
    const { $header } = useContext(HeaderContext);
    const { $emitter, $mo, $api } = useContext(CmnContext);

    const setLoading = $loading[1];
    const setHeader = $header[1];

    useEffect(() => {
      if (!props.headerInfo || !props.headerInfo.continueLoading) {
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }
    }, []);

    const $baseInit = () => {
      //1. 페이지 적용 중 loading 처리
      if (!props.headerInfo || props.headerInfo.isLoading) setLoading(true);

      //2. router 정보를 통해 기본 header 설정
      if (props.headerInfo) setHeader(props.headerInfo);
    };

    const memoizedDispatches = useMemo(() => {
      return { $emitter, $mo, $api, $baseInit };
    }, []);

    return <InputComponent {...props} {...memoizedDispatches} />;
  };
  return React.memo(OutputComponent);
}

export default WithBase;
